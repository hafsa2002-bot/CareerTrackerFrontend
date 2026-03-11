import React from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <div className='flex justify-center  items-center w-full  bg-stone-100  relative overflow-hidden min-h-screen'>
        {/* <div className='shadow-[0_0_60px_40px_rgba(239,68,68,0.5)] pointer-events-none bg-transparent absolute top-50 right-10 z-20 w-60 h-60 rounded-full'></div> */}
        <div className="absolute z-50 -top-15 -right-15 w-60 h-60 rounded-full pointer-events-none 
            shadow-[0_0_60px_60px_rgba(20,184,166,0.1)] bg-[rgba(20,184,166,0.1)] ">
        </div>
        <div className="absolute z-50 -bottom-15 -left-15 w-60 h-60 rounded-full pointer-events-none 
            shadow-[0_0_60px_60px_rgba(20,184,166,0.1)] bg-[rgba(20,184,166,0.1)] ">
        </div>

        <div className='flex flex-col justify-center items-center text-white rounded-2xl w-1/3 py-4 '>

            <h3 className='font-semibold font-space text-4xl mb-2 text-slate-800'>Join CareerTrack</h3>
            <p className='text-slate-500 font-space text-sm mb-4 text-center '>
                Create your account and start organizing your career journey.
            </p>

            <h4 className='text-teal-600 font-space font-semibold mb-6'>
                Internship Tracker
            </h4>

            <div className='bg-slate-900 w-full p-6 rounded-xl shadow-2xl border border-slate-700 shadow-slate-900/40'>
                <div className='mb-6'>
                    <h2 className='text-2xl font-space font-semibold mb-1 text-center'>Create Account</h2>
                    <p className='text-slate-400 font-space text-sm text-center'>
                        Fill in your details to get started
                    </p>
                </div>

                {/* i have to fix the username validation */}
                <label htmlFor='username' className='block text-sm mb-1'>Username</label>
                <input
                    type='text'
                    id='username'
                    name='username'
                    placeholder='Enter your username'
                    minLength={5}
                    maxLength={20}
                    required
                    className='w-full mb-1 px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-600'
                />
                <p className='text-slate-400 text-xs mb-4'>
                    5–20 characters, start with letter/number, no consecutive special chars
                </p>

                {/* i have to fix the password validation */}
                <label htmlFor='password' className='block text-sm mb-1'>Password</label>
                <input
                    type='password'
                    id='password'
                    name='password'
                    placeholder='Enter your password'
                    minLength={8}
                    required
                    className='w-full mb-1 px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-600'
                />
                <p className='text-slate-400 text-xs mb-4'>
                    8+ characters with uppercase, lowercase, number, and special character
                </p>

                {/* password confirmation */}
                <label htmlFor='confirmPassword' className='block text-sm mb-1'>Confirm Password</label>
                <input
                    type='password'
                    id='confirmPassword'
                    name='confirmPassword'
                    placeholder='Re-enter your password'
                    minLength={8}
                    required
                    className='w-full mb-1 px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-600'
                />
                <p className='text-slate-400 text-xs mb-6'>
                    Must match the password above
                </p>

                <button
                    type='submit'
                    className='w-full bg-teal-600 hover:bg-teal-500 transition-colors duration-200 py-2 rounded-xl font-semibold'
                >
                    Create Account
                </button>

                <div className='border-t border-slate-700 mt-6 flex justify-center relative'>
                    <div className='bg-slate-900 relative -top-3 px-3 text-slate-400 text-sm'>
                        OR
                    </div>
                </div>

                <p className='text-center text-sm text-slate-300 mt-4'>
                    Already have an account?{" "}
                    <Link to='/login' className='text-teal-500 hover:text-teal-400 font-medium'>
                        Log in
                    </Link>
                </p>

            </div>

            <div className='mt-6 text-slate-600 text-sm text-center'>
                Plan Smart • Apply Better • Grow Faster
            </div>
        </div>
    </div>
  )
}

export default SignUp
