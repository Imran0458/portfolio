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
// 3D TECHNOLOGY SPHERE
// ======================================================

const TechnologyBall = () => {
  const techIcons = [
    {
      icon: <FaJs />,
      name: "JavaScript",
      color: "text-yellow-400",
      position: "left-[43%] top-[13%]",
      delay: "0s",
    },
    {
      icon: <FaReact />,
      name: "React",
      color: "text-cyan-400",
      position: "left-[22%] top-[25%]",
      delay: "0.5s",
    },
    {
      icon: <FaPython />,
      name: "Python",
      color: "text-blue-400",
      position: "right-[22%] top-[25%]",
      delay: "1s",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
      color: "text-green-500",
      position: "left-[12%] top-[43%]",
      delay: "1.5s",
    },
    {
      icon: <FaGithub />,
      name: "GitHub",
      color: "text-white",
      position: "right-[12%] top-[43%]",
      delay: "2s",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
      color: "text-green-400",
      position: "left-[22%] top-[57%]",
      delay: "2.5s",
    },
    {
      icon: <FaHtml5 />,
      name: "HTML",
      color: "text-orange-500",
      position: "right-[22%] top-[57%]",
      delay: "3s",
    },
    {
      icon: <FaCss3Alt />,
      name: "CSS",
      color: "text-blue-500",
      position: "left-[35%] top-[72%]",
      delay: "3.5s",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
      color: "text-cyan-400",
      position: "right-[30%] top-[72%]",
      delay: "4s",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
      color: "text-blue-400",
      position: "left-[31%] top-[40%]",
      delay: "4.5s",
    },
    {
      icon: <SiExpress />,
      name: "Express.js",
      color: "text-white",
      position: "right-[31%] top-[40%]",
      delay: "5s",
    },
    {
      icon: <SiPostman />,
      name: "Postman",
      color: "text-orange-400",
      position: "left-[19%] top-[68%]",
      delay: "5.5s",
    },
    {
      icon: <FaGitAlt />,
      name: "Git",
      color: "text-orange-500",
      position: "right-[19%] top-[68%]",
      delay: "6s",
    },
    {
      icon: <Globe />,
      name: "REST API",
      color: "text-green-400",
      position: "left-[42%] top-[56%]",
      delay: "6.5s",
    },
  ];

  return (
    <div className="relative h-[430px] w-[430px] sm:h-[540px] sm:w-[540px]">
      {/* Large outer glow */}
      <div className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[100px] animate-pulse sm:h-[540px] sm:w-[540px]" />

      {/* Secondary purple glow */}
      <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[90px]" />

      {/* Outer rotating ring */}
      <div
        className="absolute left-1/2 top-1/2 h-[370px] w-[370px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/30 sm:h-[470px] sm:w-[470px]"
        style={{ animation: "sphereRotate 14s linear infinite" }}
      >
        <div className="absolute -right-2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.9)]" />
        <div className="absolute -left-1 top-[20%] h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.9)]" />
      </div>

      {/* Second rotating orbit */}
      <div
        className="absolute left-1/2 top-1/2 h-[400px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-purple-400/25"
        style={{ animation: "sphereRotateReverse 18s linear infinite" }}
      />

      {/* Third orbit */}
      <div
        className="absolute left-1/2 top-1/2 h-[300px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-blue-400/10"
        style={{ animation: "sphereRotate 20s linear infinite" }}
      />

      {/* Main 3D sphere */}
      <div className="absolute left-1/2 top-1/2 h-[310px] w-[310px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border border-blue-300/30 bg-gradient-to-br from-[#123A86] via-[#071A46] to-[#10052E] shadow-[0_0_80px_rgba(37,99,235,0.45)] sm:h-[390px] sm:w-[390px]">
        {/* Dark 3D shadow */}
        <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-transparent to-black/60" />

        {/* Main light reflection */}
        <div className="pointer-events-none absolute -left-[10%] -top-[5%] h-[55%] w-[70%] rotate-[-25deg] rounded-full bg-white/20 blur-[45px]" />

        {/* Glass highlight */}
        <div className="pointer-events-none absolute left-[18%] top-[8%] h-[18%] w-[55%] rotate-[-20deg] rounded-full bg-gradient-to-r from-white/25 via-white/10 to-transparent blur-md" />

        {/* Small reflection */}
        <div className="pointer-events-none absolute left-[25%] top-[15%] h-8 w-20 rotate-[-25deg] rounded-full bg-white/20 blur-xl" />

        {/* Inner glow */}
        <div className="pointer-events-none absolute inset-[5%] rounded-full border border-blue-300/10 bg-gradient-to-br from-blue-400/10 via-transparent to-purple-500/20" />

        {/* Latitude lines */}
        <div className="pointer-events-none absolute left-[-5%] top-[35%] h-[30%] w-[110%] rounded-[50%] border border-cyan-300/20" />
        <div className="pointer-events-none absolute left-[-5%] top-[43%] h-[14%] w-[110%] rounded-[50%] border border-blue-300/15" />

        {/* Longitude line */}
        <div className="pointer-events-none absolute left-[30%] top-[-5%] h-[110%] w-[40%] rounded-[50%] border border-purple-300/15" />

        {/* Center glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[120px] w-[120px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[40px]" />

        {/* Technology icons */}
        {techIcons.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className={`absolute z-30 ${item.position} ${item.color}`}
            style={{
              animation: "techFloat 4s ease-in-out infinite",
              animationDelay: item.delay,
            }}
          >
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-[#071633]/80 text-2xl shadow-[0_0_20px_rgba(59,130,246,0.25)] backdrop-blur-md transition-all duration-300 hover:scale-125 hover:border-white/50 hover:bg-[#0B1E45] hover:shadow-[0_0_30px_rgba(59,130,246,0.7)] sm:h-14 sm:w-14 sm:text-3xl"
              title={item.name}
            >
              {item.icon}
            </div>
          </div>
        ))}

        {/* Center code icon */}
        <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-blue-300/30 bg-blue-400/10 text-blue-300 shadow-[0_0_35px_rgba(59,130,246,0.5)] backdrop-blur-md sm:h-20 sm:w-20">
            <Code2 className="h-8 w-8 sm:h-10 sm:w-10" />
          </div>
        </div>

        {/* Particles */}
        <span className="absolute left-[30%] top-[20%] h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,1)]" />
        <span className="absolute right-[30%] top-[40%] h-1.5 w-1.5 rounded-full bg-purple-300 shadow-[0_0_10px_rgba(216,180,254,1)]" />
        <span className="absolute bottom-[20%] left-[35%] h-1 w-1 rounded-full bg-blue-300 shadow-[0_0_10px_rgba(147,197,253,1)]" />
      </div>

      {/* Outer dotted orbit */}
      <div
        className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-blue-400/10 sm:h-[500px] sm:w-[500px]"
        style={{ animation: "sphereRotate 25s linear infinite" }}
      >
        <span className="absolute left-[15%] top-[8%] h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
        <span className="absolute bottom-[12%] right-[15%] h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.8)]" />
      </div>
    </div>
  );
};

// ======================================================
// MOVING BACKGROUND GRID
// ======================================================

const MovingGrid = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-30">
      <div
        className="absolute inset-0 scale-150 bg-[linear-gradient(rgba(59,130,246,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.12)_1px,transparent_1px)] bg-[size:45px_45px]"
        style={{ animation: "gridMove 10s linear infinite" }}
      />
      <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[140px]" />
    </div>
  );
};

// ======================================================
// SKILL CARD
// ======================================================

const SkillCard = ({ icon: Icon, title, skills, color }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-700/80 bg-gray-900/80 p-6 backdrop-blur-md transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.03] hover:border-blue-400/60 hover:shadow-[0_15px_45px_rgba(37,99,235,0.25)]">
      {/* Moving shimmer */}
      <div className="pointer-events-none absolute -left-[100%] top-0 h-full w-[60%] rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-1000 group-hover:left-[150%]" />

      {/* Border glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent opacity-0 transition-opacity duration-500 group-hover:border-blue-500/30 group-hover:opacity-100" />

      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/0 blur-3xl transition-all duration-500 group-hover:bg-blue-500/10" />

      <div className="relative z-10">
        {/* Header */}
        <div className="mb-6 flex items-center gap-4">
          <div
            className={`rounded-xl bg-gray-800/80 p-3 ${color} transition-all duration-500 group-hover:rotate-3 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.35)]`}
          >
            <Icon className="h-8 w-8" />
          </div>

          <h3 className="text-xl font-bold text-white transition-all duration-300 group-hover:text-blue-300">
            {title}
          </h3>
        </div>

        {/* Skill badges */}
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="group/badge flex items-center gap-2 rounded-lg border border-gray-700 bg-gray-800/70 px-3 py-2 text-sm font-medium text-gray-200 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-110 hover:border-blue-400/60 hover:bg-gray-700 hover:text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            >
              <span className="text-lg transition-all duration-300 group-hover/badge:scale-125 group-hover/badge:drop-shadow-[0_0_8px_rgba(59,130,246,0.7)]">
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
    {
      icon: Code2,
      title: "Frontend Development",
      color: "text-blue-400",
      skills: [
        { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" /> },
        { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" /> },
        { name: "React.js", icon: <FaReact className="text-[#61DAFB]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38BDF8]" /> },
      ],
    },
    {
      icon: Server,
      title: "Backend Development",
      color: "text-green-400",
      skills: [
        { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
        { name: "Express.js", icon: <SiExpress className="text-white" /> },
        { name: "REST API", icon: <Globe className="text-green-400" /> },
      ],
    },
    {
      icon: Database,
      title: "Database",
      color: "text-yellow-400",
      skills: [
        { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      ],
    },
    {
      icon: GitBranch,
      title: "Version Control",
      color: "text-orange-400",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
        { name: "GitHub", icon: <FaGithub className="text-white" /> },
      ],
    },
    {
      icon: Terminal,
      title: "Development Tools",
      color: "text-purple-400",
      skills: [
        { name: "VS Code", icon: <FileCode2 className="text-[#007ACC]" /> },
        { name: "Linux", icon: <FaLinux className="text-[#FCC624]" /> },
        { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
      ],
    },
    {
      icon: Palette,
      title: "Other Skills",
      color: "text-pink-400",
      skills: [
        { name: "Responsive Design", icon: <Globe className="text-blue-400" /> },
        { name: "Problem Solving", icon: <Code2 className="text-green-400" /> },
      ],
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#04081A] px-4 pb-24 pt-[100px] text-white">
      <MovingGrid />

      {/* Technology ball */}
      <div className="relative z-10 mx-auto flex h-[430px] w-full items-center justify-center sm:h-[500px]">
        <TechnologyBall />
      </div>

      {/* Space after ball */}
      <div className="h-10 sm:h-16" />

      {/* Technical skills */}
      <section className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            My Expertise
          </p>

          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Technical{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-gray-400">
            Technologies and tools I use to build responsive, modern and scalable
            web applications.
          </p>
        </div>

        {/* Skill cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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

      {/* Animations */}
      <style>{`
        @keyframes gridMove {
          0% {
            transform: translate3d(0, 0, 0) scale(1.5);
          }

          50% {
            transform: translate3d(45px, 45px, 0) scale(1.5);
          }

          100% {
            transform: translate3d(90px, 90px, 0) scale(1.5);
          }
        }

        @keyframes techFloat {
          0% {
            transform: translateY(0) scale(1);
          }

          25% {
            transform: translateY(-7px) scale(1.03);
          }

          50% {
            transform: translateY(-14px) scale(1.08);
          }

          75% {
            transform: translateY(-7px) scale(1.03);
          }

          100% {
            transform: translateY(0) scale(1);
          }
        }

        @keyframes sphereRotate {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }

          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes sphereRotateReverse {
          from {
            transform: translate(-50%, -50%) rotate(360deg);
          }

          to {
            transform: translate(-50%, -50%) rotate(0deg);
          }
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;
