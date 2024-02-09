"use client";

import React from "react";
// import Login from "./assets/Login.png";
// import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function page() {
  // form validation
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });
  const handleError = (errors) => {};

  const registerOptions = {
    email: {
      required: "Email is required",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        message: "Invalid email address",
      },
    },
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Must be at least 8 characters.",
      },
    },
  };

  const handleApiSubmit = async () => {};

  return (
    <div className="flex  h-[100vh]">
      <section className=" w-full sm:w-[50%] px-[5%] flex justify-center items-center ">
        <div>
          <div className=" text-center">
            <h1 className=" font-semibold text-[1.9rem] sm:text-[1.7rem] lg:text-[1.9rem] text-Gray900 ">
              Welcome back
            </h1>
            <p className=" mt-2 text-base sm:text-[0.9rem] lg:text-base text-Gray500">
              Welcome back! Please enter your details.{" "}
            </p>
          </div>
          <form
            action=""
            onSubmit={handleSubmit(handleApiSubmit, handleError)}
            className=" mt-8 w-full sm:mt-8 md:mt-10 lg:mt-12"
          >
            <div className="  flex flex-col gap-4 xxl:gap-5 text-base sm:text-[0.9rem] lg:text-base">
              <section>
                <label
                  className=" font-medium text-[0.9rem] sm:text-[0.8rem] lg:text-[0.9rem] "
                  htmlFor="email"
                >
                  Email*
                </label>
                <input
                  type="email"
                  name=""
                  id="email"
                  className=" mt-1 w-full border border-[#D0D5DD] rounded-[8px] py-2 px-[3%] text-Gray500 outline-none placeholder:text-Gray500 "
                  placeholder="Enter your email"
                  {...register("email", registerOptions.email)}
                />
                <small className=" text-Gray600 ">
                  {errors?.email && errors.email.message}
                </small>
              </section>
              <section>
                <label
                  className=" font-medium text-[0.9rem] sm:text-[0.8rem] lg:text-[0.9rem] "
                  htmlFor="password"
                >
                  Password*
                </label>
                <input
                  type="password"
                  name=""
                  id="password"
                  className=" mt-1 w-full border border-[#D0D5DD] rounded-[8px] py-2 px-[3%] text-Gray500 outline-none placeholder:text-Gray500 "
                  placeholder="Enter your password"
                  {...register("password", registerOptions.password)}
                />
                <small className=" text-Gray600 ">
                  {errors?.password && errors.password.message}
                </small>
              </section>
            </div>
            <section className=" mt-4 text-[0.75rem] sm:text-[0.75rem] lg:text-[0.8rem] xxl:text-[0.9rem] flex justify-between">
              <div className=" flex items-center gap-1 sm:gap-2">
                <input type="checkbox" name="" id="checkbox" />
                <label htmlFor="checkbox" className=" cursor-pointer font-medium text-Gray700">
                  Remember for 30 days
                </label>
              </div>
              <span className=" cursor-pointer font-semibold text-Primary700">
                Forgot password
              </span>
            </section>
            <button className=" mt-12 rounded-[8px] w-full hover:bg-Primary600 bg-ButtonColor text-NormalWhite py-2 text-base sm:text-[0.9rem] lg:text-base font-semibold">
              Log In
            </button>
            <section className=" text-[0.9rem] sm:text-[0.8rem] lg:text-[0.9rem] flex gap-1 justify-center mt-4 ">
              <p>Don't have an account?</p>
              <Link href="/" className=" font-semibold text-ButtonColor">
                Sign up
              </Link>
            </section>
          </form>
        </div>
      </section>

      <section className=" hidden sm:block Login w-[50%] "></section>
    </div>
  );
}
