const ErrorComponent = ({ errorMessage }) => {
  return (
    <div className="alert alert-danger" role="alert">
      {errorMessage}
    </div>
  );
};

export default ErrorComponent;
