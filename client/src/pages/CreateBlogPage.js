import NewBlogForm from "../components/blogsComponents/NewBlogForm";

const CreateBlogPage = () => {
  return (
    <section className="container">
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6">
          <NewBlogForm />
        </div>
        <div className="col-lg-3"></div>
      </div>
    </section>
  );
};

export default CreateBlogPage;
