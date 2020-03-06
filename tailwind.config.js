// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  theme: {
    rotate: {
      '-180': '-180deg',
      '-90': '-90deg',
      '-45': '-45deg',
      '-5': '-5deg',
      '0': '0',
      '2': '2deg',
      '5': '5deg',
      '10': '10deg',
      '45': '45deg',
      '90': '90deg',
      '135': '135deg',
      '180': '180deg',
      '270': '270deg',
    }
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/custom-forms")]
};
