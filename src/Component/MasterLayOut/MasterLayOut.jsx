import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
export default function MasterLayOut({logout}) {

  return (
      <>
      <Navbar logout={logout} />
      <div className="container">
        
         <Outlet />
         </div>
      </>
  )
}
