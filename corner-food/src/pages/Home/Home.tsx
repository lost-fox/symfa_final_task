import { memo, useState } from 'react';

import { DishCard } from 'components/components/DishCard';
import { Header } from 'components/components/Header';
import { Navbar } from 'components/components/Navbar';
import { Chips } from 'components/ui/Chips';

import styles from './Home.module.scss';

const mockData = ['Fast food', 'Vegetarian', 'Drink', 'Spicy', 'Salty', 'Sour', 'Milk' ];

export const Home = memo(() => {
    const { wrapper, chipsItems, dishItems } = styles;
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
                    {mockData.map(item => <Chips
                        key={item} title={item} isActive={activeChips === item} onClick={handlerChips} />)}

                </div>
                <div className={dishItems}>
                    <DishCard />
                    <DishCard />
                    <DishCard />
                    <DishCard />
                </div>
            </main>
        </div>
        <Navbar />
    </>;
});

Home.displayName = 'Home';
