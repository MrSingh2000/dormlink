import React from 'react'
import logo from '../images/hostel.png'
import github from '../images/github.png'

function Footer() {
  return (
    <div><footer className="px-4 divide-y bg-[#ffa101] text-white">
	<div className="container flex flex-col justify-center md:justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0 ">
        <div className='flex justify-center'>
      <img src={logo} style={{ width:"20vh"}}className=" w-auto justify-center align-center " alt="Flowbite Logo" />
      </div>
		<div className="lg:w-1/3">
			<a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start ">
				<div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-400">
					
				</div>
				<span className="self-center text-2xl font-bold ">Dorm-Link</span>
			</a>
		</div>
		<div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-2">
			<div className="space-y-3">
				<h3 className="tracki uppercase font-bold">Developed By </h3>
				<ul className="space-y-1 ">
					<li>
						<a rel="noopener noreferrer" href="#">Anshuman Singh (20001001011) </a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Aryan Bhan (20001001013)</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Ujjwal Aggarwal (20001001119)</a>
					</li>
				</ul>
			</div>
			
			<div className="space-y-3 flex flex-col justify-center">
				<div className="uppercase font-bold justify-center text-center">Project Code</div>
				<div className="flex justify-center space-x-3">
                <a href='https://github.com/MrSingh2000/dormlink'>
                <img src={github} className="hover:cursor-pointer" alt="github" />
                </a>
				</div>
			</div>
		</div>
	</div>
	<div className="py-6 text-sm text-center dark:text-gray-400">© 2023 Copyright. All rights reserved.</div>
</footer></div>
  )
}

export default Footer