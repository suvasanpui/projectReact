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
    <div className="bg-white">
      <div 
        className=" items-center justify-center bg-cover bg-center bg-no-repeat mt-4"
        style={{ backgroundImage: `url(${Group})` }}
      >
        <div className="p-4">
          <div className="grid grid-cols-2 md:flex gap-5 items-center justify-center">
            {statsData.map((stat, index) => (
              <div
                key={index}
                className="bg-white text-blue-600 rounded-2xl shadow-lg text-center w-41 h-26 flex flex-col justify-center items-center"
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
