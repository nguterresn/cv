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
  about: "Embedded Software Developer",
  summary: `Embedded Software Developer with hands-on experience in microcontrollers and real-time operating systems, emphasizing device-to-cloud connectivity. Proficient in C, CMake, AssemblyScript and a sprinkle of Rust, with a proven track record of building, testing, and maintaining robust field-deployed systems. Also engaged in PCB and CAD design as an hobby.`,
  avatarUrl:
    "https://avatars.githubusercontent.com/u/38976366?s=400&u=f92935d77d04ab81c791536847a773ba3b7692b3&v=4",
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
      degree:
        "Master's degree in Electrical & Computer Engineering with " +
        "specialization in Embedded Systems and Microelectronics.",
      start: "2018",
      end: "2021",
    },
    {
      school: "Polytechnic University of Porto",
      degree: "Bachelor's Degree in Electrical & Computer Engineering",
      start: "2015",
      end: "2018",
    },
  ],
  work: [
    {
      company: "Electrolux",
      link: "https://www.electrolux.se",
      badges: [],
      title: "Embedded Software Developer",
      start: "2024",
      end: "Current",
      description:
        "Developed a user interface optimized for low-end devices using a WebAssembly runtime and Zephyr OS.",
    },
    {
      company: "Kisi",
      link: "https://www.getkisi.com",
      badges: [],
      title: "IoT Developer / Gen3 Team Lead",
      start: "2021",
      end: "2024",
      description:
        "Developed the Kisi Controller Pro 2 from early revisions to production ready. " +
        "Worked on the firmware of a 4-channel Wiegand to UART communication. " +
        "Designed the first architecture for RFID cards and increased the limited 4 supported cards to as many as available. " +
        "Created a new testing framework that reduced the execution time in 76% and the lines of code in 59%. " +
        "Researched and took the lead on the planning for a new generation of devices and IoT connectivity, which implied going through serverless services such as: AWS IoT Core or AWS GreenGrass. " +
        "Designed a new development environment for freeRTOS development mostly written in CMake and with support for VSCode. " +
        "Developed a bluetooth central application to manage the Silabs BGM220 module to connect to Kisi peripherals and optimized it with parallel discovery, all written in C.",
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
    "Rust",
    "IoT",
    "RTOS",
    "ARM32",
    "ESP32",
    "AVR",
    "Linux",
    "Zephyr",
    "Python",
    "WebAssembly",
    "Google Cloud Platform",
    "PCB Design (Kicad)",
    "CAD Design (Fusion360)",
  ],
  projects: [
    {
      title: "esp-drv8833",
      techStack: ["Side Project", "Rust"],
      description:
        "A Rust crate that provides control over the DRV8833 Dual H-Bridge Motor Driver",
      link: {
        href: "https://github.com/nguterresn/esp-drv8833",
      },
    },
    {
      title: "3mode-controller",
      techStack: ["Side Project", "esp-idf", "CAD Design", "PCB Design"],
      description:
        "Hardware Controller for Hobbyist Projects with support for ESPNow, nRF24, and Bluetooth",
      link: {
        href: "https://github.com/nguterresn/3mode-controller",
      },
    },
    {
      title: "BattleButBot",
      techStack: ["Side Project", "ESP32", "CAD Design", "PCB Design", "C"],
      description: "Your Ultimate Antweight Fighting Robot Companion",
      link: {
        href: "https://github.com/nguterresn/battlebutbot",
      },
    },
    {
      title: "4WD Robot",
      techStack: ["Side Project", "CAD Design"],
      description: "How to build a simple 4WD Robot",
      link: {
        href: "https://www.nunonogueira.com/robot4wd",
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
      description: "A End Of Line Board for Testing Access Control Systems",
      link: {
        href: "https://github.com/nguterresn/end-of-line-board",
      },
    },
    {
      title: "Personal Website",
      techStack: ["Side Project", "Portfolio", "Blog"],
      description:
        "My personal website — where I write about my side projects and other things I'm passionate about.",
      link: {
        href: "https://nguterresn.github.io/quartz",
      },
    },
  ],
} as const;
