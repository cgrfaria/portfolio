import { motion, useScroll } from 'framer-motion';
import React, { useRef } from 'react';
import LiIcon from './LiIcon';


const Details = ({type, time, place, courseLink, info}) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between
      md:w-[80%]'
      >
      <LiIcon reference={ref} />

      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
        >
        <h3 className='font-bold text-2xl sm:text-xl xs:text-lg'>
          {type}
        </h3>

        <span className='captalize font-medium text-dark/75 dark:text-light/50 xs:text-sm'>
          {time} | <a href={courseLink} target='_blank' className='text-primary dark:text-primaryDark
          font-bold'>{place}</a>
        </span>

        <p className='font-medium w-full md:text-sm'>
          {info}
        </p>
      </motion.div>
    </li>
);
};

const Education = () => {

  const ref = useRef (null);
  const {scrollYProgress} = useScroll (
    {
      target: ref,
      offset: ["start end", "center start"]
    }
  ); 
  return (
    <div className='my-64 md:my-32'>

      <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl md:mb-16 xs:text-4xl'>
        Education
      </h2>

      <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

        <motion.div
        style={{scaleY: scrollYProgress}} 
        className='absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top
        md:w-[2px] md:left-[30px] xs:left-[20px]' 
        />

        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
           
          <Details 
          type='Introduction to Front-end Development '
          time='Nov 2022' 
          place='Certification Meta Platforms, Inc.' 
          courseLink='https://www.coursera.org/learn/introduction-to-front-end-development?specialization=meta-front-end-developer'
          info='This certification by Meta Platforms provides a solid foundation
          in the essential concepts, tools, and technologies used in front-end 
          development.'
          />
          <Details 
          type='Programming with JavaScript'
          time='Nov 2022' 
          place='Certification Meta Platforms, Inc.'
          courseLink='https://www.coursera.org/learn/programming-with-javascript?specialization=meta-front-end-developer'
          info="This certification aims to demonstrate that candidates have a
          solid understanding of JavaScript's core concepts, syntax, and the ability
          to build interactive web applications using this language."
          />
          <Details 
          type='Version Control'
          time='Nov 2022' 
          place='Certification Meta Platforms, Inc.'
          courseLink='https://www.coursera.org/learn/introduction-to-version-control?specialization=meta-front-end-developer'
          info="The Version Control Certification focuses on demonstrating an 
          individual's proficiency in version control systems (VCS) and related 
          tools. Version control is a crucial aspect of modern software 
          development, enabling teams to collaborate effectively, track code
           changes, and manage software projects efficiently."
          />
          <Details 
          type='HTML and CSS in depth'
          time='Dec 2022' 
          place='Certification Meta Platforms, Inc.'
          courseLink='https://www.coursera.org/learn/html-and-css-in-depth?specialization=meta-front-end-developer'
          info="The HTML and CSS in Depth Certification typically aims to validate 
          an individual's expertise in front-end web development, specifically
          focusing on HTML (Hypertext Markup Language) and CSS 
          (Cascading Style Sheets). These two core technologies are essential for 
          creating and styling web content."
          />
          <Details 
          type='UI Design para Iniciantes'
          time='Oct 2023' 
          place='Origamid.'
          courseLink='https://www.origamid.com/'
          info="UI Design para Iniciantes is a course designed to introduce beginners 
          to the fundamentals of User Interface (UI) design. UI design is a critical 
          aspect of web and app development, focusing on creating visually appealing 
          and user-friendly interfaces for digital products."
          />
          <Details 
          type='HTML e CSS para Iniciantes'
          time='Oct 2023' 
          place='Origamid.'
          courseLink='https://www.origamid.com/'
          info="This course was designed to introduce participants to the fundamentals 
          of web development, specifically focusing on HTML (Hypertext Markup Language) 
          and CSS (Cascading Style Sheets). These two core technologies are essential 
          for creating and styling web pages."
          />

        </ul>
      </div>
    </div>
  )

};


export default Education