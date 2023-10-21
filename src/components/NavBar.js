import React from "react";
import Link from 'next/link'
import Logo from './logo'
import { useRouter } from "next/router.js";
import { FacebookIcon, GithubIcon, InstagramIcon, LinkedInIcon, MoonIcon, SunIcon, TwitterIcon } from "./icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { useState } from "react";

const CustomLink = ({href, title, className =""}) => {
  const router = useRouter();
  return(
    <Link href={href} className={`relative group ${className}`}>
      {title}
      <span
        className={`h-[2px] bg-primary dark:bg-primaryDark inline-block absolute left-0 -bottom-0.5 group-hover:w-full transition-width ease duration-300 
        ${router.asPath === href ? 'w-full' : 'w-0'}`}>
        &nbsp;
      </span>
    </Link>
  )
};

const CustomMobileLink = ({href, title, className ="", toggle}) => {
  const router = useRouter();
  const handleClick = () => {
    toggle();
    router.push(href)
  }

  return(
    <button href={href} className={`relative group text-light my-2 ${className}`} 
      onClick={handleClick}>
      {title}
      <span
        className={`h-[2px] bg-primary dark:bg-primaryDark inline-block 
        absolute left-0 -bottom-0.5 group-hover:w-full transition-width ease duration-300 
        ${router.asPath === href ? 'w-full' : 'w-0'}`}>
        &nbsp;
      </span>
    </button>
  )
};

const NavBar = () => {

  const [mode, setMode] = useThemeSwitcher ();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between
      dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8">

        {/* Hamburguer Menu */}
     
     <button className='flex-col items-center justify-center hidden lg:flex' onClick={handleClick}>
        <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out 
        block h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
        <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out 
        block h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out 
        block h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
     </button>

        {/* Desktop Menu */}

      <div className='w-full flex justify-between items-center lg:hidden'>
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4"/>
          <CustomLink href="/projects" title="Projects" className="mx-4"/>
          <CustomLink href="/contacts" title="Contacts" className="ml-4"/>
        </nav>
        
        <nav className="flex items-center justify-center flex-wrap">

          <motion.a href='https://www.github.com/cgrfaria' target={'_blank'}
            whileHover={{ y: -2 }}
          whileTap={{scale: 0.9 }}
          className="w-6 mr-3">
            <GithubIcon />
          </motion.a>
          <motion.a href='https://www.linkedin.com//in/carlos-gustavo-faria-1a504237/' target={'_blank'}
          whileHover={{ y: -2 }}
          whileTap={{scale: 0.9 }}
          className="w-6 mx-3">
            <LinkedInIcon />
          </motion.a>
          <motion.a href='https://www.twitter.com/cgrfaria' target={'_blank'}
          whileHover={{ y: -2 }}
            whileTap={{scale: 0.9 }}
            className="w-6 mx-3" >
            <TwitterIcon />
          </motion.a>
          <motion.a href='https://www.instagram.com/cgrfaria' target={'_blank'}
            whileHover={{ y: -2 }}
            whileTap={{scale: 0.9 }}
            className="w-6 mx-3" >
            <InstagramIcon />
          </motion.a>
          <motion.a href='https://www.facebook.com/carlosgustavo.magu/?locale=pt_BR' target={'_blank'}
            whileHover={{ y: -2 }}
            whileTap={{scale: 0.9 }}
            className="w-6 ml-3" >
            <FacebookIcon />
          </motion.a>

          <button 
          onClick={() => setMode(mode === "light" ? "dark" : "light")} 
            className={'ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}'}
            > 
            {
              mode === "dark" ? <SunIcon className={"fill-dark"} />
              : <MoonIcon className={"fill-dark"} />
            }
            
          </button>

        </nav>
      </div>

        {/* Mobile Menu */}

      {
        isOpen ?

        <motion.div
          initial={{scale:0, opacity:0, x: "-50%", y: "-50%"}}
          animate={{scale:1, opacity:1}} 
          className='min-w-[70vw] min-h-[70vw] flex flex-col justify-between items-center bg-dark/90
          fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 rounded-lg backdrop-blur-md py-32'>

          <nav className='flex flex-col items-center justify-center'>
            <CustomMobileLink href="/" title="Home" className="" toggle={handleClick}/>
            <CustomMobileLink href="/about" title="About" className="" toggle={handleClick}/>
            <CustomMobileLink href="/projects" title="Projects" className="" toggle={handleClick}/>
            <CustomMobileLink href="/contacts" title="Contacts" className="" toggle={handleClick}/>
          </nav>
        
          <nav className="flex items-center justify-center flex-wrap mt-2">

            <motion.a href='https://www.github.com/cgrfaria' target={'_blank'}
              whileHover={{ y: -2 }}
              whileTap={{scale: 0.9 }}
              className="w-6 mr-3 sm:mr-1 bg-light rounded-full dark:bg-dark">
              <GithubIcon />
            </motion.a>

            <motion.a href='https://www.linkedin.com//in/carlos-gustavo-faria-1a504237/' target={'_blank'}
              whileHover={{ y: -2 }}
              whileTap={{scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1">
              <LinkedInIcon />
            </motion.a>

            <motion.a href='https://www.twitter.com/cgrfaria' target={'_blank'}
              whileHover={{ y: -2 }}
              whileTap={{scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1" >
              <TwitterIcon />
            </motion.a>

            <motion.a href='https://www.instagram.com/cgrfaria' target={'_blank'}
              whileHover={{ y: -2 }}
              whileTap={{scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1 fill-light rounded-full dark:fill-dark">
              <InstagramIcon />
            </motion.a>
            
            <motion.a href='https://www.facebook.com/carlosgustavo.magu/?locale=pt_BR' target={'_blank'}
              whileHover={{ y: -2 }}
              whileTap={{scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1" >
              <FacebookIcon />
            </motion.a>

            <button 
              onClick={() => setMode(mode === "light" ? "dark" : "light")} 
              className={'w-fit ml-1 sm:ml-1 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}'}
              > 
              {
                mode === "dark" ? <SunIcon className={"fill-dark"} />
                : <MoonIcon className={"fill-dark"} />
              }
              
            </button>

          </nav>
        </motion.div>

        : null
      }


      <div className="absolute left-[50%] top-2 translate-x-[-50%] 
      lg:right-0 lg:left-auto lg:top-0 lg:bottom-auto">
        <Logo />
      </div>

    </header>
  )
}

export default NavBar