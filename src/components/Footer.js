import Link from 'next/link';
import React from 'react';
import Layout from './Layout'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark
    font-medium text-lg dark:text-light dark:border-light sm:text-base'>

      <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>

        <span className='lg:pt-4'>{new Date().getFullYear()} &copy; All Right Reserved.</span>

        <div className='flex items-center lg:py-2'>
          Build with
          <span className='text-primary dark:text-primaryDark text-2xl px-1'>&#9825;</span>
          by&nbsp;
          <Link href='https://www.github.com/cgrfaria' target={'_blank'}
          className='underline underline-offset-2 hover:no-underline'>
          cgrfaria.dev
          </Link>
        </div>

        <Link href="/contacts"
        className='ml-4 text-lg font-medium capitalize text-dark 
        underline hover:no-underline underline-offset-2 dark:text-light lg:ml-0'>
          Say hello
        </Link>
      </Layout>
    </footer>
  )
}

export default Footer