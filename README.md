<!-- ╔══════════════════════════════ BEG ══════════════════════════════╗ -->

<br>
<div align="center">
    <p>
        <img src="./assets/img/logo.png" alt="logo" style="" height="60" />
    </p>
</div>

<div align="center">
    <img src="https://img.shields.io/badge/v-0.0.8-black"/>
    <a href="https://github.com/cruxext-org"><img src="https://img.shields.io/badge/🔥-@cruxext-black"/></a>
    <br>
    <img src="https://img.shields.io/badge/coverage-100%25-brightgreen" alt="Test Coverage" />
    <img src="https://img.shields.io/github/issues/cruxext-org/theme?style=flat" alt="Github Repo Issues" />
    <img src="https://img.shields.io/github/stars/cruxext-org/theme?style=social" alt="GitHub Repo stars" />
</div>
<br>

<!-- ╚═════════════════════════════════════════════════════════════════╝ -->



<!-- ╔══════════════════════════════ DOC ══════════════════════════════╗ -->

- ## Overview 👀

    - #### Why ?
        > A lightweight, reactive theme management solution, built for [`@cruxjs`](https://github.com/cruxjs-org) ecosystem.

    - #### When ?
        > When you need to manage theme preferences in your [`@cruxjs`](https://github.com/cruxjs-org) application.

    <br>
    <br>

- ## Quick Start 🔥

    > install [`hmm`](https://github.com/minejs-org/hmm) first.

    ```bash
    # in your terminal
    hmm i @cruxext/theme
    ```

    <div align="center"> <img src="./assets/img/line.png" alt="line" style="display: block; margin-top:20px;margin-bottom:20px;width:500px;"/> </div>
    <br>

    - ### Setup

        ```typescript
        // in your client config at `client.ts` file, add the theme extension.
        import { themeExtension } from `@cruxext/theme`;

        const config: ClientManagerConfig = {
            ...

            extensions: [
                ...
                createThemeExtension(),
            ],
        };
        ```

    - ### Usage

        ```typescript
        import { toggleTheme, getCurrentTheme } from '@cruxext/theme';
        import { Button } from '@cruxkit/button';

        <Button
            onClick={ () => toggleTheme() }
            leftIcon={{name: getCurrentTheme() === 'light' ? 'sun' : 'moon' }}
            >
            Toggle Theme
        </Button>
        ```

    <br>
    <br>

- ## Documentation 📑

    - ### API ⛓️

        - #### Main-Functions

            ```typescript
            export function themeExtension(config?: ThemeConfig) : ClientExtension

            export const getThemeManager    = () => themeManager;
            export const setTheme           = (themeName: string) => getThemeManager().setTheme(themeName);
            export const toggleTheme        = () => getThemeManager().toggleTheme();
            export const getCurrentTheme    = () => getThemeManager().getTheme();
            ```

        - #### Toast Class Methods

            ```typescript
            getTheme        ()                  : string
            setTheme        (themeName: string) : void
            toggleTheme     ()                  : void
            ```

        - #### Types

            ```typescript
            export interface ThemeConfig {
                default     : string;
                available   : string[];
            }
            ```

        <div align="center"> <img src="./assets/img/line.png" alt="line" style="display: block; margin-top:20px;margin-bottom:20px;width:500px;"/> </div>
        <br>

    - ### Related 🔗

        - ##### [@minejs/jsx](https://github.com/minejs-org/jsx)
        - ##### [@minejs/store](https://github.com/minejs-org/store)
        - ##### [@minejs/signals](https://github.com/minejs-org/signals)

        - ##### [@cruxjs/client](https://github.com/cruxjs-org/client)
        - ##### [@cruxjs/app](https://github.com/cruxjs-org/app)

<!-- ╚═════════════════════════════════════════════════════════════════╝ -->



<!-- ╔══════════════════════════════ END ══════════════════════════════╗ -->

<br>
<br>

---

<div align="center">
    <a href="https://github.com/maysara-elshewehy"><img src="https://img.shields.io/badge/by-Maysara-black"/></a>
</div>

<!-- ╚═════════════════════════════════════════════════════════════════╝ -->