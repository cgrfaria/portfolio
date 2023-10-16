import '@/styles/globals.css'
import { Montserrat } from 'next/font/google'
import Head from 'next/head'
import Footer from '../components/Footer.js'
import NavBar from '../components/NavBar.js'
 
const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mont',
})
 
export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
       <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>

    <main lang="en" className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </main>
    </>
  )
}

