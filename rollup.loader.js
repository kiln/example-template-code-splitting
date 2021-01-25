// rollup's SystemJS output format only seems to work well  when imported as
// an external script. As such, loader.js is a pretty small wrapper that loads
// up the rest of the template code and passes on calls to `template.draw()`
// and `template.update`. It's treated as the main template.js file.

import replace from "@rollup/plugin-replace";
import fs from "fs";

const systemjs_code = fs.readFileSync(
  require.resolve("systemjs/dist/s.min.js"), "utf8"
);

export default {
  input: "src/loader.js",
  output: {
    banner: systemjs_code,
    format: "iife",
    file: "template.js",
  },
  plugins: [
    replace({
      "process.env.NODE_ENV": process.env.NODE_ENV || "",
      "process.env.BUNDLE_ID": '"loader"'
    })
  ],
};
