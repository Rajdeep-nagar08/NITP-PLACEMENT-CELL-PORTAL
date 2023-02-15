import Layout from '@/components/student/Layout'
import Navbar from '@/components/student/Header'
import Head from 'next/head'
import Image from 'next/image'
import { ToastContainer } from 'react-toastify'
import SignIn from '@/components/SignIn'

export default function Home({
<<<<<<< HEAD
  title = 'NIT Patna Placement Portal',
=======
  title = 'Training and Placement Cell NIT Patna',
>>>>>>> cc3b040cd301c737c72bcd5971638e7830678f74
  keywords = '',
  description = '',
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='keywords' content={keywords} />
        <meta name='description' content={description} />
      </Head>
      <div className='overflow-hidden'>
        {/*  Page content */}
        <main className='flex-grow'>
          <ToastContainer
            position='top-right'
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <SignIn />
        </main>
        {/*  Site footer */}
      </div>
    </>
  )
}
