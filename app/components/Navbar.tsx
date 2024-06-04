"use client"
import React from 'react'
import { UserAuth } from '../context/UserAuth'
import NotLog from './NotLog';
const Navbar = () => {
  const { user } = UserAuth();
  if(!user) return <NotLog/>
  return (
    <div>Navbar</div>
  )
}

export default Navbar