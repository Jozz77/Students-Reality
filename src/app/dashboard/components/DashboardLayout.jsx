import React from 'react'
import Sidebar from './Sidebar'

export default function DashboardLayout({children}) {
  return (
    <div  className=''>
      <Sidebar/>
      <div className=' w-[80%] ml-[20%] fixed bg-ButtonColor '>
      {children}
      </div>
    </div>
  )
}
