"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const pathname = usePathname();

  return (
    <div className="w-full fixed top-0 left-0 z-50">
      <nav className="flex flex-col h-20.5 w-full md:w-[90%] lg:w-[92%] xl:w-[94%] 2xl:w-[75%] mx-auto bg-[#335f92] text-white rounded-b-3xl">

        {/* <div className="flex items-center px-4 py-2"> */}

        <div className="flex items-center justify-between px-4 py-2">
          {/* Logo */}
          {/* <Link
            href="/"
            className={`md:hidden relative group py-4 px-2 text-sm lg:text-base transition-all ${
              pathname === "/" ? "text-yellow-400 font-semibold" : "text-white"
            }`}
          >
            <div className="relative flex items-center">
              <div className="w-auto h-10 flex items-center justify-start">
                <Image
                  src="/images/logo.png"
                  alt="SkillKwiz Logo"
                  width={100}
                  height={30}
                  className="w-auto h-auto max-h-12 object-contain"
                  style={{ maxWidth: "100%" }}
                />
              </div>
            </div>
          </Link> */}


          {/* Mobile Logo */}
<div className="md:hidden flex items-center">
  <Link href="/" className="flex items-center gap-2">

    <Image
      src="/images/logo.png"
      alt="SkillKwiz Logo"
      width={70}
      height={70}
      className="object-contain"
    />

    <div className="flex flex-col leading-none">
      <h1
        className="text-[#69226F] font-extrabold tracking-wide"
        style={{
          fontFamily: '"Aardvark Cafe", serif',
          fontSize: "22px",
          lineHeight: "1",
        }}
      >
        SkillKwiz
      </h1>

      <p
        className="text-black mt-1"
        style={{
          fontFamily: '"GardensC", sans-serif',
          fontSize: "11px",
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
            className="md:hidden text-white focus:outline-none z-20"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-between w-full px-8">



            <Link
  href="/"
  className="flex items-center gap-3 py-1 px-1"
>
  <Image
    src="/images/logo.png"
    alt="SkillKwiz Logo"
    width={70}
    height={70}
    className="object-contain"
  />

 <div className="flex flex-col justify-center leading-none">
  <h1
    className="text-[#69226F] font-extrabold tracking-wide"
    style={{
      fontFamily: '"Aardvark Cafe", serif',
      fontSize: "22px",
      lineHeight: "1",
    }}
  >
    SkillKwiz
  </h1>

  <p
    className="text-black mt-1"
    style={{
      fontFamily: '"GardensC", sans-serif',
      fontSize: "11px",
      lineHeight: "1.1",
    }}
  >
    How much do you know?
  </p>
</div>
</Link>

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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          // <div className="md:hidden flex flex-col items-center py-4 bg-[#335f92] rounded-b-3xl absolute top-0 left-0 w-full pt-16 shadow-lg transition-all duration-300 ease-in-out">
          <div className="md:hidden flex flex-col py-4 bg-[#335f92] rounded-b-3xl absolute top-0 left-0 w-full pt-16 shadow-lg transition-all duration-300 ease-in-out">
            <Link
              href="/"
              // className="text-white relative group py-3 text-lg w-full text-center"
              className="text-white relative group py-4 px-6 text-lg w-full text-left"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Home</span>
              <span className="absolute left-1/4 right-1/4 bottom-0 w-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-yellow-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link
              href="/about"
              // className="text-white relative group py-3 text-lg w-full text-center"
              className="text-white relative group py-4 px-6 text-lg w-full text-left"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>About Us</span>
              <span className="absolute left-1/4 right-1/4 bottom-0 w-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-yellow-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link
              href="/services"
              // className="text-white relative group py-3 text-lg w-full text-center"
              className="text-white relative group py-4 px-6 text-lg w-full text-left"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Services</span>
              <span className="absolute left-1/4 right-1/4 bottom-0 w-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-yellow-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link
              href="/blog"
              className="text-white relative group py-4 px-6 text-lg w-full text-left"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Blog</span>
              <span className="absolute left-1/4 right-1/4 bottom-0 w-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-yellow-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}
