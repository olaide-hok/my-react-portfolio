import { FaGithub, FaTwitter, FaMailBulk } from 'react-icons/fa'

function Footer() {

  const getYear = new Date().getFullYear()

  return (
    <>
      <div className="h-44 md:h-24">
      <svg xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1440 320"
      ><path fill="#2a2a2a" 
        fill-opacity="1" 
        d="M0,320L0,288L288,288L288,192L576,192L576,96L864,96L864,128L1152,128L1152,224L1440,224L1440,320L1152,320L1152,320L864,320L864,320L576,320L576,320L288,320L288,320L0,320L0,320Z"></path></svg>
      </div>

      <div className='bg-theme w-screen flex justify-center'>
      <div className='md:w-full w-1/2'>
        <div className="bg-theme p-10 text-center">
          <p className="text-gray-50 my-2">Designed and Developed By Kareem Habeeb</p>
          
          <div className="h-1 border-2 border-gray-50 border-dotted"></div>

          <div className="flex text-white w-full justify-between py-3">
            <a href="mailto:olaidekaremm43@yahoo.com" target='_blank'  rel="noreferrer"> <FaMailBulk />  </a>
            <a href="https://twitter.com/olaide_hok" target='_blank'  rel="noreferrer"><FaTwitter /></a>
            <a href="https://github.com/olaide-hok" target='_blank'  rel="noreferrer"><FaGithub /></a>
          </div>

          <div className="h-1 border-2 border-gray-50 border-dotted"></div>

          <p className="text-gray-50 my-2">&copy; {getYear} All Rights Reserved.</p>  
        </div>
      </div>
    </div>
    </>
    
  )
}

export default Footer