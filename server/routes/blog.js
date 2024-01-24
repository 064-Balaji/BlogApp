const express = require("express");
const router = express();
const {
  getBlogs,
  getMyBlogs,
  newBlog,
} = require("../controller/blogController");
const { protect } = require("../middleware/authMiddleware");

router.get("/", getBlogs);
router.get("/me", protect, getMyBlogs);
router.post("/", protect, newBlog);

module.exports = router;
