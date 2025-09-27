import React from 'react'
import { assets } from '../assets/assets'

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-start items-center justify-between px-8 md:pl-14 pt-10 bg-gradient-to-r from-[#0558FE] to-[#A9CFFF] max-w-6xl mx-3 md:mx-auto rounded-2xl overflow-hidden">
      <div className="text-white">
        <h2 className="text-3xl font-medium">Do You Own a Luxury Car?</h2>
        <p className="mt-2">Monetize your vehicle effortlessly by listing here.</p>
        <p className="max-w-[520px]">
          We take care of insurance, driver verification and secure payments - so you can earn a passive income.
        </p>
        <button className="px-6 py-2 bg-white hover:bg-slate-100 transition-all duration-300 text-primary rounded-lg text-sm mt-4 cursor-pointer">
          List Now
        </button>
      </div>
      <img src={assets.banner_car_image} alt="car" className="max-h-[180px] mt-10" />
    </div>
  )
}

export default Banner
