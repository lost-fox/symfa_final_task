import { memo, useState } from 'react';

import { AuthHeader } from 'components/components/AuthHeader';
import { Button } from 'components/ui/Button';
import { Input } from 'components/ui/Input';
import { getToken } from 'store/services/auth.service';
import { validateForm } from 'utils/helpers/validateForm';

import styles from './Login.module.scss';

export const Login = memo(() => {
    const { wrapper, inputs, link } = styles;
    const [userEmail, setUserEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isEmail, setIsEmail] = useState<boolean>(false);
    const [isPassword, setIsPassword] = useState<boolean>(false);

    const handlerUserData = (event: React.ChangeEvent) => {
        const { id, value } = event.target as HTMLInputElement;

        switch (id) {
            case 'email':
                setUserEmail(value);
                setIsEmail(validateForm(id, value));

                break;
            case 'password':
                setPassword(value);
                setIsPassword(validateForm(id, value));

                break;
            default: break;
        }
    };

    const cleanForm = () => {
        setUserEmail('');
        setIsEmail(false);
        setPassword('');
        setIsPassword(false);
    };

    const submitUserData = () => {
        const data = {
            email: userEmail,
            password,
        };

        getToken(data);
        cleanForm();
    };

    const handlerValidBtn = () => isEmail && isPassword;

    return <div className={wrapper}>
        <AuthHeader />
        <div className={inputs} >
            <Input
                id='email'
                type='text'
                label='Email Address'
                pattern='\S+@\S+\.\S+'
                value={userEmail}
                onChange={handlerUserData}
            />
            <Input
                id='password'
                type='password'
                label='Password'
                minLength={6}
                icon
                value={password}
                onChange={handlerUserData}
            />
        </div>
        <p className={link}>Forgot Password?</p>

        <Button
            value="Login"
            type='auth'
            onClick={submitUserData}
            disabled={!handlerValidBtn()}
        />
    </div>;
});

Login.displayName = 'Login';
