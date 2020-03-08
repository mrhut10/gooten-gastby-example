// See https://tailwindcss.com/docs/configuration for details
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
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/custom-forms")]
};
