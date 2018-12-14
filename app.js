const express = require("express");
const exphbs = require("express-handlebars");
const morgan = require("morgan");
const expressSession = require("express-session");
//expressSession is a name we have made up and its a function that we are passing through connect mongo package
const MongoStore = require("connect-mongo")(expressSession);
const mongoose = require("mongoose");
const app = express();


app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(expressSession({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: 600000
    },
    store: new MongoStore({mongooseConnection: mongoose.connection})
}));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(morgan("combined"));

app.use(require("./routes"));

app.use(express.static("public"));

app.use(require("./middleware/error_handler_middleware"));

module.exports = app;