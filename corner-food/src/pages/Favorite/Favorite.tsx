import { memo, useEffect, useState } from 'react';

import { DishCard } from 'components/components/DishCard';
import { Header } from 'components/components/Header';
import { Button } from 'components/ui/Button';
import { Chips } from 'components/ui/Chips';
import { Loader } from 'components/ui/Loader';
import { useAppSelector } from 'store/rootReducer';
import { getFavoriteMealUser } from 'store/services';
import { useAppDispatch } from 'store/store';

import { ReactComponent as ShoppingImage } from '../../assets/icon/image_shopping_app.svg';

import styles from './Favorite.module.scss';

export const Favorite = memo(() => {
    const { wrapper, chipsItems, dishItems, banner, infoBlock, headline } = styles;
    const dispatch = useAppDispatch();
    const { user, search, loader } = useAppSelector(state => state);
    const [activeChips, setActiveChips] = useState<string>('');
    const [chips, setChips] = useState<string[]>([]);

    const getChips = () => {
        const data = user.favorite.map(item => item.type);
        const items = [... new Set(data)];

        setChips(items);
    };

    useEffect(() => {
        if (!user.user) return;

        getFavoriteMealUser(user.user._id, dispatch);
    }, [dispatch, user.user]);

    useEffect(() => {
        getChips();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user.favorite]);

    const handlerChips = (event: React.MouseEvent) => {
        const { id } = event.target as HTMLDivElement;

        if (id === activeChips) {
            setActiveChips('');
        } else {
            setActiveChips(id);
        }
    };

    return loader.isLoader ?
        <Loader/>
        : <div className={wrapper}>
            <Header />
            <main>
                <div className={chipsItems}>
                    {chips.map(item => <Chips
                        key={item} title={item} isActive={activeChips === item} onClick={handlerChips} />)}

                </div>
                <div className={banner}>
                    <ShoppingImage />
                    <div className={infoBlock}>
                        <h2 className={styles.title}>Free delivery</h2>
                        <p className={styles.subtitle}>May 10 - June 21</p>
                        <Button value='Order Now' type='banner'/>
                    </div>
                </div>

                <div className={headline}>
                    <h2 className={styles.headlineTitle}>Your Favorite</h2>
                    <Button value='See more' type='white' />
                </div>

                <div className={dishItems}>
                    {user.favorite
                        .filter(item => activeChips ? item.type === activeChips : item )
                        .filter(item => item.name.toLowerCase().includes(search.search.toLowerCase())).
                        map(item => <DishCard key={item._id} value={item} />)}
                </div>
            </main>
        </div>;
});

Favorite.displayName = 'Favorite';
