import React, { useState } from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';


const Docs: React.FC = () => {

  const [showModal, setShowModal] = useState<boolean>(false);
  const handleModal = () => {
    setShowModal(!showModal);
  }

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
      <div className='flex h-full w-full overflow-auto'>
        <div className='flex w-full align-start flex-wrap'>
          {[...Array(20)].map((_, index) => (

            <div className='flex flex-col justify-between min-h-48 mt-1 pl-2 pr-2 w-techDocCard mr-1 text-white bg-[#030027] rounded'>
              <div className='h-1/4 font-medium sm:text-xl text-lg text-white'>
                Project Name
              </div>
              <div className='h-1/2 sm:text-lg text-sm text-white'>
                Domain Name
              </div>
              <div className='w-full mb-2 flex justify-end'>
                <button className='md:w-1/3 w-full mt-3 align-center bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                  onClick={handleModal}
                >
                  Know More
                </button>
              </div>
            </div>
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

      </div>
    </>
  )
}

export default Docs;
