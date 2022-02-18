import Head from 'next/head'
import Counter from '../components/Counter'
import Faq from '../components/Faq'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Location from '../components/Location'
import Navigation from '../components/Navigation'
import Partners from '../components/Partners'
import Schedule from '../components/Schedule'

export default function Home() {
  return (
    <>
      <Head>
        <title>Konferencja</title>
        <meta name="description" content="Konferencja SKNI KOD. Zapraszamy!"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Header />
      <Counter />
      <Schedule />
      <Partners />
      <Faq />
      <Location />
      <Footer />
    </>
  )
}
