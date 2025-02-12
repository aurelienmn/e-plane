import React from 'react'
import Link from 'next/link'

function page() {
  return (
    <div className='w-full h-3/4 flex justify-center items-center'>
        <div className='bg-blue-300 p-4 rounded-xl'>
            <form action="" className='flex flex-col gap-2 text-white'>
                <label htmlFor="" className='flex flex-col'>
                E-mail
                    <input type="email" />
                </label>
                <label htmlFor="" className='flex flex-col'>
                Password
                  <input type="text" />
                </label>
                <button className='bg-blue-200 flex p-1 w-14 justify-center rounded-full'>Login</button>
                <Link href="register">Register</Link>
            </form>
        </div>
    </div>
  )
}

export default page
