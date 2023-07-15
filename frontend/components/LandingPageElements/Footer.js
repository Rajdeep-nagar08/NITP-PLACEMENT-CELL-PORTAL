import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <div style={{fontFamily:'sans-serif'}}>
      <div className='grid grid-cols-2 md:grid-cols-6 bg-[#510505] text-stone-400'>
        <div className='col-span-2 p-4 pl-6'>
          <h3 className='font-bold p-2 text-xl text-white'>Contact Us</h3>
          <div className = 'p-2 font-medium text-white'>
          <p>National Institute of Technology Patna</p>
          <p>Patna, Bihar (800005), India</p>
          <p>Phone: +91-0612-237 1715 / 237 2715</p>
          <p>FAX : +91-0612-2670631 , 0612-2660480</p><br/>
          <p className='pl-0'>
    <span style={{ display: 'inline-block' }} className='px-2 '>
    <a href="https://goo.gl/maps/srZ6whpfDGqg85sp6" target='_blank' style={{ height:'24px', width:'24px' }}><img style={{ height:'24px', width:'24px', padding:'2' }} src="/linkedin.png" alt="linkedin" /></a>
    </span>
    <span style={{ display: 'inline-block' }}>
    <a href="https://goo.gl/maps/srZ6whpfDGqg85sp6" target='_blank' style={{ height:'24px', width:'24px' }}><img style={{ height:'24px', width:'24px', padding:'2' }} src="/location.png" alt="location" /></a>
    </span>
   </p>
          </div>
        </div>
        <div className='p-4 text-[#510505] bg-[rgb(245,245,245)]'>
          <h2 className='font-bold p-2 text-xl  text-black pl-[6.4px]'>Know Us</h2>
          <ul className='p-2 font-medium'>

            <li className='py-1'><Link href='/'>Link1</Link></li>
            <li className='py-1'><Link href='/'>Link2</Link></li>
            <li className='py-1'><Link href='/'>Link3</Link></li>
            <li className='py-1'><Link href='/'>Link4</Link></li>
          </ul>
        </div>
        <div className='p-4 text-[#510505]  bg-[rgb(245,245,245)]'>
          <h2 className='font-bold p-2 text-xl text-black pl-[6.4px]'>
            Other Link
          </h2>
          <ul className='p-2 text-[#510505] font-medium'>
            <li className='py-1'><Link href='/'>Link1</Link></li>
            <li className='py-1'><Link href='/'>Link2</Link></li>
            <li className='py-1'><Link href='/'>Link3</Link></li>
            <li className='py-1'><Link href='/'>Link4</Link></li>
          </ul>
        </div>
        <div className='p-4  text-[#510505]  bg-[rgb(245,245,245)]'>
          <h2 className='font-bold p-2 text-xl  text-black pl-[6.4px]'>
            Extra Link
          </h2>
          <ul className='p-2 font-medium'>
            <li className='py-1'><Link href='/'>Link1</Link></li>
            <li className='py-1'><Link href='/'>Link2</Link></li>
            <li className='py-1'><Link href='/'>Link3</Link></li>
            <li className='py-1'><Link href='/'>Link4</Link></li>
          </ul>
        </div>
        <div className='p-4 text-[#510505]  bg-[rgb(245,245,245)]'>
          <h2 className='font-bold p-2 text-xl text-black pl-[6.4px]'>
            Useful Link
          </h2>
          <ul className='p-2 font-medium'>
            <li className='py-1'><Link href='/'>Link1</Link></li>
            <li className='py-1'><Link href='/'>Link2</Link></li>
            <li className='py-1'> <Link href='/'>Link3</Link></li>
            <li className='py-1'><Link href='/'>Link4</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
