import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import AutoBuy from '../components/AutoBuy'


const Home: NextPage = () => {
  return (
    <div>
      <Head><title>AutoBot</title></Head>
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <AutoBuy />
      </div>
    </div>
  )
}

export default Home
