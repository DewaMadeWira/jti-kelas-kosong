/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                orange: '#F9AC19',
                black: '#1F2128',
            },
        },
    },
    plugins: [],
};
