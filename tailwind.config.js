/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'midnight': '#100e17',
            },
            width: {
                '128': '32rem',
                '160': '40rem',
                '200': '50rem'
            }
        }
    },
    plugins: [],
}

