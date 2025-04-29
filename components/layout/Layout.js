import React, { Children } from 'react'

// import Breadcrumb from './Breadcrumb'

import Header from './Header'
import Breadcrumb from './Breadcrumb'   
import Footer from './Footer'

export default function Layout( { children }) {
  return (
   <>
  
   <Header/>   
   {/* {Breadcrumb && <Breadcrumb breadcrumb={Breadcrumb} />} */}
   {children}
   <Footer/>
   </>
  )
}

