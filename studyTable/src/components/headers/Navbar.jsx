import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <div className={`
      flex justify-center py-4 px-6 shadow-sm bg-white/95 backdrop-blur-sm
      sticky top-0 z-50 transition-transform duration-300
      ${visible ? 'translate-y-0' : '-translate-y-full'}
    `}>
      <h1 className="text-5xl font-normal hover:scale-105 transition-transform duration-300 cursor-pointer">
        STUDY<span className="font-bold text-blue-600">table</span>
      </h1>
    </div>
  )
}

export default Navbar