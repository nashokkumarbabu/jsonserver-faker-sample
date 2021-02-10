let jsf = require("json-schema-faker");
jsf.extend("faker", () => require("faker"));
const schema = {
  id: "Workgroup",
  type: "array",
  properties: {
    items: {
      $ref: "Worker",
    },
  },
};

// 1.1 - optionally, you can provide used `refs`
const refs = [
  {
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
  },
  {
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
  },
];

jsf.resolve(schema, refs).then((sample) => {
  
console.log(sample);
  // "voluptatem"
});

