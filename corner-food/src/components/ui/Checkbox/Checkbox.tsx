import { memo } from 'react';

import styles from './Checkbox.module.scss';

interface ICheckbox {
    isActive?: boolean;
}

export const Checkbox = memo((props: ICheckbox) => {
    const { checkbox, checkboxActive } = styles;
    const { isActive = false } = props;

    return isActive ? (<div className={checkboxActive}><div/></div>) : (<div className={checkbox} />);
});

Checkbox.displayName = 'Checkbox';
