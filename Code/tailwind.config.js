/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                noto: "Noto Sans Mono",
            },

            keyframes: {
                scrollText: {
                    "0%": { transform: "translateX(100%)" },
                    "100%": { transform: "translateX(-100%)" },
                },
            },
            animation: {
                scroll_text: "scrollText 30s linear infinite",
            },
            backgroundImage: {
                help: "url('https://simmifoundation.org/home/images/help-bg.png')",
            },
        },
    },
    plugins: [],
};
