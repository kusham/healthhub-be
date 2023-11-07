const express = require("express");
const { registerUser, login, userProfileSetup } = require("../controllers/UserController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", login);

// router.post("/profile/setup", userProfileSetup);


module.exports = router;
