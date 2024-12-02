const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,css}'],
	theme: {
		extend: {
			colors:{
				bgColor: colors.zinc[900],
				bodyColor: colors.slate[400],
				subColor: colors.slate[600],
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
	plugins: [
		function ({addUtilities, theme}) {
			addUtilities({
				'.bodyParagraph': {
					fontFamily: theme('fontFamily.bodyFont'),
					fontSize: theme('fontSize.bodyFontSize'),
					fontWeight: theme('fontWeight.light'),
					color: theme('colors.bodyColor'),
				},
				'.bodyLink':{
					borderBottomWidth: '1px',
					borderColor: colors.zinc[700],

				},
				'.bodyLink:hover':{
					borderBottomWidth: '1px',
					borderColor: colors.zinc[300],

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
			
			})
		}
	]
};
