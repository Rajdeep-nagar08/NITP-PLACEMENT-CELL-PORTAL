import SignIn from '@/components/SignIn'
import React from 'react'
import { ToastContainer } from 'react-toastify'

export default function loginPage() {
  return (
    <div>
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
    </div>
  )
}
