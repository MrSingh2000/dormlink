import React from 'react'
import avatar from '../images/avatar.png'
function AdminDashboard() {
  return (
    <div>
    <ul className=" grid grid-col divide-y divide-gray-500">
       <li>
        <div><img className="round-full" alt='student' src={avatar}/></div>
        <div><p>Student Name</p>
        <p>Roll Nu</p>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
       </li>
    </ul>
    </div>
  )
}

export default AdminDashboard