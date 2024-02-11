'use client'

import React, { useEffect, useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import { FiSearch } from "react-icons/fi";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { IoMdCheckmark } from "react-icons/io";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import { IoFilterSharp } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import { StudentsData } from "../StudentsData";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import Avatar from "../assets/Avatar.png";


export default function students() {
  const [user, setUser] = useState("");
  useEffect(() => {
    // Retrieve user data from localStorage
    const user = localStorage.getItem("user");
    console.log(JSON.parse(user));
    setUser(JSON.parse(user)); 
}, []);
  return (
    <DashboardLayout>
      <main className="overflow-x-auto bg-NormalWhite  rounded-l-[0px] sm:rounded-l-[40px] h-[100vh] pt-6 xxl:pt-8 px-[3%] ">
        <section className="flex justify-between items-center sm:hidden">
          <div className=" text-[2rem] ">
            <GiHamburgerMenu />
          </div>
          <div className=" flex gap-2 items-center ">
            <div className=" w-[2rem]">
              <Image src={Avatar} className=" w-full" alt="Profile Image" />
            </div>
            <div className=" text-[0.8rem] ">
              <h4>{user.firstName}</h4>
              <small className="">{user.email}</small>
            </div>
          </div>
        </section>
        <section className=" border-Gray200 border-t-[1px] sm:border-none pt-2 sm:pt-0 mt-3 sm:mt-0 flex justify-between items-center">
          <div>
            <h1 className=" font-semibold text-[1.2rem] sm:text-[1.4rem] md:text-[1.5rem] lg:text-[1.7rem] xxl:text-[1.9rem] ">
              Students
            </h1>
            <p className=" text-Gray600 text-[0.65rem] w-[80%] sm:w-full sm:text-[0.75rem] md:text-[0.8rem] lg:text-[0.9rem]  xxl:text-base">
              View and manage all your students from this portal
            </p>
          </div>
          <div className=" text-[0.65rem] sm:text-[0.7rem] md:text-[0.75rem] xl:text-[0.8rem] xxl:text-[0.9rem] items-center font-medium cursor-pointer flex gap-2 rounded-[6px] bg-ButtonColor text-NormalWhite py-2 px-2 md:px-3 xl:px-4 ">
            <div className=" text-[0.9rem] md:text-[1rem] xl:text-[1.1rem]">
              <FiPlus />
            </div>
            <p>Add Students</p>
          </div>
        </section>

        <section className=" flex justify-between mt-4 sm:mt-6 xxl:mt-8 font-medium text-[0.8rem] sm:text-[0.85rem] xl:text-[0.95rem] xxl:text-base">
          <div className=" w-[49%] border-Gray200 border-[1px] text-[0.8rem] sm:text-[0.85rem] border-solid rounded-[12px] py-2 sm:py-3 md:py-4 px-[2%] ">
            <small>Total Students</small>
            <h3 className=" mt-1 xxl:mt-4 font-semibold text-[1.2rem] sm:text-[1.4rem] md:text-[1.6rem] lg:text-[1.8rem] xl:text-[2rem] xxl:text-[2.2rem] ">
              2,420
            </h3>
          </div>
          <div className=" w-[49%] border-Gray200 border-[1px] border-solid rounded-[12px] py-2 sm:py-3 md:py-4 px-[2%] ">
            <small>Active Students</small>
            <h3 className="mt-1 xxl:mt-4 font-semibold text-[1.2rem] sm:text-[1.4rem] md:text-[1.6rem] lg:text-[1.8rem] xl:text-[2rem] xxl:text-[2.2rem] ">
              1,210
            </h3>
          </div>
        </section>

        <section className="mt-4 sm:mt-6 overflow-x-auto xxl:mt-8 border-Gray200 shadow-sm border-[1px] border-solid  rounded-[8px] ">
          <div className=" flex min-w-[400px] justify-between py-2 xxl:py-3 px-[2%] ">
            <section className=" flex justify-between  lg:w-[35%] w-[45%] md:w-[40%] xl:w-[30%] text-Gray700 text-[0.6rem] sm:text-[0.7rem] md:text-[0.75rem] lg:text-[0.8rem] xxl:text-[0.9rem] font-medium  rounded-[8px] border-Gray200 border-[1px] border-solid">
              <span className="text-center py-1 sm:py-2 w-[33.3%]">View all</span>
              <span className="w-[33.3%] text-center py-1 sm:py-2 border-Gray200 border-x-[1px] border-solid justify-self-center">
                cohort
              </span>
              <span className="w-[33.3%] text-center py-1 sm:py-2">course type</span>
            </section>
            <section className=" flex items-center justify-between w-[46%] ">
              <div className=" relative w-[70%] sm:w-[78%] text-[0.6rem] sm:text-[0.65rem] md:text-[0.7rem] lg:text-[0.8rem] xxl:text-[0.9rem] xxl:text-base ">
                <input
                  type="text"
                  className=" rounded-[6px] w-full outline-none py-1 sm:py-1 pl-[13%] md:pl-[10%] border-Gray200 border-[1px] border-solid  "
                  name=""
                  id=""
                  placeholder="Search for students"
                />
                <div className=" absolute left-[3%] top-[50%] translate-y-[-50%] ">
                  <FiSearch />
                </div>
              </div>
              <div className="border-Gray200 w-[28%] sm:w-[20%] py-1 border-[1px] text-Gray700 text-[0.6rem] sm:text-[0.7rem] md:text-[0.75rem] lg:text-[0.8rem] xxl:text-[0.9rem] rounded-[6px] border-solid  items-center justify-center flex gap-2">
                <div className=" text-[0.9rem] md:text-[1rem] lg:text-[1.1rem] ">
                  <IoFilterSharp />
                </div>
                <p>Filter</p>
              </div>
            </section>
          </div>
          <div className="overflow-x-auto ">
            <table className=" table-auto min-w-[500px] w-full text-left text-Gray500 text-[0.6rem] md:text-[0.7rem] lg:text-[0.75rem] xl:text-[0.8rem]">
              <thead className=" bg-Gray50    font-medium  ">
                <tr className=" justify-around border-Gray200 border-t-[1px] border-solid  ">
                  <th className=" flex gap-2 ml-[6%] py-2 ">
                    <input type="checkbox" name="" id="checkbox" />
                    <label htmlFor="checkbox">Description</label>
                  </th>
                  <th className=" ">Course</th>
                  <th>Date Joined</th>
                  <th className="  pl-2 sm:pl-4 lg:pl-6 ">Cohort</th>
                  <th className="  pl-2 sm:pl-4 lg:pl-6 ">Status</th>
                  <th className="  pl-5 sm:pl-10 lg:pl-16 "></th>
                </tr>
              </thead>
              <tbody className=" ">
                {StudentsData.map((student) => (
                  <tr
                    key={student.id}
                    className="border-Gray200 border-t-[1px] border-solid justify-between "
                  >
                    <td className="px-[6%]  text-Gray900 py-4 flex gap-2">
                      <input type="checkbox" name="" id={student.id} />
                      <label htmlFor={student.id} className="font-medium">
                        {student.name}
                      </label>
                    </td>
                    <td>{student.course}</td>
                    <td>{student.date}</td>
                    <td className="  pl-2 sm:pl-4 lg:pl-6 ">{student.cohort}</td>
                    <td className="relative pl-2 sm:pl-4 lg:pl-6 ">
                      <div
                        className={` absolute flex gap-1 py-1 px-2 top-[50%] translate-y-[-50%] items-center rounded-[16px] ${
                          student.status === "Inactive"
                            ? "bg-Warning50 text-Warning700 "
                            : "bg-[#ECFDF3] text-[#049B77] "
                        }`}
                      >
                        <div className=" text-[0.9rem] ">
                          <IoMdCheckmark />
                        </div>
                        {student.status}
                      </div>
                    </td>
                    <td className=" text-[1.2rem] pl-5 sm:pl-10 lg:pl-16 ">
                      <BiDotsVerticalRounded />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-8 xxl:mt-10 relative mb-2 sm:mb-16 ">
          <div className="flex absolute translate-x-[-50%] text-Gray700 font-semibold text-[0.6rem] sm:text-[0.7rem] md:text-[0.8rem] xxl:text-[0.9rem] left-[50%] top-[50%] translate-y-[-50%] justify-center items-center border-Gray200 border-[1px] border-solid  rounded-[8px]">
            <button className="flex gap-2 items-center py-2 px-2 md:py-3 text-center border-Gray200 border-r-[1px] border-solid">
              <div>
                <GrLinkPrevious />
              </div>
              Previous
            </button>
            <button className="py-2 px-3 md:px-4 text-center bg-Gray50 border-Gray200 border-r-[1px] border-solid">
              1
            </button>
            <button className="py-2 px-3 md:px-4 text-center border-Gray200 border-r-[1px] border-solid">
              2
            </button>
            <button className="py-2 px-3 md:px-4 text-center border-Gray200 border-r-[1px] border-solid">
              3
            </button>
            <button className="py-2 px-3 md:px-4 text-center border-Gray200 border-r-[1px] border-solid">
              ...
            </button>
            <button className="py-2 px-3 md:px-4 text-center border-Gray200 border-r-[1px] border-solid">
              8
            </button>
            <button className="py-2 px-3 md:px-4 text-center border-Gray200 border-r-[1px] border-solid">
              9
            </button>
            <button className="py-2 px-2 md:py-3 text-center border-Gray200 border-r-[1px] border-solid">
              10
            </button>
            <button className=" flex gap-2 items-center py-2 px-2 md:py-3">
              Next
              <div>
                <GrLinkNext />
              </div>
            </button>
          </div>
        </section>
      </main>
    </DashboardLayout>
  );
}
