import React, { ReactNode } from 'react'
import Head from 'next/head'
import Navbar from './header'
import Footer from './footer'


type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Mappable' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <Navbar/>
    </header>
    
    {children}

    <Footer/>
    
  </div>
)

export default Layout
