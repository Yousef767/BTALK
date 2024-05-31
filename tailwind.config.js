/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary1: "#222325",
        primary2: "#585158",
        primary3: "#EA9967",
        primary4: "#EAD9C6",
        primary5: "#EDE7E0",
        primary6: "#EBC1A7",
        secondary1: "#212121",
        secondary2: "#333333",
        secondary3: "#979797",
        secondary4: "#AFAFAF",
        secondary5: "#D3D3D9",
        secondary6: "#F7F7F7",
        secondary7: "#F7F7F7",
        secondary8: "#FCFCFC",
        red1: "#F46C6C",
        red2: "#FDF4F4",
        green: "#20BF55",
      },
      fontFamily: {
        poppins: '"Poppins", sans-serif',
      },
    },
  },
  plugins: [],
};
