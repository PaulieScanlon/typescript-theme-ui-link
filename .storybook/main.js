const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: ["@storybook/addon-docs", "@storybook/addon-actions"],
  webpackFinal: async (config) => {
    //TODO Where are node_modules when repo is a yarn workspace and who can they also be excluded?

    // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/];

    // use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
    config.module.rules[0].use[0].loader = require.resolve("babel-loader");

    // use @babel/preset-react for JSX and env (instead of staged presets)
    config.module.rules[0].use[0].options.presets = [
      require.resolve("@babel/preset-react"),
      require.resolve("@babel/preset-env"),
    ];

    config.module.rules[0].use[0].options.plugins = [
      // use @babel/plugin-proposal-class-properties for class arrow functions
      require.resolve("@babel/plugin-proposal-class-properties"),

      // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
      require.resolve("babel-plugin-remove-graphql-queries"),

      // use babel-plugin-react-docgen to ensure PropTables still appear
      require.resolve("babel-plugin-react-docgen"),
    ];

    // Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint
    config.resolve.mainFields = ["browser", "module", "main"];

    // Configure webpack to load ts and tsx files
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve("babel-loader"),
          options: {
            presets: [["react-app", { flow: false, typescript: true }]],
            plugins: [
              // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
              require.resolve("babel-plugin-remove-graphql-queries"),
            ],
          },
        },
        {
          loader: require.resolve("react-docgen-typescript-loader"),
          options: {
            propFilter: (prop) => {
              if (prop.parent == null) {
                return true;
              }
              // Filter out props inherited from extending interface with React.HTMLProps< - element - >
              return (
                prop.parent.fileName.indexOf("node_modules/@types/react") < 0
              );
            },
          },
        },
      ],
    });

    config.resolve.extensions.push(".ts", ".tsx");

    return config;
  },
};
