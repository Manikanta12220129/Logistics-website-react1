import React from 'react'
import NavbarMain from './NavbarMain';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

function Layout() {
  return (
    <>
  <NavbarMain />
   <Outlet />
   <Footer />
    </>
  )
}

export default Layout;