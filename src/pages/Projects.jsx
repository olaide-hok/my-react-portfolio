import React from 'react'
import Layout from '../components/Layout'
import projectsData from '../resources/projects'

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

      <div className="grid mt-20 md:grid-cols-1 grid-cols-3 
        items-center justify-center gap-10 mx-20 md:mx-5">
        {projectsData.map((project, index) => {

          return <div key={index}>
            <div className='relative p-10 border-2 text-center rounded-tr-3xl 
              rounded-bl-3xl border-gray-400'>
              <img src={project.image} className='w-full h-52' alt="" />

              <div className='absolute text-white inset-0 flex justify-center items-center
                flex-col opacity-0  bg-black hover:opacity-80 rounded-tr-3xl 
                rounded-bl-3xl'>
                <h1 className='text-4xl font-semibold'>{project.title}</h1>
                <button className='mt-5  border-2 rounded border-white px-5 py-2 hover:bg-green-500'>DEMO</button>
              </div>
            </div>
          </div>
        })}

      </div>
    </Layout>
  )
}

export default Projects 