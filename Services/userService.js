var userModel = require("../models/userModels")

function getUser() {
    return userModel.find()
}

function getUserId(id) {
    return userModel.find({
        _id: id
    })
}

function updateUser(id) {
    return userModel.findOneAndUpdate({
        _id: id
    }, {
        username: username,
        password: password,
        email: email,
        age: age
    })
}


function createUser(username, password, email, age) {
    return userModel.create({
        username: username,
        password: password,
        email: email,
        age: age
    })
}

function deleteUser(username) {
    return userModel.deleteMany({
        username: username
    })
}
module.exports = {
    createUser: createUser,
    getUser: getUser,
    getUserId: getUserId,
    updateUser: updateUser,
    deleteUser: deleteUser
}