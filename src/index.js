import { state } from "./state";
import { data } from "./data";

export function draw () {
  console.log("template.draw!");

  import("./dynamic").then((dynamic) => {
    console.log(dynamic.default());
  });
}

export function update () {
  console.log("template.update!");
}
