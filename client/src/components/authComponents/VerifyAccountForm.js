import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useVerifyUserAccountMutation } from "../../lib/userApis";
import ErrorComponent from "../commons/ErrorComponet";

const VerifyAccountForm = () => {
  const [verificationToken, setVerificationToken] = useState("");

  const [verifyUserAccount, { isLoading, isSuccess, error, isError }] =
    useVerifyUserAccountMutation();

  const navigate = useNavigate();

  // form submit handler function
  const submitFormHandler = async (event) => {
    event.preventDefault();

    if (!verificationToken) {
      return;
    }

    return await verifyUserAccount({ verificationToken });
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/auth/signin");
    }
  }, [isSuccess]);
  return (
    <form onSubmit={submitFormHandler}>
      <h3 className="mb-5 mt-5">Verify Account here</h3>

      {isError && (
        <ErrorComponent
          errorMessage={error?.data?.error || "something went wrong"}
        />
      )}
      <div className="form-group mb-3">
        <input
          className="form-control"
          type="text"
          placeholder="Verification Token"
          onChange={(event) => setVerificationToken(event.target.value)}
        />
      </div>

      <div className="form-group mb-3">
        <input
          className="form-control btn btn-secondary"
          type="submit"
          value={isLoading ? "Please wait..." : "Verify"}
        />
      </div>
    </form>
  );
};

export default VerifyAccountForm;
