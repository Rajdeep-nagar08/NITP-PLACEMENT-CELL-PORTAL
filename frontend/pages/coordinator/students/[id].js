import Layout from '@/components/coordinator/Layout'
import Breadcrumbs from '@/components/coordinator/Breadcrumbs'
import { API_URL } from '@/config/index'
import { parseCookies } from '@/helpers/index'
import axios from 'axios'
import qs from 'qs'
import { useEffect, useState } from 'react'
import ApplicationDetails from '@/components/coordinator/students/ApplicationDetails'
import Eligiblejobs from '@/components/coordinator/students/EligibleJobs'
import StudentProfileEdit from '@/components/coordinator/students/StudentProfileEdit'

export default function StudentProfilePage({
  token = '',
  id = '',
  student = {},
}) {
  const pages = [
    { name: 'Students', href: '/coordinator/students', current: false },
    { name: `${student.attributes.name}`, href: '#', current: true },
  ]
  const [applications, setApplications] = useState([])
  const [eligibleJobs, setEligibleJobs] = useState([])

  const query = qs.stringify(
    {
      filters: {
        student: {
          id: {
            $eq: id,
          },
        },
      },
      populate: ['student', 'job.company'],
    },
    {
      encodeValuesOnly: true, // prettify url
    }
  )

  useEffect(() => {
    fetch(`${API_URL}/api/applications?${query}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((resp) => {
        console.log(resp.data)
        setApplications(resp.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    fetch(`${API_URL}/api/jobs?populate=*`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((resp) => {
        console.log(resp.data)
        setEligibleJobs(resp.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <Layout>
      <Breadcrumbs pages={pages} />
      <ApplicationDetails applications={applications} />
      <Eligiblejobs jobs={eligibleJobs} />
      <StudentProfileEdit student={student} token={token} />
    </Layout>
  )
}

export async function getServerSideProps({ req, params }) {
  const { token } = parseCookies(req)
  const id = params.id

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  }
  const res = await axios.get(
    `${API_URL}/api/students/${id}?populate=*`,
    config
  )

  return {
    props: {
      // data: res.data,
      // applications: applicationRes.data,
      // eligiblejobs: eligibleJobRes.data,
      // statusCode: res.status,
      student: res.data.data,
      token: token,
      id: id,
    }, // will be passed to the page component as props
  }
}
