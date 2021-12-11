module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        hacked: ["Hacked KerX"],
        sans: ["Open Sans"],
        poppins: ["Poppins"],
      },
      colors: {
        "green-hack": "#00fa00",
        "gray-hack": {
          700: "#2c2c2c",
          800: "#1e1e1e",
          900: "#141414",
        },
      },
    },
  },
  plugins: [],
};
