import React from 'react'
import avatar from '../images/avatar.png'
import doc from '../images/folders.png'
import tick from '../images/check.png'
import cross from '../images/cancel.png'
import { useState } from 'react'
function AdminDashboard() {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const [isDocVisible, setDocVisible] = useState(false);

  const toggleDoc = () => {
    setDocVisible(!isDocVisible);
  };

  return (
    <div>
    <ul className=" grid grid-col divide-y divide-gray-500">
       <li className='flex flex-row justify-around bg-white' >
        <div><img style={{height:"15vh"}}className="rounded-full" alt='student' src={avatar}/></div>
        <div className='text-lg flex flex-col justify-around '><p>Student Name</p>
        <p>Roll Number</p>
        </div>
        <div className='text-lg flex flex-col justify-around '><p>Email</p><p>Phone Number</p></div>
        <div className='flex justify-center'><button ><img src={tick } alt='' style={{ height: "10vh" }} /></button></div>
        <div className='flex justify-center'><button onClick={toggleDoc}><img src ={doc} alt='doc' style={{height:'10vh'}}/></button></div>
        {isDocVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Doc Card Content</h2>
            <p>This is the content of your Doc card.</p>
            <button onClick={toggleDoc} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
              Close
            </button>
          </div>
        </div>
      )}
        <div className='flex justify-center'> <button
              onClick={() => {
                const isValid = true;

                if (isValid) {
                  setIsButtonDisabled(true);
                  console.log('Button clicked and validated!');
                } else {
                  console.log('Validation failed!');
                }
              }}
              disabled={isButtonDisabled}
            >
              <img src={isButtonDisabled ? tick : cross} alt='validate' style={{ height: "10vh" }} />
            </button></div>
       </li>
    </ul>
    </div>
  )
}

export default AdminDashboard