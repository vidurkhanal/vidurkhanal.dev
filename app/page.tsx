import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import * as table from "@/components/ui/table";
import {
  LinkedinIcon,
  DownloadIcon,
  BriefcaseIcon,
  XIcon,
} from "@/components/icons/HomeIcons";
import type { IconType } from "react-icons";
import {
  SiTypescript,
  SiGraphql,
  SiDocker,
  SiReact,
  SiPython,
  SiKubernetes,
  SiMongodb,
  SiPostgresql,
  SiRabbitmq,
  SiRedis,
  SiRust,
  SiOcaml,
  SiMailtrap,
} from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen lg:ml-60">
      <div className="relative h-1/4 mb-7">
        <Image
          src="/Cover.jpeg"
          width={2000}
          height={1000}
          alt="Image"
          draggable="false"
          className="object-cover w-screen h-full"
        />
        {/* <div className="flex flex-row px-[4%] items-baseline w-full justify-between absolute bottom-[-35%]  "> */}
        {/*   <Avatar className="w-40 h-40 bg-gray-100 border-2 border-gray-400"> */}
        {/*     <AvatarImage src="MyAvatar.png" draggable="false" /> */}
        {/*     <AvatarFallback>VK</AvatarFallback>{" "} */}
        {/*   </Avatar> */}
        {/*   <Link */}
        {/*     href="https://drive.google.com/uc?export=download&id=17M1hQd2U1B2t3HJJhQ1kuX80uXVXDcpY" */}
        {/*     target="_top" */}
        {/*   > */}
        {/*     <button className="bg-gray-900  hover:bg-gray-500 font-semibold text-gray-100 py-2 px-4 rounded inline-flex justify-center items-center transition-all"> */}
        {/*       <DownloadIcon /> */}
        {/*       <span className="mr-2 md:mr-5">Resume</span> */}
        {/*     </button> */}
        {/*   </Link> */}
        {/* </div> */}
      </div>
      <div className="flex px-[4%] flex-col gap-y-5">
        <div className="flex flex-col gap-y-5 lg:flex-row justify-between mb-6 lg:mb-10">
          <div className="flex flex-col gap-y-2">
            <p className="text-3xl text-gray-600 font-semibold">Vidur Khanal</p>
            <p className="text-xl text-gray-500">
              Software Engineer / Undergrad CS Researcher
            </p>
            <div className="flex gap-x-3">
              <Link
                href={"https://www.linkedin.com/in/vidurkhanal"}
                target="_blank"
              >
                <LinkedinIcon />
              </Link>
              <Link href="https://www.twitter.com/vidurkl" target="_blank">
                <XIcon />
              </Link>
            </div>
          </div>

          <div className="flex gap-x-5">
            <Link
              href="https://drive.google.com/uc?export=download&id=17M1hQd2U1B2t3HJJhQ1kuX80uXVXDcpY"
              target="_top"
            >
              <button className=" bg-gray-900  hover:bg-gray-500 font-semibold text-gray-100 py-2 px-4 rounded inline-flex justify-center items-center transition-all">
                <DownloadIcon />
                <span className="mr-2 md:mr-5">Resume</span>
              </button>
            </Link>

            <Link href="/contact-me" className="lg:hidden">
              <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow inline-flex justify-center items-center transition-all">
                <SiMailtrap className="mr-2" />
                <span className="mr-2 md:mr-5">Contact Me</span>
              </button>
            </Link>
          </div>
        </div>
        <div className="flex md:gap-x-3 flex-col md:flex-row gap-y-3">
          <AboutMeCard className="min-w-[50%]" />
          <ProjectsCard className="min-w-[50%]" />
        </div>
        <div className="flex lg:gap-x-3 flex-col lg:flex-row gap-y-3 lg:mb-10 ">
          <WhatAmIWorkingAtCard className="min-w-[50%]" />
          <WorkExperienceCard className="min-w-[50%]" />
        </div>

        <div className="flex w-full lg:hidden justify-center mb-10">
          <Link href="/contact-me">
            <button className="bg-gray-900  hover:bg-gray-500 font-semibold text-gray-100 py-2 px-4 rounded inline-flex justify-center items-center transition-all">
              <span>Want to Reach Me?</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function AboutMeCard(props: any) {
  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle className="text-gray-600">About Me</CardTitle>
      </CardHeader>
      <CardContent className="text-gray-500">
        <p>
          As a driven Computer Science and Mathematics undergraduate, I
          specialize in crafting high-quality and performant software solutions.
          With a keen passion for backend systems, infrastructures, and
          platforms, I thrive in building robust and scalable architectures that
          power modern applications. While my forte lies in the backend realm,
          I&lsquo;m equally adept at frontend development and possess a
          discerning eye for design. I take pride in creating seamless user
          experiences that blend functionality and aesthetics. My areas of
          expertise span distributed systems, compilers, and performance
          engineering, enabling me to optimize software for efficiency and
          reliability. However, what truly sets me apart is my ability to adapt
          quickly to changing environments and technologies, making me a
          valuable asset in today&lsquo;s rapidly evolving tech landscape.
          {/* <span className="underline cursor-pointer hover:text-gray-800 transition-all"> */}
          {/*   Read More */}
          {/* </span> */}
        </p>
      </CardContent>
    </Card>
  );
}

function WhatAmIWorkingAtCard(props: any) {
  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle className="text-gray-600">What Am I Builing rn?</CardTitle>
      </CardHeader>
      <CardContent className="text-gray-500">
        <p>
          I am currently building a centralized logging and monitoring SaaS. It
          will be a cloud-based platform that provides organizations with a
          comprehensive solution for collecting, storing, analyzing, and
          visualizing log data and monitoring metrics from various sources, such
          as servers, applications, databases, and cloud services.
        </p>
      </CardContent>
    </Card>
  );
}

function WorkExperienceCard(props: any) {
  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle className="text-gray-600">Work Experience</CardTitle>
      </CardHeader>
      <CardContent className="text-gray-500">
        <ol className="items-center sm:flex">
          <li className="relative md:min-h-[10rem] flex-1 mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10  flex items-center justify-center w-6 h-6 bg-gray-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <BriefcaseIcon />
              </div>
              <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div className="mt-3 sm:pe-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Software Research Intern
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                05/2023-08/2023
              </time>
            </div>
          </li>
          <li className="relative md:min-h-[10rem] mb-6 flex-1 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-6 h-6 bg-gray-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <BriefcaseIcon />
              </div>
              <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div className="mt-3 sm:pe-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Database Engineer Intern
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                06/2023-07/2023
              </time>
            </div>
          </li>
          <li className="relative md:min-h-[10rem] mb-6 flex-1 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-6 h-6 bg-gray-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <BriefcaseIcon />
              </div>
              <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div className="mt-3 sm:pe-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Undergradute Supplemental Instructor
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                08/2022-05/2023
              </time>
            </div>
          </li>
        </ol>
      </CardContent>
    </Card>
  );
}

function ProjectsCard(props: any) {
  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle className="text-gray-600">Projects</CardTitle>
      </CardHeader>
      <CardContent className="text-gray-500">
        <ProjectsTable />
      </CardContent>
    </Card>
  );
}

interface Project {
  name: string;
  icons: [IconType, string][];
  github: string;
}

const projects: Project[] = [
  {
    name: "K Pass: Password Manager",
    icons: [
      [SiReact, "React"],
      [SiGraphql, "GraphQL"],
      [SiRedis, "Redis"],
      [SiTypescript, "Typescript"],
      [SiDocker, "Docker"],
      [SiPostgresql, "PostgreSQL"],
    ],
    github: "https://github.com/vidurkhanal/super-duper-couscous",
  },
  {
    name: "MiniSrv: Video to Audio Converter",
    icons: [
      [SiPython, "Python"],
      [SiKubernetes, "Kubernetes"],
      [SiDocker, "Docker"],
      [SiMongodb, "MongoDB"],
      [SiPostgresql, "PostgreSQL"],
      [SiRabbitmq, "RabbitMQ"],
    ],
    github: "https://github.com/vidurkhanal/hapai",
  },
  {
    name: "Accio: Key-Value Database",
    icons: [[SiRust, "Rust"]],
    github: "https://github.com/vidurkhanal/accio",
  },
  {
    name: "Morsec: Monadic Parser Combinator",
    icons: [[SiOcaml, "Ocaml"]],
    github: "https://github.com/vidurkhanal/morsec",
  },
];

function ProjectsTable() {
  return (
    <table.Table>
      <table.TableBody>
        <TooltipProvider>
          {projects.map((project, indx) => (
            <table.TableRow key={indx}>
              <table.TableCell className="font-medium">
                <Link
                  href={project.github}
                  className="hover:underline transition-all"
                >
                  {project.name}
                </Link>
              </table.TableCell>
              <table.TableCell>
                <div className="flex gap-x-2">
                  {project.icons.map(([Icon, tooltip_text], indx) => (
                    <Tooltip key={indx}>
                      <TooltipTrigger asChild>
                        <Icon title={tooltip_text} className="text-gray-500" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{tooltip_text}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>
              </table.TableCell>
            </table.TableRow>
          ))}
        </TooltipProvider>
      </table.TableBody>
    </table.Table>
  );
}
