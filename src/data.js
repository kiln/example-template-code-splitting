const data = {};

// This is a little workaround so that you can still import `data` as
// a regular module from the main template code, as you would in an idiomatic
// Flourish template.

/** @type {data} */
const exported = process.env.BUNDLE_ID === "loader"
  ? data
  : window.template.data;

export { exported as data };
