import type { NextPage } from 'next'
import Header from '../components/header'
import Banner from 'src/components/banner'
import Profile from 'src/components/profile'
import Apointment from 'src/components/apointment'
import Patients from 'src/components/patients'
import Questions from 'src/components/questions'
import Footer from 'src/components/footer'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Banner />
      <Profile />
      <Apointment />
      <Patients /> 
      <Questions />
      <Footer />
    </>

  )
}

export default Home
