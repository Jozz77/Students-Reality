import React from 'react'
import Sidebar from './Sidebar'

export default function DashboardLayout({children}) {
  return (
    <div  className=''>
      <Sidebar/>
      <div className=' w-full sm:w-[80%] ml-0 sm:ml-[20%] relative sm:fixed bg-NormalWhite sm:bg-ButtonColor '>
      {children}
      </div>
    </div>
  )
}
