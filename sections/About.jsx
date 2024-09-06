"use client"
import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JS from "@/assets/icons/square-js.svg";
import HTML from "@/assets/icons/html5.svg";
import Css from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import Github from "@/assets/icons/github.svg";
import MapImage from "@/assets/images/map.png";
import smileEmogi from "@/assets/images/memoji-smile.png";
import CardHeader from "@/components/CardHeader";
import ToolbocItems from "@/components/ToolbocItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
  {
    title: "Javascript",
    icon: <JS />,
  },
  {
    title: "HTML5",
    icon: <HTML />,
  },
  {
    title: "CSS3",
    icon: <Css />,
  },
  {
    title: "React",
    icon: <ReactIcon />,
  },
  {
    title: "Chrome",
    icon: <ChromeIcon />,
  },
  {
    title: "Github",
    icon: <Github />,
  },
];

const hobies = [
  {
    title: "painting",
    emoji: "🎨",
    left: "5%",
    top: "5%",
  },
  {
    title: "Photography",
    emoji: "📷",
    left: "50%",
    top: "5%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "10%",
    top: "35%",
  },
  {
    title: "Hiking",
    emoji: "🥾",
    left: "35%",
    top: "40%",
  },
  {
    title: "Music",
    emoji: "🎶",
    left: "70%",
    top: "45%",
  },
  {
    title: "Fitness",
    emoji: "🙅‍♂️",
    left: "5%",
    top: "65%",
  },
  {
    title: "Reading",
    emoji: "📖",
    left: "45%",
    top: "70%",
  },
];

function About() {
  const constRainRef = useRef(null)
  return (
    <div id="about" className="py-10 md:py-20">
      <div className="container">
        <SectionHeader
          eyebrow={"About Me"}
          title={"A Glimpse Into My World"}
          description={
            "Learn more about who I am, what I do, and what inspires me."
          }
        />
        <div className="mt-10 md:mt-20 flex flex-col gap-6 md:gap-8">
          <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-5">
            {/* My Reads Card */}
            <Card className="h-[300px] md:h-[320px] md:col-span-2">
              <CardHeader
                title={"My Reads"}
                description={"Explore the books shaping my perspectives."}
              />
              <div className="w-32 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt={"Book cover"} />
              </div>
            </Card>

            {/* Toolbox Card */}
            <Card className="h-[300px] md:h-[320px] md:col-span-3">
              <CardHeader
                title={"My Toolbox"}
                description={
                  "Explore the technologies and tools I use to craft exceptional digital experiences."
                }
              />
              <ToolbocItems
                items={toolboxItems}
                itemWrapperClassName={
                  "animate-move-left [animation-duration:30s]"
                }
              />
              <ToolbocItems
                items={toolboxItems}
                className="mt-4 md:mt-6"
                itemWrapperClassName="animate-move-right [animation-duration:20s]"
              />
            </Card>

            {/* Hobbies Card */}
            <Card className="h-[300px] md:h-[320px] p-0 flex flex-col md:col-span-3">
              <CardHeader
                title={"Beyond the Code"}
                description={
                  "Explore my interests and hobbies beyond the digital realm."
                }
                className="px-6 pt-6"
              />
              <div className="relative flex-1" ref={constRainRef}>
                {hobies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex gap-2 items-center px-4 md:px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={ constRainRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.emoji}
                    </span>
                    <span>{hobby.title}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* Map Image Card */}
            <Card className="h-[300px] md:h-[320px] p-0 relative md:col-span-2">
              <Image
                src={MapImage}
                alt="map"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-16 md:size-20 rounded-full  after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image
                  src={smileEmogi}
                  alt="smiling memogi"
                  className="size-16 md:size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
