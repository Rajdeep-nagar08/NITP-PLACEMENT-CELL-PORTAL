import React from 'react'
import Image from 'next/image'
import { CogIcon } from '@heroicons/react/solid'
function Loading() {
  return (
    <div className="font-bold text-4xl text-red-900 bg-white flex justify-center items-center min-h-screen">
    <div className="grid grid-rows-2 justify-items-center">
      <CogIcon className="animate-spin text-yellow-500 h-20 w-20" />
      Loading
    </div>
  </div>
  )
}

export default Loading
