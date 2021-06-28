const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config()

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.static("public"));


// mongoose connection....?



// routes
app.use(require("./routes/apiRoutes.js"));
app.use(require('./routes/htmlRoutes.js'));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});