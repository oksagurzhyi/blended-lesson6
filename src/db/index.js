const { func } = require("joi");
const { Sequelize } = require("sequelize");

const { DATABASE_PORT, DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD } =
  process.env;

const db = new Sequelize(DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD, {
  dialect: "postgres",
  port: DATABASE_PORT,
});

function connectDB() {
  return db.authenticate();
}

module.exports = { db, connectDB };
