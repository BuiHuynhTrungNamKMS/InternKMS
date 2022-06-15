import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../src/Common/Footer'
import HomePage from '../src/Home/HomePage'
import NavBar from '../src/Common/NavBar'
import Panel from '../src/Common/Panel'
import styles from '../styles/Home.module.css'


const Home: NextPage = () => {
  return (
    <div className="container mx-auto p-5">
      <Panel />
      <HomePage />
    </div>
  )
}

export default Home
