/** @type {import('tailwindcss').Config} */
module.exports = {
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
      screens: {
        'xxl': '1350px',
        'xl': '1280px',
        'lg': '1024px',
        'md': '768px',
        'sm': '640px',
        'ssm': '420px'
      },
      colors: {
          'Primary600':'#7F56D9',
          'Primary700':'#6941C6',
          'ButtonColor':'#27779B',  
          'NormalWhite':'#FFFFFF',
          'Gray50':'#F9FAFB',
          'Gray100':'#F2F4F7',
          'Gray200':'#EAECF0',
          'Gray300':'#667085',
          'Gray500':'#667085',
          'Gray600':'#475467',
          'Gray700':'#344054',
          'Gray900':'#101828',
          'Warning50': '#FFFAEB',
          'Warning700':'#B54708',
      },
      // fontFamily: {
      //   montserrat: ['var(--font-montserrat)'],
      //   neucha: ['var(--font-neucha)'],
      // },
    },
  },
  plugins: [],
}
