"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { RiHome6Line } from "react-icons/ri";
import Avatar from "../assets/Avatar.png";
import courses from "../assets/courses.png";
import students from "../assets/students.png";
import wallets from "../assets/wallets.png";
import home from "../assets/home.png";
import support from "../assets/support.png";
import settings from "../assets/settings.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const [user, setUser] = useState("");

  useEffect(() => {
    // Retrieve user data from localStorage
    const user = localStorage.getItem("user");
    console.log(JSON.parse(user));
    setUser(JSON.parse(user));
  }, []);

  const pathname = usePathname();
  const currentRoute = pathname;

  return (
    <div className=" hidden sm:block fixed top-0 bottom-0 px-[2%]  w-[20%] bg-ButtonColor h-[100vh] ">
      <section className=" relative text-[0.7rem] md:text-[0.8rem] lg:text-[0.9rem] xxl:text-base text-NormalWhite mt-12 xxl:mt-16 ">
        <input
          type="text"
          className=" rounded-[6px] w-full outline-none py-1 lg:py-2 pl-[20%] lg:pl-[15%]  bg-Gray700 placeholder:text-NormalWhite "
          name=""
          id=""
          placeholder="Search"
        />
        <div className=" absolute left-[5%] lg:left-[3%] top-[50%] translate-y-[-50%] ">
          <FiSearch />
        </div>
      </section>

      <section className=" mt-4 flex flex-col py-4  text-[0.8rem] lg:text-[0.9rem] xxl:text-base text-Gray100 font-semibold">
        <Link href="/dashboard" className={`flex gap-2 py-3 px-2 items-center ${
            currentRoute === "/dashboard" ? "bg-Gray700 rounded-[6px] " : "bg-none"
          } `}>
          <div className=" text-[1.1rem] ">
            <Image src={home} alt="Home" />
          </div>
          <span>Home</span>
        </Link>
        <Link href="/dashboard" className={`flex gap-2 py-3 px-2 items-center ${
            currentRoute === "/dashboard/" ? "bg-Gray700 rounded-[6px] " : "bg-none"
          } `}>
          <div className=" text-[1.1rem] ">
            <Image src={courses} alt="Courses" />
          </div>
          <span>Courses</span>
        </Link>
        <Link
          href="/dashboard/students"
          className={`flex gap-2 py-3 px-2 items-center ${
            currentRoute === "/dashboard/students" ? "bg-Gray700 rounded-[6px] " : "bg-none"
          } `}
        >
          <div className=" text-[1.1rem] ">
            <Image src={students} alt="Students" />
          </div>
          <span>Students</span>
        </Link>
        <Link href="/dashboard" className={`flex gap-2 py-3 px-2 items-center ${
            currentRoute === "/dashboard/" ? "bg-Gray700 rounded-[6px] " : "bg-none"
          } `}>
          <div className=" text-[1.1rem] ">
            <Image src={wallets} alt="Wallets" />
          </div>
          <span>Wallet</span>
        </Link>
      </section>

      {/* down part */}
      <div className=" absolute bottom-[5%] text-[0.7rem] md:text-[0.8rem] lg:text-[0.95rem] xxl:text-base flex flex-col gap-5 xxl:gap-6 ">
        <section className=" mt-10 flex flex-col gap-5 text-Gray100 font-semibold">
          <Link href="/dashboard" className=" flex gap-2 items-center ">
            <div className=" text-[1.1rem] ">
              <Image src={support} alt="Support" />
            </div>
            <span>Support</span>
          </Link>
          <Link href="/dashboard" className=" flex gap-2 items-center ">
            <div className=" text-[1.1rem] ">
              <Image src={settings} alt="Settings" />
            </div>
            <span>Settings</span>
          </Link>
        </section>

        <section className=" pt-4 xxl:pt-5 border-solid border-Gray600 border-t-[1px] text-Gray100">
          <div className=" flex gap-2 items-center ">
            <div className=" w-[2rem] ">
              <Image src={Avatar} className=" w-full" alt="Profile Image" />
            </div>
            <div className=" text-[0.65rem] md:text-[0.75rem] lg:text-[0.85rem] xxl:text-[0.9rem]">
              <h4>{user.firstName}</h4>
              <small className="">{user.email}</small>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
