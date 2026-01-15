// src/index.ts
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import { ClientExtension, ExtensionContext  } from "@cruxjs/client";
    import { ThemeConfig                 } from "./types";
    import { ThemeManager                       } from "./mod/theme_manager";

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ MAIN ════════════════════════════════════════╗

    // Theme manager instance
    let themeManager : ThemeManager;

    // Exported theme functions
    export const getThemeManager    = () => themeManager;
    export const setTheme           = (themeName: string) => getThemeManager().setTheme(themeName);
    export const toggleTheme        = () => getThemeManager().toggleTheme();
    export const getCurrentTheme    = () => getThemeManager().getTheme();

    // Theme extension
    export function createThemeExtension(config?: ThemeConfig) : ClientExtension {
        return {
            name : 'ThemeExtension',

            onBoot: (ctx: ExtensionContext) => {
                // if config provided, merge into client config
                if (config) {
                    ctx.cconfig.theme = {
                        ...ctx.cconfig.theme,
                        ...config
                    };
                }

                // if no theme config provided, set default
                if (!ctx.cconfig.theme) {
                    ctx.cconfig.theme = {
                        default         : 'dark',
                        available       : ['dark', 'light']
                    };
                }

                // create theme manager instance
                themeManager    = new ThemeManager({
                    default     : ctx.cconfig.theme!.default,
                    available   : ctx.cconfig.theme!.available
                });
            }
        };
    };

    // export
    export * from "./types";
    export { ThemeManager };

// ╚══════════════════════════════════════════════════════════════════════════════════════╝