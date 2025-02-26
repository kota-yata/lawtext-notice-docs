import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
    logo: <span>拡張版法令標準XMLスキーマ</span>,
    editLink: { component: () => null },
    feedback: { content: () => null },
    footer: { text: () => (<div><small>
        &copy; {new Date().getFullYear()} nozawa & kota-yata
    </small></div>) },
    faviconGlyph: "K",
    gitTimestamp: () => null,
    useNextSeoProps: () => ({ titleTemplate: "%s - Lawtext-notice" }),
    nextThemes: {
        defaultTheme: "dark",
    },
};

export default config;
