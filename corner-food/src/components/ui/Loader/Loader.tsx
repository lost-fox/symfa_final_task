import { memo } from 'react';

import styles from './Loader.module.scss';

export const Loader = memo(() => {
    const { wrapper } = styles;

    return <div className={wrapper}>
        <img className={styles.image}
            src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="loader icon"
        />
    </div>;
});

Loader.displayName = 'Loader';
