import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainimage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
function Hero() {
  return (
    <div id='home' className="py-32 md:py-28 lg:py-32 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_70%,transparent)] ">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainimage.src})`,
          }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        {}
        <HeroOrbit size={620} rotation={-68} shouldOrbit orbitDuration={"40s"} shouldSpin spinDuration={'6s'}>
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={450} rotation={15} shouldOrbit orbitDuration={"38s"} shouldSpin spinDuration={'6s'}>
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={490} rotation={78} shouldOrbit orbitDuration={"32s"} shouldSpin spinDuration={'6s'}>
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={390} rotation={-14} shouldOrbit orbitDuration={"30s"} shouldSpin spinDuration={'6s'}>
          <SparkIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={160} shouldOrbit orbitDuration={"36s"} shouldSpin spinDuration={'6s'}>
          <SparkIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={640} rotation={130} shouldOrbit orbitDuration={"44s"} shouldSpin spinDuration={'6s'}>
          <SparkIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={100} shouldOrbit orbitDuration={"46s"} shouldSpin spinDuration={'6s'}>
          <div className="size-3 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={500} rotation={98} shouldOrbit orbitDuration={"48s"} shouldSpin spinDuration={'6s'}>
          <div className="size-3 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={700} rotation={-41} shouldOrbit orbitDuration={"34s"} shouldSpin spinDuration={'6s'}>
          <div className="size-3 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration={"42s"} shouldSpin spinDuration={'6s'}>
          <div className="size-5 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="Person peek from behind laptop"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3x md:text-5xl text-center mt-8 tracking-wide">
            Building Exceptional User Experiences
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I specialize in transforming designs into functional,
            high-performing web applications. Let's diuscuss your next project.
          </p>
        </div>
        <div className="flex flex-col items-center md:flex-row justify-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/25 px-4 h-12 rounded-xl transition-transform transform hover:scale-105 hover:border-white">
            <span className="font-semibold text-lg">Explore My Work</span>
            <ArrowDown width={16} height={16} />{" "}
            {/* Adjust the size of the icon */}
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-4 rounded-xl transition-transform transform hover:scale-105">
            <span className="text-lg">👋</span>
            <span className="font-semibold text-lg">Let's Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
