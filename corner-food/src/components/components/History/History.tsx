import { memo } from 'react';

import styles from './History.module.scss';

export const History = memo(() => {
    const { wrapper } = styles;

    return <div className={wrapper}> In progress ...</div>;
});

History.displayName = 'History';
