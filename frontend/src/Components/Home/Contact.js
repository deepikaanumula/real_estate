import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
export default function Contact() {
    return (
        <div classNameName="">
            <h1 className='sm:text-3xl text-center text-2xl font-medium title-font mb-6 text-gray-900'>Contact Us</h1>
            <div className="flex flex-wrap -m-4  object-center">
                <div className="sm:w-1/3  mx-auto  p-4">
                    <div className=" p-10 items-center text-center object-center rounded-lg">
                        <div className="flex justify-center items-center ">
                            <IoLocationSharp className="text-blue-600 text-5xl" />
                        </div>
                        <p className="leading-relaxed text-base mt-7">123 Main Street<br/>
                            Springfield, IL 62701<br/>
                            United States</p>
                    </div>
                </div>
                <div className="sm:w-1/3 mx-auto  p-4">
                    <div className=" p-10 items-center text-center object-center rounded-lg">
                        <div className="flex justify-center items-center ">
                            <CiMail className="text-blue-600 text-5xl" />
                        </div>
                        <p className="leading-relaxed text-base mt-7">123 Main Street<br/>
                            Springfield, IL 62701<br/>
                            United States</p>
                    </div>
                </div>
                <div className="sm:w-1/3 mx-auto  p-4">
                    <div className=" p-10 items-center text-center object-center rounded-lg">
                        <div className="flex justify-center items-center ">
                            <FaPhoneAlt className="text-blue-600 text-5xl" />
                        </div>
                        <p className="leading-relaxed text-base mt-7">123 Main Street<br/>
                            Springfield, IL 62701<br/>
                            United States</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
