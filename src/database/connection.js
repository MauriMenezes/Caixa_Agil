const { Pool } = require("pg");
const dotenv = require("dotenv");
dotenv.config();
async function databaseConnect() {
  const database = new Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
  });
  database.query("SELECT NOW()", (err, res) => {
    if (err) {
      console.error("Erro ao conectar ao banco de dados:", err);
    } else {
      console.log(
        "Conectado ao banco de dados. Data do servidor:",
        res.rows[0].now
      );
    }
    return database;
  });
}

module.exports = { databaseConnect };
