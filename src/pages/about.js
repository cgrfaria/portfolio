import Head from "next/head";
import React, { useEffect, useRef } from "react";
import Layout from "@/components/Layout"
import AnimatedTextAbout from "../components/AnimatedTextAbout";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-1.png"
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Education from "@/components/Education";


const AnimatedNumbers = ({value}) => {
const ref = useRef(null);

const motionValue = useMotionValue(0);
const springValue = useSpring(motionValue, { duration: 2000 });
const isInView = useInView(ref, {once:true});


useEffect(() => {
  if(isInView) {
    motionValue.set(value);
  };
}, [isInView, value, motionValue]);

useEffect(() => {
  springValue.on("change", (latest) => {
    if(ref.current && latest.toFixed(0) <= value){
      ref.current.textContent = latest.toFixed(0);
    }
  })
}, [springValue , value]);



  return <span ref={ref}></span>
};

const about = () => {
  return (
    <>
      <Head>
        <title>CGRFARIA | About Page</title>
        <meta name="description" 
        content="Welcome to C.Gustavo's Portfolio | A Front-End Developer and UI/UX 
        Designer | Crafting Exceptional Web Experiences with the latest Technologies, 
        such as HTML, CSS, JavaScript, React, TypeScript, Next.js, Tailwind CSS, 
        Figma and Adobe XD | Explore My Work and Expertise in Responsive Web 
        Development and User-Centric Design." />
      </Head>

      <main className="flex flex-col w-full items-center justify-center">

        <Layout className="pt-16 ">

          <AnimatedTextAbout text='Passion Fuels Purpose!'/>
          
          <div className="grid grid-cols-8 w-full gap-16">
            
            {/* Biography DIV */}

            <div className="flex flex-col col-span-3 items-start justify-start">
              
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                Biography
              </h2>
              
              <p className="font-medium">
              Hi, I&apos;m Carlos Gustavo, a web developer and UI/UX designer with 
              a passion for creating beautiful, functional, and user-centered 
              digital experiences. With 2 years of experience in the field. 
              I am always looking for new and innovative ways to bring my 
              client&apos;s visions to life.
              </p>
              
              <p className=" my-4 font-medium">
              I believe that design is about more than just making things look 
              pretty – it&apos;s about solving problems and creating intuitive, 
              enjoyable experiences for users. 
              </p>
              
              <p className="font-medium">
              Whether I&apos;m working on a website, mobile app, or other digital 
              product, I bring my commitment to design excellence and user-centered 
              thinking to every project I work on. I look forward to the 
              opportunity to bring my skills and passion to your next project.
              </p>
            
            </div>

            {/* Photography DIV */}

            <div className='col-span-3 relative h-max rounded-[2rem] border-2
            border-solid border-dark bg-light p-8'>
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] 
              rounded-[2rem] bg-dark"/>
              <Image src={profilePic} alt='Carlos Gustavo' 
              className='w-full h-auto rounded-2xl' />
            </div>

            {/* Increase Numbers DIV */}

            <div className='col-span-2 flex flex-col items-end justify-between'>
              
              <div className='flex flex-col items-end justify-center'>
                <span className="inline-block text-7xl font-bold">
                <AnimatedNumbers value={10} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75'>
                  projects completed
                </h2>
              </div>

              <div className='flex flex-col items-end justify-center'>
                <span className="inline-block text-7xl font-bold">
                <AnimatedNumbers value={6} />+
                </span>
                <h2 className='text-xl text-right font-medium capitalize text-dark/75'>
                Skilled Libs and Frameworks
                </h2>
              </div>

              <div className='flex flex-col items-end justify-center'>
                <span className="inline-block text-7xl font-bold">
                <AnimatedNumbers value={2} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75'>
                  years of experience
                </h2>
              </div>
            </div>
          </div>

          <Skills />
          <Experience />
          <Education />

        </Layout>
        
      </main>
    </>
  )
}

export default about