import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
      'orangeborder':'linear-gradient(180deg, rgba(255,108,53,1) 0%, rgba(255,73,44,1) 91%);',
      }
    },
    backgroundImage: {
      'mainground': 'linear-gradient(291deg, rgba(185,190,203,1) 0%, rgba(238,239,241,1) 91%)',
      'mainorange': 'linear-gradient(180deg, rgba(255,108,53,1) 0%, rgba(255,73,44,1) 91%);',
    },
    fontFamily: {
      'Montserrat': ["Montserrat", 'sans-serif'],
      'Inter': ["Inter", 'sans-serif'],
      'Josefin': ["Josefin Sans", 'sans-serif']
    }
  },
  plugins: [],
};
export default config;
