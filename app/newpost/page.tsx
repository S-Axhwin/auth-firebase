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
    const submit = async (e:any) => {
        e.preventDefault()
        const username : string = user.displayName;
        await axios.post("/api/post", {username, post});
        Navigate()
    }
  return (
    <form >
        <Input onChange={(e:any) => setPost(e.target.value)}/>
        <Button onClick={submit}>post</Button>
    </form>
  )
}

export default Page