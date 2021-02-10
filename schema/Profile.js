const schema = {
    id: "Profile",
    type: "object",
    properties: {
      firstName: {
        type: "string",
        faker: "name.firstName",
      },
      lastName: {
        type: "string",
        faker: "name.lastName",
      },
      age: {
        type: "integer",
        minimum: 18,
        maximum: 60,
      },
    },
    required: ["firstName", "lastName", "age"],
  };
  module.exports = {schema}