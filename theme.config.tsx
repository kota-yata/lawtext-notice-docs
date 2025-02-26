import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const HeadComponent = () => {
    const router = useRouter();
    const src = `${router.basePath}/static/lawtext_bundles/browser/lawtext.js`;
    const fallbackSrc = "https://yamachig.github.io/Lawtext/static/lawtext_bundles/browser/lawtext.js";
    React.useEffect(() => {
        import(/*webpackIgnore: true*/ src)
            .catch(() => {
                return import(/*webpackIgnore: true*/ fallbackSrc);
            })
            .catch(console.error);
    }, [src]);
    return null;
};

const config: DocsThemeConfig = {
    logo: <span>拡張版法令標準XMLスキーマ</span>,
    head: HeadComponent,
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
