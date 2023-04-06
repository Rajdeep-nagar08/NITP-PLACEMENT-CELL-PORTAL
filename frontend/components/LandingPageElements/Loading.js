import React from 'react'
import Image from 'next/image'
import { CogIcon } from '@heroicons/react/solid'
function Loading() {
  return (
    <div className='font-bold text-4xl flex items-center relative  text-red-900 bg-white min-h-screen'>
      <div className='absolute top-1/3 left-1/2 grid grid-rows-2 justify-items-center'>
        
        <CogIcon className='motion-safe:animate-spin text-yellow-500 h-20 w-20'/>
        
        Loading
      </div>
    </div>
  )
}

export default Loading
