import React from 'react'
const steps = [
    {
        index: 1,
        title: 'Step 1',
        discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
    },

    {
        index: 2,
        title: 'Step 2',
        discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
    },

    {
        index: 3,
        title: 'Step 3',
        discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
    },

    {
        index: 4,
        title: 'Step 4',
        discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
    },

    {
        index: 5,
        title: 'Step 5',
        discription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
    },
]
function Process() {
    return (
        <div className='pt-4 h-fit'>
            <div className='text-4xl underline font-bold text-center text-red-900'> Welcome!!</div>
            <div className='w-1.2 text-center text-xl font-serif m-3'>Recuiter should follow following steps to register on <span className='font-bold'>Training and placement cell, NITP</span></div>
            <div className='flex justify-items-center'>
                <div className='p-5 grid justify-items-center'>
                    {steps.map((item) => (
                        <div className='m-3 flex w-1/4 mt-10' key={item.index}>
                            {/* <div className='px-3 rounded-full font-semibold text-yellow-400 bg-red-900 h-8 pt-1'>
                                {item.index}
                            </div> */}
                            <div className='border-red-900 border-dashed shadow-2xl border-2 rounded-lg '>
                                <div className='bg-gray-300 p-3 text-center text-yellow-500 font-bold'>
                                    {item.title}
                                </div>
                                <div className='p-4 m-1'>
                                    {item.discription}
                                </div>
                            </div>
                            {/* <div className=' border-2 absolute'>
                                <div className='relative -bottom-4 left-1/2 border-2 border-dotted border-black h-8'></div>
                            </div> */}
                        </div>
                        )
                    )}
                </div>
                

            </div>
        </div>
    )
}

export default Process
