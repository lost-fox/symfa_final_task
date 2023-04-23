import { memo, useEffect, useState } from 'react';

import { DishCard } from 'components/components/DishCard';
import { Header } from 'components/components/Header';
import { Chips } from 'components/ui/Chips';
import { Loader } from 'components/ui/Loader';
import { useAppSelector } from 'store/rootReducer';
import { getMeals } from 'store/services';
import { useAppDispatch } from 'store/store';

import styles from './Home.module.scss';

export const Home = memo(() => {
    const dispatch = useAppDispatch();
    const { meals, search, loader } = useAppSelector(state => state);
    const { wrapper, chipsItems, dishItems } = styles;
    const [activeChips, setActiveChips] = useState<string>('');
    const [chips, setChips] = useState<string[]>([]);

    const getChips = () => {
        const data = meals.meals.map(item => item.type);
        const items = [... new Set(data)];

        setChips(items);
    };

    useEffect(() => {
        getMeals(dispatch);

    }, [dispatch]);

    useEffect(() => {
        getChips();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [meals]);

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
        :
        <div className={wrapper}>
            <Header />
            <main>
                <div className={chipsItems}>
                    {chips.map(item => <Chips
                        key={item} title={item} isActive={activeChips === item} onClick={handlerChips} />)}

                </div>
                <div className={dishItems}>
                    {meals.meals
                        .filter(item => activeChips ? item.type === activeChips : item )
                        .filter(item => item.name.toLowerCase().includes(search.search.toLowerCase()))
                        .map(item => <DishCard key={item._id} value={item} />)}
                </div>
            </main>
        </div>;
});

Home.displayName = 'Home';
