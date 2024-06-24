import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      height: {
        '95PERC': '95%'
      },
      width: {
        '95PERC': '95%'
      },
      maxWidth: {
        'PAGE_MAX': '2520px',
        '70REM': '70rem'
      },
      maxHeight: {
        '90VH': '90vh'
      },
      minHeight: {
        '20R': "20rem"
      }
    },
  },
  daisyui: {
    themes: [
      {
        lightTheme: {
          "primary": "#4f46e5",
          "secondary": "#000000",
          "accent": "#a5b4fc",
          "neutral": "#818cf8",
          "base-100": "#ffffff",
          "info": "#dbeafe",
          "success": "#86efac",
          "warning": "#fde68a",
          "error": "#fca5a5",
        },
        darkTheme: {
          "primary": "#4f46e5",
          "secondary": "#000000",
          "accent": "#a5b4fc",
          "neutral": "#818cf8",
          "base-100": "#1f2830",
          "info": "#dbeafe",
          "success": "#86efac",
          "warning": "#fde68a",
          "error": "#fca5a5",
        }
      },
    ],
  },
  plugins: [require("daisyui")],
}
export default config
