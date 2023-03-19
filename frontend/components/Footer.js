import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <div>
      <div className='grid grid-cols-2 md:grid-cols-6 bg-[#510505] text-stone-400'>
        <div className='col-span-2 p-4'>
          <h3 className='font-bold p-2 text-xl text-white'>Contact Us</h3>
          <p>National Institute of Technology Patna</p>
          <p>Patna, Bihar (800005), India</p>
          <p>Phone: +91-0612-237 1715 / 237 2715</p>
          <p>FAX : +91-0612-2670631 , 0612-2660480</p>
        </div>
        <div className='p-4'>
          <h2 className='font-bold p-2 text-xl pl-0 text-white'>Know Us</h2>
          <ul>

            <li><Link href='/'>Link1</Link></li>
            <li><Link href='/'>Link2</Link></li>
            <li><Link href='/'>Link3</Link></li>
            <li><Link href='/'>Link4</Link></li>
          </ul>
        </div>
        <div className='p-4'>
          <h2 className='font-bold p-2 text-xl pl-0 text-white'>
            Other Link
          </h2>
          <ul>
            <li><Link href='/'>Link1</Link></li>
            <li><Link href='/'>Link2</Link></li>
            <li><Link href='/'>Link3</Link></li>
            <li><Link href='/'>Link4</Link></li>
          </ul>
        </div>
        <div className='p-4'>
          <h2 className='font-bold p-2 text-xl pl-0 text-white'>
            Extra Link
          </h2>
          <ul>
            <li><Link href='/'>Link1</Link></li>
            <li><Link href='/'>Link2</Link></li>
            <li><Link href='/'>Link3</Link></li>
            <li><Link href='/'>Link4</Link></li>
          </ul>
        </div>
        <div className='p-4'>
          <h2 className='font-bold p-2 text-xl pl-0 text-white'>
            Useful Link
          </h2>
          <ul>
            <li><Link href='/'>Link1</Link></li>
            <li><Link href='/'>Link2</Link></li>
            <li><Link href='/'>Link3</Link></li>
            <li><Link href='/'>Link4</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
