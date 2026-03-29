import { Archive, Database } from 'lucide-react'
import React, {useState} from 'react'
import useApplications from '../hooks/useApplications'

function TrackRecord() {
    const { applications, loading, error } = useApplications()
    const [option, setOption] = useState("Active")

    if (loading) return <p className='text-2xl font-space'>Loading...</p>
    if (error) return <p className='text-2xl font-space text-red-500'>Error loading applications</p>
  return (
    <div className='bg-white border border-stone-300 rounded-lg shadow shadow-lg p-4 mt-6'>
        <div className='text-blue-500 flex  items-center gap-1'>
            <Database/>
            <h3 className='text-xl font-semibold text-black'>Track Record</h3>
        </div>
        <div className='bg-gray-100 rounded-sm w-full flex  py-1 px-1 mt-2'>
            <div 
                onClick={() => setOption("Active")} 
                className={` ${option === "Active" ? "bg-white text-black shadow shadow-lg" : "text-gray-600"} cursor-pointer py-0.5 w-1/2 flex justify-center items-center  font-semibold text-center rounded-sm`}
            >
                Active Apps ({applications.length})
            </div>
            <div 
                onClick={() => setOption("Archived")} 
                className={` ${option === "Archived" ? "bg-white text-black shadow shadow-lg" : "text-gray-600"} cursor-pointer py-0.5 w-1/2 flex gap-1 justify-center items-center font-semibold text-center rounded-sm`}
            > 
                <Archive size={14} /> Archived Apps(00) 
            </div>
        </div>
        <div className='my-2 text-red-500'>
            Search
        </div>
        <div  className='rounded-sm  border border-gray-400 overflow-hidden'>
            <table className='w-full '>
                <thead className='bg-gray-100 text-gray-700 border-b border-gray-400 rounded-sm'>
                    <tr>
                        <th className='text-start p-2'>
                            Company
                        </th>
                        <th className='text-start p-2'>
                            Role
                        </th>
                        <th className='text-start p-2'>
                            Cycle
                        </th>
                        <th className='text-start p-2'>
                            Applied on
                        </th>
                        <th className='text-start p-2'>
                            Status
                        </th>
                        <th className='w-1/6 p-2'>
                            
                        </th>
                    </tr>
                </thead>
                <tbody className=''>
                    {applications.map((app) => (
                        <tr key={app.id}>
                            <td className='p-2 font-semibold'> 
                                {app.companyName} 
                            </td>
                            <td className='p-2 font-semibold'> 
                                {app.position} 
                            </td>
                            <td className='p-2 font-semibold'> 
                                {app.period} 
                            </td>
                            <td className='p-2 font-semibold'> 
                                {app.dateApplied} 
                            </td>
                            <td className='p-2 font-semibold'> 
                                {app.status} 
                            </td>
                            <td className='p-2 font-semibold'>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default TrackRecord
