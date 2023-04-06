import { memo, useState } from 'react';

import EyeOpen from '../../../assets/icon/show-password-eye.svg';
import EyeClose from '../../../assets/icon/show-password-eye-closed.svg';

import styles from './Input.module.scss';

interface IInputProps {
    type: string;
    label: string;
    icon?: boolean;
}

export const Input = memo((props: IInputProps) => {
    const { wrapper } = styles;
    const { type, label, icon } = props;
    const [isShow, setIsShow] = useState<boolean>(false);

    const handlerIconClick = () => {
        setIsShow(!isShow);
    };

    return <div className={wrapper}>
        <label className={styles.label} htmlFor={label}>
            {label}
        </label>
        <input id={label} className={styles.input} type={isShow ? 'text' : type} name={label}  />
        {icon
            ? <div onClick={handlerIconClick} role='button' tabIndex={0} >
                <img src={isShow ? EyeClose : EyeOpen} className={styles.icon}  alt='icons'  />
            </div>
            : ''}
    </div>;
});

Input.displayName = 'Input';
