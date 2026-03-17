import React from 'react'
import NavBar from '../components/NavBar'
import AddApplication from '../components/AddApplication'

function HomePage() {
  return (
    <div className=''>
        <NavBar/>
        <div className='pt-34 px-4 bg-slate-100'>
            <AddApplication/>

        </div>
    </div>
  )
}

export default HomePage
