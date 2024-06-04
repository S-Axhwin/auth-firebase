import Link from 'next/link'
import React from 'react'

const LogNav = () => {
  return (
    <div className='w-full p-4 flex'>
      <ul className='flex gap-5'>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/dashboard'>dashboard</Link>
        
        </li>
        <li>
          <Link href={"/newpost"}>Post</Link>
        </li>
      </ul>
    </div>
  )
}

export default LogNav