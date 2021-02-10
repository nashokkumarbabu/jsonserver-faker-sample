const schema = {
  id: "Workgroup",
  type: "array",
  minItems: 10,
  maxItems: 15,
  //properties: {
  items: {
    $ref: "file:Worker",
  },
  //},
};
module.exports = {schema}