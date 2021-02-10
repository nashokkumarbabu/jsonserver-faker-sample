const schema = [
  {
    name: "component",
    path: "component",
    objCount : 10,
    schema: {
      id: "{{random.uuid}}",
      allowedConnects: "",
      address: "{{address.streetAddress}}",
      phone: "{{phone.phoneNumber}}",
      email: "{{internet.email}}",
    },
  }
];

module.exports = {schema}