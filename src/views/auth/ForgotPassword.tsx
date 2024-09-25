import AuthLayout from "../../component/auth/AuthLayout";
import ForgotPasswordComponent from "../../component/auth/ForgotPasswordComponent";

const ForgotPassword = () => {
  return (
    <AuthLayout
      showBackBtn={true}
      backURL="/login"
      formElement={<ForgotPasswordComponent />}
      formHeading="Reset Password"
      formSubheading="Enter your email to reset your password"
    />
  );
};

export default ForgotPassword;