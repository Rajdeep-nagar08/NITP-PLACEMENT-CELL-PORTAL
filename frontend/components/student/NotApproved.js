import Link from 'next/link'
import React from 'react'

export default function NotApproved() {
  return (
    <div>
      <h1 className='block text-sm font-medium text-gray-700'>
        Your account is not approved yet. Please wait till admin approves.
      </h1>
      <div className='mt-4'>
        <Link href='/student/profile'>
          <a className='block text-sm font-medium text-gray-700'>
            <button className='bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded'>
              Go to profile
            </button>
          </a>
        </Link>
      </div>
    </div>
  )
}
