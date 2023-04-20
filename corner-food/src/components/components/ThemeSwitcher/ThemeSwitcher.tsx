import { memo } from 'react';

import { useTheme } from 'app/theme/ThemeContext';
import { THEMES } from 'utils/constants/themes';

import styles from './ThemeSwitcher.module.scss';

export const ThemeSwitcher = memo(() => {
    const { switcher } = styles;
    const { theme, setTheme } = useTheme();

    return <button type="button" className={switcher}  onClick={() => {
        setTheme?.(theme === THEMES.light ? THEMES.dark : THEMES.light);
    }}> {theme} </button>;
});

ThemeSwitcher.displayName = 'ThemeSwitcher';
