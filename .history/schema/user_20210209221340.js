export schema = {
    id: "Workgroup",
    type: "array",
    minItems: 10,
    maxItems: 15,
    //properties: {
      items: {
        $ref: "Worker",
      },
    //},
  };

export const refs = [
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