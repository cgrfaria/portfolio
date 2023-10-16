import React, { useRef } from "react";
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
import { motion, useScroll, useSpring } from "framer-motion";


const FramerImage = motion(Image);


const FeaturedProject = ({type, title, summary, img, link, linkProject}) => {
  const ref = useRef(null);

  return (

      <article className='w-full flex items-center justify-between rounded-3xl 
        border border-solid border-dark dark:border-light 
        dark:bg-dark bg-light shadow-2xl p-12 relative rounded-br-2xl'>

        <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] 
              rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl"/>

        <Link href={link} target='_blank'
        className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
          <FramerImage src={img} alt={title} className='w-full h-auto' 
          whileHover={{scale: 1.05}}
          transition={{duration: 0.2}}
          priority
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
          />
        </Link>

        <div className='w-1/2 flex flex-col items-start justify-between pl-6'>

          <span className='text-primary dark:text-primaryDark font-bold text-xl'>{type}</span>
          <Link href={link} target='_blank' className='hover:underline dark:text-light
          underline-offset-2'>
            <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
          </Link>
          <p className='my-2 font-medium text-dark dark:text-light/60'>{summary}</p>

          <div className='mt-2 flex items-center'>

            <Link href='https://github.com/cgrfaria' target='_blank' className='w-10'> 
              <GithubIcon /> 
            </Link>
            <Link href={linkProject} target='_blank' className='ml-4 rounded-lg bg-dark text-light
            p-2 px-6 text-lg font-semibold hover:bg-white hover:text-dark dark:bg-black 
            dark:hover:bg-light'>
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
    border border-solid border-dark dark:border-light bg-light dark:bg-dark relative p-6'>

        <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] 
        rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl"/>

        <Link href={link} target='_blank'
        className='w-full cursor-pointer overflow-hidden rounded-lg'>
          <FramerImage src={img} alt={title} className='w-full h-auto' 
          whileHover={{scale: 1.05}}
          transition={{duration: 0.2}}
          priority
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
          />
        </Link>

        <div className='w-full flex flex-col items-start justify-between mt-4'>

          <span className='text-primary dark:text-primaryDark font-bold text-xl'>{type}</span>
          <Link href={link} target='_blank' className='hover:underline 
          underline-offset-2'>
            <h2 className='my-2 w-full text-left text-3xl font-bold dark:text-light'>{title}</h2>
          </Link>

          <div className='w-full mt-2 flex items-center justify-between'>
          
            <Link href={linkProject} target='_blank' className='text-lg font-semibold
            underline hover:no-underline dark:text-light/70'>
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

      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
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