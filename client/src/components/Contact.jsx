import React, { useState } from 'react';
import bg from '../images/email-marketing.png'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div style={{backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat", backgroundAttachment:"fixed", backgroundPosition:"center"}} className='bg-white p-4 '>
    <div className="max-w-md md:max-w-4xl mx-auto   p-6  text-white shadow-md rounded-xl bg-[#31525ba7] h-[75%] flex flex-col justify-center">
        <h1 className="text-2xl font-semibold mb-6 text-center">Contact Us</h1>
        <div className=' flex justify-around content-center '>
        <form onSubmit={handleSubmit} style={{width:"50%"}} >
          <div className="mb-4">
            <label className="block text-white text-sm font-semibold mb-2" htmlFor="name">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-[#ffa101]"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm font-semibold mb-2" htmlFor="email">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-[#ffa101]"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm font-semibold mb-2" htmlFor="message">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-[#ffa101]"
              rows="4"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#ffa101] text-white py-2 rounded-md hover:bg-[#ffa201a8] focus:outline-none transition duration-300"
          >
            Submit
          </button>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
