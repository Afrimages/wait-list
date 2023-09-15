import React from 'react'
import { FaArrowRight } from "react-icons/fa"

const Main = () => {
  return (
    <div>
        <div className="fixed top-0 left-0 w-full h-100vh">
            <img src="./bg.svg" alt="" className='w-full h-[100vh] object-cover'/>
            <div className="overlay" />
        </div>

        <div className="main z-20 absolute flex flex-col items-center w-[60%] sm:w-[90%] justify-center top-[20vh] sm:top-[30vh]  left-[20%] sm:left-[5%]">
            <img src="./logoGreen.png" alt="" className='w-[30%] sm:w-[50%]'/>
            <h1 className='text-[50px] font-[900] text-white'>
                Coming Soon.
            </h1>
            <p className='text-white text-center w-[100%]'>Be the first to embark on a visual journey celebrating the beauty, culture, and diversity of Africa through the lens of talented photographers.</p>

            {/* <form action="" className='flex items-center w-full justify-center mt-5'>
                <input type="text" className='p-5 sm:p-3 w-[60%] rounded-l-lg max-w-none min-w-0 focus:outline-none' placeholder='youremail@mail.com'/>
                <button className='bg-primary1 py-5 sm:py-3 px-10 text-white rounded-r-lg font-[700] relative'>
                    Join
                </button>
            </form> */}

            <form action="" className='flex items-center w-full justify-center mt-5 gap-3'>
                <input type="text" className='p-5 sm:p-5 w-[60%] sm:w-[80%] rounded-full max-w-none min-w-0 focus:outline-none' placeholder='youremail@mail.com'/>
                <button className='bg-primary1 py-6 sm:py-6 px-6 text-white rounded-full font-[700] relative'>
                    <FaArrowRight />
                </button>
            </form>
        </div>

    </div>
  )
}

export default Main