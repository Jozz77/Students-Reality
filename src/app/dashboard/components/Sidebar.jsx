import Link from 'next/link';
import React from 'react'
import { FiSearch } from "react-icons/fi";
import { RiHome6Line } from "react-icons/ri";
import Avatar from '../assets/Avatar.png'
import Image from 'next/image';

export default function Sidebar() {
  return (
    <div className=' fixed top-0 bottom-0 px-[2%]  w-[20%] bg-ButtonColor h-[100vh] '>
      <section className=' relative text-[0.95rem] xxl:text-base text-NormalWhite mt-12 xxl:mt-16 '>
        <input type="text" className=' rounded-[6px] w-full outline-none py-2 pl-[15%]  bg-Gray700 placeholder:text-NormalWhite ' name="" id="" placeholder='Search' />
        <div className=' absolute left-[3%] top-[50%] translate-y-[-50%] '>
        <FiSearch />
        </div>
      </section>
 
      <section className=' mt-4 flex flex-col py-4 gap-4 text-[0.95rem] xxl:text-base text-Gray100 font-semibold'>
        <Link href='/dashboard' className=' flex gap-2 items-center '>
            <div className=' text-[1.1rem] '>
            <RiHome6Line />
            </div>
            <span>Home</span>
        </Link>
        <Link href='/dashboard' className=' flex gap-2 items-center '>
            <div className=' text-[1.1rem] '>
            <RiHome6Line />
            </div>
            <span>Courses</span>
        </Link>
        <Link href='/dashboard/students' className=' flex gap-2 items-center '>
            <div className=' text-[1.1rem] '>
            <RiHome6Line />
            </div>
            <span>Students</span>
        </Link>
        <Link href='/dashboard' className=' flex gap-2 items-center '>
            <div className=' text-[1.1rem] '>
            <RiHome6Line />
            </div>
            <span>Wallet</span>
        </Link>
        
      </section>

      {/* down part */}
     <div className=' absolute bottom-[5%] text-[0.95rem] xxl:text-base flex flex-col gap-5 xxl:gap-6 '>
     <section className=' mt-10 flex flex-col gap-4 text-Gray100 font-semibold'>
        <Link href='/dashboard' className=' flex gap-2 items-center '>
            <div className=' text-[1.1rem] '>
            <RiHome6Line />
            </div>
            <span>Support</span>
        </Link>
        <Link href='/dashboard' className=' flex gap-2 items-center '>
            <div className=' text-[1.1rem] '>
            <RiHome6Line />
            </div>
            <span>Settings</span>
        </Link>  
      </section>

      <section className=' pt-4 xxl:pt-5 border-solid border-Gray600 border-t-[1px] text-Gray100'>
        <div className=' flex gap-2 items-center '>
        <div>
            <Image src={Avatar} className=' w-full' alt='Profile Image' />
        </div>
        <div className=' text-[0.85rem] xxl:text-[0.9rem]'>
            <h4>Ayele Tutor Center</h4>
            <small className=''>ayele@tutor.com</small>
        </div>
        </div>
      </section>
     </div>
    </div>
  )
}
