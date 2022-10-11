import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout'
import InteractiveMap from '../components/interactiveMap'
import MapHandler from '../components/mapHandler'

const Home: NextPage = () => (
  <Layout>
    <main className="container mx-auto py-12 px-16 space-y-8">
      <MapHandler/>
      <InteractiveMap/>
    </main>
  </Layout>
)

export default Home
