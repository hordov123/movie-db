/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{html,js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
			colors: {
				background: '#000',
				foreground: '#101010',
				primary: '#7B68EEFF',
				secondary: '#6D28D9',
				accent: '#BE185D',
			}
		},
	},
	plugins: [],
	rules: [
		{
			test: /\.scss$/,
			use: [
				'style-loader',
				'css-loader',
				'sass-loader',
			],
		},
	],
};
