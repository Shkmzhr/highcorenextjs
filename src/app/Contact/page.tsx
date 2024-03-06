import React from 'react'
import { Button } from "@/components/ui/button"
function Contact() {
  
    return (
    <div>
<div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
  <div className="bg-white max-w-4xl mx-auto w-full">
    <div className="grid grid-cols-6 h-full">
      <div className="bg-gray-800 p-10 col-span-2">
        <h2 className="mb-10 font-bold text-2xl text-blue-100 before:block before:absolute before:bg-sky-300 before:content[''] relative before:w-20 before:h-1 before:-skew-y-3 before:-bottom-4">Our Contact</h2>
        <p className="font-bold text-blue-100 py-8 border-b border-[#d1d3d4]">
          Location Address
          <span className="font-normal text-sm text-[#c1c1c1] block">Hyderabad</span>
        </p>
        <p className="font-bold text-blue-100 py-8 border-b border-[#d1d3d4]">
          Phone Number
          <span className="font-normal text-sm text-[#c1c1c1]0 block">+889 (909) 567 87 9</span>
        </p>
        <p className="font-bold text-blue-100 py-8 border-b border-[#d1d3d4]">
          Email Address
          <span className="font-normal text-sm text-[#c1c1c1] block">example@example.com</span>
        </p>
        <p className="font-bold text-blue-100 py-8 border-b border-[#d1d3d4]">
          Web Address
          <span className="font-normal text-sm text-[#c1c1c1] block">www.pixel-sheet.com</span>
        </p>

      </div>
      <div className="bg-gray-50 p-14 col-span-4">
        <h2 className="mb-14 font-semibold text-4xl text-gray-400 before:block before:absolute before:bg-sky-300 before:content[''] relative before:w-20 before:h-1 before:-skew-y-3 before:-bottom-4">Entrer your details</h2>
        <div className="grid gap-6 mb-6 grid-cols-2">
          <div className="flex flex-col">
            <input className="py-4 bg-white rounded-md px-6 placeholder:text-md" aria-placeholder="Name" placeholder="First Name" ></input>
          </div>
          <div className="flex flex-col">
            <input className="py-4 bg-white rounded-md px-6 placeholder:text-md" aria-placeholder="lastName" placeholder="Last Name" ></input>
          </div>
        </div>
        <div className="grid gap-6 mb-6 grid-cols-2">
          <div className="flex flex-col">
            <input className="py-4 bg-white rounded-md px-6 placeholder:text-md" aria-placeholder="Email" placeholder="Email Address" ></input>
          </div>
          <div className="flex flex-col">
            <input className="py-4 bg-white rounded-md px-6 placeholder:text-md" aria-placeholder="Subject" placeholder="Subject" ></input>
          </div>
        </div>
        <div className="mb-6">
          <textarea className="w-full rounded-xl placeholder:text-md px-6 py-4" placeholder="Enter your message" name="" id="" rows="8"></textarea>
        </div>
        <div className="flex justify-center">
        <Button className='p-5 border-t-neutral-700 w-[10rem] hover:bg-slate-700'>Button</Button>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Contact