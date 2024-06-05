import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const NotLog = () => {
  return (
    <div className='w-full p-4 flex justify-between'>
      <ul className='flex gap-5'>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>about</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Button>
            <Link href={"/login"}>login</Link>
          </Button>
        </li>
      </ul>
    </div>
  )
}

export default NotLog