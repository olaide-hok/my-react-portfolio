import React from 'react'
import Layout from '../components/Layout'

function Home() {
  return (
    <Layout>
      <div>
        <div className="h-screen bg-theme">
          <div className="grid bg-theme md:grid-cols-1 grid-cols-2 h-screen
              items-center border-4 md:border-0 border-white 
              transform rotate-12 md:rotate-0 mx-10">
            
            <div className='h-1/2'>
              <lottie-player 
                src="https://assets2.lottiefiles.com/packages/lf20_Yiahbq.json" 
                background="transparent" 
                speed="1" 
                loop 
                autoplay
              ></lottie-player>
            </div>

            <div className='font-bold text-white md:px-5'>
              <h1 className='text-7xl md:text-4xl'>Hi, I am <b className='text-blue-500'>HABEEB</b> </h1>
              <h1 className='text-4xl md:text-xl'>A Frontend <b className='text-blue-500'>Web Developer</b> </h1>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home 