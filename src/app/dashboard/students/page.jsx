import React from "react";
import DashboardLayout from "../components/DashboardLayout";
import { FiSearch } from "react-icons/fi";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { IoMdCheckmark } from "react-icons/io";
import { StudentsData } from "../StudentsData";

export default function students() {
  return (
    <DashboardLayout>
      <main className="overflow-x-auto bg-NormalWhite  rounded-l-[40px] h-[100vh] pt-6 xxl:pt-8 px-[3%] ">
        <section className=" flex justify-between items-center">
          <div>
            <h1 className=" font-semibold text-[1.7rem] xxl:text-[1.9rem] ">
              Students
            </h1>
            <p className=" text-Gray600 text-[0.95rem] xxl:text-base">
              View and manage all your students from this portal
            </p>
          </div>
          <div className=" text-[0.85rem] xxl:text-[0.9rem] items-center font-medium cursor-pointer flex gap-2 rounded-[6px] bg-ButtonColor text-NormalWhite py-2 px-4 ">
            <div className=" text-[1.1rem]">+</div>
            <p>Add Students</p>
          </div>
        </section>

        <section className=" flex justify-between mt-6 xxl:mt-8 font-medium text-[0.95rem] xxl:text-base">
          <div className=" w-[49%] border-Gray200 border-[1px] text-[0.85rem] border-solid rounded-[12px] py-4 px-[2%] ">
            <small>Total Students</small>
            <h3 className=" mt-1 xxl:mt-4 font-semibold text-[2rem] xxl:text-[2.2rem] ">
              2,420
            </h3>
          </div>
          <div className=" w-[49%] border-Gray200 border-[1px] border-solid rounded-[12px] py-4 px-[2%] ">
            <small>Active Students</small>
            <h3 className="mt-1 xxl:mt-4 font-semibold text-[2rem] xxl:text-[2.2rem] ">
              1,210
            </h3>
          </div>
        </section>

        <section className="mt-6 border-Gray200 border-[1px] border-solid  rounded-[8px] ">
          <div className=" flex justify-between py-2 px-[2%] ">
            <section className=" flex justify-between w-[30%] text-[0.85rem] xxl:text-[0.9rem] font-medium  rounded-[8px] border-Gray200 border-[1px] border-solid">
              <span className="text-center py-2 w-[33.3%]">View all</span>
              <span className="w-[33.3%] text-center py-2 border-Gray200 border-x-[1px] border-solid justify-self-center">
                cohort
              </span>
              <span className="w-[33.3%] text-center py-2">course type</span>
            </section>
            <section className=" flex justify-between w-[46%] ">
              <div className=" relative w-[78%] text-[0.9rem] xxl:text-base ">
                <input
                  type="text"
                  className=" rounded-[6px] w-full outline-none py-2 pl-[10%] border-Gray200 border-[1px] border-solid  "
                  name=""
                  id=""
                  placeholder="Search for students"
                />
                <div className=" absolute left-[3%] top-[50%] translate-y-[-50%] ">
                  <FiSearch />
                </div>
              </div>
              <div className="border-Gray200 w-[20%] border-[1px] text-[0.85rem] xxl:text-[0.9rem] rounded-[6px] border-solid  items-center justify-center flex gap-2">
                <div>
                  <FiSearch />
                </div>
                <p>Filter</p>
              </div>
            </section>
          </div>
          <table className=" table-auto w-full text-left text-Gray500 text-[0.8rem]">
            <thead className=" bg-Gray50   font-medium  ">
              <tr className=" justify-around  ">
                <th className=" flex gap-2 ml-[6%] py-2 ">
                  <input type="checkbox" name="" id="checkbox" />
                  <label htmlFor="checkbox">Description</label>
                </th>
                <th className=" ">Course</th>
                <th>Date Joined</th>
                <th className="  pl-6 ">Cohort</th>
                <th className="  pl-6 ">Status</th>
                <th className="  pl-16 "></th>
              </tr>
            </thead>
            <tbody className=" ">
              {StudentsData.map((student) => (
                <tr key={student.id} className=" justify-between ">
                <td className="px-[6%]  text-Gray900 py-4 flex gap-2">
                  <input type="checkbox" name="" id={student.id} />
                  <label htmlFor={student.id} className="font-medium">
                    {student.name}
                  </label>
                </td>
                <td>{student.course}</td>
                <td>{student.date}</td>
                <td className="  pl-6 ">{student.cohort}</td>
                <td className="relative pl-6 ">
                  <div className=" absolute flex gap-1 py-1 px-2 top-[50%] translate-y-[-50%] items-center bg-Warning50 text-Warning700 rounded-[16px]">
                    <div className=" text-[0.9rem] ">
                      <IoMdCheckmark />
                    </div>
                    {student.status}
                  </div>
                </td>
                <td className=" text-[1.2rem] pl-16 ">
                  <BiDotsVerticalRounded />
                </td>
              </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </DashboardLayout>
  );
}
