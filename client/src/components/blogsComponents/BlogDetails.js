import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetBlogByIdMutation } from "../../lib/blogsApis";
import classes from "./Blog.module.css";

const BlogDetails = () => {
  // initalize the useParams hook
  const params = useParams();

  const { blogId } = params;

  // initalize rtk query hook
  const [getBlogById, { isLoading, isError, error, isSuccess, data }] =
    useGetBlogByIdMutation();

  useEffect(() => {
    getBlogById(blogId);
  }, [blogId]);

  return (
    <section className="container-fluid">
      <div className="row">
        <div className="col-lg-6">
          <img
            className={classes.blog_img}
            src={require("../../Assets/hero.jpg")}
            alt="blog_image"
          />
        </div>
        <div className="col-lg-6">
          <h1>{data?.blog?.title}</h1>
          <p>{data?.blog?.user?.email}</p>

          <div>
            <h3>{data?.blog?.content}</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
