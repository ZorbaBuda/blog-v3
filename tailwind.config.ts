// @ts-check
import type { Config } from "tailwindcss";
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors')

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    './lib/**/*.tsx',
  ],
  darkMode: 'class',
   important: true,
  theme: {
    // screens: {
    //   'xxs': '540px', // min-width
    // },
    extend: {
      fontFamily: {
        lora: ["LORA-REGULAR"],
        montserrat: ["MONTSERRAT-REGULAR"],
        roboto: ["ROBOTO-REGULAR"],
        cmbs: ["COMPUTER-MODERN-BRIGHT-SEMIBOLD"],
        open_sans:["OPEN_SANS"],
        eb_garamond:["EB_GARAMOND"],
        crimson_text:["CRIMSON_TEXT"],
        gloock:["GLOOCK"],
        spectral_regular:["SPECTRAL-REGULAR"],
        pt_serif_regular:["PT-SERIF"],
        recoleta:['RECOLETA'],
        recoleta_bold:['RECOLETA-BOLD'],
        minion:['MINION']
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'primary': '#FB5148',
        "secondary": '#e65100',
        gray: colors.gray,
      
      },
      
      
      // typography: ({ theme }) => ({
      //   DEFAULT: {
      //     css: {
      //       a: {
             
      //         '&:hover': {
      //           color: `${theme('colors.primary.600')}`,
      //         },
             
      //       },
      //       'h1,h2': {
      //         fontWeight: '700',
      //         letterSpacing: theme('letterSpacing.tight'),
      //       },
      //       h3: {
      //         fontWeight: '600',
      //       },
          
      //     },
      //   },
      //   invert: {
      //     css: {
      //       a: {
             
      //         '&:hover': {
      //           color: `${theme('colors.primary.400')}`,
      //         },
             
      //       },
      //       'h1,h2,h3,h4,h5,h6': {
      //         color: theme('colors.gray.100'),
      //       },
      //       p: {
      //         color: theme('colors.primary.600')
      //       }
      //     },
      //   },
      // }),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  
           ],
};
export default config;
