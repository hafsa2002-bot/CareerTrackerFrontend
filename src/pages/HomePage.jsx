import React from 'react'
import NavBar from '../components/NavBar'
import AddApplication from '../components/AddApplication'
import Applications from '../components/Applications'

function HomePage() {
  return (
    <div className=''>
        <NavBar/>
        <div className='pt-38 pb-20 px-10 bg-slate-100'>
            <AddApplication/>
            <Applications/>
        </div>
    </div>
  )
}

export default HomePage
