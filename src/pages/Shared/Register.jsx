import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";

const Register = () => {
  const { createUser } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your Account has been Created",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <Helmet>
        <title>Food Palace | Register</title>
      </Helmet>
      <div className="hero min-h-screen bg-gray-400-200">
        <div className="pt-20 w-full max-w-sm shadow-2xl bg-base-300 py-4">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <h1 className="text-center text-5xl">Register</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                {...register("name", { required: true })}
                name="name"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-500">Name field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="url"
                placeholder="Photo Url"
                {...register("photoUrl", { required: true })}
                className="input input-bordered"
              />
              {errors.photoUrl && (
                <span className="text-red-500">
                  Photo URL field is required
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                {...register("email", { required: true })}
                name="email"
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-500">email field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[0-9])/,
                })}
                className="input input-bordered"
              />
              {errors.password?.type === "required" && (
                <span className="text-red-500">
                  password field is required.
                </span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="text-red-500">
                  password must be 6 character min
                </span>
              )}
              {errors.password?.type === "maxLength" && (
                <span className="text-red-500">
                  Your password should be 20 characters long
                </span>
              )}
              {errors.password?.type === "pattern" && (
                <span className="text-red-500">
                  password must be one character number
                </span>
              )}
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                value="Register"
              />
            </div>
          </form>
          <h1 className="text-center">
            Already have an account?
            <button className="btn ">
              <Link to="/login">Login</Link>
            </button>
          </h1>
          <div className="divider">or sign in with</div>
          <div className="flex gap-5 justify-center cursor-pointer"></div>
        </div>
      </div>
    </div>
  );
};

export default Register;
