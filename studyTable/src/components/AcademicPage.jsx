import React from "react";
import { FaArrowRight } from "react-icons/fa";
import img1 from "../assets/img2.png";
import img2 from "../assets/img3.png";
import img3 from "../assets/img4.png";

const AcademicPage = () => {
  return (
    <div className="font-sans text-gray-800 bg-gradient-to-b from-white to-gray-50">
      {/* Header Section */}
      <header className="text-center pt-16 pb-20 px-4">
        <h1 className="text-5xl font-bold leading-tight">
          Optimize <span className="text-blue-600">Your Performance</span> For
          <br /> <span className="text-black">JEE, NEET, and Boards</span>
        </h1>
        <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
          Your personal AI-Tutor for all academic needs. Whether its school
          exam, boards or competitive exams we plan, manage, and help you clear
          your doubts instantly. For students of class 10th, 11th and 12th
          (CBSE) and preparing for all medical or engineering entrance exams.
        </p>
        <a
          href="#"
          className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center gap-2"
        >
          Apply for Admission
          <FaArrowRight className="text-lg transition-transform group-hover:translate-x-1" />
        </a>
      </header>

      {/* Sections */}
      <div className="max-w-6xl mx-auto space-y-32 px-8 py-20">
        {/* Unlimited Practice session */}
        <section className="flex flex-col md:flex-row items-center gap-20 p-6 rounded-2xl hover:bg-white/80 hover:shadow-xl transition-all duration-500 group">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
              Unlimited Practice session
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              For topics and subjects you go through in your school and coaching
              every day, we create instant practice session specially made for
              your days need. Our innovative AI algorithm crafts batches of 20
              questions, each accompanied by instant feedback and solutions -
              it's like having a Home tutor 24X7.
            </p>
            <a
              href="#"
              className="px-6 py-2 text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Learn More
            </a>
          </div>
          <div className="md:w-1/2 transform group-hover:scale-105 transition-transform duration-500">
            <img
              src={img1}
              alt="Practice session"
              className="w-full rounded-xl shadow-lg"
            />
          </div>
        </section>

        {/* Personalized Assessment */}
        <section className="flex flex-col md:flex-row-reverse items-center gap-20 p-6 rounded-2xl hover:bg-white/80 hover:shadow-xl transition-all duration-500 group">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
              Personalized Assessment
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We measure your learning differently. Not just comparing you among
              your classmates and peers rather, how much you have learnt and how
              much have your skills in each subject have grown. We crate test
              based on your learning session and exam requirement to understand
              and modify study plan for you. The test are uniquetly created for
              each student improve and advance their respective knowledge.
            </p>
            <a
              href="#"
              className="px-6 py-2 text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Explore More
            </a>
          </div>
          <div className="md:w-1/2 transform group-hover:scale-105 transition-transform duration-500">
            <img
              src={img2}
              alt="Personalized Assessment"
              className="w-full rounded-xl shadow-lg"
            />
          </div>
        </section>

        {/* Managing students academic life */}
        <section className="flex flex-col md:flex-row items-center gap-20 p-6 rounded-2xl hover:bg-white/80 hover:shadow-xl transition-all duration-500 group">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
              Managing students academic life
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              There is more to study than just practicing giving test. To meet
              the requirement of exam, we need to carefully do the revision,
              repeatedly align our study plan and to understand students own
              learning curve. This all needs to be done along with schools test
              and other scholarship exams. We manage it all for you. So that you
              focus on learning and worry no more.
            </p>
            <a
              href="#"
              className="px-6 py-2 text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Get Started
            </a>
          </div>
          <div className="md:w-1/2 transform group-hover:scale-105 transition-transform duration-500">
            <img
              src={img3}
              alt="Managing Academic Life"
              className="w-full rounded-xl shadow-lg"
            />
          </div>
        </section>
      </div>

      {/* How we come to this? */}
      <section className="max-w-6xl mx-auto my-32 px-8">
        <div className="relative group">
          {/* Gradient border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Main content */}
          <div className="relative bg-white rounded-2xl p-12 shadow-xl">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-center">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  How we come to this?
                </span>
              </h2>
              <div className="max-w-3xl mx-auto">
                <p className="text-lg text-gray-600 leading-relaxed text-center">
                  We observed and researched for three years in a variety of
                  student. Where The best needs more attention to do better and
                  the student struggling needs more attention to improve their
                  own abilities. All students need personal attention. Based on
                  the notion of “Personal attention” we have built our algorithm
                  and Ai tutor to cater each children uniquely...
                </p>
              </div>
              <div className="flex justify-center pt-4">
                <a
                  href="#"
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <div className="text-center py-24 bg-gradient-to-r from-gray-50 to-white shadow-inner">
        <p className="text-gray-600 text-2xl font-medium mb-8 tracking-wide">
          Crafted for your all academic needs
        </p>
        <a
          href="#"
          className="mt-6 bg-gradient-to-r from-black to-gray-800 text-white px-12 py-4 rounded-xl font-semibold 
          transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:from-gray-800 hover:to-black 
          inline-flex items-center gap-2 hover:-translate-y-1"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default AcademicPage;
