//? https://www.youtube.com/watch?v=3_GEGIYpFOw&ab_channel=DevPandaren
const path = require("path");
const { alias } = require("react-app-rewire-alias");

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  alias({
    "@": path.resolve(__dirname, "src"),
    "@Components": path.resolve(__dirname, "src/js/Components"),
    "@Containers": path.resolve(__dirname, "src/js/Containers"),
    "@helperFunctions": path.resolve(__dirname, "src/js/helperFunctions"),
    "@hooks": path.resolve(__dirname, "src/js/hooks"),
    "@images": path.resolve(__dirname, "src/assets/images"),
    "@icons": path.resolve(__dirname, "src/assets/icons"),
    "@styles": path.resolve(__dirname, "src/styles"),
    "@reducers": path.resolve(__dirname, "src/js/redux/reducers"),
    "@store": path.resolve(__dirname, "src/js/redux/store"),
  })(config);

  return config;
};
