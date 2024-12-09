const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,css}'],
	theme: {
		extend: {
			colors: {
				bgColor: colors.zinc[900],
				bodyColor: colors.zinc[200],
				subColor: colors.slate[300],
				subParagraphColor: colors.slate[400],
				sectionTitle: colors.slate[500],
				urlColor: colors.slate[400],
			},
			fontFamily: {
				bodyFont: 'Be Vietnam Pro, san-serif',
				headLineFont: 'Suranna',
				urlFont: 'Space Grotesk',
			},
			fontSize: {
				// apply for general body text
				bodyFontSize: '15px',
				subFontSize: '13px',
				urlFontSize: '15px',

			},
			gap: {
				// apply for gap
				paragraphGap: '22.4px',
				linkGap: '4px',
				sectionContentGap: '16px',
			}
		}
	},
	plugins: [
		function ({ addUtilities, theme }) {
			addUtilities({
				'.bodyParagraph': {
					fontFamily: theme('fontFamily.bodyFont'),
					fontSize: theme('fontSize.bodyFontSize'),
					fontWeight: theme('fontWeight.light'),
					color: theme('colors.bodyColor'),
					lineHeight: '22.4px',
				},
				'.subParagraph': {
					fontFamily: theme('fontFamily.bodyFont'),
					fontSize: theme('fontSize.bodyFontSize'),
					fontWeight: theme('fontWeight.light'),
					color: theme('colors.subParagraphColor'),
					lineHeight: '22.4px',
				},
				'.bodyBold': {
					fontFamily: theme('fontFamily.bodyFont'),
					fontSize: theme('fontSize.bodyFontSize'),
					fontWeight: theme('fontWeight.bold'),
					color: theme('colors.bodyColor'),
				},
				'.bodyLink': {
					borderBottomWidth: '1px',
					borderColor: colors.zinc[700],
					// transition: 'all 0.3s ease',

				},
				'.bodyLink:hover': {
					borderBottomWidth: '1px',
					borderColor: colors.zinc[300],
					'background-color': colors.lime[400],
					color: colors.black,
				},

				'.menuText': {
					fontFamily: theme('fontFamily.urlFont'),
					color: theme('colors.subColor'),


				},
				'.menuText:hover': {
					'background-color': colors.lime[400],
					color: colors.black,
				},

				'.subText': {
					color: theme('colors.subColor'),
					fontSize: theme('fontSize.subFontSize'),
				},
				'.urlText': {
					color: theme('colors.urlColor'),
					fontSize: theme('fontSize.urlFontSize'),
					fontFamily: theme('fontFamily.urlFont'),
					fontWeight: '300',
				},
				'.sectionTitle': {
					fontFamily: theme('fontFamily.urlFont'),
					fontSize: theme('fontSize.bodyFontSize'),
					fontWeight: theme('fontWeight.light'),
					color: theme('colors.sectionTitle'),
				},

			})
		}
	]
};
