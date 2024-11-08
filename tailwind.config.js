module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    
    extend: {
      colors: {
        black: { 900: "var(--black_900)" },
        cyan: { "300_7f": "var(--cyan_300_7f)", a400_33: "var(--cyan_a400_33)" },
        deep_purple: { "600_33": "var(--deep_purple_600_33)" },
        gray: {
          500: "var(--gray_500)",
          800: "var(--gray_800)",
          900: "var(--gray_900)",
          "500_01": "var(--gray_500_01)",
        },
        indigo: { 50: "var(--indigo_50)", 600: "var(--indigo_600)" },
        light_blue: { a700: "var(--light_blue_a700)" },
        white: { a700: "var(--white_a700)", a700_19: "var(--white_a700_19)" },
      },
      screens: {
        "2xl": { max: "1535px" },
        xl: { max: "1279px" },
        lg: { max: "1023px" },
        navsize: { max: "1180px" },
        tab: { max: "991px" },
        mob: { max: "768px" },
      },
      boxShadow: {},
      fontFamily: { inter: "Inter" },
      backgroundImage: { gradient: "radial-gradient(180deg, #07f6f933,#5d40a433)" },
      textShadow: { ts: "-1px 4px 18px #44d4d27f" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
