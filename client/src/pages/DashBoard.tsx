import React from 'react'
import "../App.css"

const DashBoard: React.FC = () => {
  return (
    <>
      <div className='block justify-center flex-wrap w-full h-full'>
        {/* <div className='flex justify-center w-full align-center h-10'>
          Welcome to Kahi Par
        </div> */}
        <div className='card block rounded bg-[#F6FFF8] m-1 h-2/5'>
          <div className='p-4'>
            <b> Name: </b> Nitesh Tiwari
          </div>
          <div className='p-4'>
            <b>Email:</b> niteshtiwari@gmail.com
          </div>
          <div className='p-4'>
            <b>Number:</b> 9874563210
          </div>
          <div className='p-4'>
            <b>EmpID:</b> TARS001002
          </div>
        </div>
      </div>
    </>
  )
}

export default DashBoard;