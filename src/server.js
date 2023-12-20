const { app } = require("./index");
const { databaseConnect } = require("./database/connection");
async function startServer(app) {
  try {
    await databaseConnect().then(() => {
      app.listen({ port: 3333 }, (error, address) => {
        if (error) {
          console.log(error);
          process.exit(1);
        }
        console.log("server is running", address);
      });
    });
  } catch (error) {
    console.log("Error at database connect:", error);
    process.exit(1);
  }
}

startServer(app);
