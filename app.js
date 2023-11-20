const express = require('express');
const sequelize = require("./database/database.js")

require('dotenv').config

const app = express();
app.use(express());

const port = process.env.PORT || 6000;

sequelize.sync().then(() => {
    console.log("All Models were synchronized successfully")
}).catch(error => {
    console.log("Error synchronizing models", error);
})

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})