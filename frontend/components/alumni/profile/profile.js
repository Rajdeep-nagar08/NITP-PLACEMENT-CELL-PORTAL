/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from '@heroicons/react/outline'
import { PaperClipIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import Image from 'next/image'
import { API_URL } from '@/config/index'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

export default function Profile({ alumni, token }) {
  const [studentData, setStudentData] = useState(student)
  const router = useRouter()
  const [profilePic, setProfilePic] = useState(null)
//   const [editCpi, setEditCpi] = useState(false)
  const handleFileChange = (e) => {
    setProfilePic(e.target.files[0])
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   const formData = new FormData()

  //   formData.append('profile_pic', profilePic)

  //   const res = await fetch(`${API_URL}/api/alumni/modify`, {
  //     method: 'PUT',
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //     body: formData,
  //   })

  //   if (res.ok) {
  //     toast.success('Successfully Updated')
  //     router.push('/alumni/profile')
  //   } else {
  //     toast.error('Something Went Wrong')
  //   }
  // }

  
  return (
    <div className='bg-white shadow overflow-hidden sm:rounded-lg mt-4'>
      <div className='px-4 py-5 sm:px-6 flex justify-between'>
        <div>
          <h3 className='text-lg leading-6 font-medium text-gray-900'>
            Alumni Information{' '}

            {alumni.approved == 'approved' && (
              <span className='px-2 mx-2 py-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
                <CheckIcon className='mr-1 h-5 w-5 text-green' />
                Approved
              </span>
            )}

          </h3>
          <p className='mt-1 max-w-2xl text-sm text-gray-500'>
            Personal details.
          </p>
        </div>
      </div>

      <div className='border-t border-gray-200 px-4 py-5 sm:p-0'>
        <dl className='sm:divide-y sm:divide-gray-200'>
          <form onSubmit={handleSubmit}>
            <div className='py-4 sm:py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500 sm:col-span-1'>
                Profile Picture
              </dt>
              <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1'>
                {alumni.profile_pic ? (
                  <div>
                    <Image
                      src={API_URL + alumni.profile_pic.url}
                      width={140}
                      height={180}
                      objectFit='cover'
                      alt='alumni profile'
                    />
                  </div>
                ) : (
                  'No Profile Picture'
                )}
              </dd>
              <div className='sm:col-span-2'>
                <label className='block text-sm font-medium text-gray-700'>
                  Profile photo
                </label>
                <div className='mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md'>
                  <div className='space-y-1 text-center'>
                    {profilePic ? (
                      <div className='text-gray-600 text-sm'>
                        <Image
                          src={URL.createObjectURL(profilePic)}
                          width={70}
                          height={90}
                          objectFit='cover'
                          alt='alumni profile pic preview'
                        />
                      </div>
                    ) : (
                      <svg
                        className='mx-auto h-12 w-12 text-gray-400'
                        stroke='currentColor'
                        fill='none'
                        viewBox='0 0 48 48'
                        aria-hidden='true'
                      >
                        <path
                          d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                          strokeWidth={2}
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    )}
                    <div className='flex text-sm text-gray-600'>
                      <label
                        htmlFor='profile_pic'
                        className='relative cursor-pointer bg-white rounded-md font-medium text-orange-600 hover:text-orange-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-orange-500'
                      >
                        <span>Upload a file</span>
                        <input
                          // value={values.profile_pic}
                          onChange={handleFileChange}
                          id='profile_pic'
                          name='profile_pic'
                          type='file'
                          className='sr-only'
                          accept='image/*'
                          required
                        />
                      </label>
                      <p className='pl-1'>or drag and drop</p>
                    </div>
                    <p className='text-xs text-gray-500'>
                      PNG, JPG up to 500KB
                    </p>
                  </div>
                </div>
                <button
                  type='submit'
                  className='inline-flex items-center px-3.5 py-2 mt-2 border border-transparent text-sm leading-4 font-medium rounded-full shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500'
                >
                  Update
                </button>
              </div>
            </div>
          </form>


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

          <div className='py-4 sm:py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6'>
            <dt className='text-sm font-medium text-gray-500 sm:col-span-1'>
              Name
            </dt>
            <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1'>
              {alumni.name}
            </dd>
            <dt className='text-sm font-medium text-gray-500 sm:col-span-1'>
              Username
            </dt>
            <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1'>
              {alumni.roll}
            </dd>
          </div>

          <div className='py-4 sm:py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6'>
            <dt className='text-sm font-medium text-gray-500'>
              Email
            </dt>
            <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1'>
              {alumni.email}
            </dd>
          </div>

          <div className='py-4 sm:py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6'>
            <dt className='text-sm font-medium text-gray-500 sm:col-span-1'>
              Contact Number
            </dt>
            <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1'>
              {alumni.contact_number}
            </dd>
          </div>

          <div className='py-4 sm:py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6'>
            <dt className='text-sm font-medium text-gray-500 sm:col-span-1'>
              Gender
            </dt>
            <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1 capitalize'>
              {alumni.gender}
            </dd>
          </div>

          <div className='py-4 sm:py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6'>
            <dt className='text-sm font-medium text-gray-500 sm:col-span-1'>
              D.O.B
            </dt>
            <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1'>
              {alumni.date_of_birth}
            </dd>
          </div>


          <div className='py-4 sm:py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6'>
            <dt className='text-sm font-medium text-gray-500 sm:col-span-1'>
              Company
            </dt>
            <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1'>
              {alumni.company}
            </dd>
          </div>

        
          <div className='py-4 sm:py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6'>
            <dt className='text-sm font-medium text-gray-500 sm:col-span-1'>
              Position/Title
            </dt>
            <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1'>
              {alumni.position_title}
            </dd>
          </div>

          <div className='py-4 sm:py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6'>
            <dt className='text-sm font-medium text-gray-500 sm:col-span-1'>
              Experience (In years)
            </dt>
            <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1'>
              {alumni.year_of_experience}
            </dd>
          </div>

          <div className='py-4 sm:py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6'>
            <dt className='text-sm font-medium text-gray-500 sm:col-span-1'>
              Graduation Year
            </dt>
            <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1'>
              {alumni.graduation_year}
            </dd>
          </div>


          <div className='py-4 sm:py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6'>
            <dt className='text-sm font-medium text-gray-500 sm:col-span-1'>
              Achievements
            </dt>
            <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1'>
              {alumni.achivements_experience}
            </dd>
          </div>


        </dl>
      </div>
    </div>
  )
}
