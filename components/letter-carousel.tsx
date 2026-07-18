"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface CarouselSlide {
  letters: string[];
  title: string;
  description: string;
  backgroundImage: string;
}

export default function LetterCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides: CarouselSlide[] = [
    {
      letters: ["S", "K", "I", "L", "L"],
      title: "Candidate Authentication Eliminating Fraud",
      description: "Evaluate your knowledge with our comprehensive skill tests",
      backgroundImage: "/images/homepage/Carousel/Drivers License.jpg",
    },
    {
      letters: ["Q", "U", "I", "Z"],
      title: "Say Goodbye to Technical Interviews!",
      description: "Interactive quizzes designed by industry experts",
      backgroundImage: "/images/homepage/Carousel/Pick - Laptop.jpg",
    },
    {
      letters: ["L", "E", "A", "R", "N"],
      title: "Assessments in Secure Centers",
      description: "Continuous improvement through personalized feedback",
      backgroundImage: "/images/homepage/Carousel/Secure Center.jpg",
    },
    {
      letters: ["H", "I", "R", "E"],
      title: "The World's Largest Skill Assessment Library",
      description: "Connect verified skills with the right opportunities",
      backgroundImage: "/images/homepage/Carousel/Skill Library.jpg",
    },
  ];

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, isAnimating]);

  return (
    // <div className="max-w-7xl mx-auto px-6">
    <div className="w-[100%] mx-auto">
      {/* <div className="relative overflow-hidden rounded-xl bg-white shadow-lg"> */}
      <div className="relative overflow-hidden rounded-none shadow-lg">
        <div className="relative h-[500px] sm:h-[700px] md:h-[800px] w-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-all duration-500 ease-in-out ${
                index === currentSlide
                  ? "opacity-100 translate-x-0"
                  : index < currentSlide
                  ? "opacity-0 -translate-x-full"
                  : "opacity-0 translate-x-full"
              }`}
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-0 flex items-center justify-center">
  <Image
    src={slide.backgroundImage}
    alt={`${slide.title} background`}
    width={1920}
    height={1080}
    priority={index === 0}
    className="w-full h-auto md:h-full md:object-cover object-contain"
  />
   <div className="absolute inset-0 bg-black/30 backdrop-blur-[0px]"></div>
</div>

              <div className="flex flex-col h-full relative z-10">
                {/* Letters row */}
                {/* <div className="flex justify-center items-center py-8 gap-4"> */}
                <div className="flex justify-center items-center mt-24 sm:mt-28 gap-2 sm:gap-3 md:gap-4 px-4">
                  {slide.letters.map((letter, letterIndex) => (
                    <div
                      key={letterIndex}
                      className="w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 flex items-center justify-center bg-gradient-to-br from-[#00418d] to-[#0066cc] text-white text-xl sm:text-2xl md:text-4xl font-bold rounded-lg shadow-md transition-transform hover:scale-110"
                    >
                      {letter}
                    </div>
                  ))}
                </div>

                {/* Content */}
    <div className="text-center px-6 sm:px-10 py-6 max-w-4xl mx-auto">
  <h3
  className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-2 px-2"
    style={{ fontFamily: "Georgia, serif" }}
  >
    {slide.title}
  </h3>
</div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-[#00418d]" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-[#00418d]" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === currentSlide ? "bg-[#f73e5d] w-8" : "bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
