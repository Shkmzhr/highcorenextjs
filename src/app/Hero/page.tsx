'use client'

import React from 'react';

import './styles.css'
import Image from 'next/image';

import { motion } from "framer-motion"

function Hero() {
  
  return (
    
    <div>

      <div>

     <section className="bg-white dark:bg-gray-900">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 .leftsection" id='leftsection'>
     <motion.div
  className="mr-auto place-self-center lg:col-span-7"
  initial={{ opacity: 0, x: 50 }} // Set initial opacity and y-axis position
  animate={{ opacity: 1, x: 0 }} // Animate opacity to 1 and y-axis to 0
  transition={{ duration: 0.5 }} // Set animation duration to 0.5 seconds
>
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Pioneering Software Solutions That <span id="animated-text">Push Boundaries.</span> </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
<b className='text-xl '>Highcore Technical Solutions™</b>: Your vision, brought to life. We craft innovative software that empowers your business to soar.</p>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Get started
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
            <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-blue-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Reach Us
            </a> 
        </div>
</motion.div>
<motion.div
  className=""
  initial={{ opacity: 0, y: 50 }} // Set initial opacity and y-axis position
  animate={{ opacity: 1, y: -10 }} // Animate opacity to 1 and y-axis to 0
  transition={{ duration: 0.7 }} // Set animation duration to 0.5 seconds
>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex h-[32rem] w-[40rem]">
            <Image src="https://cdn.pixabay.com/photo/2019/08/06/22/48/artificial-intelligence-4389372_1280.jpg" alt="mockup" className='img1' height={640} width={552}/>
        </div>  
        </motion.div>              
    </div>
</section>

      </div>
   
    </div>
  
  )

}

export default Hero