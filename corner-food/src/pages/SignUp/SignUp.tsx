import { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthHeader } from 'components/components/AuthHeader';
import { Button } from 'components/ui/Button';
import { Input } from 'components/ui/Input';
import { createUser } from 'store/services/auth.service';
import { ROUTES } from 'utils/constants/routes.enum';
import { validateForm } from 'utils/helpers/validateForm';

import styles from './SignUp.module.scss';

export const SignUp = memo(() => {
    const { wrapper, inputs } = styles;
    const navigate = useNavigate();
    const [userName, setUserName] = useState<string>('');
    const [userEmail, setUserEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [rePassword, setRePassword] = useState<string>('');
    const [isName, setIsName] = useState<boolean>(false);
    const [isEmail, setIsEmail] = useState<boolean>(false);
    const [isPassword, setIsPassword] = useState<boolean>(false);
    const [isRePassword, setIsRePassword] = useState<boolean>(false);

    const handlerUserData = (event: React.ChangeEvent) => {
        const { id, value } = event.target as HTMLInputElement;

        switch (id) {
            case 'username':
                setUserName(value);
                setIsName(validateForm(id, value));

                break;
            case 'email':
                setUserEmail(value);
                setIsEmail(validateForm(id, value));

                break;
            case 'password':
                setPassword(value);
                setIsPassword(validateForm(id, value));

                break;
            case 'password-repeat':
                setRePassword(value);
                setIsRePassword(validateForm(id, value));

                break;
            default: break;
        }
    };

    const cleanForm = () => {
        setUserName('');
        setIsName(false);
        setUserEmail('');
        setIsEmail(false);
        setPassword('');
        setIsPassword(false);
        setRePassword('');
        setIsRePassword(false);
    };

    const submitUserData = async () => {
        const data = {
            username: userName,
            email: userEmail,
            password,
        };

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const ans: any  = await createUser(data);

        if (ans.status === 201) {
            navigate(`${ROUTES.LOGIN}`);
        }

        cleanForm();
    };

    const handlerValidBtn = () => isName && isEmail && isPassword && isRePassword && (password === rePassword);

    return (
        <div className={wrapper}>
            <AuthHeader/>
            <div className={inputs}>
                <Input
                    id='username'
                    type='text'
                    label='Username'
                    minLength={3}
                    value={userName}
                    onChange={handlerUserData}
                />
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
                    icon
                    minLength={6}
                    value={password}
                    onChange={handlerUserData}
                />
                <Input
                    id='password-repeat'
                    type='password'
                    label='Confirm Password'
                    icon
                    minLength={6}
                    value={rePassword}
                    onChange={handlerUserData}
                />
            </div>
            <Button value="Signup" type='auth' onClick={submitUserData} disabled={!handlerValidBtn()} />
        </div>
    );
});

SignUp.displayName = 'SignUp';
