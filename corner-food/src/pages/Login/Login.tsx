import { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthHeader } from 'components/components/AuthHeader';
import { Button } from 'components/ui/Button';
import { Input } from 'components/ui/Input';
import { getToken } from 'store/services';
import { ROUTES } from 'utils/constants/routes.enum';
import { validateForm } from 'utils/helpers/validateForm';
import { IGetToken } from 'utils/interfaces/Auth.service.interface';

import styles from './Login.module.scss';

export const Login = memo(() => {
    const { wrapper, inputs, link } = styles;
    const navigate = useNavigate();
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

    const submitUserData = async () => {
        const data = {
            email: userEmail,
            password,
        };

        const ans: IGetToken = await getToken(data);

        if (ans.status === 201) {
            navigate(`${ROUTES.HOME}`);
        }

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
