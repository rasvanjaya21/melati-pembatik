const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primary: "#D8F1FF",
				secondary: "#FFF4CC",
				tertiary: "#FFE4F2"
			},
		},
	},
	plugins: [
		plugin(function ({ addUtilities }) {
			addUtilities({
			
				".no-scrollbar": {
					"-ms-overflow-style": "none",
					"scrollbar-width": "none",
				},

				".no-scrollbar::-webkit-scrollbar": {
					display: "none",
				},

				".shadow-flat": {
					"box-shadow": "0px 0px 2px rgb(217,217,217)"
				}

			})
		})
	],
}
