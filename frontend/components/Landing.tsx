import React from 'react'
import Image from 'next/image'
const Landing = () => {
  return (
    <>
      <div className="min-h-[100vh] w-full bg-slate-800 flex flex-col items-center">
        <h1 className='font-bold text-white text-4xl font-serif pt-10'>Get honest feedback, completely anonymous, and truly unfiltered.</h1>
        <Image src={`/landing.png`} alt='Landing Image' width={400} height={20}/>
      </div>
    </>
  )
}

export default Landing
