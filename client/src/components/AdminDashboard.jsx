import React from 'react'
import avatar from '../images/avatar.png'
function AdminDashboard() {
  return (
    <div>
    <ul className=" grid grid-col divide-y divide-gray-500">
       <li className='flex flex-row justify-around bg-white' >
        <div><img style={{height:"15vh"}}className="rounded-full" alt='student' src={avatar}/></div>
        <div className='text-lg '><p>Student Name</p>
        <p>Roll Number</p>
        </div>
        <div><p>Email</p><p>Phone Number</p></div>
        <div><button>fee paid</button></div>
        <div><button>Documents</button></div>
        <div><button>Vaildate</button></div>
       </li>
    </ul>
    </div>
  )
}

export default AdminDashboard