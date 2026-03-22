import { Clock3, Flower2, Plus, Leaf, Snowflake, Sun, ChevronDown, Check } from 'lucide-react'
import React, {useState} from 'react'
import AddAppPopUp from './AddAppPopUp'
import axios from 'axios'

const options = [
    { value: "Spring", label:"Spring (Jan-Apr)", icon: <Flower2 size={16} />, color: "text-green-600" },
    { value: "summer", label: "Summer (May-Aug)", icon: <Sun size={16} />, color: "text-yellow-600" },
    { value: "fall", label: "Fall (Sept-Dec)", icon: <Leaf size={16} />, color: "text-orange-600" },
    { value: "winter", label: "Winter (Dec-Jan)", icon: <Snowflake size={16} />, color: "text-blue-600" },
    { value: "6-month", label: "6-month full/part time", icon: <Clock3 size={16} />, color: "text-purple-700" },
]

function AddApplication() {
    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState({label: "Choose internship period", icon: null})
    const [dateApplied, setDateApplied] = useState("")
    const [companyName, setCompanyName] = useState("")
    const [position, setPosition] = useState("")
    const [jobLink, setJobLink] = useState("")
    const [showPopUp, setShowPopUp] = useState(false)
    const [period, setPeriod] = useState("")
    const [successMessage, setSucessMessage] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (companyName === "" || position === "" || dateApplied === "" || period === "") {
            setShowPopUp(true)
            setTimeout(() => setShowPopUp(false), 3000)
            return
        }

        const newApplication = {
            companyName,
            position,
            jobLink,
            dateApplied,
            period,
        }

        try{
            const response = await axios.post("http://localhost:5000/applications/addApp", newApplication)
            setSucessMessage(true)
            console.log("response: ", response.data)
            setTimeout(() => setSucessMessage(false), 3000)
            window.location.reload()
        }catch(error){
            console.error("Error adding application: ", error)
        }
    }

  return (
    <div className='flex gap-6 justify-center  font-space'>
        <div className='bg-white px-5 py-6 rounded-lg border border-stone-300 w-[45%]'>
            <div className='flex items-center gap-2 mb-5'>
                <div className='bg-slate-700 rounded-xl text-white flex justify-center items-center shadow-lg px-2 py-2'><Plus/></div>
                <h3 className='font-space text-xl font-bold'>Add New Application</h3>
            </div>
            <form onSubmit={handleSubmit} className='flex flex-col gap-3 w-full'>
                {/* company name */}
                <div className="flex flex-col gap-1">
                    <label htmlFor="companyName">Company Name</label>
                    <input 
                        type="text" 
                        name="companyName" 
                        id="companyName" 
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder='e.g. Google' 
                        className='border border-stone-300 rounded-lg px-3 py-2 w-12/12'
                        // required
                    />
                </div>
                {/* position */}
                <div className="flex flex-col gap-1">
                    <label htmlFor="position">Position</label>
                    <input 
                        type="text" 
                        name="position" 
                        id="position" 
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                        placeholder='e.g. Software Engineer Intern' 
                        className='border border-stone-300 rounded-lg px-3 py-2 w-12/12'
                        // required
                    />
                </div>
                {/* job link */}
                <div className="flex flex-col gap-1">
                    <label htmlFor="jobLink">Job Link <span className='text-gray-300'>(optional)</span></label>
                    <input 
                        type="url" 
                        name="jobLink" 
                        id="jobLink" 
                        value={jobLink}
                        onChange={(e) => setJobLink(e.target.value)}
                        placeholder='e.g. https://www.google.com/jobs/view' 
                        className='border border-stone-300 rounded-lg px-3 py-2 w-12/12'
                    />
                </div>
                {/* time period */}
                <div className="flex flex-col gap-1 relative">
                    <label htmlFor="period">Time Period</label>
                    <button
                        type="button"
                        onClick={() => setOpen(!open)}
                        value={selected.label}
                        className=' border border-stone-300 rounded-lg px-3 py-2 flex items-center justify-between w-12/12'
                    >
                        <span className={`${selected.color} flex items-center gap-2`}>
                            {selected.icon}
                            {selected.label}
                        </span>
                        <span className='cursor-pointer'><ChevronDown/></span>
                    </button>

                    {/* Dropdown */}
                    {open &&  (
                        <div className="absolute border overflow-hidden border-stone-300 top-full mt-1 w-12/12 bg-white border rounded-lg shadow-lg z-10">
                            {
                                options.map((option) => (
                                    <div
                                        key={option.value}
                                        onClick={() => {
                                            setSelected(option)
                                            setPeriod(option.value)
                                            setOpen(false)
                                        }}
                                        className={`${option.color} ${selected.value === option.value && 'bg-stone-200'} flex items-center gap-2 px-3 py-1 hover:bg-gray-100 cursor-pointer `} 
                                    >
                                        {selected.value === option.value ? <span className='text-black'><Check size={16}/></span> : <span className='w-4'></span>}
                                        {option.icon}
                                        {option.label}
                                    </div>
                                ))
                            }
                        </div>
                    )}
                </div>
                {/* date applied */}
                <div className="flex flex-col gap-1">
                    <label htmlFor="dateApplied">Date Applied</label>
                    <input 
                        type="date" 
                        name="dateApplied" 
                        id="dateApplied"
                        value={dateApplied}
                        onChange = {(e) => setDateApplied(e.target.value)}
                        // required
                        className='border border-stone-300 rounded-lg px-3 py-2 w-12/12'            
                        />
                </div>
                <div className='flex justify-between items-center w-12/12 '>
                    <button type='reset' className='bg-gray-500 w-1/3 cursor-pointer hover:bg-gray-700 transition-colors duration-200 py-2 rounded-xl font-semibold text-white mt-4'>Reset</button>
                    <button type='submit' className='bg-teal-600 w-1/3 cursor-pointer  hover:bg-teal-800 transition-colors duration-200 py-2 rounded-xl font-semibold text-white mt-4'>Add Application</button>
                </div>
            </form>
            {showPopUp && <AddAppPopUp  setShowPopUp={setShowPopUp} /> }
        </div>
        <div className='w-[45%] mt-10'>
            <img className='bg-transparent'  src="/images/crTP.png" alt="Career Track" />
        </div>
    </div>
  )
}

export default AddApplication
