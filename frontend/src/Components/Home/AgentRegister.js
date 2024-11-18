import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
export default function AgentRegister() {
  return (
    <div className='flex justify-around items-center p-7 rounded-2xl my-8 max-sm:flex-col gap-10'>
        <div className='flex flex-col gap-3'>
            <h1 className='text-2xl'>Become a Real Estate Agent</h1>
            <h1>We only work with the best companies around the glob</h1>
        </div>
        <NavLink to='/agent'> <div className='flex gap-3 items-center justify-center bg-yellow-400 rounded-md px-2 py-1'>
            <button>Register</button>
            <FaArrowRight/>
        </div>
        </NavLink>
    </div>
  )
}
