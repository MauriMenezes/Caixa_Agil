const Fastify = require('fastify');

const app = Fastify({ logger: false });


app.get('/', (request, response) => {
  return { hello: 'world' }
})

app.listen({ port: 3000 }, (error, address) => {
  if (error) {
    console.log(error)
    process.exit(1)
  }
  console.log('serv is running', address)
})