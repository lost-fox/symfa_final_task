import { memo } from 'react';
import { useLocation } from 'react-router-dom';

import { Account } from 'components/components/Account';
import { History } from 'components/components/History';
import { Payment } from 'components/components/Payment';
import { ProfileHeader } from 'components/components/ProfileHeader';

export const Profile = memo(() => {
    const location = useLocation();

    const mainPart = () => {
        if (location.search.includes('account')) {
            return <Account/>;
        }

        if (location.search.includes('payment')) {
            return <Payment/>;
        }

        return <History/>;

    };

    return <div>
        <ProfileHeader/>
        {
            mainPart()
        }

    </div>;
});

Profile.displayName = 'Profile';
