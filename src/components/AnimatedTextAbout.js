import { motion } from "framer-motion";
import React from "react";
 
const quote = {
  initial: {
    opacity:1,
  },
  animate: {
    opacity:1,
    transition:{
      delay:0.5,
      staggerChildren: 0.08,
    }
  }
}

const singleWord = {
  initial: {
    opacity:0,
    y:50,
  },
  animate: {
    opacity:1,
    y:0,
    transition:{
      duration:1,
    }
  }
}

const AnimatedTextAbout = ({text, className=""}) => {
  return (
    <div className='w-full mx-auto py-2 flex items-center justify-center text-center
    overflow-hidden sm:py-0'>
      <motion.h1 
        className={'inline-block w-full text-dark dark:text-light font-bold capitalize text-8xl mb-16 lg:text-7xl md:text-6xl sm:text-6xl sm:mb-8 xs:text-4xl ${className}'}
        variants={quote}
        initial='initial'
        animate='animate'>
        {
          text.split(" ").map((word, index) => 
          <motion.span key={word+'-'+index} className='inline-block'
          variants={singleWord}>
        
            {word}
            {index !== text.split(" ").length - 1 ? "\u00A0" : ""} {/* Add &nbsp; only if it's not the last word */}
          </motion.span>
          )
        }
      </motion.h1>
    </div>
  )
}

export default AnimatedTextAbout