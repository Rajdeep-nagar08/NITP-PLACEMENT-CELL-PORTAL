
import { React, useState, useEffect, useRef } from 'react'
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon, DocumentDownloadIcon, PaperAirplaneIcon,LightBulbIcon, PencilAltIcon } from '@heroicons/react/outline';
import Header from './Header';
import Link from 'next/link';
import Footer from './Footer';
import WhyUS from './WhyUS';

const corousalImage = [
    "/images/img1.jpg",
    "/images/bg.jpg",
    "/images/img2.jpg",
    "/images/img3.jpg",
]

function CoverPage() {
    let i = 0;

    const [currentIndex, setCurrentIndex] = useState(0);
    const slideRef = useRef()
    const removeAnimation = () => {
        slideRef.current.classList.remove("fade-anim");
    }

    useEffect(() => {
        slideRef.current.addEventListener('animationend', removeAnimation)
        startSlider();
    }, [])

    const startSlider = () => {
        setInterval(() => {
            handleOnNextClick();
        }, 5000);
    };
    const handleOnNextClick = () => {
        i = (i + 1) % (corousalImage.length);
        setCurrentIndex(i);
        slideRef.current.classList.add('fade-anim');
    }
    const handleOnPrevClick = () => {
        i = (currentIndex + corousalImage.length - 1) % (corousalImage.length);
        setCurrentIndex(i);
        slideRef.current.classList.add('fade-anim');
    }
    return (
        <>
            <Header />
            <main>
                {/* Corousal start */}
                <div ref={slideRef} className='w-full select-none relative'>
                    <div className='aspect-w-16 aspect-h-7'>
                        <img src={corousalImage[currentIndex]} alt='' />
                    </div>
                    <div className='absolute top-1/4 flex w-full justify-between items-center'>

                    <div className=' bg-black/50 md:p-10 w-1/3 h-1/2 md:h-1/4'>
                        <p className='text-white font-bold text-md md:text-4xl'>Lorem ipsum dolor sit amet</p>
                    </div>
                    {/* <div className='md:mr-10 w-1/3 md:w-1/6'>
                        <div className='rounded-lg bg-amber-400 m-2 p-3 border-2 border-white font-semibold text-sm' ><Link href='/'>Login</Link></div>
                        <div className='rounded-lg bg-amber-400 m-2 p-3 border-2 border-white font-semibold text-sm' ><Link href='/'>Student Registration</Link></div>
                        <div className='rounded-lg bg-amber-400 m-2 p-3 border-2 border-white font-semibold text-sm' ><Link href='/'>Company Registration</Link></div>
                    </div> */}
                    </div>
                    <div className='absolute top-1/2 transform -translate-y-1.2 flex w-full px-3 justify-between items-center'>
                        <button onClick={handleOnPrevClick} type='button'><ChevronDoubleLeftIcon className='w-7 h-7 text-white bg-gray-800 rounded-full p-1' /></button>
                        <button onClick={handleOnNextClick} type='button'><ChevronDoubleRightIcon className='w-7 h-7 text-white bg-gray-800 rounded-full p-1' /></button>
                    </div>
                    <div className='absolute top-3 right-0 bg-yellow-300 px-2 flex font-bold rounded-l-lg p-1 animate-bounce'>
                        <a className='' href='/Brochure2022_NIT-Patna.pdf ' download>Download Brochure and Proforma </a>
                        <DocumentDownloadIcon className='h-7 w-7 p-1 ' />
                    </div>
                </div>
                <div className='text-center mt-5'>
                    <h1 className='font-bold text-4xl text-[#510505] font-serif underline underline-offset-4'>About Us</h1>
                    <div className='text-center grid md:grid-cols-2 min-h-96'>

                        <div>
                            <img src=''/>
                        </div>
                        <div>

                            <p className='p-5 py-28 indent-5'>
                                The Training and Placement cell of NIT PATNA forms an integral part in shaping the careers of the students of the institute. It organizes and coordinates campus placement program to fulfill its commitment of a job to every aspirant. Not only that it also encourages and works towards the continuing education for the college employees.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Corousal ends */}

            <div className='bg-[#510505] text-white pb-20' >
                <div className='text-center py-10'>
                    <h5 className=' text-slate-400 m-6'> About Us</h5>
                    <h1 className='text-4xl w-96 mx-auto leading-normal  font-bold mb-12'> Our Aim, Mission and Vision</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto gap-10 group place-items-center'>
                    <div className='bg-white/10 group-hover:blur-sm hover:!blur-none mx-5 md:mx-0 cursor-pointer p-8 rounded-xl mix-blend-luminosity grid place-items-center  group-hover:scale-[0.85] hover:!scale-100'>
                        <div className='rounded-full border-2 w-[7rem] border-yellow-400 '>
                            <PencilAltIcon className='h-20 w-20 rotate-45 text white m-4 ' />
                        </div>
                        <h4 className='text-xl font-bold p-3'>AIM</h4>
                        <p className='text-sm leading-7 my-3 font-light opacity-50'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    <div className='grid place-items-center bg-white/10 cursor-pointer mx-5 md:mx-0 p-8 rounded-xl mix-blend-luminosity group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100'>
                        <div className='rounded-full border-2 w-[7rem] border-yellow-400'>
                            <PaperAirplaneIcon className='h-20 w-20 rotate-45 text white m-4' />
                        </div>
                        <h4 className='text-xl font-bold p-3'>Mission</h4>
                        <p className='text-sm leading-7 my-3 font-light opacity-50'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    <div className='grid place-items-center bg-white/10  cursor-pointer p-8 mx-5 md:mx-0 rounded-xl mix-blend-luminosity group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100'>
                        <div className='rounded-full border-2 w-[7rem] border-yellow-400'>
                            <LightBulbIcon className='h-20 w-20 text white m-4' />
                        </div>
                        <h4 className='text-xl font-bold p-3'>Vision</h4>
                        <p className='text-sm leading-7 my-3 font-light opacity-50'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>
            </div>
            </main>
            <WhyUS />
            <Footer />
        </>
    );
}

export default CoverPage
