const { json } = require("body-parser");
const { request } = require("express");
var express = require("express");
const userService = require("../Services/userService");
var router = express.Router()

var userServices = require("../Services/userService")
router.get("/", function(req, res) {
    userServices
        .getUser()
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            res.json(err)
        });

})

router.get("/:id", function(req, res) {
    var id = req.params.id
    userServices
        .getUserId(id)
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            res.json(err)
        });
})

router.post("/", function(req, res) {
    var username = req.body.username
    var password = req.body.password
    var email = req.body.email
    var age = req.body.age
    userServices
        .createUser(username, password, email, age)
        .then((data) => {
            res.json("Tao nguoi dung thanh cong")
        }).catch((err) => {
            res.json("Khong ket noi duoc server")
        });
})

router.put("/:id", function(req, res) {
    var id = request.params.id
    userServices
        .updateUser(id)
        .then((result) => {
            res.json("Cap nhat thanh cong")
        }).catch((err) => {
            res.json("Sai ten nguoi dung")
        });
})

router.delete("/:username", function(req, res) {
    var username = req.params.username
    userServices
        .deleteUser(username)
        .then((result) => {
            res.json("Da xoa thanh cong")
        }).catch((err) => {
            res.json("Khong tim thay nguoi dung")
        });
})
module.exports = router