import React from 'react'
import avatar from '../images/avatar.png'
function AdminDashboard() {
  return (
    <div>
    <ul className=" grid grid-col divide-y divide-gray-500">
       <li className="pb-3 sm:pb-4">
          <div className="flex items-center  rtl:space-x-reverse">
             <div className="flex-shrink-0">
               <image  style={{height:'10vh'}} className=" rounded-full" src={avatar} alt="Student image"/>
             </div>
             <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                   Student Name
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                   Roll Number
                </p>
             </div>
             <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                   Student Name
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                   Roll Number
                </p>
             </div>
             <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                $320
             </div>
          </div>
       </li>
    </ul>
    </div>
  )
}

export default AdminDashboard