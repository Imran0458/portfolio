
import React from "react";

import {
  Code2,
  Database,
  Server,
  Palette,
  Terminal,
  GitBranch,
  Globe,
  FileCode2,
} from "lucide-react";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaLinux,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiMysql,
  SiTailwindcss,
  SiPostman,
} from "react-icons/si";


// ======================================================
// ANIMATED GRID
// ======================================================

const AnimatedGrid = () => {
  const gridLines = Array.from({ length: 40 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="
          absolute
          inset-0
          [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black_70%)]
        "
      >

        {/* Vertical Lines */}

        <div className="absolute inset-0 grid grid-cols-[repeat(40,1fr)] opacity-30">
          {gridLines.map((_, index) => (
            <div
              key={`vertical-${index}`}
              className="h-full border-r border-blue-500/20"
              style={{
                animation: `gridPulse ${
                  2 + (index % 4) * 0.5
                }s ease-in-out infinite`,
                animationDelay: `${(index % 5) * 0.3}s`,
              }}
            />
          ))}
        </div>


        {/* Horizontal Lines */}

        <div className="absolute inset-0 grid grid-rows-[repeat(40,1fr)] opacity-30">
          {gridLines.map((_, index) => (
            <div
              key={`horizontal-${index}`}
              className="w-full border-b border-purple-500/20"
              style={{
                animation: `gridPulse ${
                  2 + (index % 4) * 0.5
                }s ease-in-out infinite`,
                animationDelay: `${(index % 5) * 0.3}s`,
              }}
            />
          ))}
        </div>

      </div>


      {/* Grid Animation */}

      <style>{`
        @keyframes gridPulse {
          0% {
            opacity: 0.15;
          }

          50% {
            opacity: 0.8;
          }

          100% {
            opacity: 0.15;
          }
        }
      `}</style>

    </div>
  );
};


// ======================================================
// SKILL CARD
// ======================================================

const SkillCard = ({ icon: Icon, title, skills, color }) => {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-gray-700
        bg-gray-900/80
        p-6
        transition-all
        duration-300
        ease-out
        hover:scale-[1.02]
        hover:-translate-y-1
        hover:border-blue-500/50
        hover:shadow-xl
        hover:shadow-blue-500/20
      "
    >

      {/* Moving Card Shimmer */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          animate-shimmer
          bg-gradient-to-r
          from-transparent
          via-blue-400/10
          to-transparent
        "
      />


      {/* Card Hover Glow */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-r
          from-transparent
          via-blue-500/5
          to-transparent
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />


      {/* Card Content */}

      <div className="relative z-10">

        {/* Category Header */}

        <div className="mb-6 flex items-center gap-4">

          {/* Category Icon */}

          <div
            className={`
              rounded-xl
              bg-gray-800/80
              p-3
              ${color}
              transition-all
              duration-300
              group-hover:scale-110
              group-hover:rotate-3
              group-hover:shadow-lg
              group-hover:shadow-blue-500/20
            `}
          >
            <Icon className="h-8 w-8" />
          </div>


          {/* Title */}

          <h3
            className="
              text-xl
              font-bold
              text-white
              transition-colors
              duration-300
              group-hover:text-blue-300
            "
          >
            {title}
          </h3>

        </div>


        {/* Skills */}

        <div className="flex flex-wrap gap-3">

          {skills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="
                group/badge
                flex
                items-center
                gap-2
                rounded-lg
                border
                border-gray-700
                bg-gray-800/70
                px-3
                py-2
                text-sm
                font-medium
                text-gray-200
                transition-all
                duration-300
                ease-out
                hover:scale-105
                hover:border-blue-500/50
                hover:bg-gray-700
                hover:text-white
                hover:shadow-lg
                hover:shadow-blue-500/20
              "
            >

              <span
                className="
                  text-lg
                  transition-transform
                  duration-300
                  group-hover/badge:scale-110
                "
              >
                {skill.icon}
              </span>

              <span>{skill.name}</span>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
};


// ======================================================
// SKILLS SECTION
// ======================================================

const SkillsSection = () => {

  const skillCategories = [

    // ==================================================
    // FRONTEND
    // ==================================================

    {
      icon: Code2,
      title: "Frontend Development",
      color: "text-blue-400",

      skills: [
        {
          name: "HTML5",
          icon: <FaHtml5 className="text-[#E34F26]" />,
        },
        {
          name: "CSS3",
          icon: <FaCss3Alt className="text-[#1572B6]" />,
        },
        {
          name: "JavaScript",
          icon: <FaJs className="text-[#F7DF1E]" />,
        },
        {
          name: "React.js",
          icon: <FaReact className="text-[#61DAFB]" />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-[#38BDF8]" />,
        },
      ],
    },


    // ==================================================
    // BACKEND
    // ==================================================

    {
      icon: Server,
      title: "Backend Development",
      color: "text-green-400",

      skills: [
        {
          name: "Python",
          icon: <FaPython className="text-[#3776AB]" />,
        },
        {
          name: "Node.js",
          icon: <FaNodeJs className="text-[#339933]" />,
        },
        {
          name: "Express.js",
          icon: <SiExpress className="text-white" />,
        },
        {
          name: "REST API",
          icon: <Globe className="text-green-400" />,
        },
      ],
    },


    // ==================================================
    // DATABASE
    // ==================================================

    {
      icon: Database,
      title: "Database",
      color: "text-yellow-400",

      skills: [
        {
          name: "MySQL",
          icon: <SiMysql className="text-[#4479A1]" />,
        },
        {
          name: "MongoDB",
          icon: <SiMongodb className="text-[#47A248]" />,
        },
      ],
    },


    // ==================================================
    // VERSION CONTROL
    // ==================================================

    {
      icon: GitBranch,
      title: "Version Control",
      color: "text-orange-400",

      skills: [
        {
          name: "Git",
          icon: <FaGitAlt className="text-[#F05032]" />,
        },
        {
          name: "GitHub",
          icon: <FaGithub className="text-white" />,
        },
      ],
    },


    // ==================================================
    // DEVELOPMENT TOOLS
    // ==================================================

    {
      icon: Terminal,
      title: "Development Tools",
      color: "text-purple-400",

      skills: [
        {
          name: "VS Code",
          icon: <FileCode2 className="text-[#007ACC]" />,
        },
        {
          name: "Linux",
          icon: <FaLinux className="text-[#FCC624]" />,
        },
        {
          name: "Postman",
          icon: <SiPostman className="text-[#FF6C37]" />,
        },
      ],
    },


    // ==================================================
    // OTHER SKILLS
    // ==================================================

    {
      icon: Palette,
      title: "Other Skills",
      color: "text-pink-400",

      skills: [
        {
          name: "Responsive Design",
          icon: <Globe className="text-blue-400" />,
        },
        {
          name: "Problem Solving",
          icon: <Code2 className="text-green-400" />,
        },
      ],
    },
  ];


  return (
    <main
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#04081A]
        px-4
        py-16
        text-white
      "
    >

      {/* Animated Grid */}

      <AnimatedGrid />


      {/* Background Glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-20
          h-72
          w-72
          -translate-x-1/2
          animate-pulse
          rounded-full
          bg-blue-600/10
          blur-3xl
        "
      />


      {/* Main Content */}

      <section className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}

        <div className="mb-12 text-center">

          <p
            className="
              mb-3
              text-sm
              font-semibold
              uppercase
              tracking-[0.3em]
              text-blue-400
            "
          >
          </p>


          <h2 className="mb-4 text-4xl font-bold md:text-5xl">

            Skills{" "}

            <span
              className="
                bg-gradient-to-r
                from-blue-400
                to-purple-500
                bg-clip-text
                text-transparent
              "
            >
              & Technologies
            </span>

          </h2>


          <p className="mx-auto max-w-2xl text-gray-400">
            Technologies and tools I use to build responsive,
            modern and scalable web applications.
          </p>

        </div>


        {/* Skills Grid */}

        <div
          className="
            grid
            grid-cols-1
            gap-6
            md:grid-cols-2
            lg:grid-cols-3
          "
        >

          {skillCategories.map((category, index) => (
            <SkillCard
              key={`${category.title}-${index}`}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}

        </div>

      </section>


      {/* Shimmer Animation */}

      <style>{`
        .animate-shimmer {
          animation: shimmer 2.5s linear infinite;
          will-change: transform;
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }

          100% {
            transform: translateX(100%);
          }
        }
      `}</style>

    </main>
  );
};


export default SkillsSection;

