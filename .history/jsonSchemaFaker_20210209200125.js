let jsf = require("json-schema-faker");
jsf.extend("faker", () => require("faker"));
const schema = {
    id: "Worker",
    type: "object",
    properties: {
      skills: {},
      status: {
        type: "string",
        enum: ["available", "working", "dead"],
      },
      profile: {
        $ref: "Profile",
      },
    },
    required: ["skills", "status", "profile"],
    "definitions": {
        "Profile": {
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
        }
    }
  };



jsf.resolve(schema).then((sample) => {
  console.log("resolved");
  // "voluptatem"
});

jsf.generate(schema);
