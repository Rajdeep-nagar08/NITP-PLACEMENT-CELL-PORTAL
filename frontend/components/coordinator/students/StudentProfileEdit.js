import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import { API_URL } from '@/config/index'
import { PaperClipIcon } from '@heroicons/react/solid'

export default function StudentProfileEdit({ token = '', student }) {
  const id = student.id
  const {
    createdAt,
    resume_link,
    updatedAt,
    user_relation,
    resume,
    profile_pic,
    ...newStudent
  } = student.attributes
  const [values, setValues] = useState(newStudent)

  const router = useRouter()

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  //get courses of selected program

  return (
    <form>
      <div className='space-y-6 mt-4'>
        <div className='bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6'>
          <div className='md:grid md:grid-cols-3 md:gap-6'>
            <div className='md:col-span-1'>
              <h3 className='text-lg font-medium leading-6 text-gray-900'>
                Personal Information
              </h3>
              <p className='mt-1 text-sm text-gray-500'>
                Student Personal Information, account will be active after admin
                approval.
              </p>
            </div>
            <div className='mt-5 md:mt-0 md:col-span-2'>
              <div className='grid grid-cols-6 gap-6'>
                <div className='col-span-6 sm:col-span-3'>
                  <label
                    htmlFor='approved'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Status
                  </label>
                  <select
                    disabled
                    name='approved'
                    id='approved'
                    className='block w-full px-3 py-2 rounded-md text-gray-700 bg-white border border-red-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5'
                    value={values.approved}
                    onChange={handleInputChange}
                  >
                    <option value='pending'>Pending</option>
                    <option value='approved'>Approved</option>
                    <option value='rejected'>Rejected</option>
                  </select>
                </div>

                <div className='col-span-6 sm:col-span-3'>
                  <label
                    htmlFor='placed_status'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Placed Status( For Off-Campus &amp; PPO Offers )
                  </label>
                  <select
                    disabled
                    name='placed_status'
                    id='placed_status'
                    className='block w-full px-3 py-2 rounded-md text-gray-700 bg-white border border-red-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5'
                    value={values.placed_status}
                    onChange={handleInputChange}
                  >
                    <option value='unplaced'>Not Placed</option>
                    <option value='placed_a1'>Placed in A1</option>
                    <option value='placed_a2'>Placed in A2</option>
                    <option value='placed_x'>Placed in X</option>
                  </select>
                </div>
                <div className='col-span-6 sm:col-span-3'>
                  <label
                    htmlFor='internship_status'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Internship Status( For Off-Campus )
                  </label>
                  <select
                    disabled
                    name='internship_status'
                    id='internship_status'
                    className='block w-full px-3 py-2 rounded-md text-gray-700 bg-white border border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5'
                    value={values.internship_status}
                    onChange={handleInputChange}
                  >
                    <option value='false'>Not Got Internship</option>
                    <option value='true'>Got Internship</option>
                  </select>
                </div>
                <div className='col-span-6 sm:col-span-3'>
                  <label
                    htmlFor='name'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Full Name
                  </label>
                  <input
                    disabled
                    value={values.name}
                    onChange={handleInputChange}
                    type='text'
                    name='name'
                    id='name'
                    autoComplete='name'
                    required
                    className='mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-red-300 rounded-md'
                  />
                </div>
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
                    onChange={handleInputChange}
                    type='text'
                    name='roll'
                    id='roll'
                    autoComplete='roll'
                    required
                    className='mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-red-300 rounded-md'
                  />
                </div>

                <div className='col-span-6 sm:col-span-3'>
                  <label
                    htmlFor='personal_email_id'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Personal Email
                  </label>
                  <input
                    disabled
                    value={values.personal_email_id}
                    onChange={handleInputChange}
                    type='text'
                    name='personal_email_id'
                    id='personal_email_id'
                    autoComplete='email'
                    required
                    className='mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-red-300 rounded-md'
                  />
                </div>
                <div className='col-span-6 sm:col-span-3'>
                  <label
                    htmlFor='institute_email_id'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Institute Email
                  </label>
                  <input
                    disabled
                    value={values.institute_email_id}
                    onChange={handleInputChange}
                    type='text'
                    name='institute_email_id'
                    id='institute_email_id'
                    autoComplete='email'
                    required
                    className='mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-red-300 rounded-md'
                  />
                </div>
                <div className='col-span-6 sm:col-span-3'>
                  <label
                    htmlFor='mobile_number_1'
                    className='block text-sm font-medium text-gray-700'
                    required
                  >
                    Mobile Number 1
                  </label>
                  <input
                    disabled
                    value={values.mobile_number_1}
                    onChange={handleInputChange}
                    type='text'
                    name='mobile_number_1'
                    id='mobile_number_1'
                    autoComplete='tel-national'
                    className='mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-red-300 rounded-md'
                  />
                </div>
                <div className='col-span-6 sm:col-span-3'>
                  <label
                    htmlFor='mobile_number_2'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Mobile Number 2
                  </label>
                  <input
                    disabled
                    value={values.mobile_number_2}
                    onChange={handleInputChange}
                    type='text'
                    name='mobile_number_2'
                    id='mobile_number_2'
                    autoComplete='tel-national'
                    required
                    className='mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-red-300 rounded-md'
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
                    disabled
                    value={values.gender}
                    onChange={handleInputChange}
                    id='gender'
                    name='gender'
                    autoComplete='gender'
                    required
                    className='mt-1 block w-full py-2 px-3 border border-red-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm'
                  >
                    <option>Select</option>
                    <option>female</option>
                    <option>male</option>
                    <option>other</option>
                  </select>
                </div>
                <div className='col-span-6 sm:col-span-3'>
                  <label
                    htmlFor='category'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Category
                  </label>
                  <select
                    disabled
                    value={values.category}
                    onChange={handleInputChange}
                    id='category'
                    name='category'
                    autoComplete='category'
                    required
                    className='mt-1 block w-full py-2 px-3 border border-red-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm'
                  >
                    <option value=''>Select</option>
                    <option value='general'>General</option>
                    <option value='obc'>OBC</option>
                    <option value='sc'>SC</option>
                    <option value='st'>ST</option>
                    <option value='ews'>EWS</option>
                  </select>
                </div>

                <div className='col-span-6 sm:col-span-3'>
                  <label
                    htmlFor='pwd'
                    className='block text-sm font-medium text-gray-700'
                  >
                    PWD
                  </label>
                  <select
                    disabled
                    value={values.pwd}
                    onChange={handleInputChange}
                    id='pwd'
                    name='pwd'
                    autoComplete='pwd'
                    required
                    className='mt-1 block w-full py-2 px-3 border border-red-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm'
                  >
                    <option>Select</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
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
                    disabled
                    value={values.date_of_birth}
                    onChange={handleInputChange}
                    type='date'
                    name='date_of_birth'
                    id='date_of_birth'
                    autoComplete='date_of_birth'
                    required
                    className='mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-red-300 rounded-md'
                  />
                </div>

                <div className='col-span-6 sm:col-span-3'>
                  <label
                    htmlFor='address'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Address
                  </label>
                  <textarea
                    disabled
                    value={values.address}
                    onChange={handleInputChange}
                    rows={4}
                    name='address'
                    id='address'
                    autoComplete='address'
                    required
                    className='shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-red-300 rounded-md'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6'>
          <div className='md:grid md:grid-cols-3 md:gap-6'>
            <div className='md:col-span-1'>
              <h3 className='text-lg font-medium leading-6 text-gray-900'>
                Academic Details
              </h3>
              <p className='mt-1 text-sm text-gray-500'>
                Student Academic Information, account will be active after admin
                approval.
              </p>
            </div>
            <div className='mt-5 md:mt-0 md:col-span-2'>
              <div className='grid grid-cols-6 gap-6'>
                <div className='col-span-6 sm:col-span-3'>
                  <label
                    htmlFor='rank'
                    className='block text-sm font-medium text-gray-700'
                  >
                    GATE / JEE / JAM Rank
                  </label>
                  <input
                    disabled
                    value={values.rank}
                    onChange={handleInputChange}
                    type='number'
                    name='rank'
                    id='rank'
                    autoComplete='rank'
                    className='mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-red-300 rounded-md'
                  />
                </div>
                <div className='col-span-6 sm:col-span-3'>
                  <label
                    htmlFor='categoryRank'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Category Rank
                  </label>
                  <input
                    disabled
                    value={values.categoryRank}
                    onChange={handleInputChange}
                    type='number'
                    name='categoryRank'
                    id='categoryRank'
                    autoComplete='categoryRank'
                    className='mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-red-300 rounded-md'
                  />
                </div>

                <div className='col-span-6 sm:col-span-3'>
                  <label
                    htmlFor='registered_for'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Registering for
                  </label>
                  <select
                    disabled
                    value={values.registered_for}
                    onChange={handleInputChange}
                    id='registered_for'
                    name='registered_for'
                    autoComplete='registered_for'
                    required
                    className='mt-1 block w-full py-2 px-3 border border-red-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm'
                  >
                    <option>Select</option>
                    <option>Internship</option>
                    <option>FTE</option>
                  </select>
                </div>
                <div className='col-span-6 sm:col-span-3'>
                  <label
                    htmlFor='program'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Program
                  </label>
                  <select
                    disabled
                    value={values.program}
                    onChange={handleInputChange}
                    id='program'
                    name='program'
                    autoComplete='program'
                    required
                    className='mt-1 block w-full py-2 px-3 border border-red-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm'
                  >
                    <option>Select</option>
                  </select>
                </div>

                <div className='col-span-6 sm:col-span-3'>
                  <label
                    htmlFor='course'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Course
                  </label>
                  <select
                    disabled
                    value={values.course}
                    onChange={handleInputChange}
                    id='course'
                    name='course'
                    autoComplete='course'
                    required
                    className='mt-1 block w-full py-2 px-3 border border-red-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm'
                  >
                    <option>Select</option>
                  </select>
                </div>

                <div className='col-span-6 sm:col-span-2'>
                  <label
                    htmlFor='spi_1'
                    className='block text-sm font-medium text-gray-700'
                  >
                    SPI-1
                  </label>
                  <input
                    disabled
                    value={values.spi_1}
                    onChange={handleInputChange}
                    type='number'
                    max={10}
                    name='spi_1'
                    id='spi_1'
                    autoComplete='spi_1'
                    className='mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-red-300 rounded-md'
                  />
                </div>

                <div className='col-span-6 sm:col-span-2'>
                  <label
                    htmlFor='spi_2'
                    className='block text-sm font-medium text-gray-700'
                  >
                    SPI-2
                  </label>
                  <input
                    disabled
                    value={values.spi_2}
                    onChange={handleInputChange}
                    type='number'
                    max={10}
                    name='spi_2'
                    id='spi_2'
                    autoComplete=''
                    className='mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-red-300 rounded-md'
                  />
                </div>

                <div className='col-span-6 sm:col-span-2'>
                  <label
                    htmlFor='spi_3'
                    className='block text-sm font-medium text-gray-700'
                  >
                    SPI-3
                  </label>
                  <input
                    disabled
                    value={values.spi_3}
                    onChange={handleInputChange}
                    type='number'
                    max={10}
                    name='spi_3'
                    id='spi_3'
                    autoComplete=''
                    className='mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-red-300 rounded-md'
                  />
                </div>
                <div className='col-span-6 sm:col-span-2'>
                  <label
                    htmlFor='spi_4'
                    className='block text-sm font-medium text-gray-700'
                  >
                    SPI-4
                  </label>
                  <input
                    disabled
                    value={values.spi_4}
                    onChange={handleInputChange}
                    type='number'
                    max={10}
                    name='spi_4'
                    id='spi_4'
                    autoComplete=''
                    className='mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-red-300 rounded-md'
                  />
                </div>
                <div className='col-span-6 sm:col-span-2'>
                  <label
                    htmlFor='spi_5'
                    className='block text-sm font-medium text-gray-700'
                  >
                    SPI-5
                  </label>
                  <input
                    disabled
                    value={values.spi_5}
                    onChange={handleInputChange}
                    type='number'
                    max={10}
                    name='spi_5'
                    id='spi_5'
                    autoComplete=''
                    className='mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-red-300 rounded-md'
                  />
                </div>
                <div className='col-span-6 sm:col-span-2'>
                  <label
                    htmlFor='spi_6'
                    className='block text-sm font-medium text-gray-700'
                  >
                    SPI-6
                  </label>
                  <input
                    disabled
                    value={values.spi_6}
                    onChange={handleInputChange}
                    type='number'
                    max={10}
                    name='spi_6'
                    id='spi_6'
                    autoComplete=''
                    className='mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-red-300 rounded-md'
                  />
                </div>
                <div className='col-span-6 sm:col-span-2'>
                  <label
                    htmlFor='spi_7'
                    className='block text-sm font-medium text-gray-700'
                  >
                    SPI-7
                  </label>
                  <input
                    disabled
                    value={values.spi_7}
                    onChange={handleInputChange}
                    type='number'
                    max={10}
                    name='spi_7'
                    id='spi_7'
                    autoComplete=''
                    className='mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-red-300 rounded-md'
                  />
                </div>
                <div className='col-span-6 sm:col-span-2'>
                  <label
                    htmlFor='spi_8'
                    className='block text-sm font-medium text-gray-700'
                  >
                    SPI-8
                  </label>
                  <input
                    disabled
                    value={values.spi_8}
                    onChange={handleInputChange}
                    type='number'
                    max={10}
                    name='spi_8'
                    id='spi_8'
                    autoComplete=''
                    className='mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-red-300 rounded-md'
                  />
                </div>
                <div className='col-span-6 sm:col-span-2'>
                  <label
                    htmlFor='cpi'
                    className='block text-sm font-medium text-gray-700'
                  >
                    CPI
                  </label>
                  <input
                    disabled
                    value={values.cpi}
                    onChange={handleInputChange}
                    type='number'
                    max={10}
                    name='cpi'
                    id='cpi'
                    autoComplete=''
                    className='mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-red-300 rounded-md'
                  />
                </div>
                <div className='col-span-6 sm:col-span-2'>
                  <label
                    htmlFor='X_marks'
                    className='block text-sm font-medium text-gray-700'
                  >
                    X Marks
                  </label>
                  <input
                    disabled
                    value={values.X_marks}
                    onChange={handleInputChange}
                    type='number'
                    name='X_marks'
                    id='X_marks'
                    max={100}
                    autoComplete=''
                    required
                    className='mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-red-300 rounded-md'
                  />
                </div>
                <div className='col-span-6 sm:col-span-2'>
                  <label
                    htmlFor='XII_marks'
                    className='block text-sm font-medium text-gray-700'
                  >
                    XII Marks
                  </label>
                  <input
                    disabled
                    value={values.XII_marks}
                    onChange={handleInputChange}
                    type='number'
                    name='XII_marks'
                    id='XII_marks'
                    max={100}
                    autoComplete=''
                    required
                    className='mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-red-300 rounded-md'
                  />
                </div>
                <div className='col-span-6 sm:col-span-2'>
                  <label
                    htmlFor='bachelor_marks'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Bachelor&apos;s Marks
                  </label>
                  <input
                    disabled
                    value={values.bachelor_marks}
                    onChange={handleInputChange}
                    type='text'
                    name='bachelor_marks'
                    id='bachelor_marks'
                    autoComplete=''
                    className='mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-red-300 rounded-md'
                  />
                </div>
                <div className='col-span-6 sm:col-span-2'>
                  <label
                    htmlFor='master_marks'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Master&apos;s Marks
                  </label>
                  <input
                    disabled
                    value={values.master_marks}
                    onChange={handleInputChange}
                    type='text'
                    name='master_marks'
                    id='master_marks'
                    autoComplete=''
                    className='mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-red-300 rounded-md'
                  />
                </div>
                <div className='col-span-6 sm:col-span-2'>
                  <label
                    htmlFor='admission_year'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Year of admission
                  </label>
                  <input
                    disabled
                    value={values.admission_year}
                    onChange={handleInputChange}
                    type='number'
                    min={2000}
                    max={2200}
                    name='admission_year'
                    id='admission_year'
                    autoComplete='admission_year'
                    placeholder='Ex: 2022'
                    required
                    className='mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-red-300 rounded-md'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
          <dt className='text-sm font-medium text-gray-500'>Resume</dt>
          <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
            <ul
              role='list'
              className='border border-gray-200 rounded-md divide-y divide-gray-200'
            >
              <li className='pl-3 pr-4 py-3 flex items-center justify-between text-sm'>
                <div className='w-0 flex-1 flex items-center'>
                  <PaperClipIcon
                    className='flex-shrink-0 h-5 w-5 text-gray-400'
                    aria-hidden='true'
                  />
                  <span className='ml-2 flex-1 w-0 truncate'>
                    {resume ? 'resume.pdf' : 'No resume found'}
                  </span>
                </div>
                <div className='ml-4 flex-shrink-0 space-x-4'>
                  {resume.data ? (
                    <div className=''>
                      <a
                        href={`${API_URL}${resume.data.attributes.url}`}
                        target='_blank'
                        rel='noreferrer'
                        className='font-medium text-green-600 hover:text-green-500 px-2'
                      >
                        Download
                      </a>
                      <a
                        href={newStudent.resume_link}
                        target='_blank'
                        rel='noreferrer'
                        className='font-medium text-green-600 hover:text-green-500'
                      >
                        Google Drive Link
                      </a>
                    </div>
                  ) : (
                    <p className='font-medium text-green-600 hover:text-green-500'>
                      NA
                    </p>
                  )}
                </div>
              </li>
            </ul>
          </dd>
        </div>
      </div>
    </form>
  )
}
