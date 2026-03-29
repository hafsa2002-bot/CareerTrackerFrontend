import React from 'react'
import NavBar from '../components/NavBar'
import AddApplication from '../components/AddApplication'
import Applications from '../components/Applications'
import ApplicationTrends from '../components/ApplicationTrends'
import TrackRecord from '../components/TrackRecord'

function HomePage() {
  return (
    <div className=''>
        <NavBar/>
        <div className='pt-38 pb-20 px-14 bg-slate-100'>
            <AddApplication/>
            <Applications/>
            <ApplicationTrends/>
            <TrackRecord/>
        </div>
    </div>
  )
}

export default HomePage
