import Image from "next/image";

export default function AuthenticateSkillsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left side stacked images */}
          <div className="relative w-full md:w-1/3 h-[400px] md:h-[500px]">
            
            <div className="absolute top-2 left-0 w-[72%] h-[72%] animate-float-left-top group z-20">

              <Image
                src="/images/homepage/skills_1.png"
                alt="Professional working at night"
                width={350}
                height={500}
                className="w-full h-full object-cover rounded-2xl shadow-2xl transition-all duration-500 group-hover:-translate-y-4 group-hover:scale-105"
              />
            </div>
            <div className="absolute bottom-0 left-[18%] w-[82%] h-[82%] animate-float-left-bottom group">

              <Image
                src="/images/homepage/skills_2.png"
                alt="Professional in tech environment"
                width={350}
                height={500}
               className="w-full h-full object-cover rounded-2xl shadow-lg opacity-95 transition-all duration-500 group-hover:translate-y-2"
              />
            </div>
          </div>

          {/* Center content */}
          <div className="w-full md:w-1/3 text-center my-8 md:my-0 z-20">
            <h2 className="text-3xl font-bold text-[#00418d] mb-4">
              Authenticate Skills,
              <br />
              Simplify Hiring
            </h2>
            <p className="text-gray-700">
              SkillKwiz ensures professionals are evaluated accurately in their
              chosen fields. Our secure testing centers provide authenticated
              skill assessments, giving you instant access to verified
              reports—eliminating the need for lengthy technical interviews.
            </p>
          </div>

          {/* Right side stacked images */}
          <div className="relative w-full md:w-1/3 h-[400px] md:h-[500px]">
            <div className="absolute top-2 right-0 w-[72%] h-[72%] animate-float-right-top group z-20">
              <Image
                src="/images/homepage/skills_3.png"
                alt="Professional at workstation"
                width={350}
                height={500}
                className="
w-full
h-full
object-cover
rounded-2xl
shadow-2xl
transition-all
duration-500
group-hover:-translate-y-4
group-hover:scale-105
"
              />
            </div>
           
            <div className="absolute bottom-0 right-[18%] w-[82%] h-[82%] animate-float-right-bottom group">
              <Image
                src="/images/homepage/skills_4.png"
                alt="Business professional looking at digital interface"
                width={350}
                height={500}
                className="
w-full
h-full
object-cover
rounded-2xl
shadow-lg
opacity-95
transition-all
duration-500
group-hover:translate-y-2
"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
