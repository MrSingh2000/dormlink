import React from 'react';
import './card.css'
import imageUrl from '../../images/avatar.png'

const CardFlip = () => {

  return (
    <div className="content">
        <a  href="#!" className="card">
          <div className='front flex flex-col justify-around bg-white text-black' style={{color:"black"}}>
        <div><img style={{height:"15vh", width:"15vh"}}className="rounded-full border-4 border-solid border-[#31525b]  object-none" alt='student' src={imageUrl}/></div>
        <div className='flex flex-col justify-around ' ><p className='text-xl '>Student Name</p>
        </div>
        <div className='text-base flex flex-col justify-around mt-4'><p className="text-base ">Roll Number</p><p>Email</p><p>Phone Number</p></div>
        <div className='text-base flex flex-col justify-around mt-4'><p>Room Number</p><p>hostel Name</p></div>
        <div className='text-lg flex justify-center border-2 border-solid border-green-900 bg-green-300 rounded-2xl text-green-900 px-2 m-4' ><button >Paid</button></div>
        
          </div>
          <div className="back" style={{color:"black"}}>
            <div>
              <p>Consectetur adipisicing elit. Possimus, praesentium?</p>
              <p>
                Provident consectetur natus voluptatem quis tenetur sed beatae eius sint.
              </p>
        <div className='text-lg flex justify-center bg-red-800 border-solid border-4 rounded-full text-white border-red-950'><button >Validate</button></div>
            </div>
          </div>
        </a>
    </div>
  );
};

export default CardFlip;
