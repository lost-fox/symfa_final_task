import { memo } from 'react';

import { Button } from 'components/ui/Button';
import { Input } from 'components/ui/Input';

import styles from './Account.module.scss';

export const Account = memo(() => {
    const { wrapper } = styles;

    return <div className={wrapper}>
        <div className={styles.inputs}>
            <Input
                id='Image'
                type='file'
                label='Image'
                value=""
                onChange={() => ''}
            />
            <Input
                id='username'
                type='text'
                label='Username'
                minLength={3}
                value=""
                onChange={() => ''}
            />
            <Input
                id='email'
                type='text'
                label='Email Address'
                pattern='\S+@\S+\.\S+'
                value=""
                onChange={() => ''}
            />

            <Input
                id='address'
                type='text'
                label='Address'
                minLength={6}
                value=""
                onChange={() => ''}
            />
            <Input
                id='password'
                type='password'
                label='Password'
                icon
                minLength={6}
                value=""
                onChange={() => ''}
            />
        </div>
        <Button value="Save" type="auth"/>
    </div>;
});

Account.displayName = 'Account';
