
import { React, useState, useEffect, useRef } from 'react'
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon, DocumentDownloadIcon, PaperAirplaneIcon, LightBulbIcon, PencilAltIcon } from '@heroicons/react/outline';
import Header from './LandingPageElements/Header';
import About from './LandingPageElements/About';
import Link from 'next/link';
import Footer from './LandingPageElements/Footer';
import Process from './LandingPageElements/Process';
import WhyUS from './LandingPageElements/WhyUS';

const corousalImage = [

    "/images/img1.jpg",
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
        // slideRef.current.classList.add('fade-anim');
        slideRef.current?.classList.add('fade-anim');
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
                        <div className='absolute top-3/4 '>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150"><path fill="#820000" fillOpacity="1" d="M0,64L1440,140L1440,320L0,320Z"></path></svg>
                        </div>
                        <div className='absolute top-3/4'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150"><path fill="#ffff" fillOpacity="1" d="M0,64L1445,150L1440,320L0,320Z"></path></svg>
                        </div>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2c0707" fill-opacity="1" d="M0,96L1440,0L1440,0L0,0Z"></path></svg> */}
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
            </main>
            <About />
            <Process />
            <WhyUS />
            <Footer />
        </>
    );
}

export default CoverPage
