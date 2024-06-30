import React from 'react'

const Athletes = () => {
  return (
    <div className='min-h-screen w-full relative'>
      <h1 className='monument text-center pt-20 text-7xl '>Athletes</h1>
      <p className='text-center text-sm pb-20 monument'>A Supportive Team</p>
      <div className='w-full relative'>
        <div className='h-36 flex justify-between items-center px-16 w-full border-black border-y-[1px]'>
          <h1 className='monument text-3xl '>Jonathan Amaral</h1>
          <p className='monument text-sm'>I just wants to take that trophy.</p>
        </div>
        <div className='h-36 flex justify-between items-center px-16 w-full border-black border-y-[1px]'>
        <h1 className='monument text-3xl '>Ujjwal Chaurasiya</h1>
        <p className='monument text-sm'>From childhood, I had a love for gaming</p>
        </div>
        <div className='h-36 flex justify-between items-center px-16 w-full border-black border-y-[1px]'>
        <h1 className='monument text-3xl '>KL Rahul</h1>
        <p className='monument text-sm'>During a match I Have a Red Bull shortly <br /> before going out to bat or field.  </p>
        </div>
        <div className='h-36 flex justify-between items-center px-16 w-full border-black border-y-[1px]'>
        <h1 className='monument text-3xl '>Tania Sachdev</h1>
        <p className='monument text-sm'>During a match I Have a Red Bull Energy Drink <br /> when I'm training or having a match</p>
        </div>
        <div className='h-36 flex justify-between items-center px-16 w-full border-black border-y-[1px]'>
        <h1 className='monument text-3xl '>Lakshya Sen</h1>
        <p className='monument text-sm'>I ever just loved to play Badminton.</p>
        </div>
      </div>
    </div>
  )
}

export default Athletes