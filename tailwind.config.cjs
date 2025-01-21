const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */

module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,css}'],
	theme: {
		extend: {
			fontFamily: {
			'AritaBuri': ['AritaBuri', ...defaultTheme.fontFamily.sans],
			'heli': ['heli', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				'dark': {
					background: colors.neutral[900],
					heading: colors.zinc[200],
					body: colors.zinc[400],
					subtle: '#b9b9b9',
					footnote: colors.zinc[500],
					selectText: '#b3fc03',
					// warning:
					// success:
				},

				'light': {
					background: colors.zinc[50],
					heading: colors.zinc[950],
					body: colors.zinc[800],
					subtle: colors.zinc[500],
					footnote: colors.zinc[500],
					test: colors.lime[400],
					warning: colors.rose[500],
					// success:
				},

			},

			fontFamily: {
				body: 'Be Vietnam Pro, san-serif',
				heading: 'Suranna',
				nav: 'Newsreader',
				decor: 'Newsreader',
				sbody: "AritaBuri",
			},

			fontSize: {
				// apply for general body text
				heading: "20px",
				nav: '16px',
				body: '14px',
				sbody: '15px',
				subtle: '13px',
				url: '14px',
				decorBody: '16px',
			},

			gap: {
				// apply for gap
				pGap: '22.4px',
				linkGap: '4px',
				sectionContentGap: '16px',

				// apply for article
				heading: '28px',
				section: '32px',
				title: '14px',
				paragraph: '16px',

			},

		}
	},


	plugins: [
		function ({ addUtilities, theme }) {
			addUtilities({
				'.typo-heading-large': {
					fontFamily: theme('fontFamily.heading'),
					fontSize: theme('fontSize.heading'),
					fontWeight: theme('fontWeight.light'),
					lineHeight: '22.4px',
				},

				'.typo-heading-medium': {
					fontFamily: theme('fontFamily.body'),
					fontSize: '20px',
					fontWeight: theme('fontWeight.semibold'),
					lineHeight: '22.4px',
				},

				'.typo-sbody': {
					fontFamily: theme('fontFamily.sbody'),
					fontSize: theme('fontSize.sbody'),
					fontWeight: theme('fontWeight.light'),
					lineHeight: '26px',
				},


				'.typo-body': {
					fontFamily: theme('fontFamily.body'),
					fontSize: theme('fontSize.body'),
					fontWeight: theme('fontWeight.light'),
					lineHeight: '22.4px',
				},

				'.typo-bodyBold': {
					fontFamily: theme('fontFamily.body'),
					fontSize: theme('fontSize.body'),
					fontWeight: theme('fontWeight.bold'),
					lineHeight: '22.4px',

				},

				'.typo-subtle': {
					fontFamily: theme('fontFamily.body'),
					fontSize: theme('fontSize.subtle'),
					fontWeight: theme('fontWeight.light'),
					lineHeight: '22.4px',
				},

				'.typo-tooltip': {
					fontFamily: theme('fontFamily.body'),
					fontSize: theme('fontSize.subtle'),
					fontWeight: theme('fontWeight.light'),
					lineHeight: '18.6px',
					textAlign: 'center',
				},


				'.typo-link': {
					fontWeight: theme('fontWeight.normal'),
					borderBottomWidth: '1px',
					borderColor: colors.zinc[300],
					// transition: 'all 0.3s ease',
				},

				'.dark .typo-link': {
					borderBottomWidth: '1px',
					borderColor: colors.zinc[700],
					// transition: 'all 0.3s ease',
				},

				'.typo-link:hover': {
					borderBottomWidth: '1px',
					borderColor: colors.zinc[500],
					'background-color': colors.lime[400],
				},

				'.dark .typo-link:hover': {
					borderBottomWidth: '0px',
					'background-color': colors.lime[950],
					color: theme('colors.dark.selectText'),
				},


				'.typo-nav': {
					fontFamily: theme('fontFamily.nav'),
					fontSize: theme('fontSize.nav'),
					fontWeight: theme('fontWeight.light'),

				},

				'.typo-nav:hover': {
					'background-color': colors.lime[400],
				},

				'.dark .typo-nav:hover': {
					'background-color': colors.lime[950],
					color: theme('colors.dark.selectText'),

				},
			})
		}
	]
};
