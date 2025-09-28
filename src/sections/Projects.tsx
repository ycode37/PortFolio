"use client";

import craftiFy from "../../public/images/projects/craftiFy.png";
import landingPage from "../../public/images/projects/landingPage.png";
import bookmarkImage from "../../public/images/projects/bookmark.png";
import ecommerceImage from "../../public/images/projects/ecommerce.png";
import galleryImage from "../../public/images/projects/gallery.png";
import rockImage from "../../public/images/projects/rockpaperscissor.png";
import spaceImage from "../../public/images/projects/spaceImage.png";
import tmsImage from "../../public/images/projects/tms.png";
import threadsImage from "../../public/images/projects/threads.png";
import ratemyuniImage from "../../public/images/projects/ratemyuni.jpg";

import ArrowRightIcon from "../../public/icons/arrow-up-right.svg";

import { Tabs } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
import { IconBrandGithub } from "@tabler/icons-react";
import { Card } from "@/components/Card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

import tigatImage from "../../public/images/tigat-new.png";
import nileodeImage from "../../public/images/nileode-new.png";
import whalersImage from "../../public/images/whalers.png";
import LalibelaImage from "../../public/images/lalibela.png";
import calmifyImage from "../../public/images/calmify-home.png";
import servicenowImage from "../../public/service.png";
import HUHTImage from "../../public/images/huht-new.png";
import DidecoImage from "../../public/images/dideco.png";
import MojoImage from "../../public/images/mojo.png";
import { Globe2 } from "lucide-react";

const sideProjects = [
  {
    name: "Agentic.ai",
    description:
      "Agentic AI is a sleek, modern single-page site showcasing a cutting-edge artificial intelligence product or service. The design is minimalist, with strong visual hierarchy and engaging typography. Clear sections walk users through benefits, features, and use cases — all to build trust and excitement. Calls to action stand out, guiding users to “get started” or explore further. Overall, Agentic AI presents a compelling, polished front for an innovative AI offering. ",
    image: landingPage,
    link: "https://landing-page-sage-ten-61.vercel.app/",
    repo: "https://github.com/ycode37/landing-page",
    tech: [
      "React.js",
      "TailwindCSS",
      "Postgres",
      "Prisma",
      "React Query",
      "NextAuth",
      "upstash",
    ],
    isTopProject: true,
    isNextjs: true,
    isMern: false,
    isHtmlCss: false,
  },
  {
    name: "CraftiFy",
    description:
      "This project convert Simple Texts to Images using AI and this integration innovates us how we can use tech to enhace productibity an for some credits it's free and then you can Pay for Extra services We enhanced On On how we can AI to cahnge text To images Using ClipDrop APis  integration, and personalized feeds for authenticated users. It employs optimistic updates to enhance the user experience by reflecting changes immediately while processing, .",
    image: craftiFy,
    link: "https://crafti-fy-to4c.vercel.app/",
    repo: "https://github.com/ycode37/CraftiFy",
    tech: ["React.js", "TailwindCSS", "MongoDB", "Express", "Node.js", "Clerk"],
    isTopProject: true,
    isNextjs: true,
    isMern: false,
    isHtmlCss: false,
  },
  // {
  //   name: "Rate My Uni (Hackathon Project)",
  //   description:
  //     "The project is focused on building a simple, yet functional, web-based interface where students and users can rate universities based on various criteria (e.g., campus, academics). It aims to create a platform where users can submit and view ratings for different universities, much like popular 'Rate My Professor' services but focused on universities as a whole.",
  //   image: ratemyuniImage,
  //   link: "https://ratemyuniversity.com",
  //   repo: "https://github.com/itsyaba/rate-my-uni",
  //   tech: ["Next.js", "TailwindCSS", "MongoDB", "Express", "Node.js"],
  //   isTopProject: true,
  //   isNextjs: true,
  //   isMern: false,
  //   isHtmlCss: false,
  // },
  {
    name: "Task Management Platform",
    description:
      "This is a clean, functional task management web app built with Vite + React. It features an intuitive interface where users can add, track, and manage tasks effortlessly. The layout emphasizes clarity with task lists, status indicators, and interactive controls for editing or deleting entries. Minimalist styling and responsive design keep focus on productivity. Overall, it feels like a polished, user-friendly solution for organizing and staying on top of daily to-dos.",
    image: tmsImage,
    link: "https://task-manager-sigma-sage.vercel.app/",
    repo: "https://github.com/ycode37/Task-Manager",
    tech: [
      "React.js",
      "TailwindCSS",
      "NeonDB",
      "Express",
      "Node.js",
      "Prisma",
      "Redux Toolkit",
      "MUI",
    ],
    isTopProject: true,
    isNextjs: true,
    isMern: false,
    isHtmlCss: false,
  },
  // {
  //   name: "Ethiopian Elegance",
  //   description:
  //     " E-commerce website designed to sell traditional Ethiopian clothing, jewelry, and home goods. The platform allows users to browse products by category, view detailed descriptions, and add items to a shopping cart. It includes essential e-commerce functionalities such as user account creation, order history tracking, and checkout with payment integration using Stripe.",
  //   image: ecommerceImage,
  //   link: "https://ethiopian-elegance.onrender.com",
  //   repo: "https://github.com/itsyaba/Ethiopian-Elegance",
  //   tech: [
  //     "MongoDB",
  //     "Express",
  //     "React.js",
  //     "Node.js",
  //     "TailwindCSS",
  //     "Stripe",
  //     "Mantine UI",
  //   ],
  //   isTopProject: true,
  //   isNextjs: false,
  //   isMern: true,
  //   isHtmlCss: false,
  // },
  // {
  //   name: "Gallery Glimpses",
  //   description:
  //     "A gallery website where users can upload images in either private or public mode. If an image is set to private, only the uploader can view it. Public images are visible to all users.",
  //   image: galleryImage,
  //   link: "https://gallery-glimpse-web.vercel.app",
  //   repo: "https://github.com/itsyaba/Gallery_Glimpse_Frontend",
  //   tech: ["React.js", "TailwindCSS", "MongoDB", "Express", "Node.js"],
  //   isTopProject: false,
  //   isNextjs: false,
  //   isMern: true,
  //   isHtmlCss: false,
  // },
  {
    name: "Language Translator",
    description:
      "This is a sleek web app for language translation. It allows users to input text — up to 5,000 characters — or upload a document. The “From” language can be auto-detected or chosen manually, and users select the “To” language for translation. After translation, there’s an option to download the result as a document. The interface is clean and simple, making the process straightforward and user-friendly.",
    image: spaceImage,
    link: "https://language-translator-kappa-nine.vercel.app/",
    repo: "https://github.com/ycode37/Language-Translator",
    tech: ["JavaScript ", "HTML", "CSS"],
    isTopProject: false,
    isNextjs: false,
    isMern: false,
    isHtmlCss: true,
  },
  {
    name: "Rejouice Adaptation ",
    description:
      "This is a brand-agency–style landing page named Rejouice. The page projects expertise in strategy, design, and performance marketing. It presents the agency as a “growth accelerator” that partners with founders to build market-defining brands. The tone is confident and aspirational, emphasizing experience (“since 2013”) and global recognition. With minimal, bold typography and clear messaging, it aims to attract clients looking to elevate their brand and drive sustainable growth.",
    image: bookmarkImage,
    link: "https://rejouice-static-clone-js.vercel.app/",
    repo: "https://github.com/ycode37/Rejouice-Static-Clone-Js",
    tech: ["JavaScript ", "HTML", "CSS"],
    isTopProject: false,
    isNextjs: false,
    isMern: false,
    isHtmlCss: true,
  },
  {
    name: "Sticky Notes",
    description: "Sticky notes",
    image: rockImage,
    link: "https://sticky-notes-red-theta.vercel.app/",
    repo: "https://github.com/ycode37/StickyNotes",
    tech: ["JavaScript ", "HTML", "CSS"],
    isTopProject: false,
    isNextjs: false,
    isMern: false,
    isHtmlCss: true,
  },
  // {
  //   name: "Threads Clone",
  //   description: "Threads Clone",
  //   image: threadsImage,
  //   link: "https://threads-clone-nextjs-project.vercel.app/",
  //   repo: "https://github.com/itsyaba/Threads-Clone",
  //   tech: ["Next.js ", "Tailwind", "MongoDB"],
  //   isTopProject: false,
  //   isNextjs: true,
  //   isMern: false,
  //   isHtmlCss: false,
  // },
];

const projects = [
  {
    name: "Tigat.net",
    description: "Tigat.net is a platform for learning and teaching.",
    image: tigatImage,
    link: "https://tigat.net",
    location: "Ethiopia",
  },
  {
    name: "Servicenow",
    description: "Servicenow is a platform for learning and teaching.",
    image: servicenowImage,
    link: "https://servicenow.com",
    location: "Canada",
  },
  {
    name: "Whalers",
    description: "Whalers is a platform for learning and teaching.",
    image: whalersImage,
    link: "https://whalers.com",
    location: "USA",
  },
  {
    name: "Nileode Technologies",
    description:
      "Nileode Technologies is a platform for learning and teaching.",
    image: nileodeImage,
    link: "https://nileode.com",
    location: "Ethiopia",
  },
  {
    name: "Lalibela",
    description: "Lalibela is a platform for learning and teaching.",
    image: LalibelaImage,
    link: "https://lalibela.com",
    location: "Ethiopia",
  },

  {
    name: "The Mojo Effect",
    description: "Mojo is a platform for learning and teaching.",
    image: MojoImage,
    link: "https://themojoeffect.com/",
    location: "USA",
  },
  {
    name: "HUHT Orphanage",
    description: "HUHT Orphanage is a platform for learning and teaching.",
    image: HUHTImage,
    link: "https://huhtorphanage.com",
    location: "Canada",
  },
  {
    name: "Dideco North America",
    description:
      "Dideco North America is a platform for learning and teaching.",
    image: DidecoImage,
    link: "https://dideco.com",
    location: "North America",
  },
  {
    name: "Calmify",
    description: "Calmify is a platform for learning and teaching.",
    image: calmifyImage,
    link: "https://calmify.com",
    location: "Ethiopia",
  },
];

export function ProjectsSection() {
  const tabs = [
    {
      title: "Top Projects",
      value: "top-projects",
      content: (
        <ScrollArea className="w-full overflow-y-auto relative h-full rounded-2xl  bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="text-center text-2xl font-cursive  mt-6">
            Top Projects
          </p>
          <ProjectList chosenStack="top-projects" />
        </ScrollArea>
      ),
    },
    {
      title: "MERN",
      value: "nextjs",
      content: (
        <ScrollArea className="w-full overflow-hidden relative h-full rounded-2xl  bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="text-center text-2xl font-cursive  mt-6">React Js</p>
          <ProjectList chosenStack="MERN" />
        </ScrollArea>
      ),
    },
    // {
    //   title: "MERN Stack",
    //   value: "mern",
    //   content: (
    //     <ScrollArea className="w-full overflow-hidden relative h-full rounded-2xl  bg-gradient-to-br from-purple-700 to-violet-900">
    //       <p className="text-center text-2xl font-cursive  mt-6">MERN Stack</p>
    //       <ProjectList chosenStack="mern" />
    //     </ScrollArea>
    //   ),
    // },
    {
      title: "HTML/CSS",
      value: "html-css",
      content: (
        <ScrollArea className="w-full overflow-hidden relative h-full rounded-2xl  bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="text-center text-2xl font-cursive  mt-6">HTML/CSS</p>
          <ProjectList chosenStack="html-css" />
        </ScrollArea>
      ),
    },
    {
      title: "All Projects",
      value: "all-projects",
      content: (
        <ScrollArea className="w-full overflow-hidden relative h-full rounded-2xl  bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="text-center text-2xl font-cursive  mt-6">
            All Projects
          </p>
          <ProjectList chosenStack="all-projects" />
        </ScrollArea>
      ),
    },
  ];

  return (
    <div className=" h-full my-40">
      <div
        className="h-screen md:h-[60rem] [perspective:1000px] relative flex flex-col  mx-auto  items-center justify-center w-screen md:w-3/4 "
        id="projects"
      >
        {/* other side projects */}
        <div className="flex flex-col gap-4 mb-10">
          <h2 className="text-2xl font-cursive">Projects</h2>
        </div>

        <Tabs tabs={tabs} />
      </div>
    </div>
  );
}

const ProjectList = ({ chosenStack }: { chosenStack: string }) => {
  const filteredProjects = sideProjects.filter((project) => {
    if (chosenStack === "nextjs") return project.isNextjs;
    if (chosenStack === "top-projects") return project.isTopProject;
    if (chosenStack === "mern") return project.isMern;
    if (chosenStack === "html-css") return project.isHtmlCss;
    return true;
  });

  return (
    <div>
      <div className="flex flex-col gap-20 mt-0 md:mt-10">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <Card
              key={index}
              className=" px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20  last-of-type:mb-36 md:sticky"
              style={{
                top: `calc(64px + ${index * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div>
                  <h3 className="font-serif text-2xl mt-2 md:text-4xl">
                    {project.name}
                  </h3>
                  <hr className="border-white/5 border-t-2 mt-4" />
                  <p className="text-white/60 mt-4 text-sm md:text-base ">
                    {project.description}
                  </p>
                  <ul className="text-white/50 mt-4 flex flex-wrap gap-4 flex-row">
                    {project.tech.map((tech, index) => (
                      <li
                        key={index}
                        className="bg-white/10 p-2 rounded-lg text-white/50 text-small md:text-base"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-row gap-4 items-center justify-start my-8">
                    <Link
                      href={project.link}
                      className="w-2/3 md:w-2/5"
                      target="_blank"
                    >
                      <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 cursor-pointer hover:bg-white/80   transition-all duration-300">
                        <span>View Live Site</span>
                        <ArrowRightIcon className="size-4 " />
                      </button>
                    </Link>

                    <Link href={project.repo} target="_blank">
                      <button className="bg-black p-2 rounded-full cursor-pointer">
                        <IconBrandGithub className="size-8" />
                      </button>
                    </Link>
                  </div>
                </div>
                <div>
                  <Image
                    src={project.image}
                    alt={project.name}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute  lg:h-full lg:w-auto lg:max-w-none rounded-t-lg md:rounded-tl-lg"
                  />
                </div>
              </div>
            </Card>
          ))
        ) : (
          <p>No projects found for the selected filter.</p>
        )}
      </div>
    </div>
  );
};
