import React from "react";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";

const images = [image1, image2, image3, image4];

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-8 m-10 bg-white">
      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-3 w-full md:w-[297px] md-h-[259px]">
        {images.map((image, index) => (
          <div 
            key={index} 
            className={`overflow-hidden w-full h-full ${
              index == 1 || index==3 ? 'mt-8' : 'mt-0'
            }`}
          >
            <img
              src={image}
              alt={`image-${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Text Content */}
      <div className="md:ml-12 mt-8 md:mt-0 w-full md:w-1/2">
        <h2 className="text-4xl font-bold text-blue-800 mb-4">About Edgar Interactive</h2>
        <h3 className="text-lg font-semibold text-blue-600 mb-2">
          Transforming Transactions - Empowering Businesses
        </h3>
        <p className="text-gray-700">
          Edgar Interactive is one of the largest providers of technology-enabled
          solutions in India for over 20 years. Edgar Interactive’s cutting-edge
          smart devices coupled with robust software enable organizations to manage
          their last-mile transactions seamlessly and help in streamlining processes,
          ease data management, identify growth trends, increase accountability, and
          profitability.
        </p>
      </div>
    </div>
  );
};

export default About;
