import { useEffect, useState } from "react";
import { useGetAllBlogsMutation } from "../../lib/blogsApis";
import BlogCard from "./BlogCard";

const AllBlogs = () => {
  // initialize rtk query hook
  const [getAllBlogs, { isError, isSuccess, error, data, isLoading }] =
    useGetAllBlogsMutation();

  useEffect(() => {
    getAllBlogs(1);
  }, []);

  return (
    <section className="container" style={{ marginTop: "100px" }}>
      <div className="row">
        {isLoading && <h1>Please Wait...</h1>}
        {data?.blogs.length > 0 &&
          data?.blogs.map((blog) => {
            return (
              <BlogCard
                content={blog.content}
                title={blog.title}
                blogId={blog._id}
                key={blog._id}
              />
            );
          })}
      </div>
    </section>
  );
};

export default AllBlogs;
