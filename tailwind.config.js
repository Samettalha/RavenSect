/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"], // Karanlık modu burada etkinleştirin
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: [
                    'Spartan',
                    'sans-serif'
                ]
            },
            colors: {
                bloodRed: '#9B0000',
                darkGray: '#0A0A0A',
                eerieBlack: '#121212',
                ghostWhite: '#F8F8FF',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))'
                }
            },
            animation: {
                flicker: 'flicker 5.5s infinite',
                glow: 'glow 2s infinite'
            },
            keyframes: {
                flicker: {
                    '0%': {
                        opacity: 0.9
                    },
                    '50%': {
                        opacity: 0.5
                    },
                    '100%': {
                        opacity: 0.9
                    }
                },
                glow: {
                    '0%': {
                        textShadow: '0 0 5px #ff0000, 0 0 10px #ff0000, 0 0 15px #ff0000'
                    },
                    '50%': {
                        textShadow: '0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 15px #ffffff'
                    },
                    '100%': {
                        textShadow: '0 0 5px #ff0000, 0 0 10px #ff0000, 0 0 15px #ff0000'
                    }
                }
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            }
        }
    },
    plugins: [require("tailwindcss-animate")],
};
