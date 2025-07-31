/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'roboto': ['Roboto', 'sans-serif'],
            },
            colors: {
                'primary': '#5E3BEE',
                'secondary': '#006B6A',
                'accent': '#E62872',
                'dark': '#282938',
                'darker': '#1C1E53',
                'light': '#F5FCFF',
                'lighter': '#ECFFFD',
            }
        }
    },
    plugins: [],
}; 