import Link from 'next/link';
import React from 'react';
import Layout from './Layout'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark
    font-medium text-lg'>

      <Layout className='py-8 flex items-center justify-between'>

        <span>{new Date().getFullYear()} &copy; All Right Reserved.</span>

        <div className='flex items-center'>
          Build with
          <span className='text-primary text-2xl px-1'>&#9825;</span>
          by&nbsp;
          <Link href='https://www.github.com/cgrfaria' target={'_blank'}
          className='underline underline-offset-2 hover:no-underline'>
          cgrfaria.dev
          </Link>
        </div>

        <Link href="mailto:cgrfaria@gmail.com" target={"_blank"}
        className='ml-4 text-lg font-medium capitalize text-dark 
        underline hover:no-underline underline-offset-2'>
          Say hello
        </Link>
      </Layout>
    </footer>
  )
}

export default Footer