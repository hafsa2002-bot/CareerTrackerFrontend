import React from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <div className='flex justify-center items-center w-full  bg-stone-100'>
        <div className='flex flex-col justify-center items-center text-white rounded-2xl w-1/3 py-4 '>

            <h3 className='font-semibold text-4xl mb-2 text-slate-800'>Join CareerTrack</h3>
            <p className='text-slate-500 text-sm mb-4 text-center '>
                Create your account and start organizing your career journey.
            </p>

            <h4 className='text-teal-600 font-space-grotesk font-semibold mb-6'>
                Internship Trackerg
            </h4>

            <div className='bg-slate-900 w-full p-6 rounded-xl shadow-2xl border border-slate-700 shadow-slate-900/40'>
                <div className='mb-6'>
                    <h2 className='text-xl font-semibold mb-1'>Create Account</h2>
                    <p className='text-slate-400 text-sm'>
                        Fill in your details to begin tracking your goals and applications
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

            <div className='mt-6 text-slate-400 text-sm text-center'>
                Plan Smart • Apply Better • Grow Faster
            </div>
        </div>
    </div>
  )
}

export default SignUp
