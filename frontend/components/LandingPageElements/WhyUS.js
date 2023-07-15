import {React, useEffect,useState} from 'react'
import {
  ChevronLeftIcon, ChevronRightIcon,
  AcademicCapIcon,
  CodeIcon,
  DesktopComputerIcon,
  SortAscendingIcon,
  OfficeBuildingIcon,
  ClockIcon,
} from '@heroicons/react/solid'
import AOS from 'aos';
import 'aos/dist/aos.css'



const data = [
  {
    icon: AcademicCapIcon,
    title: 'Best of the best make it!!',
    desc: 'The students are admitted through the esteemed JEE Mains and represents the Top 2% of the candidates that appear for the exam nationwide, they are handpicked from the garden of knowledge and critical thinking. These students are enriched with both qualitative and quantitative skills, thus they make up for the best in class.',
  },
  {
    icon: CodeIcon,
    title: 'Coding Culture',
    desc: 'Students from NIT Patna dominate the leader boards of Codechef, Codeforces, Hackerrank, Leetcode etc. Our Coding clubs regularly organises coding competitions on various platforms to help the students strengthen their coding skills. The Google Developer Student Clubs (DSC) of NIT Patna and the Hackslash Club powered by Mozilla frequently organise workshops on trending technologies in Machine learning and Web/Android Development.',
  },
  {
    icon: SortAscendingIcon,
    title: 'Workshop and Industrial Lecture',
    desc: 'The students are admitted through the esteemed JEE Mains and represents the Top 2% of the candidates that appear for the exam nationwide, they are handpicked from the garden of knowledge and critical thinking. These students are enriched with both qualitative and quantitative skills, thus they make up for the best in class.',
  },
  {
    icon: DesktopComputerIcon,
    title: 'Technical Clubs',
    desc: 'The students are admitted through the esteemed JEE Mains and represents the Top 2% of the candidates that appear for the exam nationwide, they are handpicked from the garden of knowledge and critical thinking. These students are enriched with both qualitative and quantitative skills, thus they make up for the best in class.',
  },
  {
    icon: OfficeBuildingIcon,
    title: 'World Class Faculty!',
    desc: 'The students are admitted through the esteemed JEE Mains and represents the Top 2% of the candidates that appear for the exam nationwide, they are handpicked from the garden of knowledge and critical thinking. These students are enriched with both qualitative and quantitative skills, thus they make up for the best in class.',
  },
  {
    icon: ClockIcon,
    title: 'All Round Development',
    desc: 'The students are admitted through the esteemed JEE Mains and represents the Top 2% of the candidates that appear for the exam nationwide, they are handpicked from the garden of knowledge and critical thinking. These students are enriched with both qualitative and quantitative skills, thus they make up for the best in class.',
  },

]

function WhyUS() {
  const [showMore, setShowMore] = useState(false);

  const handleKnowMoreClick = () => {
    setShowMore(true);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])
  const sliderLeft = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 500
  }
  const sliderRight = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 500
  }

  return (
    <div style={{
      backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB4y2XjdmM7nHiCnxJcZD-OByRosxZ9GfAqA&usqp=CAU")`,  
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',zIndex:'3',position:'relative',margin:'-20px 20px -20px',boxShadow:'0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',borderRadius:'6px'
   }} className='h-7/12 w-auto' >
      <div className='text-center py-10'>
        <h2 className=' text-blue-900 m-6 text-2xl font-medium' data-aos='fade-in'> Why Recruit at NIT Patna?</h2>
        <p className='w-1/2 md:w-8/12  mx-auto leading-normal font-bold text-black text-m' data-aos='zoom-in-up'>National Institute of Technology Patna aims at setting out very high education standards and holds long record of academic excellence. The pedagogical aspects have been formulated to suit not only the needs of the contemporary industrial requirements but also to develop human potential to its fullest extent in a range of professions. Extra curricular activities are planed through games and sports, cultural programmes and NSS activities. Cultural activities provide a platform to know about the culture of various states and regions of the country and opportunity for national integration.Ever since its rechristening, NIT Patna has been on the fast track of development and has undergone numerous facelifts because of which placement records have witnessed unprecedented growth and is touching new heights as the graph of placement is increasing remarkably.</p>
      </div>
      <div className='flex items-center pb-8'>
        <ChevronLeftIcon className='w-10 opacity-50 hover:opacity-100 cursor-pointer' onClick={sliderLeft} />
        <div id='slider' className="overflow-x-scroll whitespace-nowrap scroll flex flex-row w-screen py-4 px-6">
          {data.map((item) => (
            <div className='mx-4  flex flex-col lg:grid my-2 cursor-pointer hover:scale-105 ease-in-out duration-300 justify-items-center rounded-md ' style={{ gridTemplateColumns: 'repeat(1, 400px)', gridTemplateRows: 'repeat(4, 100px)', '@media (max-width: 767px)': { gridTemplateColumns: '1fr', gridTemplateRows: 'repeat(3,100)' } }}>

              <item.icon className='h-24 w-24 inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 text-red-900 ' />
              <h2 className='font-bold text-2xl p-4'>{item.title}</h2>
              <div className='inline-block p-4 whitespace-normal text-sm'>{item.desc}</div>
             
            </div>
          ))
          }
        </div>
        
        <ChevronRightIcon className='h-10 w-10 opacity-50 hover:opacity-100 cursor-pointer' onClick={sliderRight} />
      </div>
    </div>
  )
}

export default WhyUS
