import ResetPassword from '@/components/account/ResetPassword'
import React from 'react'
import { ToastContainer } from 'react-toastify'

export default function ResetPasswordPage() {
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
      <ResetPassword />
    </div>
  )
}
