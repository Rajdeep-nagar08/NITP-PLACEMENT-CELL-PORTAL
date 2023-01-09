import CoordinatorsSection from '@/components/admin/coordinators/CoordinatorsSection'
import Layout from '@/components/admin/Layout'
import { toast } from 'react-toastify'
import { API_URL } from '@/config/index'
import { parseCookies } from '@/helpers/index'
import axios from 'axios'
import React, {useEffect} from 'react'
import qs from 'qs'

export default function Coordinators({ token }) {
  const [rowData, setRowData] = React.useState([])
  
  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const query = qs.stringify({
      filters: {
        role: {
          type: {
            $eq: 'coordinator',
          },
        },
      },
      populate: ['role'],
    },
    {
      encodeValuesOnly: true, // prettify url
    })

    axios.get(`${API_URL}/api/users?${query}`, config)
      .then(async res => {
        setRowData(res.data);
      })
      .catch(err => {
        toast.error("Error while fetching data");
        console.error(err);
      });
  }, [])

  return (
    <Layout>
      <CoordinatorsSection coordinators={rowData} token={token} />
    </Layout>
  )
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req)

  return {
    props: { token: token }, // will be passed to the page component as props
  }
}

// ex: shiftwidth=2 expandtab:
