const express = require('express');

require('dotenv').config

const app = express();
app.use(express());

const port = process.env.PORT || 6000;

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`)
})