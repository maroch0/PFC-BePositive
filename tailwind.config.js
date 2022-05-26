module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cosmicLatte: "#FFF8E8",
        blush: "#C87A88",
        amaranthPurple: "#A93251",
        ruby: "#A22346",
      },
      width: {
        "1/10": "12%",
      },
      borderRadius: {
        fifty: "50%",
      },
    },
  },
  plugins: [],
};
