
import {React, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image';
import Link from 'next/link';
const MENU_LIST = [
    {
        idx: 1,
        text: "About",
        href: "/"
    },
    {
        idx: 2,
        text: "Login",
        href: "/loginPage",
    },
    {
        idx: 3,
        text: "Why Recruit us?",
        href: "/"
    },
    {
        idx: 4,
        text: "Know your alumini",
        href: "/"
    },
    {
        idx: 5,
        text: "Contact Us",
        href: "/"
    },
]


function CoverPage() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <nav className="">
                <div className="mx-auto bg-[#2c0707]  p-3 flex justify-between">
                    <div className='flex'>
                        <Image
                            width={50}
                            height={50}
                            alt='NIT Patna'
                            src='/images/logo.png'
                        />
                        <div className=" font-serif font-extrabold text-2xl p-2 min-h-14 text-white ">
                            Training and Placement Cell
                        </div>
                    </div>

                    <div className="hidden md:block h-8">
                        <div className="flex flex-row-reverse items-center">
                            {MENU_LIST.map((menu) => (
                                <Link href={menu.href} key={menu.idx}>
                                    <a className='text-[#858383] hover:bg-[#67101075] self-center p-3 rounded-md text-sm font-medium hover:text-yellow-200'>{menu.text}</a>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="flex md:hidden ">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className=" inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {MENU_LIST.map((menu) => (
                        <div key={menu.idx} className="md:hidden bg-[#510505]" id="mobile-menu">
                            <div ref={menu} className=" w-auto flex flex-row-reverse">
                                <Link href={menu.href} >
                                    <a className="hover:bg-[#67101075] text-center hover:text-yellow-200 font-bold p-1 text-[#9d9a9a] w-screen rounded-md text-sm ">{menu.text}</a>
                                </Link>
                            </div>
                        </div>
                    ))}
                </Transition>
            </nav>
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    {/* <!-- Replace with your content --> */}
                    <div className="px-4 py-6 sm:px-0">
                        <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
                    </div>
                    {/* <!-- /End replace --> */}
                </div>
            </main>
        </div>
    );
}

export default CoverPage
