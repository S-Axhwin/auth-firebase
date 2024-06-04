"use client"
import React from 'react'
import { UserAuth } from '../context/UserAuth.jsx'
import { redirect } from 'next/navigation';

const page = () => {
  const {user, loading, logOut} = UserAuth();
  if(loading) return <>loading</>
  if(!user) redirect("/")
  return (
    <div>
      profile
      <button onClick={() => logOut()}>logout</button>
    </div>
  )
}

export default page