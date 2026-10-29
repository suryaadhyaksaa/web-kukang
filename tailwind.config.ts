/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                kukang: {
                    dark: '#0B0C10',
                    card: '#12131A',
                    maroon: '#8B0000',
                    red: '#C01818',
                    gold: '#D4AF37',
                    goldBright: '#FACC15',
                    orbitron: ["var(--font-orbitron)", "sans-serif"],
                    sans: ["var(--font-jakarta)", "sans-serif"],
                }
            }
        },
    },
    plugins: [],
}