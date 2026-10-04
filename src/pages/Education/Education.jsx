import React, { useState } from "react";
import {
  Award,
  Calendar,
  BookOpen,
  GraduationCap,
  Trophy,
  School,
  Code2,
} from "lucide-react";
import { motion } from "framer-motion";

const EducationSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const educationData = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      school:
        "Vasireddy Venkatadri Institute of Technology (VVIT)",
      mascot: "🎓",
      year: "2022 - 2026",
      branch: "CSE - Artificial Intelligence & Machine Learning",
      achievements: [
        "CGPA: 7.06",
        "B.Tech Graduate",
      ],
      skills: [
        "Artificial Intelligence",
        "Machine Learning",
        "Python",
        "Java",
        "JavaScript",
        "React",
        "SQL",
      ],
      description:
        "Pursued a Bachelor of Technology in Computer Science and Engineering with a specialization in Artificial Intelligence and Machine Learning. Developed practical knowledge in software development, programming, databases, and modern web technologies.",
    },

    {
      degree: "Intermediate (MPC)",
      school: "Narayana Junior College, Ongole",
      mascot: "📚",
      year: "2020 - 2022",
      branch: "Mathematics, Physics & Chemistry",
      achievements: [
        "MPC Stream",
        "Completed: 2022",
      ],
      skills: [
        "Mathematics",
        "Physics",
        "Chemistry",
        "Problem Solving",
      ],
      description:
        "Completed Intermediate education in the MPC stream, building a strong foundation in mathematics, physics, chemistry, analytical thinking, and problem solving.",
    },

    {
      degree: "Secondary School Certificate (SSC)",
      school: "Apex High School, Ongole",
      mascot: "🏫",
      year: "Completed: 2020",
      branch: "Secondary Education",
      achievements: [
        "CGPA: 9.7",
        "SSC Completed",
      ],
      skills: [
        "Mathematics",
        "Science",
        "English",
        "Computer Basics",
      ],
      description:
        "Completed secondary school education with a strong academic performance and developed a foundation in mathematics, science, communication, and computer fundamentals.",
    },
  ];

  const containerVariants = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,

      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      y: 50,
      opacity: 0,
    },

    visible: {
      y: 0,
      opacity: 1,

      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#04081A] py-24 md:py-32">

      {/* Background Grid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#04081A] via-transparent to-[#04081A]" />

        <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 flex justify-center">
            <div className="rounded-full border border-blue-500/30 bg-blue-500/10 p-4">
              <GraduationCap className="h-10 w-10 text-blue-400" />
            </div>
          </div>

          <h2 className="mb-5 text-4xl font-bold md:text-5xl">
            <span className="bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Educational Journey
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            My academic journey from secondary education to
            Computer Science and Artificial Intelligence.
          </p>
        </motion.div>

        {/* Education Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-8 lg:grid-cols-3"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`
                group relative overflow-hidden rounded-2xl
                border p-7
                backdrop-blur-md
                transition-all duration-300
                ${
                  hoveredIndex === index
                    ? "scale-[1.03] border-blue-500 shadow-xl shadow-blue-500/10"
                    : "border-blue-400/20"
                }
                bg-gray-900/60
              `}
            >

              {/* Card Glow */}
              <div
                className={`
                  absolute -right-20 -top-20
                  h-40 w-40 rounded-full
                  bg-blue-500/10 blur-3xl
                  transition-all duration-500
                  ${
                    hoveredIndex === index
                      ? "bg-blue-500/20"
                      : ""
                  }
                `}
              />

              <div className="relative z-10 space-y-6">

                {/* Icon + Degree */}
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-4xl">
                      {edu.mascot}
                    </span>

                    <div className="rounded-xl bg-blue-500/10 p-3">
                      {index === 0 ? (
                        <Code2 className="h-6 w-6 text-blue-400" />
                      ) : index === 1 ? (
                        <BookOpen className="h-6 w-6 text-teal-400" />
                      ) : (
                        <School className="h-6 w-6 text-purple-400" />
                      )}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold leading-tight text-white">
                    {edu.degree}
                  </h3>
                </div>

                {/* School */}
                <div className="space-y-3">

                  <div className="flex items-start gap-3">
                    <BookOpen className="mt-1 h-5 w-5 shrink-0 text-teal-400" />

                    <p className="text-lg font-medium text-gray-200">
                      {edu.school}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-blue-400" />

                    <p className="text-gray-400">
                      {edu.year}
                    </p>
                  </div>

                  <div className="rounded-lg border border-gray-700 bg-gray-800/40 px-4 py-3">
                    <p className="text-sm text-gray-300">
                      <span className="font-semibold text-blue-400">
                        Branch:
                      </span>{" "}
                      {edu.branch}
                    </p>
                  </div>

                </div>

                {/* Description */}
                <p className="border-l-2 border-teal-500 pl-4 text-sm italic leading-6 text-gray-400">
                  {edu.description}
                </p>

                {/* Achievements */}
                <div>
                  <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-white">
                    <Trophy className="h-4 w-4 text-yellow-400" />
                    Key Achievements
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map(
                      (achievement, i) => (
                        <div
                          key={i}
                          className="
                            flex items-center gap-2
                            rounded-full
                            bg-teal-500/10
                            px-3 py-1.5
                            text-sm
                            text-teal-400
                          "
                        >
                          <Award className="h-4 w-4" />

                          <span>
                            {achievement}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h4 className="mb-3 text-sm font-semibold text-gray-300">
                    Knowledge & Subjects
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {edu.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="
                          rounded-md
                          border border-blue-500/10
                          bg-blue-500/10
                          px-2.5 py-1.5
                          text-xs
                          text-blue-300
                          transition-colors
                          hover:bg-blue-500/20
                        "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background CSS */}
      <style>{`
        .bg-grid-pattern {
          background-image:
            linear-gradient(
              to right,
              rgba(100, 100, 255, 0.08) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(100, 100, 255, 0.08) 1px,
              transparent 1px
            );

          background-size: 50px 50px;
        }
      `}</style>

    </section>
  );
};

export default EducationSection;