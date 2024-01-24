const asyncHandler = require("express-async-handler");
const Blog = require("../model/blogModel");

const getBlogs = asyncHandler(async (req, res) => {
  const blog = await Blog.find();

  if (!blog) {
    res.status(400);
    throw new Error("Requested Course is not available");
  }

  res.status(200).json(blog.length === 0 ? "no blogs are available" : blog);
});

const getMyBlogs = asyncHandler(async (req, res) => {
  const blog = await Blog.find({ email: req.user.email });

  if (!blog) {
    res.status(400);
    throw new Error("Requested Course is not available");
  }

  res.status(200).json(blog.length === 0 ? "no blogs are created" : blog);
});

const newBlog = asyncHandler(async (req, res) => {
  const { email, title, content } = await Blog.create({
    email: req.user.email,
    title: req.body.title,
    content: req.body.content,
  });
  res.json(
    `title: ${title} content: ${content} was sucessfully created by the ${email}`
  );
});

module.exports = { getBlogs, newBlog, getMyBlogs };
