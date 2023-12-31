import AnimatedTextAbout from '@/components/AnimatedTextAbout';
import Layout from '@/components/Layout';
import TransitionEffect from '@/components/TransitionEffect';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import worldPic from '../../public/images/world.png'

const contacts = () => {
  return (
    <>
      <Head>
        <title>CGRFARIA | Contacts Page</title>
        <meta name="description" 
        content="Connect with us easily through our contacts page. 
        Get in touch, ask questions, or share feedback effortlessly. 
        Your communication matters to us." />
      </Head>
      <TransitionEffect />
      <main className='flex flex-col w-full mb-16 items-center justify-center overflow-hidden'>
        <Layout className='pt-16'> 
          <AnimatedTextAbout text='Words Can Change The World!' 
          className='mb-16' />

          <div className="grid grid-cols-8 gap-[8rem] lg:grid-cols-1 xs:gap-0">
            
            <div className="flex flex-col col-span-4 items-start pt-4 lg:items-center">
              
              <h2 className="mb-6 text-3xl font-bold uppercase text-dark/75 dark:text-light/75
                xs:text-2xl">
                GET IN TOUCH
              </h2>

              <form class="form" action="./contato.html">

                <div className="grid grid-cols-4 gap-10 xs:grid-cols-1">

                  <div className='col-span-2'>
                    <label for="name" className="block text-sm font-medium text-gray-700 
                    dark:text-light/60">Name</label>
                    <input type="text" id="name" name="name" placeholder="Your name" className="mt-1 p-2 
                    w-full rounded-md border border-gray-300 focus:border-2 focus:border-primary 
                    focus:ring-primary outline-none dark:focus:border-primaryDark 
                    dark:focus:ring-primaryDark" />
                  </div>

                  <div className='col-span-2'>
                    <label for="phone" className="block text-sm font-medium text-gray-700 
                    dark:text-light/60">Phone</label>
                    <input type="text" id="phone" name="phone" placeholder="+123 456 789 100" 
                    className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:border-2 
                    focus:border-primary focus:ring-primary outline-none dark:focus:border-primaryDark 
                    dark:focus:ring-primaryDark" />
                  </div>
                </div>

                <div class="mt-6">
                  <label for="email" className="block text-sm font-medium text-gray-700 
                  dark:text-light/60">E-mail</label>
                  <input type="email" id="email" name="email" placeholder="your-email@email.com" 
                  className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:border-2 
                  focus:border-primary focus:ring-primary outline-none dark:focus:border-primaryDark 
                  dark:focus:ring-primaryDark" />
                </div>

                <div class="mt-6">
                  <label for="message" class="block text-sm font-medium text-gray-700 
                  dark:text-light/60">Message</label>
                  <textarea rows="5" id="message" name="message" 
                    placeholder="Type here how I could help you." 
                    className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:border-2 
                    focus:border-primary focus:ring-primary outline-none dark:focus:border-primaryDark 
                    dark:focus:ring-primaryDark">
                  </textarea>
                </div>

                <button className="botao mt-6 bg-primary hover:bg-white hover:text-primary 
                  text-white font-semibold py-2 px-4 rounded-full dark:bg-primaryDark dark:text-black
                  dark:hover:text-primaryDark dark:hover:bg-black">
                  Send Message
                </button>

              </form>
            </div>
            <div className="flex flex-col col-span-4 items-center">
              <Image src={worldPic} alt="World" className=" xl:mt-10 w-full h-auto lg:hidden" 
              priority
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              />
            </div>
          </div>

        </Layout>
      </main>

    </>
  )
};

export default contacts