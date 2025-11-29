import type { Config } from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#22C55E',
                'primary-hover': '#16A34A',
                accent: '#FBBF24',
            },
        },
    },
    plugins: [],
} satisfies Config;
