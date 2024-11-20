import React, { useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box, Paper } from '@mui/material';
// import { Height } from '@mui/icons-material';

const Report: React.FC = () => {
  const [isClick, setIsClick] = useState<boolean>(false)
  const [isReportClick, setIsReportClick] = useState<boolean>(false)

  // console.log(isClick);
  const handleToggle = () => {
    setIsClick(!isClick);
    if (isReportClick) {
      setIsReportClick(false)
    }
  }

  const handleToggleReport = () => {
    setIsReportClick(!isReportClick);
    if (isClick) {
      setIsClick(false)
    }
  }

  const handleSubmit = () => {

  }
  return (
    <div className='reports'>
      <button className='bg-[#F6FFF8] mb-3 w-full p-4 rounded flex justify-between' onClick={handleToggle}><p>Enter your Report Details</p>{!isClick ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}</button>
      <div className={`flex flex-col mb-2 border border-2  border-black rounded p-2 bg-[#030027] ${isClick ? '' : 'detail'}`}>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col  text-white '>
            Date :
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="date" />
          </div>
          <div className='flex flex-col text-white '>
            Employee Name :
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="employeeName" type="text" placeholder="Employee Name" />
            {/* <input type="text" /> */}
          </div>
          <div className='flex flex-col text-white '>
            Work Assigned :
            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="" id=""></textarea>
          </div>
          <div className='flex flex-col  text-white mb-3'>
            Time Spend(In Hours) :
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="Number" />
          </div>
          <div className='flex'>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type='submit'>Submit</button>
          </div>
        </form>
      </div>
      <button className='bg-[#F6FFF8] mb-3 z-10 w-full p-4 rounded flex justify-between' onClick={handleToggleReport}><p>Employee Reports</p>{!isReportClick ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}</button>
      <div className={`flex max-h-tableCont flex-col border border-2  border-black rounded p-2 bg-[#030027] ${isReportClick ? '' : 'listReport'}`}>
        <Box className='max-h-contTab' sx={{ width: '100%', overflow: "auto" }}>
          <Paper className='' sx={{ width: '100%', overflowY: "auto" }}>
            <TableContainer className='max-h-contTab' sx={{ overflow: 'auto' }}>
              <Table stickyHeader className=' bg-neutral-200' sx={{ minWidth: "650", overflowX: "auto" }} aria-label="simple table">
                <TableHead sx={{ position: 'sticky', top: 0, zIndex: 1 }}>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 600 }}>Profile</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Name</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>In Time</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Out Time</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Total Hours</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody className='overflow-auto' sx={{ height: "20vh" }}>
                  {/* Replace with your data */}
                  {[...Array(20)].map((_, index) => (
                    <TableRow key={index}>
                      <TableCell>Heloo</TableCell>
                      <TableCell>Heloo</TableCell>
                      <TableCell>Heloo</TableCell>
                      <TableCell>Heloo</TableCell>
                      <TableCell>Heloo</TableCell>
                      <TableCell>Heloo</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Box>
        <button className=" mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Download As CSV</button>
      </div>
    </div>
  )
}

export default Report;
