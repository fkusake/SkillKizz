"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const pathname = usePathname();
  useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setIsMenuOpen(false);
    }
  };

  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);

  return (
    <div className="w-full fixed top-0 left-0 z-50">
      <nav
  className={`flex flex-col h-16 md:h-20 w-full md:w-[94%] xl:w-[90%] 2xl:w-[75%] mx-auto bg-[#335f92] text-white transition-all ${
    isMenuOpen
      ? "rounded-b-none"
      : "rounded-b-[24px] md:rounded-b-3xl"
  }`}
>


        <div className="flex items-center justify-between px-4 py-2">
          {/* Logo */}
         


          {/* Mobile Logo */}
<div className="md:hidden flex items-center">
  <Link href="/" className="flex items-center gap-2">

    <Image
      src="/images/logo.png"
      alt="SkillKwiz Logo"
      width={70}
      height={70}
    className="w-12 h-12 object-contain"
    />

    <div className="flex flex-col leading-none">
      <h1
        className="text-[#69226F] font-extrabold tracking-wide text-lg lg:text-[22px]"
        style={{
          fontFamily: '"Aardvark Cafe", serif',
          lineHeight: "1",
        }}
      >
        SkillKwiz
      </h1>

      <p
        className="text-black mt-1 text-[9px] lg:text-[11px]"
        style={{
          fontFamily: '"GardensC", sans-serif',
          lineHeight: "1.1",
        }}
      >
        How much do you know?
      </p>
    </div>

  </Link>
</div>

          {/* Mobile Menu Button */}
          <button
  className="md:hidden relative z-[60] focus:outline-none"
  onClick={toggleMenu}
  aria-label="Toggle menu"
>
           {isMenuOpen ? (
  <X className="h-7 w-7 text-white" />
) : (
  <Menu className="h-7 w-7 text-[#f7d03e]" />
)}
          </button>

          {/* Desktop Navigation */}
            {/* <div className="hidden md:flex items-center justify-between w-full px-8"> */}
           <div className="hidden md:flex items-center w-full px-4 lg:px-8">



            <Link
  href="/"
  className="flex items-center gap-3 py-1 px-1"
>
  <Image
    src="/images/logo.png"
    alt="SkillKwiz Logo"
    width={70}
    height={70}
    className="w-12 h-12 lg:w-[70px] lg:h-[70px] object-contain"
  />

 <div className="flex flex-col justify-center leading-none">
  <h1
    className="text-[#69226F] font-extrabold tracking-wide text-lg lg:text-[22px]"
    style={{
      fontFamily: '"Aardvark Cafe", serif',
      lineHeight: "1",
    }}
  >
    SkillKwiz
  </h1>

  <p
    className="text-black mt-1 text-[9px] lg:text-[11px]"
    style={{
      fontFamily: '"GardensC", sans-serif',
      lineHeight: "1.1",
    }}
  >
    How much do you know?
  </p>
</div>
</Link>
<div className="ml-auto flex items-center gap-8 lg:gap-10">
            <Link
              href="/"
              className={`relative group py-4 px-2 text-sm md:px-4 lg:text-base transition-all ${
                pathname === "/"
                  ? "text-yellow-400 font-semibold"
                  : "text-white"
              }`}
            >
              <span>Home</span>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-yellow-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link
              href="/about"
              className={`relative group py-4 px-2 text-sm md:px-4 lg:text-base transition-all ${
                pathname === "/about"
                  ? "text-yellow-400 font-semibold"
                  : "text-white"
              }`}
            >
              <span>About Us</span>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-yellow-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link
              href="/services"
              className={`relative group py-4 px-2 text-sm md:px-4 lg:text-base transition-all ${
                pathname === "/services"
                  ? "text-yellow-400 font-semibold"
                  : "text-white"
              }`}
            >
              <span>Services</span>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-yellow-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link
              href="/blog"
              className={`relative group py-4 px-2 text-sm md:px-4 lg:text-base transition-all ${
                pathname === "/blog"
                  ? "text-yellow-400 font-semibold"
                  : "text-white"
              }`}
            >
              <span>Blog</span>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-yellow-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            </div>
          </div>

        </div>

 
        {/* Mobile Navigation */}
<div
  className={`md:hidden absolute top-full left-0 w-full bg-[#335f92] rounded-b-[24px] shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
    isMenuOpen
      ? "max-h-96 opacity-100"
      : "max-h-0 opacity-0 pointer-events-none"
  }`}
>
  <div className="flex flex-col py-2">

    <Link
      href="/"
      className="text-white py-4 px-6 text-lg hover:bg-white/10 active:bg-white/20 transition-colors"
      onClick={() => setIsMenuOpen(false)}
    >
      Home
    </Link>

    <Link
      href="/about"
      className="text-white py-4 px-6 text-lg hover:bg-white/10 active:bg-white/20 transition-colors"
      onClick={() => setIsMenuOpen(false)}
    >
      About Us
    </Link>

    <Link
      href="/services"
      className="text-white py-4 px-6 text-lg hover:bg-white/10 active:bg-white/20 transition-colors"
      onClick={() => setIsMenuOpen(false)}
    >
      Services
    </Link>

    <Link
      href="/blog"
      className="text-white py-4 px-6 text-lg hover:bg-white/10 active:bg-white/20 transition-colors"
      onClick={() => setIsMenuOpen(false)}
    >
      Blog
    </Link>

  </div>
</div>
      </nav>
    </div>
  );
}
