"use client";

import Image from "next/image";
import Stars from "./assets/Stars.png";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [loading, setLoading] = useState(false);
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
    firstname: {
      required: "Name is required",
      minLength: {
        value: 3,
        message: "Must be at least 3 characters.",
      },
    },
    lastname: {
      required: "Name is required",
      minLength: {
        value: 3,
        message: "Must be at least 3 characters.",
      },
    },
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

  const handleApiSubmit = async (data) => {
    console.log("Input: ", data)
    setLoading(true);
    const url = "https://devapi.omacart.com/signupapi/signup";

    try {
      const response = await axios.post(url, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const user = response.data.data;
      console.log("user: ", user);
      navigate("/");
      setLoading(false);

    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <main className=" flex  h-[100vh]">
      <section className="Signup hidden font-medium text-NormalWhite px-[5%] lg:px-[8%] w-[58%] lg:w-[63%]  h-full sm:flex justify-center items-center ">
        <div>
          <section className=" w-[10%] ">
            <Image className=" w-full  " src={Stars} alt="Stars" />
          </section>
          <h1 className=" mt-2 text-[2.3rem] md:text-[2.7rem] lg:text-[3.5rem] xl:text-[4rem] xxl:text-[4.5rem]  leading-[140%] ">
            Start turning your ideas into reality.
          </h1>
          <p className="mt-2 text-[0.9rem] md:text-[1rem] lg:text-[1.1rem] xxl:text-[1.2rem] leading-8 ">
            Create a free account and get full access to all features for
            30-days. No credit card needed. Trusted by over 4,000 professionals.
          </p>
        </div>
      </section>

      <section className=" w-full sm:w-[42%] lg:w-[37%] flex flex-col justify-center px-[10%] sm:px-[3%] xl:px-[5%] ">
        <h2 className=" font-semibold text-[1.9rem] sm:text-[1.7rem] lg:text-[1.9rem] text-Gray900 ">Sign up</h2>

        <form
          onSubmit={handleSubmit(handleApiSubmit, handleError)}
          className="  mt-8 lg:mt-12"
        >
          <div className=" flex flex-col gap-4 xxl:gap-5 text-base sm:text-[0.9rem] lg:text-base">
            <section>
              <label className=" font-medium text-[0.9rem] sm:text-[0.8rem] lg:text-[0.9rem] " htmlFor="Name">
                First Name*
              </label>
              <input
                type="text"
                name=""
                id="Name"
                className=" mt-1 w-full border border-[#D0D5DD] rounded-[8px] py-2 px-[3%] text-Gray500 outline-none placeholder:text-Gray500 "
                placeholder="Enter your name"
                {...register("firstname", registerOptions.firstname)}
              />
              <small className=" text-Gray600 ">
                {errors?.firstname && errors.firstname.message}
              </small>
            </section>
            {/* <section>
              <label className=" font-medium text-[0.9rem] " htmlFor="lastname">
                Last Name*
              </label>
              <input
                type="text"
                name=""
                id="lastname"
                className=" mt-1 w-full border border-[#D0D5DD] rounded-[8px] py-2 px-[3%] text-Gray500 outline-none placeholder:text-Gray500 "
                placeholder="Enter your name"
                {...register("lastname", registerOptions.lastname)}
              />
              <small className=" text-Gray600 ">
                {errors?.lastname && errors.lastname.message}
              </small>
            </section> */}
            <section>
              <label className=" font-medium text-[0.8rem] lg:text-[0.9rem] " htmlFor="email">
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
              <label className=" font-medium text-[0.8rem] lg:text-[0.9rem] " htmlFor="password">
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

          {loading ? (
            <button className=" mt-12 xxl:mt-16 rounded-[8px] w-full hover:bg-Primary600 bg-ButtonColor text-NormalWhite py-2 text-base sm:text-[0.9rem] lg:text-base font-semibold">
            Signing Up...
          </button>
          ) : (
            <button className=" mt-12 xxl:mt-16 rounded-[8px] w-full hover:bg-Primary600 bg-ButtonColor text-NormalWhite py-2 text-base sm:text-[0.9rem] lg:text-base font-semibold">
            Get Started
          </button>
          )}
          <section className=" text-[0.9rem] sm:text-[0.8rem] lg:text-[0.9rem] flex gap-1 justify-center mt-4 ">
            <p>Already have an account?</p>
            <Link href="/login" className=" font-semibold hover:text-Primary600 text-ButtonColor">
              Log In
            </Link>
          </section>
        </form>
      </section>
    </main>
  );
}
