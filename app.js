var express = require('express')
var bodyParser = require('body-parser')
var port = 2021
var app = express()
var userRouter = require("./routers/user")
    // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use("/user", userRouter)


app.listen(port, function() {
    console.log("0", port);
})