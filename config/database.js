const dotenv = require('dotenv').config();
const { DB_DATABASE, DB_DIALECT, DB_HOST, DB_PASS, DB_PORT, DB_USERNAME } = process.env;
console.log(DB_DATABASE + " " + DB_DIALECT + " " + DB_HOST + " " + DB_PASS)

module.exports = {
    host: DB_HOST,
    dialect: DB_DIALECT,
    username: DB_USERNAME,
    port: DB_PORT,
    password: DB_PASS,
    database: DB_DATABASE,
};