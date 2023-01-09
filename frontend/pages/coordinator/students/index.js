import Layout from '@/components/coordinator/Layout'
import { AgGridReact } from 'ag-grid-react'
import { toast } from 'react-toastify'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'
import { useState, useCallback, useRef, useEffect } from 'react'
import { parseCookies } from '@/helpers/index'
import axios from 'axios'
import { API_URL } from '@/config/index'
import Link from 'next/link'

export default function Students({ token }) {
  const [rowData, setRowData] = useState([])

  const [columnDefs] = useState([
    {
      headerName: 'Roll No.',
      field: 'attributes.roll',
      cellRenderer: function (params) {
        return (
          <div>
            <Link href={`/coordinator/students/${params.data.id}`}>
              {params.value}
            </Link>
          </div>
        )
      },
      headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      checkboxSelection: true,
    },
    {
      headerName: 'Name',
      field: 'attributes.name',
      cellRenderer: function (params) {
        return (
          <div>
            <Link href={`/coordinator/students/${params.data.id}`}>
              {params.value}
            </Link>
          </div>
        )
      },
    },
    {
      headerName: 'Placed Status',
      field: 'attributes.placed',
    },
    {
      headerName: 'Internship Status',
      field: 'attributes.internship',
    },
    {
      headerName: 'Course',
      field: 'attributes.course.data.attributes.course_name',
    },
    {
      headerName: 'Program',
      field: 'attributes.program.data.attributes.program_name',
    },
    {
      headerName: 'CPI',
      field: 'attributes.cpi',
      filter: 'agNumberColumnFilter',
    },
    {
      headerName: 'Mobile',
      field: 'attributes.mobile_number_1',
    },
    {
      headerName: 'Alternate Mobile',
      field: 'attributes.mobile_number_2',
    },
    {
      headerName: 'Institute Email',
      field: 'attributes.institute_email_id',
    },
    {
      headerName: 'Personal Email',
      field: 'attributes.personal_email_id',
    },
    {
      headerName: 'Registered For',
      field: 'attributes.registered_for',
    },
    {
      headerName: 'Resume',
      field: 'attributes.resume',
      cellRenderer: function (params) {
        return (
          <div>
            {params.value.data ? (
              <a
                href={API_URL + params.value.data.attributes.url}
                target='_blank'
                rel='noreferrer'
                className='inline-flex items-center py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-indigo-600 hover:text-indigo-700 focus:text-indigo-800'
              >
                Resume
              </a>
            ) : (
              <span>NA</span>
            )}
          </div>
        )
      },
    },
    {
      headerName: 'Resume Link',
      field: 'attributes.resume_link',
      cellRenderer: function (params) {
        return (
          <div>
            {params.value ? (
              <a
                href={params.value}
                target='_blank'
                rel='noreferrer'
                className='inline-flex items-center py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-indigo-600 hover:text-indigo-700 focus:text-indigo-800'
              >
                Resume Link
              </a>
            ) : (
              <span>NA</span>
            )}
          </div>
        )
      },
    },
    {
      headerName: 'Xth Marks',
      field: 'attributes.X_marks',
    },
    {
      headerName: 'XIIth Marks',
      field: 'attributes.XII_marks',
    },
    {
      headerName: 'Category',
      field: 'attributes.category',
    },
    {
      headerName: 'Gender',
      field: 'attributes.gender',
    },
    {
      headerName: 'Date of Birth',
      field: 'attributes.date_of_birth',
    },
    {
      headerName: 'Bachelor Marks',
      field: 'attributes.bachelor_marks',
    },
  ])

  const getPlacedStatus = useCallback(async (data) => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    }
    const res = await axios.get(`${API_URL}/api/student/placed-status`, config)
    const placed = res.data.placed
    const placed_a1 = placed.placed_a1
    const placed_a2 = placed.placed_a2
    const placed_x = placed.placed_x

    // Update placed status of students
    const new_row_data = data.map((student) => {
      if (placed_a1.includes(student.attributes.roll)) {
        student.attributes.placed = 'A1'
      } else if (placed_a2.includes(student.attributes.roll)) {
        student.attributes.placed = 'A2'
      } else if (placed_x.includes(student.attributes.roll)) {
        student.attributes.placed = 'X'
      } else {
        student.attributes.placed = 'Not Placed'
      }
      return student
    })

    return new_row_data
  }, [])

  const getInternshipStatus = useCallback(async (data) => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    }
    const res = await axios.get(`${API_URL}/api/student/intern-status`, config)
    const internship = res.data.internship

    // Update internship status of students
    const new_row_data = data.map((student) => {
      if (internship.includes(student.attributes.roll)) {
        student.attributes.internship = 'Got Internship'
      } else {
        student.attributes.internship = 'None'
      }
      return student
    })
    console.log(new_row_data)
    return new_row_data
  }, [])

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    }

    // Get all students, for strapi's pagination, using count of 50 per page
    const PAGE_SIZE = 100

    axios
      .get(
        `${API_URL}/api/students?pagination[page]=1&pagination[pageSize]=${PAGE_SIZE}&populate=*`,
        config
      )
      .then(async (res) => {
        let fetched_data = res.data.data
        let total_cnt = res.data.meta.pagination.total

        while (fetched_data.length < total_cnt) {
          const res = await axios.get(
            `${API_URL}/api/students?pagination[page]=${
              fetched_data.length / PAGE_SIZE + 1
            }&pagination[pageSize]=${PAGE_SIZE}&populate=*`,
            config
          )
          fetched_data = fetched_data.concat(res.data.data)
          // fetched_data.length += res.data.meta.pagination.pageSize;
        }
        fetched_data = await getPlacedStatus(fetched_data)
        fetched_data = await getInternshipStatus(fetched_data)
        setRowData(fetched_data)
      })
      .catch((err) => {
        toast.error('Error while fetching data')
        console.error(err)
      })
  }, [])

  const gridRef = useRef()
  const onBtExport = useCallback(() => {
    // See comment in pages/admin/students/index.js for logic behind this

    const selected_and_visible_node = gridRef.current.api
      .getSelectedNodes()
      .findIndex((node) => node.displayed)

    if (selected_and_visible_node == -1) {
      // If nothing is selected, export ALL
      gridRef.current.api.exportDataAsCsv()
    } else {
      // Else, export selected
      gridRef.current.api.exportDataAsCsv({
        onlySelected: true,
      })
    }
  }, [])
  return (
    <Layout>
      <div className='bg-white px-4 py-5 border-b border-gray-200 sm:px-6'>
        <div className='-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap'>
          <div className='ml-4 mt-2'>
            <h3 className='text-lg leading-6 font-medium text-gray-900'>
              Students
            </h3>
          </div>
          <div className='ml-4 mt-2 flex-shrink-0'>
            <button
              type='button'
              onClick={onBtExport}
              className='inline-flex items-center px-4 py-2
              border border-transparent text-xs font-medium rounded shadow-sm
              text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none
              focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              Export
            </button>
          </div>
        </div>
      </div>
      <div className='ag-theme-alpine mt-4' style={{ height: 600 }}>
        <AgGridReact
          ref={gridRef}
          rowMultiSelectWithClick={true}
          rowData={rowData}
          columnDefs={columnDefs}
          rowSelection='multiple'
          defaultColDef={{ sortable: true, filter: true }}
          overlayNoRowsTemplate='Please wait while data is being fetched'
        ></AgGridReact>
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
