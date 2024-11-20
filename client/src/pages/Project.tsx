import React, { useState } from 'react'
import "./ProjectCards/ProjectCards.css"
import ProjectCards from './ProjectCards/ProjectCards';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';


interface Props {
  nav: string,
}

const Project: React.FC<Props> = ({ nav }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const handleModal = () => {
    setShowModal(!showModal);
  }
  const handleAddModal = () => {
    setShowAddModal(!showAddModal);
  }





  // const AddProject = () => {
  //   console.log("Hello");
  //   return (<>
  //     <Box sx={{ ...style, width: "400px" }}>
  //       <div>Hello Wolrd</div>
  //     </Box>
  //   </>)
  // }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: 400,
    bgcolor: 'black',
    color: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 2,
  };

  return (
    <>
      {nav === "/admin" ? <div className='flex justify-end'><button className='bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={handleAddModal} >+Add Project</button></div> : null}
      <div className='project overflow-auto min-h-custom h-full flex flex-wrap w-full p-4  text-white'>
        {[...Array(10)].map((_, index) => (
          <ProjectCards handleModal={handleModal} />
        ))}
      </div>
      <Modal
        open={showModal}
        onClose={handleModal}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <div className='flex justify-between'>
            <h2 id="parent-modal-title" className='font-bold text-lg'>Project Name</h2> <button onClick={handleModal}><CloseIcon /></button>
          </div>
          <hr />
          <p id="parent-modal-description" className='mt-2'>
            <b>Description:</b><br />
            <li>Real-time chat: users can send and receive messages in real-time</li>
            <li>User authentication: users can sign up, log in, and log out using JWT and Google Auth</li>
            <li>Group creation: users can create chat rooms and invite others to join</li>
            <li>Notifications: users can receive notifications on new messages</li>
            <li>Emojis: users can send and receive emojis in messages</li>
            <li>Profile page where users can update their avatar and display name.</li>
            <li>Users can create a room to chat with others.</li>
            <li>Search functionality.</li>
            <li>Responsive design: the website is optimized for different screen sizes and devices</li>
          </p>
          <div className='flex justify-end'>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Download</button>
          </div>
          {/* <ChildModal /> */}
        </Box>
      </Modal>
      <Modal
        open={showAddModal}
        onClose={handleAddModal}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <div className='flex justify-between'>
            <h2 id="parent-modal-title" className='font-bold text-lg'>Add Project</h2> <button onClick={handleAddModal}><CloseIcon /></button>
          </div>
          <hr />
          <form>
            <div>Project Name: <input type="text" /></div>
          </form>
          <div className='flex justify-end'>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Download</button>
          </div>
          {/* <ChildModal /> */}
        </Box>
      </Modal>
    </>
  )
}

export default Project;