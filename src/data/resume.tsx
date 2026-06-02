import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";
import { Unity } from "@/components/ui/svgs/unity";
import JavaScript from "@/components/ui/svgs/javascript";
import { Cocos } from "@/components/ui/svgs/cocos";
import Lua from "@/components/ui/svgs/lua";


export const DATA = {
  name: "Kin",
  initials: "Mr",
  url: "https://dillion.io",
  location: "Malaysia/Singapore",
  locationLink: "",
  description:
    "Game developer with a genuine passion for deliver immersive gaming experiences.",
  summary:
    "I specialize in software development with 8+ years of experience across game development, web applications, and mobile. As a Singapore Permanent Resident (PR), I passionate about creating engaging games and apps while embracing new challenges.",
  avatarUrl: "/me.jpeg",
  skills: [
    { name: "Unity", icon: Unity },
    { name: "Cocos", icon: Cocos },
    { name: "Javascript", icon: JavaScript },
    { name: "Typescript", icon: Typescript },
    { name: "Lua", icon: Lua },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    // { name: "Go", icon: Golang },
    // { name: "Postgres", icon: Postgresql },
    // { name: "Docker", icon: Docker },
    // { name: "Kubernetes", icon: Kubernetes },
    // { name: "Java", icon: Java },
    { name: "C++", icon: Csharp },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      // GitHub: {
      //   name: "GitHub",
      //   url: "https://dub.sh/dillion-github",
      //   icon: Icons.github,
      //   navbar: true,
      // },

      // LinkedIn: {
      //   name: "LinkedIn",
      //   url: "https://dub.sh/dillion-linkedin",
      //   icon: Icons.linkedin,

      //   navbar: true,
      // },
      whatsapp: {
        name: "Whastapp",
        url: "https://wa.me/60165638531",
        icon: Icons.whatsapp,

        navbar: true,
      },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://wa.me/60165638531",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "mailto:oonwengkin@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "WTF Synergy",
      href: "",
      badges: [],
      location: "Malaysia",
      title: "Senior Game Developer",
      logoUrl: "/wtf.png",
      start: "May 2025",
      end: "Present",
      description:
        "Develop games using TypeScript, Node.js, C#, Unity and Cocos Creator. Contribute to core system architecture. Build responsive web interface using React.",
    },
    {
      company: "Dream Global Holdings",
      badges: [],
      href: "",
      location: "Singapore",
      title: "Game Development Engineer",
      logoUrl: "/dream.png",
      start: "January 2023",
      end: "April 2025",
      description:
        "Collaborating with game designers, UI/UX artists, and testers to deliver a variety of casual games in line with the provided milestones. Completed 40+ mobile casual game developments (Cocos2d-x, Lua). Managed a game development team, delegating workload among 3 team members.",
    },
    {
      company: "J Star",
      href: "Frontend & Game Developer",
      badges: [],
      location: "Malaysia",
      title: "Frontend & Game Developer",
      logoUrl: "/jstar.jpg",
      start: "January 2020",
      end: "December 2022",
      description:
        "Taken on diverse responsibilities, focusing on both 2D game creation and mobile app development, while actively collaborating with clients, artists, and backend developers to deliver high-quality projects. Developed various HTML5 mini games using Unity and Cocos Creator. Developed and published a soccer app for Android and iOS using Flutter, with hands-on deployment to the Google Play Store and Apple App Store, designing the framework, integrating Firebase, collaborating with clients, and providing ongoing maintenance and updates. Built and maintained responsive websites using HTML, CSS, Bootstrap, React and JavaScript.",
    },
    {
      company: "Gatsby",
      href: "",
      badges: [],
      location: "Remote",
      title: "Full Stack Web Developer",
      logoUrl: "/g.jpg",
      start: "January 2023",
      end: "December 2024",
      description:
        "Maintain and enhance the Gatsby Malaysia portal website using PHP and Laravel, ensuring functionality, performance, and consistency with the existing system design.",
    },
    {
      company: "Experian",
      href: "",
      badges: [],
      location: "Malaysia",
      title: "Software Engineer",
      logoUrl: "/experian.png",
      start: "January 2018",
      end: "September 2019",
      description:
        "Developed an automated solution using Scala to extract data from various types of credit report documents, significantly enhancing productivity. Utilize big data technology such as Spark, Hadoop.",
    },
    {
      company: "Kakitangan",
      href: "",
      badges: [],
      location: "Malaysia",
      title: "Software Engineer",
      logoUrl: "/kakitangan.png",
      start: "April 2017",
      end: "December 2017",
      description:
        "Developed and maintain backend features for an HR and payroll platform using Python and Django",
    },
  ],
  education: [
    {
      school: "Buildspace",
      href: "https://buildspace.so",
      degree: "s3, s4, sf1, s5",
      logoUrl: "/buildspace.jpg",
      start: "2023",
      end: "2024",
    },
    {
      school: "University of Waterloo",
      href: "https://uwaterloo.ca",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/waterloo.png",
      start: "2016",
      end: "2021",
    },
    {
      school: "Wilfrid Laurier University",
      href: "https://wlu.ca",
      degree: "Bachelor's Degree of Business Administration (BBA)",
      logoUrl: "/laurier.png",
      start: "2016",
      end: "2021",
    },
    {
      school: "International Baccalaureate",
      href: "https://ibo.org",
      degree: "IB Diploma",
      logoUrl: "/ib.png",
      start: "2012",
      end: "2016",
    },
  ],
  projects: [
    {
      title: "Paper Fold",
      href: "",
      dates: "",
      active: true,
      description:
        "A simple puzzle game where players fold paper to reveal the complete picture.",
      technologies: [
        
      ],
      links: [
        {
          type: "Casual Game",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/images/casual/15.png",
      image_h: "148p",
      video:
        "",
    },
    {
      title: "Jumper",
      href: "",
      dates: "",
      active: true,
      description:
        "A cute vertical platformer where players jump between floating platforms, collect coins and power-ups, avoid monsters.",
      technologies: [
        
      ],
      links: [
        {
          type: "Casual Game",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/images/casual/30.png",
      image_h: "148p",
      video:
        "",
    },
    {
      title: "Higher!",
      href: "",
      dates: "",
      active: true,
      description:
        "A physics-based arcade game where players launch a monster skyward using touch controls. Player can customize the type and number of attached orbs to reach greater heights and complete challenging levels.",
      technologies: [
        
      ],
      links: [
        {
          type: "Casual Game",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/images/casual/4.png",
      image_h: "148p",
      video:
        "",
    },
    {
      title: "Galaxy Shootout",
      href: "",
      dates: "",
      active: true,
      description:
        "A fast-paced 2-player arcade shooter where players race against time to blast colorful space monsters. Match your shots to the correct targets, earn points, and outscore your opponent before time runs out.",
      technologies: [
        
      ],
      links: [
        {
          type: "Casual Game",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/images/casual/1.png",
      image_h: "148p",
      video:
        "",
    },
    {
      title: "Perfect Cut",
      href: "",
      dates: "",
      active: true,
      description:
        "A casual reflex-based game that challenges players to cut moving objects with precise timing, testing speed, accuracy, and concentration.",
      technologies: [
        
      ],
      links: [
        {
          type: "Casual Game",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/images/casual/18.png",
      image_h: "148p",
      video:
        "",
    },
    {
      title: "Monster Maze",
      href: "",
      dates: "",
      active: true,
      description:
        "A grid-based puzzle adventure where players carefully navigate through dangerous paths, avoid monsters, and reach the goal using strategic movement.",
      technologies: [
        
      ],
      links: [
        {
          type: "Casual Game",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/images/casual/10.png",
      image_h: "148p",
      video:
        "",
    },
    {
      title: "Math Archer",
      href: "",
      dates: "",
      active: true,
      description:
        "A casual educational game that combines archery combat with arithmetic puzzles. Players solve equations to power their attacks, defeat monsters, and progress through increasingly challenging stages.",
      technologies: [
        
      ],
      links: [
        {
          type: "Casual Game",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/images/casual/7.png",
      image_h: "148p",
      video:
        "",
    },
    {
      title: "Mecha Climber",
      href: "",
      dates: "",
      active: true,
      description:
        "A climbing arcade game where players control multiple mechanical claws to scale walls and reach greater heights.",
      technologies: [
        
      ],
      links: [
        {
          type: "Casual Game",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/images/casual/28.png",
      image_h: "148p",
      video:
        "",
    },
    {
      title: "Bug Cleanup",
      href: "",
      dates: "",
      active: true,
      description:
        "A casual pest-control game where players use various tools to eliminate flies and complete cleanup objectives. The gameplay combines quick reflexes, resource management, and progressive challenges to keep environments free from pests.",
      technologies: [
        
      ],
      links: [
        {
          type: "Casual Game",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/images/casual/5.png",
      image_h: "148p",
      video:
        "",
    },
    {
      title: "Puzzle Bricks",
      href: "",
      dates: "",
      active: true,
      description:
        "A grid-based puzzle game that challenges players to strategically rearrange colored blocks to meet level objectives before time runout.",
      technologies: [
        
      ],
      links: [
        {
          type: "Casual Game",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/images/casual/3.png",
      image_h: "48p",
      video:
        "",
    },
    {
      title: "Arcane Deck",
      href: "",
      dates: "",
      active: true,
      description:
        "A multiplayer card game where players strategically use action cards, manage resources, and outplay opponents to survive until the end.",
      technologies: [
        
      ],
      links: [
        {
          type: "Casual Game",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/images/casual/33.png",
      image_h: "48p",
      video:
        "",
    },
    {
      title: "Kitty Puzzle",
      href: "",
      dates: "",
      active: true,
      description:
        "A casual puzzle game that challenges players to rotate interconnected rings, untangle complex arrangements, and remove all rings from the board.",
      technologies: [
        
      ],
      links: [
        {
          type: "Casual Game",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/images/casual/27.png",
      image_h: "48p",
      video:
        "",
    },
     {
      title: "Songkran",
      href: "",
      dates: "",
      active: true,
      description:
        "A multiplayer animal-themed betting game where players place wagers on various animals and earn rewards based on the winning result.",
      technologies: [
        
      ],
      links: [
        {
          type: "IGaming",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/images/igaming/1.png",
      image_h: "48p",
      video:
        "",
    },
    {
      title: "Raya Packets",
      href: "",
      dates: "",
      active: true,
      description:
        "A luck-based bonus game where players choose envelopes to uncover hidden rewards. Each pick offers a chance to win multipliers, bonus payouts, or special prizes.",
      technologies: [
        
      ],
      links: [
        {
          type: "IGaming",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/images/igaming/2.png",
      image_h: "48p",
      video:
        "",
    },
    {
      title: "Fortune Packet",
      href: "",
      dates: "",
      active: true,
      description:
        "A Chinese New Year-themed pick-and-win bonus game featuring red packet selections, randomized rewards, and animated prize reveals inspired by traditional festive celebrations.",
      technologies: [
        
      ],
      links: [
        {
          type: "IGaming",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/images/igaming/3.png",
      image_h: "48p",
      video:
        "",
    },
    {
      title: "Fishing Frenzy",
      href: "",
      dates: "",
      active: true,
      description:
        "A fishing-themed arcade game that combines luck and strategy as players catch various fish with different reward multipliers. Rare catches offer higher payouts and greater excitement.",
      technologies: [
        
      ],
      links: [
        {
          type: "IGaming",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/images/igaming/4.png",
      image_h: "48p",
      video:
        "",
    },
    {
      title: "Go Monkey",
      href: "",
      dates: "",
      active: true,
      description:
        "A monkey-themed prediction game where players place bets on different monkeys and outcomes, then watch the results reveal winning combinations and payouts.",
      technologies: [
        
      ],
      links: [
        {
          type: "IGaming",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/images/igaming/5.png",
      image_h: "48p",
      video:
        "",
    },
    {
      title: "Treasure Escape",
      href: "",
      dates: "",
      active: true,
      description:
        "A crime-themed pick-and-win game where players search a building for valuable loot. Each selection can uncover rewards, collectibles, or the hidden burglar, creating a balance of risk and reward.",
      technologies: [
        
      ],
      links: [
        {
          type: "IGaming",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/images/igaming/7.png",
      image_h: "48p",
      video:
        "",
    },
    {
      title: "In Between",
      href: "",
      dates: "",
      active: true,
      description:
        "A poker card prediction game where players bet on whether the next card's value will fall between two revealed cards.",
      technologies: [
        
      ],
      links: [
        {
          type: "IGaming",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/images/igaming/10.jpg",
      image_h: "48p",
      video:
        "",
    },
    {
      title: "Poker Card Game",
      href: "",
      dates: "",
      active: true,
      description:
        "A poker-inspired card game where players bet on card outcomes and earn rewards through winning combinations.",
      technologies: [
        
      ],
      links: [
        {
          type: "IGaming",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/images/igaming/11.jpg",
      image_h: "48p",
      video:
        "",
    },
    {
      title: "Fortune Reveal",
      href: "",
      dates: "",
      active: true,
      description:
        "A Chinese New Year-themed lucky draw game featuring symbol reveals, multiplier rewards, bonus wheels, and prize collection mechanics that create an exciting reward-driven experience.",
      technologies: [
        
      ],
      links: [
        {
          type: "IGaming",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/images/igaming/12.jpg",
      image_h: "48p",
      video:
        "",
    },
    {
      title: "DJ Fortune",
      href: "",
      dates: "",
      active: true,
      description:
        "A DJ-inspired 3x3 slot game that combines vibrant visuals, animated characters, and rewarding bonus mechanics. Players spin reels to collect winning combinations and unlock powerful multipliers.",
      technologies: [
        
      ],
      links: [
        {
          type: "Slot",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/images/slot/1.jpg",
      image_h: "108p",
      video:
        "",
    },
    {
      title: "Dragon Scroll",
      href: "",
      dates: "",
      active: true,
      description:
        "A dragon-themed slot game where players spin to match dragon symbols and unlock multiplier rewards.",
      technologies: [
        
      ],
      links: [
        {
          type: "Slot",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/images/slot/3.jpg",
      image_h: "108p",
      video:
        "",
    },
    {
      title: "Go High Rocket",
      href: "",
      dates: "",
      active: true,
      description:
        "A rocket-themed slot game where players launch rockets and aim for higher multiplier rewards.",
      technologies: [
        
      ],
      links: [
        {
          type: "Slot",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/images/slot/4.jpg",
      image_h: "108p",
      video:
        "",
    },
    {
      title: "SurePay Simple",
      href: "",
      dates: "",
      active: true,
      description:
        "An arcade multiplier game where players spin for random rewards and high-value multipliers.",
      technologies: [
        
      ],
      links: [
        {
          type: "Arcade",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/images/slot/5.jpg",
      image_h: "108p",
      video:
        "",
    },
    {
      title: "SurePay",
      href: "",
      dates: "",
      active: true,
      description:
        "An arcade multiplier game where players spin for random rewards and high-value multipliers.",
      technologies: [
        
      ],
      links: [
        {
          type: "Arcade",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/images/slot/6.jpg",
      image_h: "108p",
      video:
        "",
    },
    {
      title: "Goal4Fun",
      href: "",
      dates: "",
      active: true,
      description:
        "A cross-platform sports betting application built with Flutter for iOS and Android. The app provides live match information, real-time odds updates, handicap betting, over/under markets, and account management features through a responsive mobile interface.",
      technologies: [
        
      ],
      links: [
        {
          type: "Mobile App",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/images/app/1.png",
      image_h: "108p",
      video:
        "",
    },
    {
      title: "Speed Demon",
      href: "",
      dates: "",
      active: true,
      description:
        "A racing-themed 5x4 slot game where players spin for multipliers, bonus features, and high-speed rewards inspired by street racing culture.",
      technologies: [
        
      ],
      links: [
        {
          type: "Slot",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/images/slot/2.jpg",
      image_h: "56p",
      video:
        "",
    },
    {
      title: "Lobby Website",
      href: "",
      dates: "",
      active: true,
      description:
        "A website created by HTML, CSS, Boostrap, Javascript",
      technologies: [
        
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/images/website/1.jpg",
      image_h: "56p",
      video:
        "",
    },
    {
      title: "Lobby Website 2",
      href: "",
      dates: "",
      active: true,
      description:
        "A website created by HTML, CSS, Boostrap, Javascript",
      technologies: [
        
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/images/website/2.jpg",
      image_h: "56p",
      video:
        "",
    },
    
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
