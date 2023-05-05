import { useState, useEffect } from 'react'
import Slideover from '@/components/Slideover'
import { toast } from 'react-toastify'
import { API_URL, NEXT_URL ,NITP_URL} from '../config'

import axios from 'axios'
import { BellIcon } from '@heroicons/react/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Nav() {
  const tabs = [
    { name: 'Home', fn: backToMain, current: false },
    { name: 'TPC Guidelines', fn: openTpcGuidelines, current: false },
    { name: 'Nitp', fn: openNitpSite, current: false },

    //   { name: 'Team', href: '#', current: false },
  ]

  // Add slideover on click
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(null)
  const [tpcGuidelines, setTpcGuidelines] = useState('')
  const [BackToMain, setBackToMain] = useState('')
  const [OpenNitpSite, setOpenNitpSite] = useState('')

  function toggleSlideover() {
    setOpen(!open)
  }

  function openTpcGuidelines() {
    // open tpc guidelines in new tab
    window.open(API_URL + tpcGuidelines, '_blank', 'noopener,noreferrer')
  }

  function backToMain() {
    //FOR GOING BACK TO HOME 
    window.open(NEXT_URL + BackToMain,'_self', 'noopener,noreferrer')
  }
  function openNitpSite() {
    //FOR GOING BACK TO HOME 
    window.open(NITP_URL + OpenNitpSite,'_blank', 'noopener,noreferrer')
  }

  //api showing error that's why commented

  const fetchSettings = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/setting?populate=*`)
      const data = res.data.data
      console.log(res)
      setTpcGuidelines(data.attributes.tpc_guidelines.data.attributes.url)
    } catch (err) {
      // toast.error('Error fetching TPC Guidelines')
     console.log(err)
    }
  }
  const fetchHome= async () => {///FETCHING THE HOME page of tnp
    try {
      const res = await axios.get(`${NEXT_URL}/api/setting?populate=*`)
      const data = res.data.data
      console.log(res)
      console.log(url)
      setTpcGuidelines(data.attributes.tpc_guidelines.data.attributes.url)
    } catch (err) {
      // toast.error('Error fetching Home Page of Tnp
     console.log(err)
    }
  }
  const fetchNitp= async () => {///FETCHING THE NITP official site
    try {
      const res = await axios.get(`${NITP_URL}/api/setting?populate=*`)
      const data = res.data.data
      console.log(res)
      console.log(url)
      setTpcGuidelines(data.attributes.tpc_guidelines.data.attributes.url)
    } catch (err) {
      // toast.error('Error fetching Nitp Official Site')
     console.log(err)
    }
  }
  useEffect(() => {
    fetchSettings()
    fetchHome()///
    fetchNitp()
  }, [])


  return (
    <div className="bg-white shadow">
      <Slideover open={open} setOpen={setOpen} />
      <div className='hidden sm:block'>
        <div className='border-b border-gray-200'>
          <nav className='-mb-px flex space-x-8' aria-label='Tabs'>
            {tabs.map((tab) => (
              <a
                key={tab.name}
                // toggle slideover on click
                onClick={tab.fn}
                className={classNames(
                  open && tab.name === 'Notifications'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                  'whitespace-nowrap py-4 px-4 border-b-2 font-medium text-sm cursor-pointer transition duration-150 ease-in-out select-none focus:outline-none focus:text-indigo-800 focus:border-indigo-700'
                )}
                aria-current={tab.current ? 'page' : undefined}
              >
                {tab.name}
              </a>
            ))}
            {/* Notification icon at the right */}
            <div className='flex-grow' />
            <a
  onClick={toggleSlideover}
  className='whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm cursor-pointer transition duration-150 ease-in-out select-none focus:outline-none focus:text-indigo-800 focus:border-indigo-700'
>
  {/* Animate bell icon */}
  <BellIcon className='h-6 w-6 text-gray-500 hover:text-indigo-700 animate-colors' />
</a>

          </nav>
        </div>
      </div>
    </div>
  )
}
