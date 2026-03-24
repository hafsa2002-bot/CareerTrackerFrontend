import { Award, AwardIcon, Calendar, Check, ChefHat, ChevronDown, Clock, Flame, Sparkle, Target } from 'lucide-react'
import React, {useState} from 'react'
import useApplications from '../hooks/useApplications'


const status = [
    { value: "applied", label:"Applied", color: "bg-blue-500", text: "text-blue-500" },
    { value: "interview", label: "Interview", color: "bg-yellow-500", text: "text-yellow-500" },
    { value: "rejected", label: "Rejected", color: "bg-red-500", text: "text-red-500" },
    { value: "offered", label: "Offered", color: "bg-green-500", text: "text-green-500" },
]

function Applications() {
    const [selected, setSelected] = useState({label: "Filter by status", color: "bg-gray-500"})
    const [open, setOpen] = useState(false)
    const [newStatus, setNewStatus] = useState("")
    const {applications, loading, error} = useApplications()
    const last7Days = applications.filter(app => {
        const appDate = new Date(app.dateApplied)
        const now = new Date()
        const diffTime = now - appDate
        const diffDays = diffTime / (1000 * 60 * 60 * 24)
        return diffDays <= 7
    }).length

    const last30Days = applications.filter(app => {
        const appDate = new Date(app.dateApplied)
        const now = new Date()  
        const diffTime = now - appDate
        const diffDays = diffTime / (1000 * 60 * 60 * 24)
        return diffDays <= 30
    }).length

    const thisMonth = applications.filter(app => {
        const appDate = new Date(app.dateApplied)
        const now = new Date()
        return appDate.getMonth() === now.getMonth() && appDate.getFullYear() === now.getFullYear()
    }).length

    const inInterview = applications.filter(app => app.status === "interviewing").length * 100 / applications.length
    const offers = applications.filter(app => app.status === "accepted").length

    if (loading) return <p className='text-2xl font-space'>Loading...</p>
    if (error) return <p className='text-2xl font-space text-red-500'>Error loading applications</p>
  return (
    <div className='mt-10'>
        <h3 className='font-space text-2xl font-bold'>Applications</h3>
        <p className='text-gray-800 font-space'>Stay on top of every job and internship you apply for.</p>
        <div className='flex gap-6 mt-5'>
            <div className='bg-white border border-gray-200 shadow shadow-lg rounded-lg px-4 py-3 w-1/2'>
                <div className='flex justify-between items-center'>
                    <div>
                        <h2 className='text-xl font-space font-bold'>Status Breakdown</h2>
                        <p className=' font-space'>Current application status distribution</p>
                    </div>
                    <div className='flex flex-col relative '>
                        <button
                            type="button"
                            onClick={() => setOpen(!open)}
                            value={selected.label}
                            className='bg-gray-100 border border-stone-300 rounded-lg px-3 py-2 flex items-center justify-between gap-2 cursor-pointer'
                        >
                            <span className={`${selected.text} flex items-center text-sm font-semibold gap-2`}>
                                <span className={`${selected.color} w-2 h-2 rounded-full`}></span>
                                {selected.label}
                            </span>
                            <span className='cursor-pointer'><ChevronDown size={16}/></span>
                        </button>
                        {/* dropdown */}
                        {open &&  (
                            <div className="absolute border text-sm font-semibold font-pace overflow-hidden border-stone-300 top-full mt-1 w-full bg-white border rounded-lg shadow-lg z-10">
                                {
                                    status.map((st) => (
                                        <div
                                            key={st.value}
                                            onClick={() => {
                                                setSelected(st)
                                                setNewStatus(st.value)
                                                setOpen(false)
                                            }}
                                            className={`${st.text} ${selected.value === st.value && 'bg-stone-200'} flex items-center gap-2 px-1.5 py-1 hover:bg-gray-100 cursor-pointer `} 
                                        >
                                            {selected.value === st.value ? <span className='text-gray-700'><Check size={14}/></span> : <span className='w-4'></span>}
                                            <span className={`${st.color} w-2 h-2 rounded-full`}></span>
                                            {st.label}
                                        </div>
                                    ))
                                }
                            </div>
                        )}
                    </div>
                </div>

                {/* react  */}
                <div className='h-40'></div>
            </div>
            <div className='flex flex-col gap-3 w-1/2'>
                <div className='p-3 flex items-center bg-white border border-gray-100 shadow shadow-lg rounded-lg'>
                    <div className='flex items-center gap-2 w-1/2' >
                        <div className='flex justify-center items-center w-9 h-9 bg-blue-200 text-blue-600 rounded-md '><Target/></div>
                        <div className='font-space'>
                            <h2 className='text-stone-500 text-sm'>Total Apps</h2>
                            <p className='text-xl font-bold'>{applications.length}</p>
                        </div>
                    </div>
                    <div className='flex w-1/2 pl-4 items-center gap-2 border-l border-gray-200'>
                        <div className='flex justify-center items-center w-9 h-9 bg-green-200 text-green-600 rounded-md '><Calendar/></div>
                        <div className='font-space'>
                            <h2 className='text-stone-500 text-sm'>Apps this Month</h2>
                            <p className='text-xl font-bold'>{thisMonth}</p>
                        </div>
                    </div>
                </div>
                <div className='p-3 flex  items-center bg-white border border-gray-100 shadow shadow-lg rounded-lg'>
                    <div className='flex items-center gap-2 w-1/2' >
                        <div className='flex justify-center items-center w-9 h-9 bg-blue-200 text-blue-800 rounded-md font-semibold'>7</div>
                        <div className='font-space'>
                            <h2 className='text-stone-500 text-sm'>Avg Apps/Day (Last 7 Days)</h2>
                            <p className='text-xl font-bold'>{last7Days}</p>
                        </div>
                    </div>
                    <div className='flex pl-4 items-center gap-2 border-l border-gray-200 w-1/2'>
                        <div className='flex justify-center items-center w-9 h-9 bg-blue-200 text-blue-800 rounded-md font-semibold'>30</div>
                        <div className='font-space'>
                            <h2 className='text-stone-500 text-sm'>Avg Apps/Day (Last 30 Days)</h2>
                            <p className='text-xl font-bold'>{last30Days}</p>
                        </div>
                    </div>
                </div>
                <div className='p-3 bg-white border border-purple-100 shadow shadow-lg rounded-lg flex items-center gap-2'>
                    <div className='flex justify-center items-center w-9 h-9 bg-purple-300 text-purple-600 rounded-md '><ChefHat/></div>
                    <div className='font-space'>
                        <p className='text-xl font-bold'>{inInterview} %</p>
                        <h2 className='text-stone-500 text-sm'>Apps in Interview</h2>
                    </div>
                </div>
                <div className='p-3 bg-white border border-orange-100 shadow shadow-lg rounded-lg flex items-center gap-2'>
                    <div className='flex justify-center items-center w-9 h-9 bg-orange-300 text-orange-600 rounded-md '><AwardIcon/></div>
                    <div className='font-space'>
                        <p className='text-xl font-bold'>{offers}</p>
                        <h2 className='text-stone-500 text-sm'>Offer(s)</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex gap-6 mt-3'>
            <div className='p-3 flex items-center bg-white border border-gray-100 shadow shadow-lg rounded-lg w-1/2'>
                <div className='flex items-center gap-2 w-1/2' >
                    <div className='flex justify-center items-center w-9 h-9 bg-red-200 text-red-600 rounded-md '><Flame/></div>
                    <div className='font-space'>
                        <h2 className='text-stone-500 text-sm'>Current Streak</h2>
                        <p className='text-xl font-bold'>00</p>
                    </div>
                </div>
                <div className='flex w-1/2 pl-4 items-center gap-2 border-l border-gray-200'>
                    <div className='flex justify-center items-center w-9 h-9 bg-yellow-100 text-yellow-600 rounded-md '><Sparkle/></div>
                    <div className='font-space'>
                        <h2 className='text-stone-500 text-sm'>Best Streak</h2>
                        <p className='text-xl font-bold'>00</p>
                    </div>
                </div>
            </div>
            <div className='p-3 flex items-center bg-white border border-gray-100 shadow shadow-lg rounded-lg w-1/2'>
                <div className='flex items-center gap-2 w-1/2' >
                    <div className='flex justify-center items-center w-9 h-9 bg-gray-200 text-gray-600 rounded-md '><Clock/></div>
                    <div className='font-space'>
                        <p className='text-xl font-bold'>00 days</p>
                        <h2 className='text-stone-500 text-sm'>Longest gap without applying</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Applications
