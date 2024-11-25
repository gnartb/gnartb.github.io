const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,css}'],
	theme: {
		extend: {
			colors:{
				bodyColor: colors.gray[950],
				subColor: colors.gray[800],
				h1Color: colors.gray[950],
				h2Color: colors.gray[950]
			},
			fontFamily:{
				bodyFont: 'Inter, san-serif',
			},
			fontSize:{
				// apply for general body text
				bodyFontSize: '14px',
				subFontSize: '12px',
				
			},
			
		},
	},
	plugins: [
		function ({addUtilities, theme}) {
			addUtilities({
				'.bodyParagraph': {
					color: colors.bodyColor,
					fontFamily: theme('fontFamily.bodyFont'),
					fontSize: theme('fontSize.bodyFontSize'),
					fontWeight: theme('fontWeight.light')

				}
			})
		}
	]
};
