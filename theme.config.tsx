import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
    logo: <span>拡張版法令標準XMLスキーマ</span>,
    footer: { text: () => (<span>© 2025 nozawa & kota-yata</span>) },
    faviconGlyph: "K",
    nextThemes: {
        defaultTheme: "dark",
    },
};

export default config;
