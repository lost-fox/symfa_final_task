import { memo, useState } from 'react';
import classNames from 'classnames';

import { ReactComponent as MinusIcon } from '../../../assets/icon/minus.svg';
import { ReactComponent as PlusIcon } from '../../../assets/icon/plus.svg';
import { Button } from '../../ui/Button';

import styles from './Count.module.scss';

interface ICountProps {
    className?: string;
}

export const Count = memo((props: ICountProps) => {
    const { wrapper } = styles;
    const { className } = props;
    const [count, setCount] = useState<number>(0);

    const handlerCount = (event: React.MouseEvent) => {
        const { id } = event.target as HTMLButtonElement;

        if (id === '+') {
            setCount(prev =>  prev += 1 );
        } else {
            if (count === 0) return;

            setCount(prev => prev -= 1);
        }
    };

    return <div className={classNames(wrapper, className)}>
        <Button id='-' type='count' value={<MinusIcon/>} onClick={handlerCount}/>
        {count}
        <Button id='+' type='count' value={<PlusIcon/>} onClick={handlerCount}/>
    </div>;
});

Count.displayName = 'Count';
