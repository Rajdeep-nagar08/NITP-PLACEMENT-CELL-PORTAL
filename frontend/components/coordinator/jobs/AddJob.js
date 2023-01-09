import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { API_URL } from '@/config/index'
import moment from 'moment'

export default function AddJob({ token = '' }) {
  const [values, setValues] = useState({
    job_title: '',
    job_status: '',
    classification: '',
    category: '',
    min_X_marks: 0,
    min_XII_marks: 0,
    min_cpi: 0,
    start_date: undefined,
    last_date: undefined,
    only_for_female: false,
    only_for_pwd: false,
    only_for_ews: false,
    company: '',
    approval_status: 'pending',
  })
  const [eligibleCourses, setEligibleCourses] = useState(new Set())
  const [programs, setPrograms] = useState([])

  const handleDateChange = (e) => {
    let { name, value } = e.target
    value = moment(value).utcOffset('+0530', true)
    console.log(value)
    setValues({ ...values, [name]: value === '' ? undefined : value })
  }

  useEffect(() => {
    programs.map((program) => {
      program.attributes.courses.data.map((course) => {
        setEligibleCourses((prev) => new Set([...prev, parseInt(course.id)]))
      })
    })
  }, [programs])
  const handleCheckboxChange = (e) => {
    const { id } = e.target
    if (e.target.checked) {
      setEligibleCourses((prev) => new Set([...prev, parseInt(id)]))
    } else {
      setEligibleCourses(
        (prev) => new Set([...prev].filter((course) => course !== parseInt(id)))
      )
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validation
    // const hasEmptyFields = Object.values(values).some((element) => {
    //   element === ''

    // })
    if (eligibleCourses.size === 0) {
      toast.error('Please select atleast one course')
      return
    }

    values['eligible_courses'] = Array.from(eligibleCourses).toString()
    console.log(values.eligible_courses)
    if (confirm('Are you sure to add job?')) {
      const res = await fetch(`${API_URL}/api/job/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(values),
      })

      if (!res.ok) {
        if (res.status === 403 || res.status === 401) {
          toast.error('No token included')
          return
        }
        const profile = await res.json()
        console.log(profile)
        toast.error('Error: ' + profile.error.details.errors[0].message)
      } else {
        toast.success('Job Added Successfully')
      }
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const [companies, setCompanies] = useState([])
  useEffect(() => {
    fetch(`${API_URL}/api/companies?filters[status][$eq]=approved&populate=*`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setCompanies(data.data))
      .catch((err) => console.log(err))

    fetch(`${API_URL}/api/programs?populate=*`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPrograms(data.data)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <div className='space-y-6 mt-4'>
        <div className='bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6'>
          <div className=''>
            <h3 className='text-lg font-medium leading-6 text-gray-900 mb-4'>
              Job Details
            </h3>
            {/* <p className='mt-1 text-sm text-gray-500'>
              Some other details of the job
            </p> */}
          </div>
          <div className='md:grid md:grid-cols-3 md:gap-6'>
            <div className='mt-5 md:mt-0 md:col-span-3'>
              <div className='grid grid-cols-6 gap-6'>
                <div className='col-span-6 sm:col-span-3'>
                  <label
                    htmlFor='company_address'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Company
                  </label>
                  <select
                    name='company'
                    required
                    onChange={handleInputChange}
                    className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                  >
                    <option value=''>Select Company</option>
                    {companies.map((company) => (
                      <option key={company.id} value={company.id}>
                        {company.attributes.company_name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className='col-span-6 sm:col-span-3'>
                  <label
                    htmlFor='job_title'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Job Title
                  </label>
                  <input
                    value={values.job_title}
                    onChange={handleInputChange}
                    type='text'
                    name='job_title'
                    id='job_title'
                    autoComplete='job_title'
                    required
                    className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                  />
                </div>
                <div className='col-span-6 sm:col-span-2'>
                  <label
                    htmlFor='classification'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Classification
                  </label>
                  <select
                    name='classification'
                    onChange={handleInputChange}
                    required
                    className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                  >
                    <option value='none'>Select Classification</option>
                    <option value='A1'>A1</option>
                    <option value='A2'>A2</option>
                    <option value='X'>X</option>
                    <option value='none'>None (for Internship)</option>
                  </select>
                </div>
                <div className='col-span-6 sm:col-span-2'>
                  <label
                    htmlFor='category'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Internship / FTE
                  </label>
                  <select
                    name='category'
                    required
                    onChange={handleInputChange}
                    className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                  >
                    <option value=''>Select</option>
                    <option value='Internship'>Internship</option>
                    <option value='FTE'>FTE</option>
                  </select>
                </div>

                <div className='col-span-6 sm:col-span-2'>
                  <label
                    htmlFor='job_status'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Job Status
                  </label>
                  <select
                    required
                    name='job_status'
                    onChange={handleInputChange}
                    className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                  >
                    <option value=''>Select</option>
                    <option value='open'>open</option>
                    <option value='ongoing'>ongoing</option>
                    <option value='results_declared'>results_declared</option>
                    <option value='abandoned'>abandoned</option>
                  </select>
                </div>

                <div className='col-span-6 sm:col-span-2'>
                  <label
                    htmlFor='min_X_marks'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Minimum X Marks
                    <small className='text-gray-500 ml-1'>
                      Ex: 88.5 (out of 100)
                    </small>
                  </label>
                  <input
                    value={values.min_X_marks}
                    onChange={handleInputChange}
                    type='number'
                    name='min_X_marks'
                    id='min_X_marks'
                    autoComplete='min_X_marks'
                    className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                  />
                </div>

                <div className='col-span-6 sm:col-span-2'>
                  <label
                    htmlFor='min_XII_marks'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Minimum XII Marks
                    <small className='text-gray-500 ml-1'>
                      Ex: 88.5 (out of 100)
                    </small>
                  </label>
                  <input
                    value={values.min_XII_marks}
                    onChange={handleInputChange}
                    type='number'
                    name='min_XII_marks'
                    id='min_XII_marks'
                    autoComplete='min_XII_marks'
                    className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                  />
                </div>

                <div className='col-span-6 sm:col-span-2'>
                  <label
                    htmlFor='min_cpi'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Minimum CPI
                    <small className='text-gray-500 ml-1'>
                      Ex: 8.86 (out of 10)
                    </small>
                  </label>
                  <input
                    value={values.min_cpi}
                    onChange={handleInputChange}
                    type='number'
                    name='min_cpi'
                    id='min_cpi'
                    autoComplete='min_cpi'
                    className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                  />
                </div>
                <div className='col-span-6 sm:col-span-2'>
                  <label
                    htmlFor='start_date'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Start Date
                  </label>
                  <input
                    defaultValue={values.start_date}
                    onChange={handleDateChange}
                    type='datetime-local'
                    name='start_date'
                    id='start_date'
                    autoComplete='start_date'
                    className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                  />
                </div>
                <div className='col-span-6 sm:col-span-2'>
                  <label
                    htmlFor='last_date'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Last Date
                  </label>
                  <input
                    defaultValue={values.last_date}
                    onChange={handleDateChange}
                    type='datetime-local'
                    name='last_date'
                    id='last_date'
                    autoComplete='last_date'
                    className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                  />
                </div>
                <div className='col-span-6 sm:col-span-2'>
                  <label
                    htmlFor='only_for_female'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Only for Females
                  </label>
                  <select
                    name='only_for_female'
                    onChange={handleInputChange}
                    className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                  >
                    <option value='false'>No</option>
                    <option value='true'>Yes</option>
                  </select>
                </div>
                <div className='col-span-6 sm:col-span-2'>
                  <label
                    htmlFor='only_for_pwd'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Only for PWD
                  </label>
                  <select
                    name='only_for_pwd'
                    onChange={handleInputChange}
                    className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                  >
                    <option value='false'>No</option>
                    <option value='true'>Yes</option>
                  </select>
                </div>
                <div className='col-span-6 sm:col-span-2'>
                  <label
                    htmlFor='only_for_ews'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Only for EWS
                  </label>
                  <select
                    name='only_for_ews'
                    onChange={handleInputChange}
                    className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                  >
                    <option value='false'>No</option>
                    <option value='true'>Yes</option>
                  </select>
                </div>
                <div className='col-span-12 sm:col-span-6'>
                  <div className='grid grid-cols-12 gap-6'>
                    {programs.map((program) => (
                      <div
                        key={program.id}
                        className='col-span-6 sm:col-span-4'
                      >
                        <fieldset>
                          <legend className='block text-sm font-medium text-gray-900'>
                            {program.attributes.program_name}
                          </legend>
                          <div className='pt-6 space-y-3'>
                            {program.attributes.courses.data.map((course) => (
                              <div
                                key={course.id}
                                className='flex items-center'
                              >
                                <input
                                  id={course.id}
                                  name={course.id}
                                  onChange={handleCheckboxChange}
                                  type='checkbox'
                                  defaultChecked={course.id}
                                  className='h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500'
                                />
                                <label
                                  htmlFor={`${course.id}`}
                                  className='ml-3 text-sm text-gray-600'
                                >
                                  {course.attributes.course_name}
                                </label>
                              </div>
                            ))}
                          </div>
                        </fieldset>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-end'>
          <button
            type='submit'
            className='ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            Add
          </button>
        </div>
      </div>
    </form>
  )
}
