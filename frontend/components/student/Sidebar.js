/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState, useContext } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
  BriefcaseIcon,
  CalendarIcon,
  ChartBarIcon,
  ClipboardCheckIcon,
  ClipboardListIcon,
  DocumentTextIcon,
  FolderIcon,
  HomeIcon,
  IdentificationIcon,
  InboxIcon,
  LogoutIcon,
  MenuIcon,
  ShieldCheckIcon,
  UserIcon,
  XIcon,
} from '@heroicons/react/outline'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import AuthContext from '@/context/AuthContext'

const navigation = [
  {
    name: 'Profile',
    href: '/student/profile',
    icon: UserIcon,
  },
  {
    name: 'All Jobs',
    href: '/student/all-jobs',
    icon: ClipboardListIcon,
  },
  {
    name: 'Jobs Applied',
    href: '/student/jobs-applied',
    icon: ClipboardCheckIcon,
  },
  {
    name: 'Eligible Jobs',
    href: '/student/eligible-jobs',
    icon: BriefcaseIcon,
  },
  {
    name: 'Resume & Transcript',
    href: '/student/resume',
    icon: DocumentTextIcon,
  },
  {
    name: 'Reset Password',
    href: '/student/reset-password',
    icon: ShieldCheckIcon,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Sidebar({ heading = '', children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const router = useRouter()
  const { user, logout } = useContext(AuthContext)

  return (
    <div>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as='div'
          className='fixed inset-0 flex z-40 md:hidden'
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter='transition-opacity ease-linear duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-linear duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-gray-600 bg-opacity-75' />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter='transition ease-in-out duration-300 transform'
            enterFrom='-translate-x-full'
            enterTo='translate-x-0'
            leave='transition ease-in-out duration-300 transform'
            leaveFrom='translate-x-0'
            leaveTo='-translate-x-full'
          >
            <div className='relative flex-1 flex flex-col max-w-xs w-full bg-gray-800'>
              <Transition.Child
                as={Fragment}
                enter='ease-in-out duration-300'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='ease-in-out duration-300'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
              >
                <div className='absolute top-0 right-0 -mr-12 pt-2'>
                  <button
                    type='button'
                    className='ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className='sr-only'>Close sidebar</span>
                    <XIcon className='h-6 w-6 text-white' aria-hidden='true' />
                  </button>
                </div>
              </Transition.Child>
              <div className='flex-1 h-0 pt-5 pb-4 overflow-y-auto'>
                <div className='flex-shrink-0 flex items-center px-4'>
                  <Image
                    width={100}
                    height={40}
                    alt='Unirchitect'
                    src='/images/iitp.svg'
                  />
                </div>
                <nav className='mt-5 px-2 space-y-1'>
                  {navigation.map((item) => (
                    <Link href={item.href} key={item.name}>
                      <a
                        className={classNames(
                          item.href === router.pathname
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                        )}
                      >
                        <item.icon
                          className={classNames(
                            item.href === router.pathname
                              ? 'text-gray-300'
                              : 'text-gray-400 group-hover:text-gray-300',
                            'mr-4 flex-shrink-0 h-6 w-6'
                          )}
                          aria-hidden='true'
                        />
                        {item.name}
                      </a>
                    </Link>
                  ))}
                  <a
                    onClick={() => logout()}
                    className={classNames(
                      false
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'group flex items-center px-2 py-2 text-base font-medium rounded-md cursor-pointer'
                    )}
                  >
                    <LogoutIcon
                      className={classNames(
                        false
                          ? 'text-gray-300'
                          : 'text-gray-400 group-hover:text-gray-300',
                        'mr-4 flex-shrink-0 h-6 w-6'
                      )}
                      aria-hidden='true'
                    />
                    Logout
                  </a>
                </nav>
              </div>
              <div className='flex-shrink-0 flex bg-gray-700 p-4'>
                <a href='#' className='flex-shrink-0 group block'>
                  <div className='flex items-center'>
                    <div>
                      <img
                        className='inline-block h-10 w-10 rounded-full'
                        src='/user.png'
                        alt=''
                      />
                    </div>
                    <div className='ml-3'>
                      <p className='text-base font-medium text-white'>
                        {user && user.email}
                      </p>
                      <p className='text-sm font-medium text-gray-400 group-hover:text-gray-300 uppercase'>
                        {user && user.username}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </Transition.Child>
          <div className='flex-shrink-0 w-14'>
            {/* Force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className='hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0'>
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className='flex-1 flex flex-col min-h-0 bg-gray-800'>
          <div className='flex-1 flex flex-col pt-5 pb-4 overflow-y-auto'>
            <div className='flex items-center flex-shrink-0 px-4'>
              <Image
                width={180}
                height={100}
                alt='IIT Patna'
                src='/images/iitp.svg'
              />
            </div>
            <nav className='mt-5 flex-1 px-2 space-y-1'>
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <a
                    className={classNames(
                      item.href === router.pathname
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.href === router.pathname
                          ? 'text-gray-300'
                          : 'text-gray-400 group-hover:text-gray-300',
                        'mr-3 flex-shrink-0 h-6 w-6'
                      )}
                      aria-hidden='true'
                    />
                    {item.name}
                  </a>
                </Link>
              ))}
              <a
                onClick={() => logout()}
                className={classNames(
                  false
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'group flex items-center px-2 py-2 text-sm font-medium rounded-md cursor-pointer'
                )}
              >
                <LogoutIcon
                  className={classNames(
                    false
                      ? 'text-gray-300'
                      : 'text-gray-400 group-hover:text-gray-300',
                    'mr-3 flex-shrink-0 h-6 w-6'
                  )}
                  aria-hidden='true'
                />
                Logout
              </a>
            </nav>
          </div>
          <div className='flex-shrink-0 flex bg-gray-700 p-4'>
            <a href='#' className='flex-shrink-0 w-full group block'>
              <div className='flex items-center'>
                <div>
                  <Image
                    className='inline-block h-9 w-9 rounded-full'
                    height={40}
                    width={40}
                    src='/user.png'
                    alt=''
                  />
                </div>
                <div className='ml-3'>
                  <p className='text-sm font-medium text-white'>
                    {user && user.email}
                  </p>
                  <p className='text-xs font-medium text-gray-300 group-hover:text-gray-200 uppercase'>
                    {user && user.username}
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className='md:pl-64 flex flex-col flex-1'>
        <div className='sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100'>
          <button
            type='button'
            className='-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
            onClick={() => setSidebarOpen(true)}
          >
            <span className='sr-only'>Open sidebar</span>
            <MenuIcon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
        <main className='flex-1'>
          <div className='py-6'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
              <h1 className='text-2xl font-semibold text-gray-900'>
                {heading}
              </h1>
            </div>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8'>
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
