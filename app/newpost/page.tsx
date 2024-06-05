"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import axios from 'axios'
import React, { useState } from 'react'
import { UserAuth } from '../context/UserAuth'
import {Navigate} from './action'

const Page = () => {
    const {user} = UserAuth();
    const [post, setPost] = useState("");
    const [loading, setloading] = useState(false);
    const submit = async (e:any) => {
      setloading(true)
      e.preventDefault()
      const username : string = user?.displayName;
      await axios.post("/api/post", {username, post});
      Navigate()
    }
  return (
    <form className='w-full h-screen grid place-items-center' >
      <div className='flex gap-3'>
        <Input onChange={(e:any) => setPost(e.target.value)} className='border-2'/>
        <Button onClick={submit} disabled={loading}>post</Button>
      </div>
    </form>
  )
}

export default Page