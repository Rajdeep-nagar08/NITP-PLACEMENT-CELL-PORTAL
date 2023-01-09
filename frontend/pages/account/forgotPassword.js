import ForgotPassword from '@/components/account/ForgotPassword'
import React from 'react'
import { ToastContainer } from 'react-toastify'

export default function forgotPassword() {
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
      <ForgotPassword />
    </div>
  )
}
