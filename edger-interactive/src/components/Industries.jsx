import React from "react";
import bankingIcon from "../assets/banking.svg";
import retailIcon from "../assets/retail.svg";
import dairyIcon from "../assets/dairy.svg";
import utilitiesIcon from "../assets/utilities.svg";
import microFinanceIcon from "../assets/micro-finance.svg";
import insuranceIcon from "../assets/insurance.svg";
import busTicketingIcon from "../assets/bus-ticketing.svg";
import supplyChainIcon from "../assets/supply.svg";

const industries = [
  { name: "Banking", icon: bankingIcon },
  { name: "Retail", icon: retailIcon },
  { name: "Dairy", icon: dairyIcon },
  { name: "Utilities", icon: utilitiesIcon },
  { name: "Micro Finance", icon: microFinanceIcon },
  { name: "Insurance", icon: insuranceIcon },
  { name: "Bus Ticketing", icon: busTicketingIcon },
  { name: "Supply Chain", icon: supplyChainIcon },
];

const Industries = () => {
  return (
    <div className=" bg-white">
      <h2 className="text-3xl font-bold text-blue-800 text-center mb-8">
        Explore Our Industries
      </h2>
      <div className="py-12 bg-blue-50 mb-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="w-full bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center p-4 transform transition-transform hover:scale-105"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#1E7BC2] flex items-center justify-center mb-3">
                  <img
                    src={industry.icon}
                    alt={industry.name}
                    className="w-10 h-10 md:w-12 md:h-12"
                  />
                </div>
                <p className="text-sm md:text-lg font-medium text-gray-700 text-center">
                  {industry.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;
