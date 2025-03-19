import React from 'react'
import homebg from '../assets/homebg.png'

const Homebg = () => {
  return (
    <div className="relative">
        <img
          src={homebg}
          alt="Background"
          className="w-full h-screen object-cover"
        />
        <div className="absolute top-1/3 w-full text-center text-white">
          <h1 className="text-4xl font-bold">
            The smartest way to manage your {" "}
            <span className="text-blue-400">last mile </span>transactions
          </h1>
          <p className="text-lg mt-2">
            Comprehensive solution combining the robust handheld terminals with
            intelligent software
          </p>
        </div>
      </div>
  )
}

export default Homebg