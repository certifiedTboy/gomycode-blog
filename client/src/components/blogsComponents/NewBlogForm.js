const NewBlogForm = () => {
  return (
    <form>
      <h1 className="mb-5 mt-5">Create new Blog</h1>

      <div className="form-group mb-3">
        <input className="form-control" type="text" placeholder="Title" />
      </div>

      <div className="form-group mb-3">
        <textarea className="form-control" placeholder="Content">
          {" "}
        </textarea>
      </div>

      <div className="form-group mb-3">
        <input
          className="form-control btn btn-secondary"
          type="submit"
          value="Create"
        />
      </div>
    </form>
  );
};

export default NewBlogForm;
