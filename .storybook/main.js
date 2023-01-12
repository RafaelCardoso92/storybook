module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    '@storybook/preset-scss',
    '@storybook/addon-a11y',
    '@storybook/addon-coverage',
  ],
  features: {
    interactionsDebugger: true, 
  },


  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },

}

// npx chromatic --project-token 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