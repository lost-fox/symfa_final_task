import { memo } from 'react';

import { AuthHeader } from 'components/components/AuthHeader';
import { Button } from 'components/ui/Button';
import { Input } from 'components/ui/Input';

import styles from './SignUp.module.scss';

export const SignUp = memo(() => {
    const { wrapper, inputs } = styles;

    return (
        <div className={wrapper}>
            <AuthHeader/>
            <div className={inputs}>
                <Input type='text' label='Username' />
                <Input type='text' label='Email Address' />
                <Input type='password' label='Password' icon />
                <Input type='password' label='Confirm Password' icon />
            </div>
            <Button value="Signup" type='auth' />
        </div>
    );
});

SignUp.displayName = 'SignUp';
