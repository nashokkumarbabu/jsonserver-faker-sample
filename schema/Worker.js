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
        $ref: "file:Profile",
      },
    },
    required: ["skills", "status", "profile"],
  }

  module.exports = {schema}