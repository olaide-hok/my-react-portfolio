import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Header() {
  const [showMenu, setShowMenu] = useState('md:hidden')

  const toggleHamburger = () => {
    if (showMenu === 'md:hidden') {
      setShowMenu('')
    } else {
      setShowMenu('md:hidden')
    }
  }

  const menuItems = [
    {
      title: 'Home',
      key: '/'
    },
    {
      title: 'Projects',
      key: '/projects'
    },
    {
      title: 'Contact',
      key: '/contact'
    }
  ]

  const pathname = window.location.pathname

  return (
    <div className='text-white font-poppins'>
      <div className={`flex bg-theme justify-between items-center p-2 shadow-lg ${showMenu === '' && 'md:flex-col'}`}>

        <div className='flex justify-between w-full items-center'>
          <h1 className='text-4xl font-semibold'>H O K</h1>

          <FaBars
            className='md:flex lg:hidden xl:hidden 2xl:hidden cursor-pointer text-2xl'
            onClick={toggleHamburger}
          />

        </div>

        {/* Large Screen Menu */}
        <div className='flex md:hidden'>
          {menuItems.map((item, index) => {
            return (
              <li className={`list-none mx-5 p-1 ${item.key === pathname && 'bg-white text-black rounded-md'}`} key={index}>
                <Link to={`${item.key}`}>{item.title}</Link>
              </li>
            )
          })}
        </div>

        {/* Mobile menu */}
        <div className={`mt-5 md:flex w-full flex-col lg:hidden xl:hidden 2xl:hidden ${showMenu}`}>
          {menuItems.map((item, index) => {
            return (
              <li className={`list-none py-1 ${item.key === pathname && 'bg-white text-black rounded-md px-5'}`} key={index}>
                <Link to={`${item.key}`}>{item.title}</Link>
              </li>
            )
          })}
        </div>

      </div>
    </div>
  )
}

export default Header