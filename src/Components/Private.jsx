import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

     
function Private() {
    const userdata = localStorage.getItem ("userdata")

  return userdata ?  <Outlet/> : <Navigate to ="/" />
}

export default Private;