import jsf from 'json-schema-faker';


const syncValue = jsf.generate(schema, refs);
jsf.extend('faker', () => require('faker'));