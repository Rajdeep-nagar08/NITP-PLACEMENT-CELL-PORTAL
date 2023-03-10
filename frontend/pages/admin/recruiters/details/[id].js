import Breadcrumbs from '@/components/admin/Breadcrumbs'
import RecruiterDetails from '@/components/admin/recruiters/details'
import Layout from '@/components/admin/Layout'
import { API_URL } from '@/config/index'
import { parseCookies } from '@/helpers/index'
import axios from 'axios'

export default function RecruiterData({ data, token }) {
  const pages = [
    { name: 'Recruiters', href: '/admin/recruiters', current: false },
    { name: `${data.email}`, href: '#', current: true },
  ]

   
  return (
    <Layout>
      <RecruiterDetails pages={pages} />
    </Layout>
  )
}

export async function getServerSideProps({ req, params }) {
  
  const { token } = parseCookies(req)

  const id = params.id

  console.log("hi",id)

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  }

const res = await axios.get(`${API_URL}/api/recruiters/?email=${id}&populate=*`, config)

  console.log(res.data)

  return {
    props: { data: res.data, statusCode: res.status, token: token }, // will be passed to the page component as props
  }
}


// import { useEffect, useState } from 'react'

// export default function RecruiterDetails({ email }) {

//   const [recruiter, setRecruiter] = useState(null)

//   console.log("email=>",email)

//   useEffect(() => {
//     // Send a GET request to retrieve the recruiter data for the given email
//     fetch(`/api/recruiters/${email}`)
//       .then(response => response.json())
//       .then(data => setRecruiter(data.data[0]))
//       .catch(error => console.error(error))
//   }, [email])

//   if (!recruiter) {
//     return <p>Loading...</p>
//   }

//   return (
//     <div>
//       <h1>Recruiter Details</h1>
//       <table>
//         <tbody>
//           <tr>
//             <td>Company</td>
//             <td>{recruiter.attributes.company}</td>
//           </tr>
//           <tr>
//             <td>Recruiter Name</td>
//             <td>{recruiter.attributes.recruiter_name}</td>
//           </tr>
//           <tr>
//             <td>Email</td>
//             <td>{recruiter.attributes.email}</td>
//           </tr>
//           <tr>
//             <td>Created At</td>
//             <td>{recruiter.attributes.createdAt}</td>
//           </tr>
//           <tr>
//             <td>Updated At</td>
//             <td>{recruiter.attributes.updatedAt}</td>
//           </tr>
//           <tr>
//             <td>Published At</td>
//             <td>{recruiter.attributes.publishedAt}</td>
//           </tr>
//           <tr>
//             <td>Contact No</td>
//             <td>{recruiter.attributes.contact_no}</td>
//           </tr>
//           <tr>
//             <td>Approved</td>
//             <td>{recruiter.attributes.approved}</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   )
// }