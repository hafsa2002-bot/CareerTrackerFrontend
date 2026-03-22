import { X } from 'lucide-react'
import React from 'react'

function AddAppPopUp({setShowPopUp}) {
  return (
    <div className='absolute px-3 py-1.5 fixed bottom-3 right-3 z-50 bg-red-500 rounded-xl text-white w-1/5'>
        <div className=' flex justify-end '>
            <X onClick={() =>setShowPopUp(false)} size={18} className='hover:bg-white hover:text-red-500 rounded-full'/>
        </div>
        <h3 className='font-semibold '>Something went wrong.</h3>
        <p className='text-sm'>Please make sure all required fields are filled in before clicking Add.</p>
    </div>
  )
}

export default AddAppPopUp
