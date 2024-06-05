"use client"
import React from 'react'
import { UserAuth } from '../context/UserAuth'
import NotLog from './NotLog';
import LogNav from './LogNav';
const Navbar = () => {
  const { user, loading } = UserAuth();
  if(loading) return <>loading</>
  if(!user) return <NotLog/>
  return (
    <LogNav/>
  )
}

export default Navbar