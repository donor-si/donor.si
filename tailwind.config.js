module.exports = {
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './src/**/*.html',
      './src/**/*.vue',
      './src/styles/**/*.css',
      './node_modules/flowbite/**/*.js'
    ],
  },
  theme: {
    extend: {},
  },
  corePlugins: {
    aspectRatio: false,
  },
  future: {
    // Doc: https://tailwindcss.com/docs/upcoming-changes#remove-deprecated-gap-utilities
    removeDeprecatedGapUtilities: true,
    // https://tailwindcss.com/docs/upcoming-changes#purge-layers-by-default
    purgeLayersByDefault: true,
  },
  variants: {},
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
