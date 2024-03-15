import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Nuno Nogueira",
  initials: "NN",
  location: "Stockholm, Sweden, CET",
  about:
    "Embedded Software Developer focused on making things.",
  summary: "As an Embedded Software Developer I've acquired experience with " +
    "microcontrollers, Linux and real time operating systems with a strong link between " +
    "the device and the cloud. Mostly focused on C/C++, CMake and Javascript. I successfully build, test and maintain code for " +
    "systems on the field. My hobbyist side also works with PCB & CAD Design.",
  avatarUrl: "https://pbs.twimg.com/profile_images/1751600040450125824/MjiaUKKF_400x400.jpg",
  personalWebsiteUrl: "https://nguterresn.github.io/quartz",
  contact: {
    email: "guterresnogueira@gmail.com",
    tel: "++460793511070",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/nguterresn",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/guterresnogueira/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/nunoguterres",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Porto",
      degree: "Master's degree in Electrical & Computer Engineering with " +
        "specialization in Embedded Systems and Microelectronics.",
      start: "2018",
      end: "2021",
    },
    {
      school: "Polytechnic University of Porto",
      degree: "Bachelor's Degree in Electrical & Computer Engineering",
      start: "2015",
      end: "2018",
    }
  ],
  work: [
    {
      company: "Kisi",
      link: "https://www.getkisi.com",
      badges: [],
      title: "IoT Developer",
      start: "2021",
      end: "Current",
      description:
        "Developed the Kisi Controller Pro 2 from early revisions to production ready. " +
        "Worked on the firmware of a 4-channel Wiegand to UART communication. " +
        "Designed the first architecture for RFID cards and increased the limited 4 supported cards to as many as available. " +
        "Created a new testing framework that reduced the execution time in 76% and the lines of code in 59%. " +
        "Researched and took the lead on the planning for a new generation of devices and IoT connectivity, which implied going through serverless services such as: AWS IoT Core or AWS GreenGrass. " +
        "Designed a new development environment for freeRTOS development mostly written in CMake and with support for VSCode. " +
        "Developed a bluetooth central application to manage the Silabs BGM220 module to connect to Kisi peripherals and optimized it with parallel discovery, all written in C."
      },
    {
      company: "Academia de Robotica",
      link: "https://www.academiarobotica.pt",
      badges: [],
      title: "Robotics Teacher",
      start: "2020",
      end: "2021",
      description:
        "Instructed and guided children and adolescents as they embarked on their initial " +
        "exploration of the world of robotics.",
    },
    {
      company: "AddVolt",
      link: "https://addvolt.com",
      badges: [],
      title: "Intern",
      start: "2018",
      end: "2018",
      description:
        "Deployed an over-the-air anti-faults protocol, written in C, to a multi-node network.",
    },
  ],
  skills: [
    "C",
    "C++",
    "IoT",
    "RTOS",
    "ARM32",
    "AVR",
    "Embedded Systems",
    "Linux",
    "Control Systems",
    "Python",
    "Javascript",
    "Google Cloud Platform",
    "PCB Design (Kicad)",
    "CAD Design (Fusion360)",
  ],
  projects: [
    {
      title: "CMake Gecko SDK",
      techStack: [
        "Side Project",
        "CMake",
      ],
      description: "Gecko SDK Blinky example using CMake.",
      link: {
        href: "https://consultly.com/",
      },
    },
    {
      title: "BattleButBot (WIP)",
      techStack: ["Side Project", "ESP32", "CAD Design", "PCB Design", "C/C++"],
      description:
        "Your Ultimate Antweight Fighting Robot Companion",
      link: {
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Portable Smoke Extractor",
      techStack: ["Side Project", "CAD Design", "PCB Design"],
      description:
        "A portable Smoke Extractor to deal with all those nasty fumes!",
      link: {
        href: "https://github.com/nguterresn/smoke-extractor",
      },
    },
    {
      title: "End Of Line Testing Board",
      techStack: ["Side Project", "CAD Design", "PCB Design", "Access Control"],
      description:
        "A End Of Line Board for Testing Access Control Systems",
      link: {
        href: "https://github.com/nguterresn/end-of-line-board",
      },
    },
    {
      title: "Arduino Due + KA3005P",
      techStack: ["Side Project", "Arduino", "USB"],
      description: "Library to facilitate seamless communication between the Due and the KA3005P power supply",
      link: {
        href: "https://github.com/nguterresn/due-ka3005p",
      },
    },
    {
      title: "Personal Website",
      techStack: ["Side Project", "Portfolio", "Blog"],
      description: "My personal website — where I write about my side projects and other things I'm passionate about.",
      link: {
        href: "https://nguterresn.github.io/quartz",
      },
    },
  ],
} as const;
