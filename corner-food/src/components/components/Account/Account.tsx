import { memo, useState } from 'react';

import { Button } from 'components/ui/Button';
import { Input } from 'components/ui/Input';
import { useAppSelector } from 'store/rootReducer';
import { validateForm } from 'utils/helpers/validateForm';

import styles from './Account.module.scss';

export const Account = memo(() => {
    const { wrapper } = styles;
    const { user } = useAppSelector(state => state);
    const [userImage, setUserImage] = useState<string>('');
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
            case 'image':
                setUserImage(value);

                break;
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

    const submitUserData =  () => {
        const data = {
            username: userName,
            email: userEmail,
            password: newPassword.length ? newPassword : user.user?.password,
            address,
            image: userImage ? URL.createObjectURL(new Blob([userImage[0]])) : user.user?.image,
        };

        console.log(data);

        cleanForm();
    };

    const handlerValidBtn = () => isName && isEmail && isPassword && isAddress;

    console.log(URL.createObjectURL(new Blob([userImage])));

    return <div className={wrapper}>
        <div className={styles.inputs}>
            <Input
                id='image'
                type='file'
                label='Image'
                value={userImage}
                onChange={handlerUserData}
            />
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
                minLength={6}
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
        <Button value="Save" type="auth" onClick={submitUserData} disabled={!handlerValidBtn()} />
    </div>;
});

Account.displayName = 'Account';
