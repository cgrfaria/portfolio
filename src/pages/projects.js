import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedTextAbout from "@/components/AnimatedTextAbout";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/icons";
import project1 from "../../public/images/projects/thumb-project-1.png"
import project2 from "../../public/images/projects/thumb-project-2.png"
import project3 from "../../public/images/projects/thumb-project-3.png"
import project4 from "../../public/images/projects/thumb-project-4.png"
import project5 from "../../public/images/projects/thumb-project-5.png"
import project6 from "../../public/images/projects/thumb-project-6.png"


const FeaturedProject = ({type, title, summary, img, link, linkProject}) => {
  return (

      <article className='w-full flex items-center justify-between rounded-3xl 
      border border-solid border-dark bg-light shadow-2xl p-12 relative 
      rounded-br-2xl'>
        <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] 
              rounded-[2.5rem] bg-dark rounded-br-3xl"/>

        <Link href={link} target='_blank'
        className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
          <Image src={img} alt={title} className='w-full h-auto' />
        </Link>

        <div className='w-1/2 flex flex-col items-start justify-between pl-6'>

          <span className='text-primary font-bold text-xl'>{type}</span>
          <Link href={link} target='_blank' className='hover:underline 
          underline-offset-2'>
            <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
          </Link>
          <p className='my-2 font-medium text-dark'>{summary}</p>

          <div className='mt-2 flex items-center'>

            <Link href='https://github.com/cgrfaria' target='_blank' className='w-10'> 
              <GithubIcon /> 
            </Link>
            <Link href={linkProject} target='_blank' className='ml-4 rounded-lg bg-dark text-light
            p-2 px-6 text-lg font-semibold hover:bg-white hover:text-dark'>
              Visit Project
            </Link>

          </div>

        </div>

      </article>
  )
};

const Project = ({title, type, img, link, linkProject}) => {
  return (
    <article className='w-full flex flex-col items-center justify-center rounded-2xl
    border border-solid border-dark bg-light relative p-6'>

        <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] 
        rounded-[2rem] bg-dark rounded-br-3xl"/>

        <Link href={link} target='_blank'
        className='w-full cursor-pointer overflow-hidden rounded-lg'>
          <Image src={img} alt={title} className='w-full h-auto' />
        </Link>

        <div className='w-full flex flex-col items-start justify-between mt-4'>

          <span className='text-primary font-bold text-xl'>{type}</span>
          <Link href={link} target='_blank' className='hover:underline 
          underline-offset-2'>
            <h2 className='my-2 w-full text-left text-3xl font-bold'>{title}</h2>
          </Link>

          <div className='w-full mt-2 flex items-center justify-between'>
          
            <Link href={linkProject} target='_blank' className='text-lg font-semibold
            underline hover:no-underline'>
              Visit
            </Link>
            <Link href='https://github.com/cgrfaria' target='_blank' className='w-8'> 
              <GithubIcon /> 
            </Link>  

          </div>

        </div>
    </article>
  )
};

const projects = () => {
  return (
    <>
       <Head>
        <title>CGRFARIA | Projects Page</title>
        <meta name="description" 
        content="Explore a Showcase of My Web Development and UI/UX Design Projects. 
        Witness Innovation, Creativity, and Functionality in Action. Get Inspired 
        by Real-world Examples of Stunning Websites and User-Centric Designs." />
      </Head>

      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">

          <AnimatedTextAbout text='Imagination Trumps Knowledge!' />

          <div className="grid grid-cols-12 gap-24 gap-y-32">

            <div className="col-span-12">

              <FeaturedProject 
              title='Bikcraft'
              img={project1}
              summary='A feature-rich e-commerce using HTML, CSS and JavaScript. 
              High-precision and high-quality electric bicycles, custom-made for you. 
              Explore the world at your own pace with Bikcraft.'
              link='https://cgrfaria.github.io/bikcraft/'
              github='https://github.com/cgrfaria'
              linkProject='https://github.com/cgrfaria/bikcraft'
              type='Featured Project'
              />

            </div>

            <div className="col-span-6">

              <Project 
              title='DoctorCare'
              img={project2}
              link='https://cgrfaria.github.io/doctorCare/'
              linkProject='https://github.com/cgrfaria/doctorCare'
              type='Featured Project'
              />

            </div>

            <div className="col-span-6">
            <Project 
              title='Payment System App'
              img={project3}
              link='https://payment-system-seven.vercel.app/'
              linkProject='https://github.com/cgrfaria/payment-system'
              type='Featured Project'
              />
            </div>

            <div className="col-span-12">
            <FeaturedProject 
              title='Shorts AI'
              img={project4}
              summary='In this small yet powerful project, we have built an application 
              to generate summarized transcriptions of the YouTube Shorts videos 
              you choose, based on React and utilizing Machine Learning, Axios, 
              Express, Tailwind CSS, among other tools.'
              link='https://shorts-ai-cgrfaria.vercel.app/'
              github='https://github.com/cgrfaria'
              linkProject='https://github.com/cgrfaria/shorts_ai'
              type='Featured Project'
              />
            </div>

            <div className="col-span-6">
            <Project 
              title='Movie Land'
              img={project5}
              link='https://movie-land-navy.vercel.app/'
              linkProject='https://github.com/cgrfaria/movie_land'
              type='Featured Project'
              />
            </div>

            <div className="col-span-6">
            <Project 
              title='World Cup Calendar'
              img={project6}
              link='https://world-cup-calendar.vercel.app/'
              linkProject='https://github.com/cgrfaria/world-cup-calendar'
              type='Featured Project'
              />
            </div>

          </div>

        </Layout>
      </main>


    </>
  )
};

export default projects