import React from 'react';
import { useAuth } from '../../AuthProvider/AuthContext';
import "../../App.css";
import Sidebar from '../../navbar/Sidebar';
import MainContent from '../../MainContent';

interface Pros{
  name?:string,
  nav:string,
}

const AdminPanel: React.FC<Pros> = ({nav}) => {
  const { user } = useAuth();


  const name = "Admin";
  if (!user) {
    return <div>Loading...</div>; // Handle case when user data is still loading
  }

  return (
    <div className='w-full h-screen' >
      <div className=" h-full block md:flex w-full" >
        {/* <div className="heading w-full flex align-center justify-center bg-red-300" > <Header /></div > */}
        <div className="sidebar  md:w-1/6 w-full bg-[#030027] px-5 overflow-y-scroll min-h-10 align-center" >
          <Sidebar name={name} nav={nav} />
        </div>
        <div className='min-h-custom main-content w-full md:w-5/6 bg-[#8D99AE] p-2 overflow' >
          {/* <Header /> */}
          <MainContent nav={nav} />
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;