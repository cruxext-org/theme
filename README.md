<!-- ╔══════════════════════════════ BEG ══════════════════════════════╗ -->

<br>
<div align="center">
    <p>
        <img src="./assets/img/logo.png" alt="logo" style="" height="60" />
    </p>
</div>

<div align="center">
    <img src="https://img.shields.io/badge/v-0.0.3-black"/>
    <a href="https://github.com/cruxext-org"><img src="https://img.shields.io/badge/🔥-@cruxext-black"/></a>
    <br>
    <img src="https://img.shields.io/github/issues/cruxext-org/theme?style=flat" alt="Github Repo Issues" />
    <img src="https://img.shields.io/github/stars/cruxext-org/theme?style=social" alt="GitHub Repo stars" />
</div>
<br>

<!-- ╚═════════════════════════════════════════════════════════════════╝ -->



<!-- ╔══════════════════════════════ DOC ══════════════════════════════╗ -->

- ## Overview 👀

    - #### Why ?
        > A lightweight, reactive theme management solution for dark/light mode switching with persistent storage and system preference detection, built for the CruxJS ecosystem.

    - #### When ?
        > Use this extension when you need to:
        > - Implement dark/light mode switching in your application
        > - Respect user's system color scheme preferences
        > - Persist theme preferences across sessions
        > - Build reactive UI components that respond to theme changes
        > - Integrate theme management into CruxJS-based applications

        > When using [@cruxjs/app](https://github.com/cruxjs-org/app) and [@cruxjs/client](https://github.com/cruxjs-org/client).

    <br>
    <br>

- ## Quick Start 🔥

    > install [`hmm`](https://github.com/minejs-org/hmm) first.

    ```bash
    # in your terminal
    hmm i @cruxext/theme
    ```

    ```ts
    // in your ts files
    import { ... } from `@cruxext/theme`;
    ```

    <div align="center"> <img src="./assets/img/line.png" alt="line" style="display: block; margin-top:20px;margin-bottom:20px;width:500px;"/> </div>
    <br>

    - ### Example

        ```typescript
        import { type JSXElement }                  from '@minejs/jsx';
        import { effect, signal }                   from '@minejs/signals';
        import { Button }                           from '@cruxkit/core';
        import { toggleTheme, getCurrentTheme }     from '@cruxext/theme';

        export function MyComponent(): JSXElement {
            const isDark = signal(getCurrentTheme() == 'dark');

            effect(() => {
                console.log('isDark:', isDark());
                const btn = document.querySelector('#theme_button');
                if(!btn) return;
                toggleTheme();

                btn.textContent = isDark() ? '☀️ Light Mode' : '🌙 Dark Mode';
            });

            return (
                <Button
                    id="theme_button"
                    variant="solid"
                    color="brand"
                    onClick={() => isDark.set(!isDark())}
                >
                    {isDark() ? '☀️ Light Mode' : '🌙 Dark Mode'}
                </Button>
            );
        }
        ```

    <br>
    <br>

- ## Documentation 📑


    - ### API ⛓️

        - #### `createThemeExtension(config?: ThemeManagerConfig): ClientExtension`
            > Initializes the theme extension for your CruxJS application. Call this during your app bootstrap.

            ```typescript
            import { createThemeExtension } from '@cruxext/theme';

            const themeExt = createThemeExtension({
                default: 'light',
                available: ['light', 'dark', 'auto']
            });
            ```

        - #### `setTheme(themeName: string): void`

            > Sets the active theme to the specified name. Must be one of the available themes defined in config.

            ```typescript
            import { setTheme } from '@cruxext/theme';

            setTheme('dark');
            ```

        - #### `toggleTheme(): void`

            > Toggles between available themes. Cycles through the first non-current available theme.

            ```typescript
            import { toggleTheme } from '@cruxext/theme';

            toggleTheme();
            ```

        - #### `getCurrentTheme(): string`

            > Returns the name of the currently active theme.

            ```typescript
            import { getCurrentTheme } from '@cruxext/theme';

            const current = getCurrentTheme(); // 'light' | 'dark' | etc.
            ```

        - #### `getThemeManager(): ThemeManager`

            > Returns the ThemeManager instance for advanced usage and direct signal access.

            ```typescript
            import { getThemeManager, signal } from '@cruxext/theme';

            const manager = getThemeManager();
            const themeSignal = manager.signal; // reactive signal
            ```

        <div align="center"> <img src="./assets/img/line.png" alt="line" style="display: block; margin-top:20px;margin-bottom:20px;width:500px;"/> </div>
        <br>

    - ### Related 🔗

        - ##### [@minejs/signals](https://github.com/minejs-org/signals)
            > Reactive signals library used for theme state management

        - ##### [@minejs/store](https://github.com/minejs-org/store)
            > Persistent storage solution for maintaining theme preferences

        - ##### [@cruxkit/core](https://github.com/cruxkit/core)
            > Core UI component library that works seamlessly with theming

<!-- ╚═════════════════════════════════════════════════════════════════╝ -->



<!-- ╔══════════════════════════════ END ══════════════════════════════╗ -->

<br>
<br>

---

<div align="center">
    <a href="https://github.com/maysara-elshewehy"><img src="https://img.shields.io/badge/by-Maysara-black"/></a>
</div>

<!-- ╚═════════════════════════════════════════════════════════════════╝ -->