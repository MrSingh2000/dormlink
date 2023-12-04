import React from 'react'
import avatar from '../images/avatar.png'
import { Link } from 'react-router-dom'
import check from '../images/check.png'
import doc from '../images/folders.png'
function AdminDashboard() {
  return (
    <div>
    <ul className=" grid grid-col divide-y divide-gray-500">
       <li className='flex flex-row justify-around bg-white p-2' >
        <div><img style={{height:"10vh"}}className="rounded-full border-solid border-2 border-[#31525b]" alt='student' src={avatar}/></div>
        <div className='text-lg flex flex-col justify-center text-center'><p>Student Name</p>
        <p>Roll Number</p>
        </div>
        <div className='text-lg flex flex-col justify-center text-center'><p>Email</p><p>Phone Number</p></div>
        <button
                type="button"
              >

                <img src={check} alt="checkbox" style={{height:"4vh"}}/>
              </button>
              <button
                type="button"
                className=""
              >
                <Link to={"/login"}><img src={doc} style={{height:"6vh"}} alt="doc"/></Link>
              </button>
              <button
                type="button"
              >
                <img src={check} alt="checkbox" style={{height:"4vh"}}/>
              </button>
       </li>
       <li className='flex flex-row justify-around bg-white p-2' >
        <div><img style={{height:"10vh"}}className="rounded-full border-solid border-2 border-[#31525b]" alt='student' src={avatar}/></div>
        <div className='text-lg flex flex-col justify-center text-center'><p>Student Name</p>
        <p>Roll Number</p>
        </div>
        <div className='text-lg flex flex-col justify-center text-center'><p>Email</p><p>Phone Number</p></div>
        <button
                type="button"
              >

                <img src={check} alt="checkbox" style={{height:"4vh"}}/>
              </button>
              <button
                type="button"
                className=""
              >
                <Link to={"/login"}><img src={doc} style={{height:"6vh"}} alt="doc"/></Link>
              </button>
              <button
                type="button"
              >
                <img src={check} alt="checkbox" style={{height:"4vh"}}/>
              </button>
       </li>
    </ul>
    
    </div>
  )
}

export default AdminDashboard