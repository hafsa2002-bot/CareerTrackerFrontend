import React from 'react'

function NavBar() {
  return (
    <div className='fixed top-0 w-full z-50 '>
        <div className='bg-slate-900 flex items-center gap-3 justify-center m-auto py-2.5 text-sm'>
            <div className='bg-slate-500 text-white rounded-xl px-1.5 py-0.5 text-center text-sm font-semibold'>NEW</div>
            <h4 className='text-white'>Track your internships, manage your progress, and stay organized in one place. Explore the new features!</h4>
        </div>
        <nav className='bg-white shadow-lg flex justify-between items-center px-7 py-2'>
            <div className='flex items-center gap-1 '>
                <img className='w-12 h-12' src="/images/careerTrackerLogoPNG.png" alt="logo"/>
                <h2 className='text-3xl font-bold font-space'>Internova</h2>
            </div>
            <div className='rounded-full  w-14 h-14 border-1 border-stone-300 cursor-pointer overflow-hidden shadow-xl'>
                <img className='w-full ' src="images/avatar2.png" alt='avatar' />
            </div>
        </nav>
    </div>
  )
}

export default NavBar
