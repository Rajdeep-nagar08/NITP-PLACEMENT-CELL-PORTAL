import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ReactComponent as BackgroundImage } from './prosSvg';
import { ArrowDownIcon } from '@heroicons/react/outline';

const steps = [
  {
    index: 1,
    title: 'REGISTRATION',
    description: 'Recruiter shares these details on',
    links: 'localhost:3000/account/RecruiterSignUp:',
    st1: "Company's Full Name",
    st2: 'Name of Recruiter',
    st3: 'Recruiter Contact No.',
    st4: 'Recruiter Official email address',
  },
  {
    index: 2,
    title: 'Step 2',
    description: 'Within 24-hrs, Recruiter will get an Invitation via E-Mail that consists of the Username and Password along with a link to the placement portal of NITP.',
  },
  {
    index: 3,
    title: 'Step 3',
    description: 'With the credentials received via mail, the company representative is expected to select Account Type as "Company" on',
    links: 'localhost:3000/loginPage',
  },
  {
    index: 4,
    title: 'Step 4',
    description: 'After login, the company representative is expected to fill the Job Application Form (JNF).',
  },
  {
    index: 5,
    title: 'Step 5',
    description: 'For further requirements like arranging Pre-Placement Talk or anything else, one of our placement coordinators will be in touch with you.',
  },
];

function Process() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (

      <div className='w-full pt-3' style={{backgroundImage:`url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnJAsIqMM7GHyzmB2aGDq0_FWvQOrTKVxwnQ&usqp=CAU")`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
       <div>
      <div className="text-4xl underline font-bold text-center text-red-900 py-4 pt-6">Welcome!!</div>
      <div className="text-center text-xl font-serif m-3">Recruiters should follow the following steps to register on <span className="font-bold">Training and Placement Cell, NITP</span></div>
      </div><div className="p-5 grid justify-items-center h-11/12">
          {steps.map((item) => (
            <div className="py-2 grid justify-items-center w-auto  md:w-1/2" key={item.index}>
              <div className="p-5 flex flex-col justify-items-center h-1/3"  data-aos={`${item.index % 2 ? 'slide-left' : 'slide-right'}`}>
                <div className="shadow-2xl rounded-lg">
                  <div className="p-3 text-center text-red-900 font-bold bg-yellow-400">
                    {item.title}
                  </div>
                  <div className="p-4 m-1 space-x-1 pb-3">
                    {item.description}
                    {item.links && <a href={item.links} className="hover:underline text-blue-500 after:content-['_↗']">{item.links}</a>}
                    {item.index === 1 && (
                      <ol className="pl-3">
                        <li>1. {item.st1}</li>
                        <li>2. {item.st2}</li>
                        <li>3. {item.st3}</li>
                        <li>4. {item.st4}</li>
                      </ol>
                    )}
                  </div>
                </div>
              </div>
              {item.index !== 5 && (
                <div className="flex justify-center -space-x-8" data-aos="slide-down">
                  <ArrowDownIcon className="h-20 w-10 text-red-900 font-bold" />
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Process;
