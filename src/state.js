const state = {
  hello: "world"
};

// This is a little workaround so that you can still import `state` as
// a regular module from the main template code, as you would in an idiomatic
// Flourish template.

/** @type {state} */
const exported = process.env.BUNDLE_ID === "loader"
  ? state
  : window.template.state;

export { exported as state };
