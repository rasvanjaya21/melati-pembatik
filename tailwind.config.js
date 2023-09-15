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
				primary: "#62B2F3"
			},
		},
	},
	plugins: [
		plugin(function ({ addUtilities }) {
			addUtilities({
			
				/* Hide scrollbar for IE, Edge and Firefox */
				".no-scrollbar": {
					"-ms-overflow-style": "none",
					/* IE and Edge */
					"scrollbar-width": "none",
					/* Firefox */
				},

				/* Hide scrollbar for Chrome, Safari and Opera */
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