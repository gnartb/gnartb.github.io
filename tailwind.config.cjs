const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,css}'],
	theme: {
		extend: {
			colors: {
				//background
				'dark': {
					background: colors.zinc[900],
					heading: colors.zinc[200],
					body: colors.zinc[300],
					subtle: colors.zinc[500],
					footnote: colors.zinc[500],
					// warning:
					// success:

				},

				'light': {
					background: colors.zinc[50],
					heading: colors.zinc[900],
					body: colors.zinc[800],
					subtle: colors.zinc[500],
					subtlest: colors.zinc[400],
					footnote: colors.zinc[500],
					test: colors.lime[400],
					warning: colors.rose[500],
					// success:
				},

			},

			fontFamily: {
				body: 'Be Vietnam Pro, san-serif',
				heading: 'Suranna',
				nav: 'Inconsolata',
			},

			fontSize: {
				// apply for general body text
				heading: "20px",
				nav: '16px',
				body: '14px',
				subtlest: '13px',
				url: '14px',
			},

			gap: {
				// apply for gap
				pGap: '22.4px',
				linkGap: '4px',
				sectionContentGap: '16px',

				// apply for article
				heading:'28px',
				section:'32px',
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

				'.typo-subtlest': {
					fontFamily: theme('fontFamily.body'),
					fontSize: theme('fontSize.subtlest'),
					fontWeight: theme('fontWeight.light'),
					lineHeight: '22.4px',
				},

				'.typo-tooltip': {
					fontFamily: theme('fontFamily.body'),
					fontSize: theme('fontSize.subtlest'),
					fontWeight: theme('fontWeight.light'),
					lineHeight: '18.6px',
					textAlign: 'center',
				},


				'.typo-link': {
					borderBottomWidth: '1px',
					borderColor: colors.zinc[400],
					// transition: 'all 0.3s ease',
				},

				'.typo-link:hover': {
					borderBottomWidth: '1px',
					borderColor: colors.zinc[500],
					'background-color': colors.lime[400],
				},

				'.typo-red': {
					// color: theme('colors.light.warning'),
					fontStyle: 'italic',
				},


				'.typo-nav': {
					fontFamily: theme('fontFamily.nav'),
					fontSize: theme('fontSize.nav'),
					fontWeight: theme('fontWeight.normal'),
					color: theme('colors.light.body'),

				},

				'.typo-nav:hover': {
					'background-color': colors.lime[400],
				},

				




				// '.subParagraph': {
				// 	fontFamily: theme('fontFamily.bodyFont'),
				// 	fontSize: theme('fontSize.subFontSize'),
				// 	fontWeight: theme('fontWeight.light'),
				// 	lineHeight: '22.4px',
				// },
				// '.bodyBold': {
				// 	fontFamily: theme('fontFamily.bodyFont'),
				// 	fontSize: theme('fontSize.bodyFontSize'),
				// 	fontWeight: theme('fontWeight.bold'),
				// },





				// '.menuText': {
				// 	fontFamily: theme('fontFamily.urlFont'),
				// 	color: theme('colors.subColor'),




				// '.subText': {
				// 	color: theme('colors.subColor'),
				// 	fontSize: theme('fontSize.subFontSize'),
				// },

				// '.darkSubText': {
				// 	color: theme('colors.dsubColor'),
				// 	fontSize: theme('fontSize.subFontSize'),
				// },
				// '.urlText': {
				// 	color: theme('colors.urlColor'),
				// 	fontSize: theme('fontSize.urlFontSize'),
				// 	fontFamily: theme('fontFamily.urlFont'),
				// 	fontWeight: '300',
				// },
				// '.sectionTitle': {
				// 	fontFamily: theme('fontFamily.urlFont'),
				// 	fontSize: theme('fontSize.bodyFontSize'),
				// 	fontWeight: theme('fontWeight.light'),
				// 	color: theme('colors.sectionTitle'),
				// },




				// for article

				// '.articleHead': {
				// 	fontFamily: theme('fontFamily.articleHead'),
				// 	fontSize: theme('fontSize.articleHead'),
				// 	fontWeight: theme('fontWeight.bold'),
				// 	color: theme('colors.dbodyColor'),
				// 	lineHeight: '22.4px',
				// },
				// '.articleBodyParagraph': {
				// 	fontFamily: theme('fontFamily.articleBodyFont'),
				// 	fontSize: theme('fontSize.articleBodyFontsize'),
				// 	fontWeight: theme('fontWeight.light'),
				// 	color: theme('colors.dparagraphColor'),
				// 	lineHeight: '20px',
				// },

				// '.articleSubParagraph': {
				// 	fontFamily: theme('fontFamily.articleBodyFont'),
				// 	fontSize: theme('fontSize.articleSubFontSize'),
				// 	fontWeight: theme('fontWeight.light'),
				// 	color: theme('colors.dColor'),
				// 	lineHeight: '18px',
				// },

				// '.aLabel': {
				// 	fontFamily: theme('fontFamily.articleBodyFont'),
				// 	fontSize: theme('fontSize.articleSubFontSize'),
				// 	fontWeight: theme('fontWeight.light'),
				// 	color: theme('colors.dsubColor'),
				// 	lineHeight: '22.4px',
				// },

				// '.articleH2': {
				// 	fontFamily: theme('fontFamily.articleBodyFont'),
				// 	fontSize: theme('fontSize.h2'),
				// 	fontWeight: theme('fontWeight.light'),
				// 	color: theme('colors.dbodyColor'),
				// 	lineHeight: '22.4px',
				// 	textAlign: 'center',

				// },

				// '.articleH5': {
				// 	fontFamily: theme('fontFamily.articleBodyFont'),
				// 	fontSize: theme('fontSize.h5'),
				// 	fontWeight: theme('fontWeight.bold'),
				// 	color: theme('colors.dbodyColor'),
				// 	lineHeight: '22.4px',
				// },

				// // use for tooltip text below image
				// '.articleH6': {
				// 	fontFamily: theme('fontFamily.articleBodyFont'),
				// 	fontSize: theme('fontSize.h6'),
				// 	fontWeight: theme('fontWeight.light'),
				// 	color: theme('colors.dsubColor'),
				// 	fontStyle: 'italic',
				// 	textAlign: 'center',
				// },

				// '.articleH7': {
				// 	fontFamily: theme('fontFamily.articleBodyFont'),
				// 	fontSize: theme('fontSize.h7'),
				// 	fontWeight: theme('fontWeight.light'),
				// 	color: theme('colors.dsubColor'),
				// },

				// '.articleSemibold': {
				// 	fontWeight: theme('fontWeight.semibold'),
				// 	color: theme('colors.dbodyColor'),
				// },

				// '.issue': {
				// 	fontWeight: theme('fontWeight.light'),
				// 	fontStyle: 'italic',
				// 	color: theme('colors.issue'),
				// },
				// '.solution': {
				// 	fontWeight: theme('fontWeight.semibold'),
				// 	// fontStyle: 'italic',
				// 	color: theme('colors.dbodyColor'),
				// },





			})
		}
	]
};
