"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { UserAuth } from '../context/UserAuth';
import Image from 'next/image';

const Page =  () => {
    const { user } = UserAuth();
    console.log(user?.displayName);
    
    const [post, setPost] = useState(null) as any;
    useEffect(() => {
      (async() => {
        const data = await axios.get("/api/post") as any;
        setPost(data.data.post);
      })()
    }, [])
    
  return (
    <div className='w-full h-screen grid place-items-center'>
      <div className='w-[100%] md:w-[60%] lg:w-[50%] grid gap-4 bg-slate-900 p-5 rounded-2xl'>
        {post?.map((item:any, _ind:any) => {
          return (
            <div key={_ind} className={`w-full flex  ${item.username == user.displayName ? "justify-end": ""}`}>
              <div className=' bg-slate-800 p-4 rounded-md  '>
                <div className='flex justify-end '>
              {item.username==user.displayName?"You":item.username}
                </div>
              {item.post}
              </div>   
            </div>)
        })}
        </div>
    </div>
  )
}

export default Page