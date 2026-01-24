import { ThemeConfig, ClientExtension } from '@cruxjs/base';
export { ThemeConfig } from '@cruxjs/base';
import { createStore } from '@minejs/store';
import { signal } from '@minejs/signals';

declare class ThemeManager {
    config: ThemeConfig;
    store: ReturnType<typeof createStore>;
    signal: ReturnType<typeof signal<string>>;
    constructor(config: ThemeConfig);
    getTheme(): string;
    setTheme(themeName: string): void;
    toggleTheme(): void;
    private applyTheme;
}

/**
 * Create a theme extension
 * @param config Theme configuration
 * @returns Theme extension
 */
declare function themeExtension(config?: ThemeConfig): ClientExtension;
declare const getThemeManager: () => ThemeManager;
declare const setTheme: (themeName: string) => void;
declare const toggleTheme: () => void;
declare const getCurrentTheme: () => string;

export { ThemeManager, getCurrentTheme, getThemeManager, setTheme, themeExtension, toggleTheme };
