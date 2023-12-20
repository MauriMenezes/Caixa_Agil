const Fastify = require("fastify");

const app = Fastify({ logger: false });

app.get("/", (request, response) => {
  return { hello: "world" };
});

module.exports = { app };
