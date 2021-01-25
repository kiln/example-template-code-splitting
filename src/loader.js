import { state } from "./state";
import { data } from "./data";

var has_called_draw = false;
var update = wait(function (mod) {
  if (!has_called_draw) {
    has_called_draw = true;
    mod.draw(window.template);
    mod.update(window.template);
  } else {
    mod.update(window.template);
  }
});

var mod_index;
function wait (fn) {
  var mod_importing = false;

  return function () {
    if (mod_index) return fn(mod_index);
    if (mod_importing) return;
    mod_importing = true;

    System.import("./" + Flourish.static_prefix + "/index.js").then(function (mod) {
      fn(mod_index = mod);
    }).catch(function (err) {
      throw err;
    });
  }
}

window.template = {
  update: update,
  draw: update,
  state: state,
  data: data,
};
