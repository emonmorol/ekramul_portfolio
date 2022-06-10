module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#212428",
          secondary: "#0097e6",
          accent: "#c4cfde",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
    ],
  },
};
