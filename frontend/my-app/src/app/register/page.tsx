import React from 'react'
import Link from 'next/link'

function page() {
  return (
    <div className='w-full h-3/4 flex justify-center items-center'>
        <div className='bg-blue-300 p-4 rounded-xl'>
            <form action="" className='flex flex-col gap-2 text-white'>
                <label htmlFor="" className='flex flex-col'>
                E-mail
                    <input type="email" required />
                </label>

                <label htmlFor="" className='flex flex-col'>
                Username
                    <input type="text" required />
                </label>

                <label htmlFor="" className='flex flex-col'>
                Password
                  <input type="text" required />
                </label>

                <button type='submit' className='bg-blue-200 w-20 flex justify-center rounded-full'>Register</button>
                <Link href="connexion">Login</Link>
            </form>
        </div>
    </div>
  )
}

export default page
