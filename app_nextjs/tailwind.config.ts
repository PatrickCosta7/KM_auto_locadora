import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A2463',
        secondary: '#FF7A00',
        accent: '#3B5BA9',
        dark: '#2C2C2C',
        light: '#F2F2F2',
        whatsapp: '#25d366',
      },
      fontFamily: {
        'oxygen': ['Oxygen Regular', 'sans-serif'],
        'dm-serif': ['DM Serif Text Regular', 'serif'],
      },
      spacing: {
        '15': '3.75rem', // 60px for WhatsApp button
      },
    },
  },
  plugins: [],
}

export default config
