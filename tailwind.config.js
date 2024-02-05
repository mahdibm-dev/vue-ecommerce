// tailwind.config.js
import typography from '@tailwindcss/typography'
import forms from '@tailwindcss/forms'
import aspectRatio from '@tailwindcss/aspect-ratio'
import theme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', ...theme.fontFamily.sans]
      },
      colors: {
        primary: '#466efe',
        secondary: '#7830f7',
        'secondary-tint': '#F9F9F9',
        'dark-shade': '#949494',
        dark: '#0C0C0C',
        'dark-tint': '#F9F9F9',
        light: '#FFFFFF',
        'light-shade': '#F2F2F2',
        stroke: '#949494',
        gray: '#949494',
        danger: '#F53838',
        warning: '#F3C630',
        success: '#007543'
      },
      boxShadow: {
        't-sm': '0 -1px 2px 0 rgb(0 0 0 / 0.05)',
        t: '0 -1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        't-md': '0 -4px 6px 1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        center: '0 0 6px rgb(0 0 0 / 0.15)',
        'center-sm': '0 0 3px rgb(0 0 0 / 0.15)',
        'center-md': '0 0 12px rgb(0 0 0 / 0.15)'
      }
    }
  },
  plugins: [typography, forms, aspectRatio]
}
