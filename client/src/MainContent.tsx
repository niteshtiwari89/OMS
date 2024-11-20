import React from 'react'
import {Route, Routes}  from 'react-router-dom'
import Attendance from './pages/Attendance';
import DashBoard from './pages/DashBoard';
import Project from './pages/Project';
import Report from './pages/Report';
import Internship from './pages/AdminPanel/Internship';
import Docs from './pages/Docs';
import "../src/App.css"
import Calendar from './Calender/Calender';
import Chat from './pages/Chat';
import Mails from './pages/Mail';
import { useAuth } from './AuthProvider/AuthContext';


interface Props{
  nav:string,
}

const MainContent:React.FC<Props> = ({nav}) => {
  return (
    <div className='dash relative' style={{height:"100%",width:"100%", overflow:"hidden" }}>
      <Routes>
        <Route path='/' element={<DashBoard/>}/>
        <Route path='attendance' element={<Attendance/>}/>
        <Route path='project' element={<Project nav={nav}/>}/>
        <Route path='reports' element={<Report/>}/>
        {nav === "/admin" && <Route path='internship' element={<Internship/>}/>}
        <Route path='docs' element={<Docs/>}/>
        <Route path='calendar' element={<Calendar/>}/>
        <Route path='chats' element={<Chat/>}/>
        <Route path='mail' element={<Mails/>}/>
      </Routes>
    </div>
  )
}

export default MainContent;
