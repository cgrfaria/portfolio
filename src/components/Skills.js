import React from "react";
import { motion } from "framer-motion";


const Skill = ({name, x, y}) => {

  return (
    <motion.div className="flex items-center justify-center rounded-full 
    font-semibold bg-dark text-light py-3 px-6 shadow-dark 
    cursor-pointer absolute"
    whileHover={{scale: 1.05}}
    initial={ { x:0,y:0 } }
    whileInView={ { x:x, y:y, } }
    transition={ { duration: 1.5 } }
    viewport={ { once: true } }
    >
      {name}
    </motion.div>
  )
}


const Skills = () => {
  return (
    <>
    <h2 className='font-bold text-8xl text-center mt-64 w-full'>Skills</h2>

    <div className='flex items-center justify-center w-full h-screen relative 
      bg-circularLight'>

      <motion.div className="flex items-center justify-center rounded-full 
       font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer"
       whileHover={{scale: 1.05}}>
        web
      </motion.div>

      <Skill name="HTML" x="-27vw" y="5vw" />
      <Skill name="CSS" x="-5vw" y="-9vw" />
      <Skill name="JavaScript" x="25vw" y="6vw" />
      <Skill name="ReactJS" x="0vw" y="13vw" />
      <Skill name="NextJS" x="-17vw" y="-14vw" />
      <Skill name="GatsbyJS" x="13vw" y="-10 vw" />
      <Skill name="UI/UX Design" x="0vw" y="-21vw" />
      <Skill name="Responsive Design" x="32vw" y="-5vw" />
      <Skill name="Figma" x="-20vw" y="18vw" />
      <Skill name="Tailwind CSS" x="18vw" y="18vw" />
      <Skill name="Framer Motion" x="-32vw" y="-6vw" />
      <Skill name="Artificial Intelligence" x="17vw" y="-14vw" />
      <Skill name="CSS-in-JS" x="-15vw" y="2vw" />

    </div>
    </>
  )
}


export default Skills