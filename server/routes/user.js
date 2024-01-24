const express = require("express");
const router = express();
const { getUser, login, register } = require("../controller/userController");
const { protect } = require("../middleware/authMiddleware");

router.get("/", protect, getUser);
router.post("/login", login);
router.post("/", register);

module.exports = router;
