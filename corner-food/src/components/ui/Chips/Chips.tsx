import { memo } from 'react';
import classNames from 'classnames';

import styles from './Chips.module.scss';

interface IChipsProps {
    isActive: boolean;
    title: string;
    onClick: (event: React.MouseEvent) => void;
}

export const Chips = memo((props: IChipsProps) => {
    const { chips, active } = styles;
    const { title, isActive, onClick } = props;

    const chipsClassName = isActive ? classNames(chips, active) : chips;

    return <div id={title} className={chipsClassName} onClick={onClick}>{title}</div>;
});

Chips.displayName = 'Chips';
