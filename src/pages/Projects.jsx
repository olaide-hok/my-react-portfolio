import React from 'react'
import Layout from '../components/Layout'

function Projects() {
  return (
    <Layout>
      <div className="mt-20">
        <div className="h-screen">
          <div className="h-3/4">
          <lottie-player 
            src="https://assets9.lottiefiles.com/packages/lf20_ygiuluqn.json" 
            background="transparent" 
            speed="1"  
            loop
            autoplay          
          ></lottie-player>
          </div>

          <p className="text-xl font-semibold text-center">
            Great ideas are not adopted automatically. They are birth from practice with courageous patience.  
          </p>

          <h1 className="text-4xl text-center font-bold mt-5">Because</h1>
           
        </div>

        <div className='font-semibold bg-red-500 text-center 
          text-8xl text-white mx-20 p-20 rounded-tl-full rounded-br-full
          md:mx-5 md:text-2xl'>
          <h1 className=''>THE GAME IS ...</h1>
          <h1 className=''>CONSISTENCY</h1>
        </div>
      </div>
    </Layout>
  )
}

export default Projects 