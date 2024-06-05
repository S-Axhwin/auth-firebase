"use client"
import { Button } from '@/components/ui/button'
import React from 'react'
import { UserAuth } from '../context/UserAuth';
import {Navigate} from "./action"
const page = () => {
  const { user, googleSignIn, logOut, loading }  = UserAuth();
  return (
    <div className="h-screen w-screen grid place-items-center">
        <Button onClick={async() => {googleSignIn().then(() => {
            console.log('then completed');
            Navigate()
            
        })}}> login </Button>
    </div>
  )
}

export default page