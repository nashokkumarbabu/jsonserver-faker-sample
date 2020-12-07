module.exports = function(){
   
    let fakerSchema = require("./fakeSchema.js")

    var faker = require("faker");
    var _ = require("lodash");
    


   let fakerObj = fakerSchema.schema.reduce(function(obj, entityObj) {
        obj[entityObj.path] = Array.from({ length: entityObj.objCount }).map(() => Object.keys(entityObj.schema).reduce((entity, key) => {
            entity[key] = faker.fake(entityObj.schema[key])
            return entity
          }, {}))
        return obj;
    }, {});

    return fakerObj;
   
}
