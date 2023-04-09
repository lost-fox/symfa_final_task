import { memo, useState } from 'react';

import { DishCard } from 'components/components/DishCard';
import { Header } from 'components/components/Header';
import { Navbar } from 'components/components/Navbar';
import { Chips } from 'components/ui/Chips';
import { mockDataChips, MOCKDATADISH } from 'pages/mockData';

import styles from './Home.module.scss';

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
                    {mockDataChips.map(item => <Chips
                        key={item} title={item} isActive={activeChips === item} onClick={handlerChips} />)}

                </div>
                <div className={dishItems}>
                    {MOCKDATADISH.map(item => <DishCard key={item.id} value={item} />)}
                </div>
            </main>
        </div>
        <Navbar />
    </>;
});

Home.displayName = 'Home';
