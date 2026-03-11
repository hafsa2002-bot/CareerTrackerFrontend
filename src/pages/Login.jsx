import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='flex justify-center  items-center w-full  bg-stone-100  relative overflow-hidden min-h-screen'>
        <div className="absolute z-50 -top-15 -right-15 w-60 h-60 rounded-full pointer-events-none 
            shadow-[0_0_60px_60px_rgba(20,184,166,0.1)] bg-[rgba(20,184,166,0.1)] ">
        </div>
        <div className="absolute z-50 -bottom-15 -left-15 w-60 h-60 rounded-full pointer-events-none 
            shadow-[0_0_60px_60px_rgba(20,184,166,0.1)] bg-[rgba(20,184,166,0.1)] ">
        </div>
    
        <div className='flex flex-col justify-center items-center text-white rounded-2xl w-1/3 py-4 '>

            <h3 className='font-semibold font-space text-4xl mb-2 text-slate-800'>Welcome back</h3>
            <p className='text-slate-500 font-space text-sm mb-4 text-center '>
                Sign in to continue tracking your career journey.
            </p>


            <div className='bg-slate-900 w-full p-6 rounded-xl shadow-2xl border border-slate-700 shadow-slate-900/40'>
                <div className='mb-6'>
                    <h2 className='text-2xl font-space font-semibold mb-1 text-center'>Log In</h2>
                    <p className='text-slate-400 font-space text-sm text-center'>
                        Enter your credentials to access your dashboard and manage your progress.
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
                

                {/* i have to fix the password validation */}
                <label htmlFor='password' className='block text-sm mb-1 mt-3'>Password</label>
                <input
                    type='password'
                    id='password'
                    name='password'
                    placeholder='Enter your password'
                    minLength={8}
                    required
                    className='w-full mb-1 px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-600'
                />

                <button
                    type='submit'
                    className='w-full bg-teal-600 hover:bg-teal-500 mt-4 transition-colors duration-200 py-2 rounded-xl font-semibold'
                >
                    Log In
                </button>

                <div className='border-t border-slate-700 mt-6 flex justify-center relative'>
                    <div className='bg-slate-900 relative -top-3 px-3 text-slate-400 text-sm'>
                        OR
                    </div>
                </div>

                <p className='text-center text-sm text-slate-300 mt-2'>
                    Already have an account?{" "}
                    <Link to='/signup' className='text-teal-500 hover:text-teal-400 font-medium'>
                        Sign up
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

export default Login
