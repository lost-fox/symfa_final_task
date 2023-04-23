import { memo, useState } from 'react';
import classNames from 'classnames';

import { ReactComponent as MinusIcon } from '../../../assets/icon/minus.svg';
import { ReactComponent as PlusIcon } from '../../../assets/icon/plus.svg';
import { Button } from '../../ui/Button';

import styles from './Count.module.scss';

interface ICountProps {
    className?: string;
    amount?: number;
    onClick: (count: number) => void;
}

export const Count = memo((props: ICountProps) => {
    const { wrapper } = styles;
    const { className, amount, onClick } = props;
    const [count, setCount] = useState<number>(amount || 1);

    const handlerCount = (event: React.MouseEvent) => {
        const type = (event.currentTarget as HTMLButtonElement).getAttribute('data-type');

        if (type === '+') {
            onClick(count + 1);
            setCount(prevCount => prevCount + 1 );
        } else {
            if (count === 0) return;

            onClick(count - 1);
            setCount(prevCount => prevCount - 1);
        }
    };

    return <div className={classNames(wrapper, className)}>
        <Button data='-' type='count' value={<MinusIcon/>} onClick={handlerCount}/>
        <p>{count}</p>
        <Button data='+' type='count' value={<PlusIcon/>} onClick={handlerCount}/>
    </div>;
});

Count.displayName = 'Count';
