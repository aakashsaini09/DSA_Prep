import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'
const Landing = () => {
  return (
    <>
      <div className="min-h-[100vh] w-full bg-black flex flex-col items-center justify-center gap-6">
        <nav>
            <ul className='flex w-[100vw] justify-between px-28'>
                <li className='text-5xl font-bold text-white'>Logo</li>
                <Button asChild variant={'secondary'}>
                    <Link href={'/login'} className='cursor-pointer'>Login/Sign-up</Link>
                </Button>
            </ul>
        </nav>
        <h1 className='font-bold text-gray-100 text-5xl font-serif pt-10'>Get honest feedback, anonymous, truly unfiltered.</h1>
        <p className='text-gray-400 w-4/6 text-lg mb-10'>Sometimes, the most valuable insights are shared anonymously. With our platform, you can invite friends to give you feedback without any pressure or judgment. Share your personal link, and watch genuine, constructive responses come in—all safely collected in your private dashboard.</p>
        <Image src={`/landing.png`} alt='Landing Image' width={450} height={20}/>
      </div>
    </>
  )
}

export default Landing
