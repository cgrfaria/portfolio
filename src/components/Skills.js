import React from "react";
import { motion } from "framer-motion";


const Skill = ({name, x, y}) => {

  return (
    <motion.div 
      className="flex items-center justify-center rounded-full font-semibold bg-dark dark:bg-light 
      text-light dark:text-dark py-3 px-6 shadow-dark cursor-pointer absolute lg:py-2 lg:px-4
      md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark 
      xs:dark:text-light xs:font-bold"
      whileHover={{scale: 1.05}}
      initial={ { x:0,y:0 } }
      whileInView={ { x: x, y: y, transition: {duration: 1.5} } }
      viewport={ { once: true } }>

      {name}

    </motion.div>
  )
}


const Skills = () => {
  return (
    <>
    <h2 className='font-bold text-8xl text-center mt-64 w-full
      md:text-6xl md:mt-32 md:mb-16 xs:text-4xl'>Skills</h2>

    <div className='flex items-center justify-center w-full h-screen relative rounded-full
      bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm'>

      <motion.div className="flex items-center justify-center rounded-full 
       font-semibold bg-dark dark:bg-light text-light dark:text-dark p-8 shadow-dark 
       cursor-pointer lg:p-6 md:p-4 xs:text-xs xs:p-2"
       whileHover={{scale: 1.05}}>
        web
      </motion.div>

      <Skill name="HTML" x="-27vw" y="5vw" />
      <Skill name="CSS" x="-1vw" y="-11vw" />
      <Skill name="JavaScript" x="25vw" y="8vw" />
      <Skill name="ReactJS" x="0vw" y="13vw" />
      <Skill name="NextJS" x="-25vw" y="-19vw" />
      <Skill name="Gatsby" x="27vw" y="-1vw" />
      <Skill name="UI/UX Design" x="0vw" y="-21vw" />
      <Skill name="Responsive Web" x="28vw" y="-12vw" />
      <Skill name="Figma" x="-20vw" y="18vw" />
      <Skill name="Tailwind CSS" x="18vw" y="21vw" />
      <Skill name="Framer Motion" x="-32vw" y="-6vw" />
      <Skill name="AI" x="23vw" y="-21vw" />
      <Skill name="CSS-in-JS" x="-5vw" y="28vw" />

    </div>
    </>
  )
}


export default Skills