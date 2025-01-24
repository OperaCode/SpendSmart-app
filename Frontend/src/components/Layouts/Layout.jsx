import React from 'react'
import Footer from './Footer'

const Layout = ({children}) => {
    return (
      <>
          {/* <Header/> */}
          <div style={{minHeight: '80vh'}}>{children}</div>
          <Footer/>
      </>
    )
  }

export default Layout