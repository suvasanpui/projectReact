import React from "react";
import Group from '../assets/Group.png'

const statsData = [
  { number: "15,000+", label: "Transaction Handheld Terminals Deployed" },
  { number: "4,000+", label: "Clients Served" },
  { number: "2,100+", label: "Crore Money Securely Transacted" },
  { number: "19+", label: "Industry Specific Solutions Developed" },
  { number: "20+", label: "Years of Rich Industry Experience" },
  { number: "4,000+", label: "State-of-the-Art Facilities" },
];

const Statistics = () => {
  return (
    <div className="bg-white sm:hidden">
      <div 
        className="mt-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${Group})` }}
      >
        <div className="p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-x-10 gap-y-14 justify-items-center">
            {statsData.map((stat, index) => (
              <div
                key={index}
                className="bg-white text-blue-600  p-6 rounded-2xl shadow-lg text-center w-54 h-26 flex flex-col justify-center items-center"
              >
                <h2 className="text-3xl font-bold">{stat.number}</h2>
                <p className="text-md mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
