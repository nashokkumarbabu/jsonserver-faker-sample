const schema = [
  {
    name: "people",
    path: "people",
    objCount : 10,
    schema: {
      id: "{{random.number}}",
      name: "{{company.companyName}} {{company.companySuffix}}",
      address: "{{address.streetAddress}}",
      phone: "{{phone.phoneNumber}}",
      email: "{{internet.email}}",
    },
  },
  {
    name: "person",
    path: "person",
    objCount : 10,
    schema: {
      id: "{{random.number}}",
      name: "{{company.companyName}} {{company.companySuffix}}",
      address: "{{address.streetAddress}}",
      phone: "{{phone.phoneNumber}}",
      email: "{{internet.email}}",
    },
  }
];

module.exports = {schema}