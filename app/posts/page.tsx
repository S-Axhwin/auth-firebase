"use server"
import { PrismaClient } from '@prisma/client'
import React from 'react'

const page = async () => {
    const prisma = new PrismaClient();
    const post = await prisma.post.findMany() as any;

  return (
    <div>
        {post.map((item:any) => {
            return (
            <div>
                {item.username}: {item.post}
            </div>)
        })}
    </div>
  )
}

export default page