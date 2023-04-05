import { memo } from 'react';

import { AuthHeader } from 'components/components/AuthHeader';
import { Button } from 'components/ui/Button';
import { Input } from 'components/ui/Input';

import EyeOpen from '../../assets/icon/show-password-eye.svg';

import styles from './Login.module.scss';

export const Login = memo(() => {
    const { wrapper, inputs, link } = styles;

    return <div className={wrapper}>
        <AuthHeader />
        <div className={inputs} >
            <Input type='text' label='Email Address' />
            <Input type='password' label='Password' icon={EyeOpen} />
        </div>
        <p className={link}>Forgot Password?</p>

        <Button value="Login" type='auth' />
    </div>;
});

Login.displayName = 'Login';
