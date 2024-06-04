"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Page =  () => {
    const [post, setPost] = useState(null) as any;
    useEffect(() => {
      (async() => {
        const data = await axios.get("/api/post") as any;
        setPost(data.data.post);
      })()
    }, [])
    
  return (
    <div>
        {post?.map((item:any, _ind:any) => {
            return (
            <div key={_ind}>
                {item.username}: {item.post}
            </div>)
        })}
    </div>
  )
}

export default Page