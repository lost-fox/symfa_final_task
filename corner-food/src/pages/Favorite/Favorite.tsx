import { memo, useState } from 'react';

import { DishCard } from 'components/components/DishCard';
import { Header } from 'components/components/Header';
import { Navbar } from 'components/components/Navbar';
import { Button } from 'components/ui/Button';
import { Chips } from 'components/ui/Chips';
import { mockDataChips, MOCKDATADISH } from 'pages/mockData';

import { ReactComponent as ShoppingImage } from '../../assets/icon/image_shopping_app.svg';

import styles from './Favorite.module.scss';

export const Favorite = memo(() => {
    const { wrapper, chipsItems, dishItems, banner, infoBlock, headline } = styles;
    const [activeChips, setActiveChips] = useState<string>('');

    const handlerChips = (event: React.MouseEvent) => {
        const { id } = event.target as HTMLDivElement;

        setActiveChips(id);
    };

    return <>
        <div className={wrapper}>
            <Header />
            <main>
                <div className={chipsItems}>
                    {mockDataChips.map(item => <Chips
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
                    {MOCKDATADISH.map(item => <DishCard key={item._id} value={item} />)}
                </div>
            </main>
        </div>
        <Navbar />
    </>;
});

Favorite.displayName = 'Favorite';
