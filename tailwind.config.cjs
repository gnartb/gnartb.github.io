const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,css}"],
  theme: {
    extend: {
      fontFamily: {
        AritaBuri: ["AritaBuri", ...defaultTheme.fontFamily.sans],
        heli: ["heli", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        dark: {
          background: colors.neutral[950],
          heading: colors.gray[200],
          body: colors.gray[400],
          subtle: colors.gray[500],
          footnote: colors.gray[500],
          selectText: "#b3fc03",
          line: colors.gray[800],
          // warning:
          // success:
        },

        light: {
          background: colors.gray[50],
          heading: colors.gray[950],
          body: colors.gray[800],
          subtle: colors.gray[500],
          footnote: colors.gray[500],
          test: colors.lime[400],
          warning: colors.rose[500],
          line: colors.gray[200],
          // success:
        },
      },

      fontFamily: {
        body: "Be Vietnam Pro, san-serif",
        heading: "Suranna",
        nav: "Newsreader",
        decor: "Newsreader",
        sbody: "AritaBuri",
        code: "JetBrains Mono",
      },

      fontSize: {
        // apply for general body text
        heading: "20px",
        nav: "16px",
        body: "14px",
        subtle: "13px",
        url: "14px",

        sbody: "15px",
        ssubtle: "14px",
      },

      gap: {
        // apply for gap
        pGap: "22.4px",
        linkGap: "4px",
        sectionContentGap: "16px",

        // apply for article
        heading: "28px",
        section: "32px",
        title: "14px",
        paragraph: "16px",
      },
    },
  },

  plugins: [
    function ({ addUtilities, theme }) {
      addUtilities({
        ".typo-heading-large": {
          fontFamily: theme("fontFamily.heading"),
          fontSize: theme("fontSize.heading"),
          fontWeight: theme("fontWeight.light"),
          lineHeight: "22.4px",
        },

        ".typo-heading-medium": {
          fontFamily: theme("fontFamily.body"),
          fontSize: "20px",
          fontWeight: theme("fontWeight.semibold"),
          lineHeight: "22.4px",
        },

        ".typo-sbody": {
          fontFamily: theme("fontFamily.sbody"),
          fontSize: theme("fontSize.sbody"),
          fontWeight: theme("fontWeight.light"),
          lineHeight: "28px",
        },

        ".typo-ssubtle": {
          fontFamily: theme("fontFamily.sbody"),
          fontSize: theme("fontSize.ssubtle"),
          fontWeight: theme("fontWeight.light"),
          lineHeight: "24px",
        },

        ".typo-body": {
          fontFamily: theme("fontFamily.body"),
          fontSize: theme("fontSize.body"),
          fontWeight: theme("fontWeight.light"),
          lineHeight: "24px",
        },

        ".typo-subtle": {
          fontFamily: theme("fontFamily.body"),
          fontSize: theme("fontSize.subtle"),
          fontWeight: theme("fontWeight.light"),
          lineHeight: "22.4px",
        },

        ".typo-tooltip": {
          fontFamily: theme("fontFamily.body"),
          fontSize: theme("fontSize.subtle"),
          fontWeight: theme("fontWeight.light"),
          lineHeight: "18.6px",
          textAlign: "center",
        },

        ".typo-link": {
          fontWeight: theme("fontWeight.semibold"),
          padding: "1px 2px",
          borderBottomWidth: "1px",
          borderColor: colors.gray[200],
          // transition: 'all 0.3s ease',
        },

        ".dark .typo-link": {
          fontWeight: theme("fontWeight.semibold"),
          padding: "1px 2px",
          borderBottomWidth: "1px",
          borderColor: colors.neutral[800],
          // transition: 'all 0.3s ease',
        },

        ".typo-link:hover": {
          borderBottomWidth: "1px",
          borderColor: colors.gray[500],
          "background-color": colors.lime[400],
        },

        ".dark .typo-link:hover": {
          borderBottomWidth: "1px",
          "background-color": colors.neutral[800],
          borderColor: colors.neutral[800],
          color: theme('colors.dark.heading'),
          borderRadius: "4px",
        },

        ".typo-nav": {
          fontFamily: theme("fontFamily.nav"),
          fontSize: theme("fontSize.nav"),
          fontWeight: theme("fontWeight.light"),
        },

        ".typo-nav:hover": {
          "background-color": colors.lime[400],
        },

        ".dark .typo-nav:hover": {
          "background-color": colors.lime[950],
          color: theme("colors.dark.selectText"),
        },

        ".typo-hLight": {
          fontStyle: "italic",
          "background-color": colors.lime[300],
        },

        ".dark .typo-hLight": {
          "background-color": colors.lime[400],
          color: theme("colors.light.body"),
        },

        ".typo-code": {
          fontFamily: theme("fontFamily.code"),
          backgroundColor: colors.slate[200],
          fontSize: theme("fontSize.subtle"),
		      fontWeight: theme("fontWeight."),
          padding: "2px 4px", // 2px top & bottom, 4px left & right
          borderRadius: "4px", // Rounded corners
        },

        ".dark .typo-code": {
          fontFamily: theme("fontFamily.code"),
          backgroundColor: colors.neutral[800],
          fontSize: theme("fontSize.subtle"),
		      fontWeight: theme("fontWeight.normal"),
          padding: "2px 4px", // 2px top & bottom, 4px left & right
          borderRadius: "4px", // Rounded corners
        },
      });
    },
  ],
};
