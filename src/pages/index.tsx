import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Banner from 'src/components/banner'
import Profile from 'src/components/profile'
import Apointment from 'src/components/apointment'
const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Banner />
      <Profile />
      <Apointment />
    </>

  )
}

export default Home
