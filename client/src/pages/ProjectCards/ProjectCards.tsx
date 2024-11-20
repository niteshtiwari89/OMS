import React from 'react'


interface ModalProp{
    handleModal:()=>void,
}

const ProjectCards: React.FC<ModalProp> = ({handleModal}) => {

    return (
        <>
            <div className='flex flex-col justify-between min-h-48 mt-1 pl-2 pr-2 w-techDocCard mr-1 text-white bg-[#030027] rounded'>
                <div className='h-1/4 sm:text-lg text-xl font-medium  text-white'>
                    Project Name
                </div>
                <div className='h-1/4  text-white'>
                    Domain Name: MERN Stack
                </div>
                <div className='h-1/4 text-white'>
                    Priority: High
                </div>
                <div className='h-1/4  text-white'>
                    Deadline: Abhi Chahiye
                </div>
                <div className='w-full min:h-1/4 mb-2 flex justify-end'>
                    <button className='md:w-1/3 w-full mt-3 align-center bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                        onClick={handleModal}
                    >
                        Know More
                    </button>
                </div>
            </div>
            
        </>
    )
}

export default ProjectCards;
