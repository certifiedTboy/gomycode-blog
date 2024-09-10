import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import ProtectedRoutes from "./ProtectedRoutes";
import HomePage from "../pages/HomePage";
import BlogsPage from "../pages/BlogsPage";
import SingleBlogPage from "../pages/SingleBlogPage";
import AuthPage from "../pages/AuthPage";
import CreateBlogPage from "../pages/CreateBlogPage";
import SignupForm from "../components/authComponents/SignupForm";
import SigninForm from "../components/authComponents/SigninForm";
import VerifyAccountForm from "../components/authComponents/VerifyAccountForm";

const AppRoutes = () => {
  const { user } = useSelector((state) => state.userState);

  return (
    <Routes>
      <Route
        path="*"
        element={<h1 style={{ marginTop: "100px" }}>Page Not Found</h1>}
      />
      <Route path="/" element={<HomePage />} />
      <Route path="/blogs" element={<BlogsPage />} />
      <Route path="/blogs/:blogId" element={<SingleBlogPage />} />

      <Route path="/auth" element={<AuthPage />}>
        <Route path="signin" element={<SigninForm />} />
        <Route path="signup" element={<SignupForm />} />
        <Route path="verify" element={<VerifyAccountForm />} />
      </Route>

      <Route
        path="/create"
        element={<ProtectedRoutes user={user} children={<CreateBlogPage />} />}
      />
    </Routes>
  );
};

export default AppRoutes;
