/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#050505', // Dark futuristic space
                primaryGlow: '#00ffff', // Primary Glow
                accent: '#7c3aed', // Purple accent
                softText: '#e5e7eb', // Soft lighting text
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'], // Modern clean font
            },
        },
    },
    plugins: [],
}
