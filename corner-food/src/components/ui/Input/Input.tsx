import { memo, useState } from 'react';

import  { ReactComponent as EyeOpen } from '../../../assets/icon/show-password-eye.svg';
import { ReactComponent as EyeClose } from '../../../assets/icon/show-password-eye-closed.svg';

import styles from './Input.module.scss';

interface IInputProps {
    id: string;
    type: string;
    label: string;
    icon?: boolean;
    minLength?: number;
    pattern?: string;
    onChange: (event: React.ChangeEvent) => void;
}

export const Input = memo((props: IInputProps) => {
    const { wrapper } = styles;
    const { id, type, label, icon, minLength, pattern, onChange } = props;
    const [isShow, setIsShow] = useState<boolean>(false);

    const handlerIconClick = () => {
        setIsShow(!isShow);
    };

    return <div className={wrapper}>
        <label className={styles.label} htmlFor={label}>
            {label}
        </label>
        <input
            id={id}
            className={styles.input}
            type={isShow ? 'text' : type}
            name={label}
            minLength={minLength}
            pattern={pattern}
            onChange={onChange}
        />
        {icon
            ? <div onClick={handlerIconClick} role='button' tabIndex={0} >
                {isShow ? <EyeClose className={styles.icon}/> : <EyeOpen className={styles.icon}/>}
            </div>
            : ''}
    </div>;
});

Input.displayName = 'Input';
