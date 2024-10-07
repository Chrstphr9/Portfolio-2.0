import {BsFillMoonStarsFill} from 'react-icons/bs'

export default function Home() {
  return (
  
      <main className="bg-white px-10">
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl'>developedByChrstphr</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill className='cursor-pointer text-2xl' />
                </li>
              <li>
                <a href="#">Resume</a>
                </li>
            </ul>
          </nav>
        </section>
      </main>
      
  );
}
