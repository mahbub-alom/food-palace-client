import React from "react";
import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const SocialLogin = () => {
  const { googleLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignUp = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Account google login successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <button onClick={handleGoogleSignUp} className="btn btn-primary">
        <FaGoogle />
      </button>
    </div>
  );
};

export default SocialLogin;
