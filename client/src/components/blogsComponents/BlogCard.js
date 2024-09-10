import { Link } from "react-router-dom";

const BlogCard = ({ content, title, blogId }) => {
  return (
    <div className="col-md-4 col-sm-6 col-12">
      <div className="card" style={{ width: "100%" }}>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{content}</p>
          <Link to={`/blogs/${blogId}`} className="btn btn-primary">
            Read More...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
