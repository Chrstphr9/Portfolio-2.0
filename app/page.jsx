import {BsFillMoonStarsFill} from 'react-icons/bs'
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai"
import Image from 'next/image';
import deved from '../public/dev-ed-wave.png'


export default function Home() {
  return (
  
      <main className="bg-white px-10">
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-pribg text-xl font-burtons'>developedByChrstphr</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill className='cursor-pointer text-2xl' />
                </li>
              <li className='bg-gradient-to-r from-pribg to-tetbg text-white px-4 py-2 rounded-md ml-8'>
                <a href="#">Resume</a>
                </li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-pribg font-medium'>Anigbo Somto</h2>
            <h3 className='text-2xl py-2'>Developer an Designer</h3>
            <p className='text-md py-5 leading-8 text-pribg'>Freelancer providing services for programming and design content
            needs. Join me down below and let's get cracking!</p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-pribg'>
          <AiFillTwitterCircle />
          <AiFillLinkedin />
          <AiFillGithub />
          </div>
          <div className='overflow-hidden relative bg-gradient-to-b from-pribg to-tetbg rounded-full w-80 h-80 mt-20 mx-auto'>
            <Image src={deved} layout='fill' objectFit='cover'/>
          </div>
        </section>
      </main>
      
  );
}
