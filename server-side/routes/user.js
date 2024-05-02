const UserController = require("../controllers/user");
// const { createUser, deleteUser } = require("../controllers/user");
const express = require("express");
const router = express.Router();

router.post("/register", UserController.createUser);



module.exports = router;

// locahost:8888/user/create;

