import { ThemeConfig, ClientExtension } from '@cruxjs/client';
export { ThemeConfig } from '@cruxjs/client';
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

declare const getThemeManager: () => ThemeManager;
declare const setTheme: (themeName: string) => void;
declare const toggleTheme: () => void;
declare const getCurrentTheme: () => string;
declare function createThemeExtension(config?: ThemeConfig): ClientExtension;

export { ThemeManager, createThemeExtension, getCurrentTheme, getThemeManager, setTheme, toggleTheme };
