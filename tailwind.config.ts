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
        minion_pro: ["MINION-PRO-REGULAR"],
        newsreader_light: ["NEWSREADER-LIGHT"],
        roboto: ["ROBOTO-REGULAR"],
        eina: ["EINA-REGULAR"],
        cmbs: ["COMPUTER-MODERN-BRIGHT-SEMIBOLD"],
        alliance1: ["ALLIANCE-N1-BRIGHT"],
        spartan: ["SPARTAN"],
        libre_baskerville: ["LIBRE-BASKERVILLE"],
        libre_baskerville_bold: ["LIBRE-BASKERVILLE-BOLD"],
      },
      colors: {
        primary: colors.black,
        gray: colors.gray,
        "almost-white": "hsl(0, 0%, 98%)",
        "medium-gray": "hsl(0, 0%, 41%)",
        "almost-black": "hsl(0, 0%, 8%)",
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
