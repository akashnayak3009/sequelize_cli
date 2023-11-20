const Sequelize = require('sequelize');
require('dotenv').config();

const { DB, USER, PASS, DIALECT, MYSQL_PORT, MYSQL_HOST } = process.env;

// // Ensure all required environment variables are available
// if (!DB || !USER || !PASS || !DIALECT || !MYSQL_PORT || !MYSQL_HOST) {
//     console.error("Missing required environment variables");
//     process.exit(1);
// }

const sequelize = new Sequelize(process.env.DB, process.env.USER, process.env.PASS, {
    dialect: process.env.DIALECT, // Specify the dialect explicitly
    port: process.env.MYSQL_PORT,
    host: process.env.HOST,
    logging: false, // Disable logging
});

// Test the database connection
async function testConnection(){
    try{
        await sequelize.authenticate();
        console.log("connection to Database successfully")
    }catch(error){
        console.log("Database connection failed",error);
    }
}
testConnection();
module.exports= sequelize;