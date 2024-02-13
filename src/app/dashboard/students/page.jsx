"use client";

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
import { MdOutlineClose } from "react-icons/md";
import { RiHome6Line } from "react-icons/ri";
import Image from "next/image";
import Avatar from "../assets/Avatar.png";
import Link from "next/link";
import courses from "../assets/courses.png";
import students1 from "../assets/students.png";
import wallets from "../assets/wallets.png";
import home from "../assets/home.png";
import support from "../assets/support.png";
import settings from "../assets/settings.png";

export default function students() {
  const [user, setUser] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Retrieve user data from localStorage
    const user = localStorage.getItem("user");
    console.log(JSON.parse(user));
    setUser(JSON.parse(user));
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DashboardLayout>
      <main className="overflow-x-auto bg-NormalWhite  rounded-l-[0px] sm:rounded-l-[40px] h-[100vh] pt-6 xxl:pt-8 px-[5%] sm:px-[3%] ">
        <section className="flex justify-between items-center sm:hidden">
          <div onClick={toggleMenu}>
            {isOpen ? (
              <div className=" text-[2rem] ">
                <MdOutlineClose />
              </div>
            ) : (
              <div className=" text-[1.7rem] ">
                <GiHamburgerMenu />
              </div>
            )}
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

          {/* mobile nav starts */}
          {isOpen && (
            <div className=" block sm:hidden absolute z-10 left-0 bottom-0 px-[5%] w-[50%] bg-ButtonColor h-[100vh] ">
              <div
                onClick={toggleMenu}
                className=" text-NormalWhite mt-8 text-[2rem] "
              >
                <MdOutlineClose />
              </div>
              <section className=" relative text-[0.9rem] text-NormalWhite mt-8 ">
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

              <section className=" mt-4 flex flex-col py-4 gap-6 text-[0.9rem] text-Gray100 font-semibold">
                <Link href="/dashboard" className=" flex gap-2 items-center ">
                  <div className=" text-[1.1rem] ">
                    <Image src={home} alt="Home Icon" />
                  </div>
                  <span>Home</span>
                </Link>
                <Link href="/dashboard" className=" flex gap-2 items-center ">
                  <div className=" text-[1.1rem] ">
                    <Image src={courses} alt="Courses Icon" />
                  </div>
                  <span>Courses</span>
                </Link>
                <Link
                  href="/dashboard/students"
                  className=" flex gap-2 items-center "
                >
                  <div className=" text-[1.1rem] ">
                    <Image src={students1} alt="Students Icon" />
                  </div>
                  <span>Students</span>
                </Link>
                <Link href="/dashboard" className=" flex gap-2 items-center ">
                  <div className=" text-[1.1rem] ">
                    <Image src={wallets} alt="Wallets Icon" />
                  </div>
                  <span>Wallet</span>
                </Link>
              </section>

              {/* down part */}
              <div className=" absolute bottom-[5%] text-[0.9rem] flex flex-col gap-5 ">
                <section className=" mt-10 flex flex-col gap-4 text-Gray100 font-semibold">
                  <Link href="/dashboard" className=" flex gap-2 items-center ">
                    <div className=" text-[1.1rem] ">
                      <Image src={support} alt="Support Icon" />
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
              </div>
            </div>
          )}
          {/* mobile nav ends */}
        </section>

        <section className=" border-Gray200 border-t-[1px] sm:border-none pt-2 sm:pt-0 mt-3 sm:mt-0 flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div>
            <h1 className=" font-semibold text-[1.4rem] sm:text-[1.4rem] md:text-[1.5rem] lg:text-[1.7rem] xxl:text-[1.9rem] ">
              Students
            </h1>
            <p className=" text-Gray600  text-[0.8rem] w-[90%] sm:w-full sm:text-[0.75rem] md:text-[0.8rem] lg:text-[0.9rem]  xxl:text-base">
              View and manage all your students from this portal
            </p>
          </div>
          <div className=" text-[0.85rem] mt-3 sm:mt-0 sm:text-[0.7rem] md:text-[0.75rem] xl:text-[0.8rem] xxl:text-[0.9rem] items-center font-medium cursor-pointer flex gap-2 rounded-[6px] bg-ButtonColor text-NormalWhite py-2 px-4 sm:px-2 md:px-3 xl:px-4 ">
            <div className="  text-[0.9rem] md:text-[1rem] xl:text-[1.1rem]">
              <FiPlus />
            </div>
            <p>Add Students</p>
          </div>
        </section>

        <section className=" flex justify-between mt-4 sm:mt-6 xxl:mt-8 font-medium text-[0.9rem]">
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

        <section className="mt-4 sm:mt-6  overflow-x-auto xxl:mt-8 border-Gray200 shadow-sm border-[1px] border-solid  rounded-[8px] ">
          <div className="min-w-[550px]">
            <div className=" flex justify-between py-2 xxl:py-3 px-[2%] ">
              <section className=" flex justify-between  lg:w-[35%] w-[45%] md:w-[40%] xl:w-[30%] text-Gray700 text-[0.7rem] sm:text-[0.7rem] md:text-[0.75rem] lg:text-[0.8rem] xxl:text-[0.9rem] font-medium  rounded-[8px] border-Gray200 border-[1px] border-solid">
                <span className="text-center py-1 sm:py-2 w-[33.3%]">
                  View all
                </span>
                <span className="w-[33.3%] text-center py-1 sm:py-2 border-Gray200 border-x-[1px] border-solid justify-self-center">
                  cohort
                </span>
                <span className="w-[33.3%] text-center py-1 sm:py-2">
                  course type
                </span>
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
              <table className=" table-auto  w-full text-left text-Gray500 text-[0.7rem] md:text-[0.7rem] lg:text-[0.85rem] xl:text-[0.9rem]">
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
                    <th className="  pl-10 lg:pl-16 "></th>
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
                      <td className="  pl-2 sm:pl-4 lg:pl-6 ">
                        {student.cohort}
                      </td>
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
                      <td className=" text-[1.2rem] pl-10 lg:pl-16 ">
                        <BiDotsVerticalRounded />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mt-6 sm:mt-8 xxl:mt-10 relative mb-2 sm:mb-16 pb-6 ">
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
            <button className="py-2 px-3 hidden sm:block md:px-4 text-center border-Gray200 border-r-[1px] border-solid">
              2
            </button>
            <button className="py-2 hidden sm:block px-3 md:px-4 text-center border-Gray200 border-r-[1px] border-solid">
              3
            </button>
            <button className="py-2 px-3 md:px-4 text-center border-Gray200 border-r-[1px] border-solid">
              ...
            </button>
            <button className="py-2 hidden sm:block px-3 md:px-4 text-center border-Gray200 border-r-[1px] border-solid">
              8
            </button>
            <button className="py-2 px-3 hidden sm:block md:px-4 text-center border-Gray200 border-r-[1px] border-solid">
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
