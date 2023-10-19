import Head from 'next/head'
import Image from 'next/image'
import Layout from '@/components/Layout'
import profilePic from '../../public/images/profile/developer-origin.png'
import AnimatedText from '../components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '../components/icons'
import HireMe from '../components/HireMe'
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg'
import { TransitionEffect } from '@/components/TransitionEffect'

export default function Home() {
  return (
    <>
      <Head>
      <title>CGRFARIA | Portfolio</title>
        <meta name="description" 
        content="Welcome to my Creative World of Web Development and UI/UX Design. 
        I'm Carlos Gustavo, an Experienced Front-End Developer and UI/UX Designer 
        Crafting Innovative Digital Experiences. 
         Explore My Portfolio for Inspiring Solutions." />
      </Head>
      <TransitionEffect />
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>

        <Layout className='pt-0 md:p-16 sm:pt-8'>
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className='w-1/2 md:w-full'>
              <Image src={profilePic} alt='Carlos Gustavo' className='w-full h-auto
              lg:hidden md:inline-block md:w-full' 
              priority
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
              />
            </div>

            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText text='Turning Vision Into Reality With Code And Design.' /> 
              
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
              As a skilled front-end developer, 
              I am dedicated to turning ideas into innovative web applications. 
              Explore my latest projects and articles, 
              showcasing my expertise in React.js and web development.
              </p>

              <div className='flex items-center self-start mt-2 lg:self-center'>

                <Link href="/dummy.pdf" target={"_blank"}
                  className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg
                  font-semibold hover:bg-white hover:text-dark md:p-2 md-px-4 md:text-base'
                  download={true}>
                  Resume <LinkArrow className={'w-6 ml-1 md:w-4'} />
                </Link>

                <Link href="mailto:cgrfaria@gmail.com" target={"_blank"}
                  className=' flex items-center bg-white text-dark p-2.5 px-6 rounded-lg 
                  ml-4 text-lg font-semibold capitalize hover:bg-dark hover:text-light
                  md:text-base'>
                  Contact
                </Link>

              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className='absolute right-8 bottom-8 inline-block w-24 md:hidden'>
          <Image src={lightBulb} alt='Lamp' className='w-full h-auto' />
        </div>


      </main>
    </>
  )
}
