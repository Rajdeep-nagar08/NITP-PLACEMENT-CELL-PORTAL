import Layout from '@/components/admin/Layout'
import Notifications from '@/components/admin/notifications'
import { parseCookies } from '@/helpers/index'
import React from 'react'

export default function index({ token }) {
  return (
    <>
      <Layout>
        <Notifications token={token} />
      </Layout>

      <div>
        this is the login page notifications
      </div>
    </>
  );
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req)

  return {
    props: { token: token }, // will be passed to the page component as props
  }
}
