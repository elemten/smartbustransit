import type { Config } from "tailwindcss";
const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [nextui(
    {
      themes: {
        dark: {
          extend: "dark",
          colors: {
            background: "#1A1920",
            white:"#fff",
            primary: {
              DEFAULT: "#0ab9db",
                

  50: '#d9f7ff',
  100: '#ade6ff',
  200: '#7fdafb',
  300: '#50d1f8',
  400: '#24cbf5',
  500: '#0ab9db',
  600: '#0085ab',
  700: '#00577c',
  800: '#00304c',
  900: '#00101c',

            },
            secondary: {
              DEFAULT: "#626d84",
              

              
                50: '#e8f0ff',
                100: '#cfd6e3',
                200: '#b5bccc',
                300: '#97a2b4',
                400: '#7b899d',
                500: '#626d84',
                600: '#4b5368',
                700: '#343a4b',
                800: '#1e2030',
                900: '#070718',
              
            },
            focus: "#F182F6",
            content1: "#1A1920",
            content2: "#383645",
            darkLight: "transparent"
          },
          layout: {
            disabledOpacity: "0.3",
            radius: {
              small: "8px",
              medium: "12px",
              large: "16px"
            }
          }
        }
      }
    }
  )],
};
export default config;
