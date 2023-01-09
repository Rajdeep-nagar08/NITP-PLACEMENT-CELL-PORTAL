import React, { useCallback, useEffect, useState } from 'react'
import RegisteredGraph from '@/components/coordinator/home/RegisteredGraph'
import PlacedGraph from '@/components/coordinator/home/PlacedGraph'
import axios from 'axios'
import { API_URL } from '@/config/index'

export default function Home({ token = '' }) {
  const [student, setStudent] = useState([])
  const [ftestudent, setFtestudent] = useState([])
  const [internstudent, setInternstudent] = useState([])

  useEffect(() => {
    axios
      .get(`${API_URL}/api/students?populate=*`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async (res) => {
        let fetched_data = res.data.data
        fetched_data = await getPlacedStatus(fetched_data)
        // Get fte students
        const fte_students = fetched_data.filter(
          (student) => student.attributes.registered_for === 'FTE'
        )
        // Get intern students
        const intern_students = fetched_data.filter(
          (student) => student.attributes.registered_for === 'Internship'
        )

        setFtestudent(fte_students)
        setInternstudent(intern_students)
        setStudent(fetched_data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  // Get placed status of students from /api/student/placed-status
  // @Ouput: {placed: {placed_a1: [], placed_a2: [], placed_x: []}}
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

  return (
    <div className='mt-4'>
      <ul
        role='list'
        className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'
      >
        <li className='md:col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200 p-4'>
          <RegisteredGraph student={student} title='Registered Students' />
        </li>
        <li className='md:col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200 p-4'>
          <RegisteredGraph student={ftestudent} title='FTE students' />
        </li>
        <li className='md:col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200 p-4'>
          <RegisteredGraph student={internstudent} title='Intern students' />
        </li>
        <li className='md:col-span-2 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200 p-4'>
          <PlacedGraph student={student} />
        </li>
      </ul>
    </div>
  )
}
