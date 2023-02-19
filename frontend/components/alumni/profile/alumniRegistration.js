import { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import { API_URL } from '@/config/index'
import AuthContext from '@/context/AuthContext'

export default function AlumniRegistration({ token = '' }) {
  const [values, setValues] = useState({
    name: '',
    roll: '',
    email: '',
    contact_number: '',
    gender: '',
    address: '',
    date_of_birth: '',

    // professional

    company: '',
    position_title: '',
    year_of_experience: '',
    graduation_year: '',
    achivements_experience: ''

  })

  const router = useRouter()
  const { user } = useContext(AuthContext)
  if (user && user.username) {
    values.roll = user.username
    values.institute_email_id = user.email
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validation
    // const hasEmptyFields = Object.values(values).some((element) => {
    //   element === ''

    // })

    if (confirm('Are you sure you want to submit?')) {
      const res = await fetch(`${API_URL}/api/alumnis`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ data: values }),
      })
      console.log(JSON.stringify({ data: values }))


      if (!res.ok) {
        if (res.status === 403 || res.status === 401) {
          toast.error('No token included')
          return
        }

        const profile = await res.json()
        console.log(JSON.stringify(profile, null, 2))
        toast.error(profile?.error.name)
      } else {

        const profile = await res.json()
        toast.success('Profile Submitted !')
        router.push(`/alumni/profile`)
      }
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='space-y-6 mt-4 grid justify-items-center'>
        <div className='bg-white shadow-lg px-4 py-5 sm:rounded-lg sm:p-6 lg:w-1/2'>
          <div className=' md:gap-6'>
            <div className='md:col-span-1 py-5'>
              <h3 className='text-lg font-medium leading-6 text-gray-900'>
                Personal Information
              </h3>
              <p className='mt-1 text-sm text-gray-500'>
                Alumni Personal Information
              </p>
            </div>
            <div className='mt-5 md:mt-0 md:col-span-2'>
              <div className='grid grid-cols-6 gap-6'>
                <div className='col-span-6 sm:col-span-3'>
                  <label
                    htmlFor='name'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Full Name
                  </label>
                  <input
                    value={values.name}
                    onChange={handleInputChange}
                    type='text'
                    name='name'
                    id='name'
                    autoComplete='name'
                    required
                    className='mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-300 focus:ring-0'
                  />
                </div>

                {/* name: '',
    roll: '',
    email: '',
    contact_number: '',
    gender: '',
    date_of_birth: '',
    company: '',
    position_title: '',
    year_of_experience: '',
    graduation_year: '',
    achivements_experience: '' */}


                <div className='col-span-6 sm:col-span-3'>
                  <label
                    htmlFor='roll'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Roll No.
                  </label>
                  <input
                    disabled
                    value={values.roll}
                    type='text'
                    name='roll'
                    id='roll'
                    autoComplete='roll'
                    required
                    className='mt-0 block w-full px-0.5 border-0 border-b-2 border-green-500 '
                  />
                </div>

                <div className='col-span-6 sm:col-span-3'>
                  <label
                    htmlFor='personal_email_id'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Email
                  </label>
                  <input
                    value={values.email}
                    onChange={handleInputChange}
                    type='email'
                    name='email_id'
                    id='email_id'
                    autoComplete='email'
                    required
                    className='mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-orange-500'
                  />
                </div>

                <div className='col-span-6 sm:col-span-3'>
                  <label
                    htmlFor='mobile_number_1'
                    className='block text-sm font-medium text-gray-700'
                    required
                  >
                    Contact number

                  </label>
                  <input
                    value={values.contact_number}
                    onChange={handleInputChange}
                    type='number'
                    name='mobile_number_1'
                    id='mobile_number_1'
                    autoComplete='tel-national'
                    className='mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-orange-500'
                  />
                </div>

                <div className='col-span-6 sm:col-span-3'>
                  <label
                    htmlFor='gender'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Gender
                  </label>
                  <select
                    value={values.gender}
                    onChange={handleInputChange}
                    id='gender'
                    name='gender'
                    autoComplete='gender'
                    required
                    className='mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-orange-500'
                  >
                    <option value=''>Select</option>
                    <option value='female'>female</option>
                    <option value='male'>male</option>
                    <option value=''>other</option>
                  </select>
                </div>

                <div className='col-span-6 sm:col-span-3'>
                  <label
                    htmlFor='date_of_birth'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Date of Birth
                  </label>
                  <input
                    value={values.date_of_birth}
                    onChange={handleInputChange}
                    type='date'
                    name='date_of_birth'
                    id='date_of_birth'
                    autoComplete='date_of_birth'
                    required
                    className='mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-orange-500'
                  />
                </div>

                <div className='col-span-6 sm:col-span-6'>
                  <label
                    htmlFor='address'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Address
                  </label>
                  <textarea
                    value={values.address}
                    onChange={handleInputChange}
                    rows={4}
                    name='address'
                    id='address'
                    autoComplete='address'
                    required
                    className='mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-orange-500'
                  />
                </div>


              </div>
            </div>
          </div>
        </div>

        <div className='bg-white shadow-xl px-4 py-5 sm:rounded-lg sm:p-6 lg:w-1/2'>
          <div className=''>
            <div className='py-5'>
              <h3 className='text-lg font-medium leading-6 text-gray-900'>
                Professional Details
              </h3>
              <p className='mt-1 text-sm text-gray-500'>
                Alumni's Professional Details.
              </p>
            </div>

            <div className='mt-5 md:mt-0 md:col-span-2'>
              <div className='grid grid-cols-6 gap-6'>

              <div className='col-span-6 sm:col-span-3'>
                  <label
                    htmlFor='company'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Company
                  </label>
                  <input
                    value={values.company}
                    onChange={handleInputChange}
                    type='text'
                    name='name'
                    id='name'
                    autoComplete='name'
                    required
                    className='mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-300 focus:ring-0'
                  />
                </div>

                <div className='col-span-6 sm:col-span-3'>
                  <label
                    htmlFor='name'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Position

                  </label>
                  <input
                    value={values.position}
                    onChange={handleInputChange}
                    type='text'
                    name='name'
                    id='name'
                    autoComplete='name'
                    required
                    className='mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-300 focus:ring-0'
                  />
                </div>

                <div className='col-span-6 sm:col-span-3'>
                  <label
                    htmlFor='admission_year'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Year of experience
                  </label>
                  <input
                    value={values.year_of_experience}
                    onChange={handleInputChange}
                    type='number'
                    min={2000}
                    max={2200}
                    name='year_of_experience'
                    id='year_of_experience'
                    autoComplete='year_of_experience'
                    placeholder='Ex: 1,2,3'
                    required
                    className='mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-orange-500'
                  />
                </div>



                <div className='col-span-6 sm:col-span-3'>
                  <label
                    htmlFor='admission_year'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Graduation Year
                  </label>
                  <input
                    value={values.graduation_year}
                    onChange={handleInputChange}
                    type='number'
                    min={2000}
                    max={2200}
                    name='graduation_year'
                    id='graduation_year'
                    autoComplete='graduation_year'
                    placeholder='Ex: 2024'
                    required
                    className='mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-orange-500'
                  />
                </div>


                <div className='col-span-6 sm:col-span-6'>
                  <label
                    htmlFor='address'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Achievements

                  </label>
                  <textarea
                    value={values.address}
                    onChange={handleInputChange}
                    rows={4}
                    name='achievements'
                    id='achievements'
                    autoComplete='address'
                    required
                    className='mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-orange-500'
                  />
                </div>



              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-end'>
          <button
            type='submit'
            className='ml-3 inline-flex justify-center py-2 px-3 border border-transparent shadow-lg shadow-yellow-500/80 hover:shadow-yellow-600/50 text-sm font-medium rounded-xl text-white bg-yellow-500 hover:bg-yellow-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500'
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  )
}
