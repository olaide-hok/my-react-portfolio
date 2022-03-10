import React from 'react'
import Layout from '../components/Layout'

function Contact() {
  return (
    <Layout>
      <div>

        <div className="h-screen mt-10">
        <img src="./portfolio assets/contact-mail.gif"
          className='mx-auto'
          alt="contact mail" /> 
        </div>

        <div className="w-screen flex justify-center">

          <div className="md:w-full w-1/2 p-10 shadow-2xl bg-gray-50">
            
            <h1 className="text-2xl font-semibold">
              Contact me to know more
            </h1>
            <input type="text" className="w-full border-2 border-gray-400 rounded
              mt-5 p-1 shadow-lg"
              placeholder='Name'
            />
            <input type="email" className="w-full border-2 border-gray-400 rounded
              mt-5 p-1 shadow-lg"
              placeholder='Email'
            />
            <textarea type="text" className="w-full border-2 border-gray-400 rounded
              mt-5 p-1 shadow-lg"
              placeholder='Enter message here'
            />

            <button className="bg-red-500 text-white px-5 py-1 mt-5"> Submit</button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact