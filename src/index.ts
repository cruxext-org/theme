// src/index.ts
//
// Made with ❤️ by Maysara.



// ╔════════════════════════════════════════ PACK ════════════════════════════════════════╗

    import { ClientExtension, ExtensionContext  } from "@cruxjs/base";
    import { ThemeConfig                        } from "./types";
    import { ThemeManager                       } from "./mod/manager";

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ INIT ════════════════════════════════════════╗

    // Theme manager instance
    let themeManager : ThemeManager;

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ CORE ════════════════════════════════════════╗

    /**
     * Create a theme extension
     * @param config Theme configuration
     * @returns Theme extension
     */
    export function themeExtension(config?: ThemeConfig) : ClientExtension {
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

    // Exported theme functions
    export const getThemeManager    = () => themeManager;
    export const setTheme           = (themeName: string) => getThemeManager().setTheme(themeName);
    export const toggleTheme        = () => getThemeManager().toggleTheme();
    export const getCurrentTheme    = () => getThemeManager().getTheme();

// ╚══════════════════════════════════════════════════════════════════════════════════════╝



// ╔════════════════════════════════════════ ════ ════════════════════════════════════════╗

    export * from "./types";
    export { ThemeManager };

// ╚══════════════════════════════════════════════════════════════════════════════════════╝