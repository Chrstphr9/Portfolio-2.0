'use client'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai"
import Image from 'next/image';
import deved from '../public/dev-ed-wave.png'
import design from '../public/design.png'
import code from '../public/code.png'
import work1 from '../public/work1.png'
import work2 from '../public/work2.png'
import work3 from '../public/work3.png'
import work4 from '../public/work4.png'
import work5 from '../public/work5.png'
import work6 from '../public/work6.png'
import work7 from '../public/work7.png'
import work8 from '../public/work8.png'
import work9 from '../public/work9.png'
import work10 from '../public/work10.png'
import { useState } from "react";
import resume from '../public/Resume.pdf'
import { FaExternalLinkAlt } from "react-icons/fa";


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
  
     <div className={darkMode ? "dark" : ""}>
       <main className="bg-white px-10 md:px-10 lg:px-20 dark:bg-gray-900">
        <section className='min-h-screen'>
        <nav className='py-10 mb-10 flex justify-between items-center'>
  {/* Full Name for larger screens, Shortened Name for mobile */}
  <h1 className='text-pribg text-xl font-burtons dark:text-cyan-400'>
    <span className='block md:hidden'>dvByChrstphr</span> {/* Visible on mobile */}
    <span className='hidden md:block text-3xl font-semibold'>developedByChrstphr</span> {/* Visible on larger screens */}
  </h1>

  <ul className='flex items-center'>
    <li>
      <BsFillMoonStarsFill 
        onClick={() => setDarkMode(!darkMode)}
        className='cursor-pointer text-2xl text-pribg dark:text-cyan-400'
      />
    </li>
    <li className='bg-gradient-to-r from-pribg to-tetbg text-white px-4 py-2 rounded-md ml-8 border-sectxt shadow-[-7px_7px_0px_#FFD739] transform transition duration-300 hover:scale-110 hover:bg-secbg hover:border-2 hover:border-sectxt hover:text-pritxt'>
    <a href={resume} download={resume} target="_blank" rel="noopener noreferrer">
        Download CV
      </a>
    </li>
  </ul>
        </nav>


          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-pribg font-medium md:text-6xl dark:text-cyan-400'>Anigbo Somto</h2>
            <h3 className='text-2xl py-2 md:text-3xl text-pribg font-semibold dark:text-cyan-400'>Not Your Regular Developer</h3>
            <p className='text-xl font-semibold py-5 leading-8 text-pribg md:text-xl max-w-xl mx-auto dark:text-cyan-400'>Freelancer providing services for programming and design content
            needs. Join me down below and let's get cracking!</p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-pribg dark:text-cyan-400'>
          <a href="https://twitter.com/Chrstphr_Wlkngs"><AiFillTwitterCircle /></a>
          <a href="https://www.linkedin.com/in/somto-anigbo-0aa229239/</div>"><AiFillLinkedin /></a>
          <a href="https://github.com/Chrstphr9"><AiFillGithub /></a>
          </div>
          <div className='mb-10 overflow-hidden relative bg-gradient-to-b from-pribg to-tetbg rounded-full w-80 h-80 mt-20 mx-auto md:h-96 md:w-96'>
            <Image src={deved} layout='fill' objectFit='cover' />
          </div>
        </section>


        <section>
          <div>
            <h3 className='text-3xl py-1 font-semibold dark:text-cyan-400'>Services I Offer</h3>
            <p className='text-2xl py-2 leading-8 text-pribg font-semibold dark:text-cyan-400'>
            Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-secbg dark:text-cyan-400"> agencies </span>
              consulted for <span className="text-secbg dark:text-cyan-400">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-pribg text-2xl font-semibold py-2 leading-8 dark:text-cyan-400">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>

          <div className='lg:flex gap-10 justify-center'>  
          <div className="text-xl font-semibold text-center p-10 rounded-xl my-10 dark:bg-pribg  border border-sectxt shadow-[-7px_7px_0px_#FFD739] transform transition duration-300 hover:scale-110 hover:bg-secbg hover:border-2 hover:border-sectxt text-white dark:hover:text-pritxt">
              <div className='flex justify-center'>
              <Image src={design} width={100} height={100} />
              </div>
              <h3 className="font-bold text-xl pt-8 pb-2">
                Beautiful Designs
              </h3>
              <div>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4">Design Tools I Use</h4>
              <p className="py-1">React</p>
              <p className="py-1">Tailwind CSS</p>
              <p className="py-1">Figma</p>
              <p className="py-1">Indesign</p>
              </div>
            </div>
            <div className="text-xl font-semibold text-center p-10 rounded-xl my-10 dark:bg-pribg  border border-sectxt shadow-[-7px_7px_0px_#FFD739] transform transition duration-300 hover:scale-110 hover:bg-secbg hover:border-2 dark:hover:border-cyan hover:border-sectxt text-white dark:hover:text-pritxt">
              <div className='flex justify-center'>
              <Image src={code} width={100} height={100} />
              </div>
              <h3 className="text-lg font-bold pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
              <h4 className="py-4" >Coding Tools I Use</h4>
              <p className="py-1">Vscode</p>
              <p className="py-1">Next.JS</p>
              <p className="py-1">Postman</p>
              <p className="py-1">Firebase</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl font-semibold py-1 dark:text-cyan-400'>Portfolio</h3>
            <p className="text-2xl font-semibold py-2 leading-8 text-pribg dark:text-cyan-400">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-secbg dark:text-cyan-400"> agencies </span>
              consulted for <span className="text-secbg dark:text-cyan-400">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-2xl font-semibold py-2 leading-8 text-secbg dark:text-cyan-400">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className='flex flex-col gap-10 py-2 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1  <div className=" text-center p-10 rounded-xl my-10 dark:bg-white border border-sectxt shadow-[-7px_7px_0px_#FFD739] transform transition duration-300 hover:scale-110 hover:border-2 hover:border-sectxt hover:text-pritxt">'>
               <Image src={work1} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/>
               <a href="https://lovely-rugelach-eb2a44.netlify.app/" className="flex justify-center items-center mt-2 hover:text-pribg hover:scale-110 transition duration-300 ease-in-out">
              <i className="text-2xl flex font-semibold font-burtons"><FaExternalLinkAlt />View Project</i>
            </a>
            </div>
            <div className='basis-1/3 flex-1  <div className=" text-center p-10 rounded-xl my-10 dark:bg-white border border-sectxt shadow-[-7px_7px_0px_#FFD739] transform transition duration-300 hover:scale-110 hover:border-2 hover:border-sectxt hover:text-pritxt">'>
               <Image src={work2} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/>
               <a href="https://password-generator-lemon-nine.vercel.app/" className="flex justify-center items-center mt-2 hover:text-pribg hover:scale-110 transition duration-300 ease-in-out">
              <i className="text-2xl flex font-semibold font-burtons"><FaExternalLinkAlt />View Project</i>
            </a>
            </div>
            <div className='basis-1/3 flex-1  <div className=" text-center p-10 rounded-xl my-10 dark:bg-white border border-sectxt shadow-[-7px_7px_0px_#FFD739] transform transition duration-300 hover:scale-110 hover:border-2 hover:border-sectxt hover:text-pritxt">'>
               <Image src={work3} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/>
               <a href="https://note-app-eight-orpin.vercel.app/" className="flex justify-center items-center mt-2 hover:text-pribg hover:scale-110 transition duration-300 ease-in-out">
              <i className="text-2xl flex font-semibold font-burtons"><FaExternalLinkAlt />View Project</i>
            </a>
            </div>
            <div className='basis-1/3 flex-1  <div className=" text-center p-10 rounded-xl my-10 dark:bg-white border border-sectxt shadow-[-7px_7px_0px_#FFD739] transform transition duration-300 hover:scale-110 hover:border-2 hover:border-sectxt hover:text-pritxt">'>
               <Image src={work4} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/>
               <a href="https://meta-v-chrstphr9.vercel.app/" className="flex justify-center items-center mt-2 hover:text-pribg hover:scale-110 transition duration-300 ease-in-out">
              <i className="text-2xl flex font-semibold font-burtons"><FaExternalLinkAlt />View Project</i>
            </a>
            </div>
            <div className='basis-1/3 flex-1  <div className=" text-center p-10 rounded-xl my-10 dark:bg-white border border-sectxt shadow-[-7px_7px_0px_#FFD739] transform transition duration-300 hover:scale-110 hover:border-2 hover:border-sectxt hover:text-pritxt">'>
               <Image src={work5} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/>
               <a href="https://chimerical-marshmallow-1e7e58.netlify.app/" className="flex justify-center items-center mt-2 hover:text-pribg hover:scale-110 transition duration-300 ease-in-out">
              <i className="text-2xl flex font-semibold font-burtons"><FaExternalLinkAlt />View Project</i>
            </a>
            </div>
            <div className='basis-1/3 flex-1  <div className=" text-center p-10 rounded-xl my-10 dark:bg-white border border-sectxt shadow-[-7px_7px_0px_#FFD739] transform transition duration-300 hover:scale-110 hover:border-2 hover:border-sectxt hover:text-pritxt">'>
               <Image src={work6} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/>
               <a href="https://gregarious-mermaid-aeeb8b.netlify.app/" className="flex justify-center items-center mt-2 hover:text-pribg hover:scale-110 transition duration-300 ease-in-out">
              <i className="text-2xl flex font-semibold font-burtons"><FaExternalLinkAlt />View Project</i>
            </a>
            </div>
            <div className='basis-1/3 flex-1  <div className=" text-center p-10 rounded-xl my-10 dark:bg-white border border-sectxt shadow-[-7px_7px_0px_#FFD739] transform transition duration-300 hover:scale-110 hover:border-2 hover:border-sectxt hover:text-pritxt">'>
               <Image src={work7} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/>
               <a href="https://data-finance-snowy.vercel.app/" className="flex justify-center items-center mt-2 hover:text-pribg hover:scale-110 transition duration-300 ease-in-out">
              <i className="text-2xl flex font-semibold font-burtons"><FaExternalLinkAlt />View Project</i>
            </a>
            </div>
            <div className='basis-1/3 flex-1  <div className=" text-center p-10 rounded-xl my-10 dark:bg-white border border-sectxt shadow-[-7px_7px_0px_#FFD739] transform transition duration-300 hover:scale-110 hover:border-2 hover:border-sectxt hover:text-pritxt">'>
               <Image src={work8} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/>
               <a href="https://food-del-lyart.vercel.app/" className="flex justify-center items-center mt-2 hover:text-pribg hover:scale-110 transition duration-300 ease-in-out">
              <i className="text-2xl flex font-semibold font-burtons"><FaExternalLinkAlt />View Project</i>
            </a>
            </div>
            <div className='basis-1/3 flex-1  <div className=" text-center p-10 rounded-xl my-10 dark:bg-white border border-sectxt shadow-[-7px_7px_0px_#FFD739] transform transition duration-300 hover:scale-110 hover:border-2 hover:border-sectxt hover:text-pritxt">'>
               <Image src={work9} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/>
               <a href="https://portfolio-app-three-beta.vercel.app/" className="flex justify-center items-center mt-2 hover:text-pribg hover:scale-110 transition duration-300 ease-in-out">
              <i className="text-2xl flex font-semibold font-burtons"><FaExternalLinkAlt />View Project</i>
            </a>
            </div>
            <div className='basis-1/3 flex-1  <div className=" text-center p-10 rounded-xl my-10 dark:bg-white border border-sectxt shadow-[-7px_7px_0px_#FFD739] transform transition duration-300 hover:scale-110 hover:border-2 hover:border-sectxt hover:text-pritxt">'>
               <Image src={work10} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/>
               <a href="https://extraordinary-halva-f0fcde.netlify.app/" className="flex justify-center items-center mt-2 hover:text-pribg hover:scale-110 transition duration-300 ease-in-out">
              <i className="text-2xl flex font-semibold font-burtons"><FaExternalLinkAlt />View Project</i>
            </a>
            </div>
            
            
          </div>
        </section>
      </main>
     </div>
      
  );
}
