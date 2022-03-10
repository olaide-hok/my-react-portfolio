import {FaGithubSquare, FaTwitter, FaMailBulk} from 'react-icons/fa'

function Footer() {
  return (
    <div className='bg-theme w-screen flex justify-center'>
      <div className='md:w-full w-1/2'>
        <div className="bg-theme p-10 text-center">
          <p className="text-gray-50">Designed and Developed By</p>
          
          

          <div className="flex text-white w-full justify-between">
            <FaTwitter />
            <FaMailBulk />
            <FaGithubSquare />

          </div>
          <p className="text-gray-50">Kareem Habeeb</p>  
        </div>
      </div>
    </div>
  )
}

export default Footer