
"use client";

import { useState, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Jennifer Cooper",
    title: "Startup Founder, TechFlow",
    quote:
      "SkillKwiz has transformed our hiring process. We've reduced our time-to-hire by 40% and improved candidate quality significantly. The detailed skill reports give us confidence in every hiring decision.",
    image: "/images/homepage/5.png",
  },
  {
    id: 2,
    name: "Michael Donovan",
    title: "HR Director, Global Systems",
    quote:
      "As an enterprise with hundreds of technical hires annually, SkillKwiz has been invaluable. Their comprehensive skill assessments and secure testing environment ensure we get accurate insights into candidate capabilities.",
    image: "/images/homepage/6.png",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    title: "Talent Acquisition, InnovateTech",
    quote:
      "The flexibility of SkillKwiz's platform is what sets it apart. We can customize assessments to our specific needs, and the detailed reports help us make data-driven hiring decisions every time.",
    image: "/images/homepage/6.png",
  },
  {
    id: 4,
    name: "David Chen",
    title: "CTO, FutureTech Solutions",
    quote:
      "The technical assessments from SkillKwiz have been spot-on. We're able to quickly identify candidates with the right skills, saving our engineering team countless hours of interview time.",
    image: "/images/homepage/5.png",
  },
  {
    id: 5,
    name: "Emily Rodriguez",
    title: "Recruiting Manager, Innovate Inc",
    quote:
      "SkillKwiz has become an essential part of our hiring toolkit. The platform is intuitive, the assessments are comprehensive, and the customer support is exceptional.",
    image: "/images/homepage/7.png",
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const total = testimonials.length;

  const startInterval = () => {
    stopInterval();
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 5000);
  };

  const stopInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    startInterval();
    return () => stopInterval();
  }, []);

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
    startInterval();
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
    startInterval();
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
    startInterval();
  };

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-900">
          What Our Clients Say
        </h2>

        <div className="relative max-w-5xl mx-auto px-4 md:px-12">
          {/* Navigation buttons */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-white rounded-full p-2 shadow-md border border-gray-100 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#00418d]"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-[#00418d]" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-white rounded-full p-2 shadow-md border border-gray-100 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#00418d]"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-[#00418d]" />
          </button>

          {/* Testimonial container */}
          <div className="flex justify-center items-center gap-6 mb-8 md:h-[420px]">
            {testimonials.map((testimonial, idx) => {
              const prevIdx = (activeIndex - 1 + total) % total;
              const nextIdx = (activeIndex + 1) % total;

              const isActive = idx === activeIndex;
              const isPrev = idx === prevIdx;
              const isNext = idx === nextIdx;

              if (!isActive && !isPrev && !isNext) return null;

              return (
                <div
                  key={testimonial.id}
                  className={`
                    bg-[#00418d] rounded-xl text-white transition-all duration-500 ease-in-out flex flex-col items-center justify-between
                    ${
                      isActive
                        ? "w-full md:w-[50%] p-6 md:p-8 shadow-xl opacity-100 scale-100 md:scale-105 z-20 flex"
                        : "hidden md:flex md:w-[25%] p-5 opacity-50 scale-95 z-10 pointer-events-none"
                    }
                  `}
                >
                  <div className="flex flex-col items-center w-full text-center">
                    <div
                      className={`relative rounded-full overflow-hidden mb-4 border-2 border-white/80 transition-all duration-500 shadow-inner
                        ${isActive ? "w-20 h-20" : "w-14 h-14"}
                      `}
                    >
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Fixed uniform text sizing to eliminate shift animations */}
                    <h3 className="font-bold text-base md:text-lg text-white">
                      {testimonial.name}
                    </h3>
                    
                    <p className="text-blue-200/90 text-xs md:text-sm mb-2">
                      {testimonial.title}
                    </p>

                    <div className="flex gap-0.5 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="fill-[#f6c648] text-[#f6c648] w-4 h-4"
                        />
                      ))}
                    </div>

                    <div className="w-full flex items-center justify-center min-h-[140px] sm:min-h-[120px] md:min-h-[160px]">
                      <p className={`italic font-light leading-relaxed tracking-wide text-xs md:text-sm opacity-95 ${!isActive ? "line-clamp-4" : ""}`}>
                        "{testimonial.quote}"
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center space-x-2.5">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "bg-[#00418d] w-6" : "bg-gray-300 w-2.5"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}