import {useEffect} from 'react'
import Footer from './Footer'
import Header from './Header'

function Layout({children}) {
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
      <div>
        <Header />
        
        <div className="content font-poppins">
            {children}        
        </div>

        <Footer />
      </div>
    
    )
}

export default Layout