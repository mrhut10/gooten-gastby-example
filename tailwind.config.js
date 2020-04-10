// See https://tailwindcss.com/docs/configuration for details
const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    rotate: {
      "-5": "-5deg",
      "-2": "-2deg",
      "5": "5deg",
      "2": "2deg",
      ...defaultTheme.rotate
    }
  },
  variants: {
    margin: ["responsive", "first"],
    rotate: ['responsive', 'hover', 'even'],
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        ".line-clamp": {
          "-webkit-line-clamp": "2",
          display: "-webkit-box",
          "-webkit-box-orient": "vertical",
          overflow: "hidden"
        }
      };
      addUtilities(newUtilities);
    }),
    // https://github.com/tailwindcss/custom-forms
    require("@tailwindcss/custom-forms")
  ]
};
