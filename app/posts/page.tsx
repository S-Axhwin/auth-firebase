"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { UserAuth } from '../context/UserAuth';
import Image from 'next/image';

const Page =  () => {
    const { user } = UserAuth();
    console.log(user?.displayName);
    console.log(user);
    
    const [post, setPost] = useState(null) as any;
    useEffect(() => {
      (async() => {
        const data = await axios.get("/api/post") as any;
        setPost(data.data.post);
      })()
    }, [])
    
  return (
    <div className='grid w-full h-screen bg-slate-950 place-items-center rounded-lg'>
      <div className='display bg-slate-900 h-[85%] w-[100%] md:w-[60%] lg:w-[50%] rounded-xl p-2 overflow-hidden'>
        <div className='header bg-slate-500 h-20 w-full flex justify-center rounded-xl'>
            <div className='flex flex-col h-full justify-center'>
              <div className='flex gap-4'>
              <img className='h-10 w-10 rounded-full' src={user?.photoURL}/>
              <div>{user?.displayName}</div>
              </div>
            </div>
        </div>
        <div className='messagebox overflow-scroll h-[100%] p-5 gap-4 pb-5'>
        {post?.map((item:any, _ind:any) => {
  return (
    <div key={_ind} className={`w-full flex h-fit mb-10 ${item.username == user?.displayName ? "justify-end": ""}`}>
      <div className={`${item.username==user?.displayName ? "bg-gray-700" : "bg-gray-800"} p-4 rounded-md`}>
        <div className='flex justify-end text-blue-200'>
          <b>
      {item.username==user?.displayName?"You":item.username}
          </b>
        </div>
      {item.post}
      </div>   
    </div>)
})}
        </div>
      </div>
    </div>
  )
}

export default Page

