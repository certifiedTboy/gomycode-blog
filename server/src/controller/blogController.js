const Blog = require("../models/blogModel");
const getPagination = require("../helpers/paginationHelpers");

//create new blog
const createBlog = async (req, res) => {
  try {
    const { userId } = req.user;
    const { title, content } = req.body;

    const blog = new Blog({ title, content, user: userId });

    await blog.save();

    if (!blog) {
      return res.status(400).json({ error: "Blog creation failed" });
    }

    return res.status(201).json({ message: "blog created successfully", blog });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// get all blogs
const getBlogs = async (req, res) => {
  try {
    const { skip, limit } = getPagination(req.query);
    const blogs = await Blog.find()
      .skip(skip)
      .limit(limit)
      .populate("user", "email _id");

    return res.status(200).json({ message: "success", blogs });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// get single blog
const getSingleBlog = async (req, res) => {
  try {
    const { blogId } = req.params;

    const blog = await Blog.findById(blogId).populate("user", "email");

    if (!blog) {
      return res.status(404).json({ error: "blog not found" });
    }

    return res.status(200).json({ message: "success", blog });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { createBlog, getBlogs, getSingleBlog };
