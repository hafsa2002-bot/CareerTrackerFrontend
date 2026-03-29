import { TrendingUp } from 'lucide-react'
import React from 'react'

function ApplicationTrends() {
  return (
    <div className='mt-14'>
        <div className='flex w-56 justify-center items-center m-auto gap-1 bg-blue-100 rounded-full border border-blue-400 text-blue-400 px-3 py-1'>
            <TrendingUp/>
            <h3 className='text-black font-semibold'>Application Trends</h3>
        </div>
        <p className='text-center mt-1 text-stone-400'>Monthly total application activity over time</p>
        <div className='bg-blue-100 rounded-lg border border-blue-400 w-full h-96 mt-2'>

        </div>
    </div>
  )
}

export default ApplicationTrends
