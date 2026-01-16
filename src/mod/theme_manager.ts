// src/mod/theme_manager.ts
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import { ThemeConfig            } from "../types";
    import { createStore, Storage   } from '@minejs/store';
    import { signal, effect         } from '@minejs/signals';

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ CORE ════════════════════════════════════════╗

    export class ThemeManager {

        // ┌──────────────────────────────── INIT ──────────────────────────────┐

            public store: ReturnType<typeof createStore>;
            public signal: ReturnType<typeof signal<string>>;

            constructor(public config: ThemeConfig) {

                const storage = new Storage({ type: 'local' });

                this.store = createStore({
                    state: {
                        theme: config.default
                    },
                    persist: true,
                    storage,
                    storageKey: 'app:theme'
                });

                this.signal = this.store.state.theme;

                // Set initial theme on body
                const storedTheme = storage.get('app:theme:theme') as string | null;
                const initialTheme = storedTheme || config.default;
                this.signal.set(initialTheme);
                this.applyTheme(initialTheme);

                // Setup reactive effect: apply theme whenever signal changes
                effect(() => {
                    const currentTheme = this.signal?.();
                    if (currentTheme) {
                        this.applyTheme(currentTheme);
                    }

                    console.log(`[ThemeManager] Reactive effect applied theme: ${currentTheme}`);
                });

                // Listen for system theme changes
                effect(() => {
                    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

                    const handleChange = (e: MediaQueryListEvent) => {
                        if (!storage.get('app:theme:theme')) this.signal.set(e.matches ? 'dark' : 'light');
                    };

                    mediaQuery.addEventListener('change', handleChange);
                    return () => mediaQuery.removeEventListener('change', handleChange);
                });
            }

        // └────────────────────────────────────────────────────────────────────┘


        // ┌──────────────────────────────── MAIN ──────────────────────────────┐

            getTheme(): string {
                return this.signal?.() ?? this.config.default ?? 'light';
            }

            setTheme(themeName: string): void {
                if (!this.config.available.includes(themeName)) {
                    console.warn(`[ThemeManager] Unsupported theme: ${themeName}`);
                    return;
                }

                // Update signal directly - effect will handle DOM updates
                if (this.signal) {
                    this.signal.set(themeName);
                    console.log(`[ThemeManager] Theme set to: ${themeName}`);
                }
            }

            toggleTheme(): void {
                if (!this.signal) return;
                const currentTheme = this.signal();
                const nextTheme = this.config.available.find(t => t !== currentTheme);
                if (nextTheme) {
                    this.signal.set(nextTheme);
                    console.log(`[ThemeManager] Theme toggled to: ${nextTheme}`);
                }
            }

        // └────────────────────────────────────────────────────────────────────┘


        // ┌──────────────────────────────── HELP ──────────────────────────────┐

            private applyTheme(themeName: string): void {
                const htmlEl = document.documentElement || document.rootElement;
                htmlEl.setAttribute('data-theme', themeName);
                console.log(`[ThemeManager] Applied theme: ${themeName}`);
            }

        // └────────────────────────────────────────────────────────────────────┘

    };

// ╚══════════════════════════════════════════════════════════════════════════════════════╝
