const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,css}'],
	theme: {
		extend: {
			colors: {
				bgColor: colors.zinc[950],
				bodyColor: colors.zinc[200],
				subColor: colors.slate[300],
				sectionTitle: colors.slate[500],
				urlColor: colors.slate[400],
				// article
				aBgColor: colors.zinc[50],
				dbodyColor: colors.zinc[900],
				dparagraphColor: colors.zinc[700],
				dsubColor: colors.slate[400],
			},
			fontFamily: {
				bodyFont: 'Be Vietnam Pro, san-serif',
				headLineFont: 'Suranna',
				articleHeadlineFont: 'Geist, san-serif',
				urlFont: 'Libre Franklin',

				//for article
				articleBodyFont: 'Inter, san-serif',
				articleHeadlineFont: 'Geist, san-serif',
			},
			fontSize: {
				// apply for general body text
				bodyFontSize: '14px',
				subFontSize: '12px',
				urlFontSize: '14px',
				// use for coase studies
				articleHead: '24px',
				articleBodyFontsize: '14px',
				articleSubFontSize: '12px',
				h1: '24px',
				h2: '22px',
				h5: '16px',
				h6: '14px',
				h7: '12px'

			},
			gap: {
				// apply for gap
				pGap: '22.4px',
				linkGap: '4px',
				sectionContentGap: '16px',

				// apply for article
				aSectionContentGap: '12px',
				paragraphGap: '14px',

			}
		}
	},
	plugins: [
		function ({ addUtilities, theme }) {
			addUtilities({
				'.bodyParagraph': {
					fontFamily: theme('fontFamily.bodyFont'),
					fontSize: theme('fontSize.bodyFontSize'),
					fontWeight: theme('fontWeight.extralight'),
					color: theme('colors.bodyColor'),
					lineHeight: '22.4px',
				},
				'.subParagraph': {
					fontFamily: theme('fontFamily.bodyFont'),
					fontSize: theme('fontSize.subFontSize'),
					fontWeight: theme('fontWeight.light'),
					color: theme('colors.subColor'),
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

				'.darkSubText': {
					color: theme('colors.dsubColor'),
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



				// for article

				'.articleHead': {
					fontFamily: theme('fontFamily.articleHead'),
					fontSize: theme('fontSize.articleHead'),
					fontWeight: theme('fontWeight.bold'),
					color: theme('colors.dbodyColor'),
					lineHeight: '22.4px',
				},
				'.articleBodyParagraph': {
					fontFamily: theme('fontFamily.articleBodyFont'),
					fontSize: theme('fontSize.articleBodyFontsize'),
					fontWeight: theme('fontWeight.light'),
					color: theme('colors.dparagraphColor'),
					lineHeight: '20px',
				},

				'.articleSubParagraph': {
					fontFamily: theme('fontFamily.articleBodyFont'),
					fontSize: theme('fontSize.articleSubFontSize'),
					fontWeight: theme('fontWeight.light'),
					color: theme('colors.dColor'),
					lineHeight: '18px',
				},

				'.aLabel': {
					fontFamily: theme('fontFamily.articleBodyFont'),
					fontSize: theme('fontSize.articleSubFontSize'),
					fontWeight: theme('fontWeight.light'),
					color: theme('colors.dsubColor'),
					lineHeight: '22.4px',
				},

				'.articleH2': {
					fontFamily: theme('fontFamily.articleBodyFont'),
					fontSize: theme('fontSize.h2'),
					fontWeight: theme('fontWeight.light'),
					color: theme('colors.dbodyColor'),
					lineHeight: '22.4px',
					textAlign: 'center',
				},

				'.articleH5': {
					fontFamily: theme('fontFamily.articleBodyFont'),
					fontSize: theme('fontSize.h5'),
					fontWeight: theme('fontWeight.bold'),
					color: theme('colors.dbodyColor'),
					lineHeight: '22.4px',
				},
				
				// use for tooltip text below image
				'.articleH6': {
					fontFamily: theme('fontFamily.articleBodyFont'),
					fontSize: theme('fontSize.h6'),
					fontWeight: theme('fontWeight.light'),
					color: theme('colors.dsubColor'),
					fontStyle: 'italic',
					textAlign: 'center',
				},

				'.articleH7': {
					fontFamily: theme('fontFamily.articleBodyFont'),
					fontSize: theme('fontSize.h7'),
					fontWeight: theme('fontWeight.light'),
					color: theme('colors.dsubColor'),
				},


			})
		}
	]
};
