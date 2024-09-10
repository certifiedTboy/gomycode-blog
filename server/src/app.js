const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRouter = require("./routes/userRoutes");
const authRouter = require("./routes/authRoutes");
const blogRouter = require("./routes/blogRoutes");
const app = express();

//global middleware configuration for json data
app.use(express.json());

//global middleware configuration for cookie parser
app.use(cookieParser());

//global middleware configuration for cors
app.use(
  cors({ origin: "https://gomycode-blog-gamma.vercel.app", credentials: true })
);

// router configuration as a global middleware
app.use("/users", userRouter);
app.use("/auth", authRouter);
app.use("/blogs", blogRouter);

module.exports = app;
