import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./SideBar.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useLocation } from 'react-router-dom';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { useAuth } from '../AuthProvider/AuthContext';


interface Admin {
    name?: string,
    nav?: string,
}

// interface AuthPageProps {
//     setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
// }
const Sidebar: React.FC<Admin> = ({ name, nav }) => {
    const { logout } = useAuth();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const location = useLocation();
    const isActive = (path: string) => location.pathname === path;

    const handleLogout = () => {
        logout();
    }
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className='log-button text-white flex justify-center items-center md:mt-2 mt-0'>
                <AccountCircleIcon /> OMS {name}
            </div>

            {/* Button to trigger sidebar */}
            <button
                className='md:hidden flex text-white items-center justify-end w-full'
                onClick={toggleSidebar}
            >
                <MenuIcon />
            </button>

            {/* Offcanvas sidebar from the right */}
            <div className='flex flex-col justify-between'>
                <div
                    className={`flex md:hidden inset-0 bg-gray-800 bg-opacity-50 z-40 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                >
                    <div className={`fixed right-0 top-0 h-full w-48 bg-black shadow-lg transform transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                        <div className='flex justify-end items-center p-2'>
                            <button
                                className='text-white'
                                onClick={toggleSidebar}
                            >
                                <CloseIcon />
                            </button>


                        </div>
                        <div className='side-button flex justify-between  w-full p-4'>
                            <div className='side w-full'>
                                <Link to={`${nav}`}>
                                    <button onClick={toggleSidebar} className={`px-4 md:p-1 py-2 my-2 bg-[#F6FFF8] ${isActive('/') ? 'active' : ''}`}>Dashboard</button>
                                </Link>
                                <Link to={`${nav}/attendance`}>
                                    <button onClick={toggleSidebar} className={`px-4 py-2 my-2 bg-[#F6FFF8] ${isActive('/attendance') ? 'active' : ''}`}>Attendance</button>
                                </Link>
                                <Link to={`${nav}/project`}>
                                    <button onClick={toggleSidebar} className={`px-4 py-2 my-2 bg-[#F6FFF8] ${isActive('/project') ? 'active' : ''}`}>Project</button>
                                </Link>
                                <Link to={`${nav}/reports`}>
                                    <button onClick={toggleSidebar} className={`px-4 py-2 my-2 bg-[#F6FFF8] ${isActive('/reports') ? 'active' : ''}`}>Reports</button>
                                </Link>
                                {nav === '/admin' && <Link to={`${nav}/internship`}>
                                    <button onClick={toggleSidebar} className={`px-4 py-2 my-2 bg-[#F6FFF8] ${isActive('/internship') ? 'active' : ''}`}>Internship</button>
                                </Link>}
                                <Link to={`${nav}/docs`}>
                                    <button onClick={toggleSidebar} className={`px-4 py-2 my-2 bg-[#F6FFF8] ${isActive('/docs') ? 'active' : ''}`}>Technical Docs</button>
                                </Link>
                                <Link to={`${nav}/calendar`}>
                                    <button onClick={toggleSidebar} className={`px-4 py-2 my-2 bg-[#F6FFF8] ${isActive('/calendar') ? 'active' : ''}`}>Calendar</button>
                                </Link>
                                <Link to={`${nav}/chats`}>
                                    <button onClick={toggleSidebar} className={`px-4 py-2 my-2 bg-[#F6FFF8] ${isActive('/chats') ? 'active' : ''}`}>Chats</button>
                                </Link>
                                <Link to={`${nav}/mail`}>
                                    <button onClick={toggleSidebar} className={`px-4 py-2 my-2 bg-[#F6FFF8] ${isActive('/mail') ? 'active' : ''}`}>Mail</button>
                                </Link>
                            </div>
                            <div className='w-full flex justify-center'>
                                <button onClick={handleLogout} style={{ backgroundColor: "#1c3e5e" }} className='flex w-1/2 p-2 text-white font-medium rounded-lg justify-center rounded mt-12 p-2 bg-white'><PowerSettingsNewIcon /> Logout</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Desktop Sidebar */}
                <div className='side-button  hidden md:flex'>
                    <div className='side'>
                        <Link to={`${nav}`}>
                            <button className={`px-4  py-2 my-2 bg-[#F6FFF8] ${isActive('/') ? 'active' : ''}`}>Dashboard</button>
                        </Link>
                        <Link to={`${nav}/attendance`}>
                            <button className={`px-4 py-2 my-2 bg-[#F6FFF8] ${isActive('/attendance') ? 'active' : ''}`}>Attendance</button>
                        </Link>
                        <Link to={`${nav}/project`}>
                            <button className={`px-4 py-2 my-2 bg-[#F6FFF8] ${isActive('/project') ? 'active' : ''}`}>Project</button>
                        </Link>
                        <Link to={`${nav}/reports`}>
                            <button className={`px-4 py-2 my-2 bg-[#F6FFF8] ${isActive('/reports') ? 'active' : ''}`}>Reports</button>
                        </Link>
                        {nav === "/admin" && <Link to={`${nav}/internship`}>
                            <button onClick={toggleSidebar} className={`px-4 py-2 my-2 bg-[#F6FFF8] ${isActive('/internship') ? 'active' : ''}`}>Internship</button>
                        </Link>}
                        <Link to={`${nav}/docs`}>
                            <button className={`px-4 py-2 my-2 bg-[#F6FFF8] ${isActive('/docs') ? 'active' : ''}`}>Technical Docs</button>
                        </Link>
                        <Link to={`${nav}/calendar`}>
                            <button className={`px-4 py-2 my-2 bg-[#F6FFF8] ${isActive('/calendar') ? 'active' : ''}`}>Calendar</button>
                        </Link>
                        <Link to={`${nav}/chat`}>
                            <button className={`px-4 py-2 my-2 bg-[#F6FFF8] ${isActive('/chats') ? 'active' : ''}`}>Chats</button>
                        </Link>
                        <Link to={`${nav}/mail`}>
                            <button className={`px-4 py-2 my-2 bg-[#F6FFF8] ${isActive('/mail') ? 'active' : ''}`}>Mail</button>
                        </Link>
                    </div>
                    <div className='w-full flex justify-center'>
                        <button onClick={handleLogout} style={{ backgroundColor: "#1c3e5e" }} className=' flex p-2 text-white font-medium justify-center rounded-lg mt-12 p-1 bg-white'><PowerSettingsNewIcon /> Logout</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
