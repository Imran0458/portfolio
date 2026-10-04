import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Download,
  CheckCircle,
  Code,
  Database,
  Globe,
  Github,
  ExternalLink,
  GraduationCap,
} from "lucide-react";

const Particles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full"
          initial={{
            opacity: Math.random(),
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: [null, Math.random() * window.innerHeight],
            transition: {
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
          style={{
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
          }}
        />
      ))}
    </div>
  );
};

export default function EnhancedPortfolioCard() {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      background: [
        "linear-gradient(to right bottom, #1a1a2e, #16213e, #1b2a4e, #24335e, #2f3c6e)",
        "linear-gradient(to right bottom, #2f3c6e, #24335e, #1b2a4e, #16213e, #1a1a2e)",
      ],
      transition: {
        duration: 10,
        repeat: Infinity,
        repeatType: "reverse",
      },
    });
  }, [controls]);

  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "Python",
    "Django",
    "MongoDB",
    "MySQL",
    "Git",
    "GitHub",
  ];

  const projects = [
    {
      title: "AI-Based Gamified Learning Platform",
      description:
        "Final-year project developed by a 4-member team over 5 months. Built an interactive learning platform with gamification, student progress tracking, quizzes, rewards, leaderboards, and hierarchical monitoring for students, teachers, and administrators.",
      tech: "HTML, CSS, JavaScript, Python, Django, AI, MySQL/SQLite, AWS",
      icon: <GraduationCap className="w-8 h-8" />,
    },
    {
      title: "3DPrintHub - Custom 3D Printing E-Commerce",
      description:
        "MERN-based e-commerce platform for customizable 3D-printed toys, home-use products, tools, decorative items, and educational models. Customers can select products, provide customization requirements, and place orders.",
      tech: "MongoDB, Express.js, React.js, Node.js",
      icon: <Database className="w-8 h-8" />,
    },
    {
      title: "Doctor Appointment System",
      description:
        "Web application designed to connect patients with doctors through appointment scheduling, doctor listings, user management, and appointment workflows.",
      tech: "React.js, Node.js, Express.js, MongoDB",
      icon: <Globe className="w-8 h-8" />,
    },
    {
      title: "Personal Portfolio",
      description:
        "Responsive developer portfolio showcasing technical skills, projects, education, certifications, and professional profile.",
      tech: "React.js, JavaScript, Tailwind CSS",
      icon: <Code className="w-8 h-8" />,
    },
  ];

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] p-4 md:p-8 flex items-center justify-center overflow-hidden relative"
      animate={controls}
    >
      <Particles />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-7xl relative z-10"
      >
        {/* PROFILE SECTION */}
        <div className="grid md:grid-cols-[1fr,1.8fr] gap-8">

          {/* LEFT PROFILE CARD */}
          <Card className="p-8 flex flex-col items-center text-center shadow-xl rounded-2xl backdrop-blur-lg bg-[#1E293B]/70 border border-[#2DD4BF]/20 overflow-hidden relative">

            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#2DD4BF]/20 to-[#38BDF8]/20"
              animate={{
                scale: isHovered ? 1.1 : 1,
                rotate: isHovered ? 5 : 0,
              }}
              transition={{ duration: 0.3 }}
            />

            {/* PROFILE IMAGE */}
            <motion.div
              className="relative z-10 w-48 h-48 mb-6 group"
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#2DD4BF] to-[#38BDF8] rounded-full shadow-lg"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <img
                src="/profile.jpg"
                alt="Shaik Imran"
                className="rounded-full relative z-10 w-full h-full object-cover border-4 border-gray-700 group-hover:border-cyan-400 transition-colors duration-300"
              />
            </motion.div>

            {/* NAME */}
            <motion.h1
              className="text-4xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] to-[#38BDF8]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Shaik Imran
            </motion.h1>

            {/* ROLE */}
            <p className="text-xl text-gray-300 font-semibold">
              Full Stack Developer
            </p>

            <p className="text-gray-400 mt-2">
              CSE - Artificial Intelligence & Machine Learning
            </p>

            {/* EMAIL */}
            <motion.a
              href="mailto:shaikimran0458@gmail.com"
              className="text-lg text-blue-400 hover:text-blue-300 transition-colors mt-4"
            >
              shaikimran0458@gmail.com
            </motion.a>

            {/* OPEN TO WORK */}
            <Badge
              variant="secondary"
              className="mt-5 flex items-center bg-green-900/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium"
            >
              <CheckCircle className="mr-2 h-4 w-4" />
              Open to Work
            </Badge>

            {/* EDUCATION */}
            <div className="mt-6 text-gray-300">
              <p className="font-semibold">
                B.Tech - CSE (AI & ML)
              </p>
              <p className="text-gray-400 text-sm">
                Vasireddy Venkatadri Institute of Technology
              </p>
              <p className="text-gray-400 text-sm">
                2022 - 2026 | CGPA: 7.06
              </p>
            </div>

            {/* RESUME */}
            <Button
              className="mt-6 bg-gradient-to-r from-[#2DD4BF] to-[#38BDF8] hover:opacity-90 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg"
              onClick={() => {
                window.open("/resume.pdf", "_blank");
              }}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>

            {/* SOCIAL LINKS */}
            <div className="flex gap-4 mt-6">

              <Button
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800"
                onClick={() =>
                  window.open("https://github.com/", "_blank")
                }
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>

              <Button
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800"
                onClick={() =>
                  window.open("https://www.linkedin.com/", "_blank")
                }
              >
                LinkedIn
              </Button>

            </div>
          </Card>

          {/* RIGHT SIDE */}
          <div className="space-y-8">

            {/* ABOUT ME */}
            <Card className="p-6 shadow-xl rounded-2xl backdrop-blur-lg bg-[#1E293B]/70 border border-[#2DD4BF]/20">

              <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] to-[#38BDF8]">
                About Me
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed">
                I am a Computer Science and Engineering graduate specializing
                in Artificial Intelligence and Machine Learning. I am
                interested in building responsive web applications and
                full-stack solutions using modern technologies.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mt-4">
                I have experience working with JavaScript, React.js, Python,
                Node.js, Express.js, MongoDB, MySQL, and Django. I enjoy
                developing practical projects and continuously improving my
                problem-solving and development skills.
              </p>

            </Card>

            {/* SKILLS */}
            <Card className="p-6 shadow-xl rounded-2xl backdrop-blur-lg bg-[#1E293B]/70 border border-[#2DD4BF]/20">

              <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] to-[#38BDF8]">
                Technical Skills
              </h2>

              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    className="px-4 py-2 bg-gray-800/80 text-gray-200 border border-gray-600 hover:border-cyan-400 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>

            </Card>

            {/* PROJECTS */}
            <Card className="p-6 shadow-xl rounded-2xl backdrop-blur-lg bg-[#1E293B]/70 border border-[#2DD4BF]/20">

              <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] to-[#38BDF8]">
                Projects
              </h2>

              <div className="grid md:grid-cols-2 gap-5">

                {projects.map((project, index) => (

                  <motion.div
                    key={project.title}
                    className="p-5 rounded-xl bg-gray-900/50 border border-gray-700 hover:border-cyan-400 transition-all duration-300"
                    whileHover={{
                      y: -5,
                      scale: 1.02,
                    }}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: index * 0.1,
                    }}
                  >

                    <div className="flex items-center gap-3 mb-4">

                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2DD4BF] to-[#38BDF8] flex items-center justify-center text-white">
                        {project.icon}
                      </div>

                      <h3 className="font-semibold text-lg text-gray-100">
                        {project.title}
                      </h3>

                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <p className="text-cyan-400 text-sm mt-4 font-medium">
                      {project.tech}
                    </p>

                  </motion.div>

                ))}

              </div>

            </Card>

            {/* CURRENT FOCUS */}
            <Card className="p-6 shadow-xl rounded-2xl backdrop-blur-lg bg-[#1E293B]/70 border border-[#2DD4BF]/20">

              <h2 className="text-2xl font-bold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] to-[#38BDF8]">
                Current Focus
              </h2>

              <div className="grid md:grid-cols-3 gap-4">

                <div className="p-4 rounded-xl bg-gray-900/50 border border-gray-700">
                  <Code className="w-8 h-8 text-cyan-400 mb-3" />
                  <h3 className="text-gray-100 font-semibold">
                    Full Stack Development
                  </h3>
                  <p className="text-gray-400 text-sm mt-2">
                    Building modern web applications using the MERN stack.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-gray-900/50 border border-gray-700">
                  <Database className="w-8 h-8 text-cyan-400 mb-3" />
                  <h3 className="text-gray-100 font-semibold">
                    Backend Development
                  </h3>
                  <p className="text-gray-400 text-sm mt-2">
                    Working with Node.js, Express.js, MongoDB, Python, and
                    Django.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-gray-900/50 border border-gray-700">
                  <Globe className="w-8 h-8 text-cyan-400 mb-3" />
                  <h3 className="text-gray-100 font-semibold">
                    AI & Web Projects
                  </h3>
                  <p className="text-gray-400 text-sm mt-2">
                    Combining AI concepts with practical full-stack projects.
                  </p>
                </div>

              </div>

            </Card>

          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}