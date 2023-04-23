import { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from 'components/ui/Button';
import { Input } from 'components/ui/Input';
import { useAppSelector } from 'store/rootReducer';
import { deleteUser, getUserById, updateUser } from 'store/services';
import { userActions } from 'store/slices';
import { useAppDispatch } from 'store/store';
import { ROUTES } from 'utils/constants/routes.enum';
import { validateForm } from 'utils/helpers/validateForm';

import styles from './Account.module.scss';

export const Account = memo(() => {
    const { wrapper } = styles;
    const { user } = useAppSelector(state => state);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [userName, setUserName] = useState<string>(user.user?.username || '');
    const [userEmail, setUserEmail] = useState<string>(user.user?.email || '');
    const [address, setAddress] = useState<string>(user.user?.address || '');
    const [newPassword, setPassword] = useState<string>('');
    const [isName, setIsName] = useState<boolean>(true);
    const [isEmail, setIsEmail] = useState<boolean>(true);
    const [isAddress, setIsAddress] = useState<boolean>(true);
    const [isPassword, setIsPassword] = useState<boolean>(true);

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
            case 'address':
                setAddress(value);
                setIsAddress(validateForm(id, value));

                break;
            default: break;
        }
    };

    const cleanForm = () => {
        setUserName('');
        setIsName(true);
        setUserEmail('');
        setIsEmail(true);
        setPassword('');
        setIsPassword(true);
        setAddress('');
        setIsPassword(true);
    };

    const submitUserData =  async () => {
        const data = {
            _id: user.user!._id,
            username: userName,
            email: userEmail,
            password: newPassword.length ? newPassword : user.user!.password,
            address,
            image: '',
            favoriteDish: user.user!.favoriteDish,
        };

        await updateUser(user.user!._id, data);
        getUserById(user.user!._id, dispatch);

        cleanForm();
    };

    const handlerValidBtn = () => isName && isEmail && isPassword && isAddress;

    const signOut = () => {
        document.cookie = 'Token=""; expires=Thu, 01 Jan 1970 00:00:00 GMT;';
        dispatch(userActions.logout());
        navigate(ROUTES.HOME);
    };

    const deleteUserBtn = () => {
        deleteUser(user.user!._id, dispatch);
        signOut();
    };

    return <div className={wrapper}>
        <div className={styles.inputs}>
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
                id='address'
                type='text'
                label='Address'
                minLength={3}
                value={address}
                onChange={handlerUserData}
            />
            <Input
                id='password'
                type='password'
                label='Password'
                icon
                minLength={6}
                value={newPassword}
                onChange={handlerUserData}
            />
        </div>

        <div className={styles.buttons}>
            <Button value="Save" type="auth" onClick={submitUserData} disabled={!handlerValidBtn()} id='Save' />
            <Button value="Delete" type="auth" onClick={deleteUserBtn} />
        </div>
        <Button value="SignOut" type="auth" onClick={signOut} />
    </div>;
});

Account.displayName = 'Account';
