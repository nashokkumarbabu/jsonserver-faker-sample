const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults()
server.use(middlewares)
server.use
server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
    "/projects/components/:id": "/components/:id",
    "/wg" : "/workgroup"
  })
);
server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running");
});
