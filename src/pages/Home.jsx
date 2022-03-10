import {FaReact, FaHtml5, FaCss3, FaBootstrap, FaNode} from 'react-icons/fa'
import {  SiJavascript, SiTailwindcss, SiGatsby, SiTypescript, 
          SiFirebase, SiReactrouter
        } from 'react-icons/si'
import { GiDaisy } from 'react-icons/gi'
import Layout from '../components/Layout'

function Home() {

  const age = "\\[\\frac{5}{2} \\sum_n ^\\infty \\frac{1}{2^n} +e^{25i\\pi} + \\int_{2}^{5}2xdx \\]" 

  return (
    <Layout>
      <div>

        {/* Introductory section */}
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
              <h1 className='text-7xl md:text-4xl'>Hi, I am <b className='text-blue-500'>HABEEB.</b> </h1>
              <h1 className='text-4xl md:text-xl'>A Frontend <b className='text-blue-500'>Web Developer.</b> </h1>
            </div>
          </div>
        </div>

        {/* Technology stack */}
        <div className='mt-20'>
          <h1 className="text-4xl text-blue-700 font-bold text-center my-8">
            Technologies I use
          </h1>
          <div className="grid md:grid-cols-2 sm:grid-cols-1 grid-cols-4">
            <FaHtml5
              size={125}
              color='#ea580c'
              className='w-full text-center mt-10 animate-pulse'
           />
           <FaCss3
              size={125}
              color='#3b82f6'
              className='w-full text-center mt-10'
           />
           <SiJavascript
              size={125}
              color='#65a30d'
              className='w-full text-center mt-10 '
           />
           <FaBootstrap
              size={125}
              color='#1e40af'
              className='w-full text-center mt-10 animate-pulse'
           />
           <SiTailwindcss
              size={125}
              color='#22d3ee'
              className='w-full text-center mt-10'
           />
           <GiDaisy
              size={125}
              color='#eab308'
              className='w-full text-center mt-10 animate-pulse'
           />
           <SiGatsby
              size={125}
              color='#6d28d9'
              className='w-full text-center mt-10'
           />
           <SiTypescript
              size={125}
              color='#2563eb'
              className='w-full text-center mt-10 animate-pulse'
           />
           <FaNode
              size={125}
              color='#065f46'
              className='w-full text-center mt-10 animate-pulse'
           />
           <SiFirebase
              size={125}
              color='#facc15'
              className='w-full text-center mt-10'
           />
           <FaReact
              size={125}
              color='cyan'
              className='w-full text-center mt-10'
           />
           <SiReactrouter
              size={125}
              color='black'
              className='w-full text-center mt-10 animate-pulse'
           />
          </div>
        </div>

        {/* Javascript */}
        <div className='my-20'>
          <div className='text-center h-52 bg-primary'>
            <h1 className='font-bold text-white text-4xl md:text-xl py-10'>Currently on a journey to becoming a fullstack developer.</h1>
          </div>


          <div className='md:mx-5 mx-32 bg-gray-50 shadow-2xl -mt-20 rounded-lg hover:text-white hover:bg-gray-700'>
            <div className='h-96'>
              <lottie-player 
                src="https://assets4.lottiefiles.com/packages/lf20_6gfl0jjp.json"  
                background="transparent"  
                speed="1" 
                loop 
                autoplay
              ></lottie-player>
            </div>

            <p className='text-2xl md:text-xl md:text-center my-5 font-semibold md:px-5 px-14 py-10'>Javascript is extensively used in web development.</p>
          </div>
        </div>

        {/* Stack Section */}
        <div className='my-20'>
          <div className='text-center h-52 bg-orange-600'>
            <h1 className='font-bold text-white text-4xl md:text-xl py-10'>My Dev Stacks</h1>
          </div>


          <div className='md:mx-5 mx-32 bg-gray-50 shadow-2xl -mt-20 rounded-lg hover:text-white hover:bg-gray-700'>
            <div className='h-96'>
            <lottie-player 
              src="https://assets10.lottiefiles.com/packages/lf20_aptscmnx.json"  
              background="transparent" 
              speed="1" 
              loop
              autoplay            
            ></lottie-player>
            </div>

            <div className="grid md:grid-cols-1 grid-cols-3 p-5">

              <div className='text-left sm:text-center'>
                <h1 className='text-xl font-bold'>Front End</h1>
                <hr />
                <p className="font-semi-bold mt-2">HTML5</p>
                <p className="font-semi-bold mt-2">CSS</p>
                <p className="font-semi-bold mt-2">JavaScript</p>
                <p className="font-semi-bold my-2">React</p>
              </div>

              <div className='text-center sm:text-center'>
                <h1 className='text-xl font-bold'>UI/UX</h1>
                <hr />
                <p className="font-semi-bold mt-2">Bootstrap</p>
                <p className="font-semi-bold mt-2">Tailwind</p>
                <p className="font-semi-bold mt-2">Dasiy UI</p>
                <p className="font-semi-bold my-2">Material UI</p>
              </div>

              <div className='text-right sm:text-center'>
                <h1 className='text-xl font-bold'>Backend and DB</h1>
                <hr />
                <p className="font-semi-bold mt-2">Node JS</p>
                <p className="font-semi-bold mt-2">Express JS</p>
                <p className="font-semi-bold mt-2">Mongo DB</p>
                <p className="font-semi-bold my-2">Firebase</p>
              </div> 
              
            </div>

          </div>
        </div>

        {/* Dev Info */}
        <div>
          <h1 className="text-4xl text-gray-500 text-center md:text-xl font-bold">
            Who is Habeeb ?  
          </h1>

          <div className='h-screen relative text-gray-500'>
            <div className='h-full'>
            <lottie-player 
              src="https://assets7.lottiefiles.com/packages/lf20_gja1z1ru.json"  
              background="transparent"  
              speed="1"
              loop
              autoplay
            ></lottie-player>
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h1 className='text-2xl font-bold'>
                Hi
                <hr />
                <pre className='text-xl md:text-sm my-5 font-poppins font-semibold'>
                  {JSON.stringify({
                    name : 'Kareem Habeeb', 
                    gender : 'Male',
                  }, null, 2)}
                </pre>
              </h1>
            </div>
          </div>

        </div>

      </div>
    </Layout>
  )
}

export default Home 