const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,css}'],
	theme: {
		extend: {
			colors:{
				bgColor: colors.zinc[900],
				bodyColor: colors.slate[300],
				subColor: colors.slate[400],
				sectionTitle: colors.slate[600],
				h1Color: colors.slate[900],
				h2Color: colors.slate[900],
				urlColor: colors.slate[600],
			},
			fontFamily:{
				bodyFont: 'Be Vietnam Pro, san-serif',
				headLineFont: 'Suranna',
				urlFont: 'Space Grotesk',
			},
			fontSize:{
				// apply for general body text
				bodyFontSize: '14px',
				subFontSize: '12px',
				urlFontSize: '14px',
				
			}
			}
		},
	darkmode: 'class',
	plugins: [
		function ({addUtilities, theme}) {
			addUtilities({
				'.bodyParagraph': {
					fontFamily: theme('fontFamily.bodyFont'),
					fontSize: theme('fontSize.bodyFontSize'),
					fontWeight: theme('fontWeight.extralight'),
					color: theme('colors.bodyColor'),
				},
				'.bodyLink':{
					borderBottomWidth: '1px',
					borderColor: colors.zinc[700],
					// transition: 'all 0.3s ease',

				},
				'.bodyLink:hover':{
					borderBottomWidth: '1px',
					borderColor: colors.zinc[300],
					'background-color': colors.lime[400],
					color: colors.black,
				},

				'.menuText':{
					fontFamily: theme('fontFamily.urlFont'),
					color: theme('colors.subColor'),


				},
				'.menuText:hover':{
					'background-color': colors.lime[400],
					color: colors.black,
				},

				'.subText':{
					color: theme('colors.subColor'),
					fontSize: theme('fontSize.subFontSize'),
				},
				'.urlText':{
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
