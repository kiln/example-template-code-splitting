import replace from "@rollup/plugin-replace";

export default {
  input: "./src/index.js",
  output: {
    dir: "static",
    format: "system",
    chunkFileNames: "[name].[hash].js",
    entryFileNames: "[name].js",
  },
  plugins: [
    replace({
      "process.env.NODE_ENV": process.env.NODE_ENV || "",
      "process.env.BUNDLE_ID": '"index"'
    })
  ]
};
