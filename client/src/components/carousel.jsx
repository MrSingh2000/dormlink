import React, { useState, useEffect } from 'react';
import a from '../images/1.jpg'

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {a},
    "Slide 2",
    "Slide 3",
    // Add more slides as needed
  ];

  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      // Move to the next slide
      setCurrentSlide((currentSlide + 1) % slides.length);
    }, 3000); // Change the interval time as needed (in milliseconds)

    return () => {
      clearInterval(autoplayInterval);
    };
  }, [currentSlide, slides.length]);

  return (
    <div className="relative">
      <div className="w-full h-64 overflow-hidden">
        <div
          className="flex transition-transform duration-300 transform"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="w-full h-64 flex items-center justify-center bg-gray-200"
            >
              {slide}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
