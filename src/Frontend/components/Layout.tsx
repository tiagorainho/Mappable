import React, { ReactNode } from 'react'
import Head from 'next/head'
import Navbar from './navbar'
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

    <div className="flex flex-col h-screen justify-between">
    <Navbar/>
      <div className="mb-auto h-full flex-grow">
        {children}
      </div>
      <Footer/>
    </div>
  </div>
)

export default Layout
