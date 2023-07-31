/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontSize: {
				xss: '14px',
				base: '15px',
				sx: '16px',
				medium: '22px',
				large: '60px',
			},
			colors: {
				primary: '#542AAD',
				primaryGray: '#F9F9F9',
				primaryGreen: '#299B3C',
				primaryGreenDarker: '#258c36',
				primarySky: '#59AAF4',
				primaryOrange: '#F08700',
				primaryOrangeDarker: '#cd7300',
			},
			fontFamily: {
				primary: ['Red Hat Display', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
