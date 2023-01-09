import Layout from '@/components/admin/Layout'
import { AgGridReact } from 'ag-grid-react'
import { toast } from 'react-toastify'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'
import { useEffect, useState } from 'react'
import { parseCookies } from '@/helpers/index'
import axios from 'axios'
import { API_URL } from '@/config/index'
import Link from 'next/link'

export default function Jobs({ token }) {
  const [rowData, setRowData] = useState([])

  const [columnDefs] = useState([
    {
      headerName: 'S.No.',
      valueGetter: 'node.rowIndex + 1',
    },
    {
      headerName: 'Company',
      field: 'attributes.company.data.attributes.company_name',
      cellRenderer: function (params) {
        return (
          <div>
            <Link
              href={`/admin/companies/${params.data.attributes.company.data.id}`}
            >
              {params.value}
            </Link>
          </div>
        )
      },
    },
    {
      headerName: 'Approval Status',
      field: 'attributes.approval_status',
    },
    {
      headerName: 'Category',
      field: 'attributes.category',
    },
    {
      headerName: 'Job Title',
      field: 'attributes.job_title',
      cellRenderer: function (params) {
        return (
          <div>
            <Link href={`/admin/jobs/${params.data.id}`}>{params.value}</Link>
          </div>
        )
      },
    },
    {
      headerName: 'Classification',
      field: 'attributes.classification',
    },
    {
      headerName: 'JAF',
      field: 'attributes.jaf.data.attributes.url',
      cellRenderer: function (params) {
        return (
          <div>
            {params.value ? (
              <a
                href={`${API_URL}${params.value}`}
                target='_blank'
                rel='noreferrer'
                className='inline-flex items-center py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-indigo-600 hover:text-indigo-700 focus:text-indigo-800'
              >
                View JAF
              </a>
            ) : (
              <span className='text-xs font-medium'>No JAF</span>
            )}
          </div>
        )
      },
    },
  ])

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    }

    axios
      .get(`${API_URL}/api/jobs?populate=*&sort=id:desc`, config)
      .then((res) => {
        let fetched_data = res.data.data
        setRowData(fetched_data)
      })
      .catch((err) => {
        toast.error('Error while fetching data')
        console.error(err)
      })
  }, [])

  return (
    <Layout>
      <div className='flex-1'>
        <div className='border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8'>
          <div className='flex-1 min-w-0'>
            <h1 className='text-lg font-medium leading-6 text-gray-900 sm:truncate'>
              Jobs
            </h1>
          </div>
          <div className='mt-4 flex sm:mt-0 sm:ml-4'>
            <button
              type='button'
              className='order-1 ml-3 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:order-0 sm:ml-0'
            >
              Deactivate
            </button>
            <Link href={`/admin/jobs/add`}>
              <button
                type='button'
                className='order-0 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:order-1 sm:ml-3'
              >
                Add Job
              </button>
            </Link>
          </div>
        </div>
        <div className='ag-theme-alpine mt-4' style={{ height: 600 }}>
          <AgGridReact
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={{ sortable: true, filter: true }}
          ></AgGridReact>
        </div>
      </div>
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
