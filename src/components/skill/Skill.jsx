import React, { useState } from "react";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "../SectionHeader";

const SkillsSection = () => {
  const { themeColors, theme } = useSelector((state) => state.themeReducer);
  const [hoveredTech, setHoveredTech] = useState(null);

  const techCategories = {
    frontend: {
      title: "Frontend Engineering",
      description:
        "Modern, scalable, and responsive UI development using industry best practices.",
      icons: [
        {
          name: "React.js",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          tooltipColor: "#61DAFB",
        },
        {
          name: "Next.js",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
          tooltipColor: "#000000",
        },
        {
          name: "JavaScript (ES6+)",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          tooltipColor: "#F7DF1E",
        },
        {
          name: "TypeScript",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
          tooltipColor: "#3178C6",
        },
        {
          name: "Tailwind CSS",
          src: "https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/tailwindcss/tailwindcss-original.svg",
          tooltipColor: "#38B2AC",
        },
        {
          name: "Material UI",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
          tooltipColor: "#0081CB",
        },
        {
          name: "Framer Motion",
          src: "https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/framermotion/framermotion-original.svg",
          tooltipColor: "#FF0099",
        },
        {
          name: "Redux Toolkit",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
          tooltipColor: "#764ABC",
        },
        {
          name: "Chart.js",
          src: "https://www.chartjs.org/media/logo-title.svg",
          tooltipColor: "#FF6384",
        },
      ],
    },

    backend: {
      title: "Backend & APIs",
      description:
        "Robust backend systems, REST APIs, authentication, and real-time communication.",
      icons: [
        {
          name: "Node.js",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
          tooltipColor: "#339933",
        },
        {
          name: "Express.js",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
          tooltipColor: "#000000",
        },
        {
          name: "MongoDB",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
          tooltipColor: "#47A248",
        },
        {
          name: "MySQL",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
          tooltipColor: "#4479A1",
        },
        {
          name: "Django",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
          tooltipColor: "#092E20",
        },
        {
          name: "Django REST Framework",
          src: "https://www.django-rest-framework.org/img/logo.png",
          tooltipColor: "#A30000",
        },
        {
          name: "JWT Auth",
          src: "https://jwt.io/img/pic_logo.svg",
          tooltipColor: "#000000",
        },
        {
          name: "Socket.IO",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
          tooltipColor: "#010101",
        },
        {
          name: "Multer",
          src: "https://avatars.githubusercontent.com/u/40374826?s=200&v=4",
          tooltipColor: "#000000",
        },
        {
          name: "Nodemailer",
          src: "data:image/png;base64,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",
          tooltipColor: "#0A66C2",
        },
      ],
    },

    tools: {
      title: "DevOps, Tools & Workflow",
      description:
        "Professional development workflow, deployment, and collaboration tools.",
      icons: [
        {
          name: "Git",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
          tooltipColor: "#F05032",
        },
        {
          name: "GitHub",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
          tooltipColor: "#181717",
        },
        {
          name: "Docker",
          src: "https://raw.githubusercontent.com/github/explore/main/topics/docker/docker.png",
          tooltipColor: "#2496ED",
        },
        {
          name: "Postman",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
          tooltipColor: "#FF6C37",
        },
        {
          name: "Figma",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
          tooltipColor: "#F24E1E",
        },
        {
          name: "Vercel",
          src: "https://assets.vercel.com/image/upload/front/favicon/vercel/57x57.png",
          tooltipColor: "#000000",
        },
        {
          name: "Netlify",
          src: "https://www.netlify.com/v3/img/components/logomark.png",
          tooltipColor: "#00C7B7",
        },
        {
          name: "Render",
          src: "https://avatars.githubusercontent.com/u/36424661?s=200&v=4",
          tooltipColor: "#46E3B7",
        },
      ],
    },
  };

  return (
    <section
      className="py-28 px-4 sm:px-8 lg:px-12"
      style={{ backgroundColor: themeColors.bg }}
      id="skills"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Professional"
          highlight="Skill Set"
          subtitle="Full-Stack Development • Mentorship • Production-Ready Systems"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {Object.values(techCategories).map((category, i) => (
            <motion.div
              key={category.title}
              className="p-8 rounded-3xl"
              style={{
                background: `${themeColors.cardBg}4D`,
                border: `1px solid ${themeColors.border}`,
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -6 }}
            >
              <h3
                className="text-2xl font-bold mb-2"
                style={{ color: themeColors.primaryColor }}
              >
                {category.title}
              </h3>
              <p
                className="text-sm mb-6"
                style={{ color: themeColors.summeryText }}
              >
                {category.description}
              </p>

              <div className="grid grid-cols-4 sm:grid-cols-6 gap-5">
                {category.icons.map((tech) => (
                  <motion.div
                    key={tech.name}
                    className="relative group flex flex-col items-center"
                    onMouseEnter={() => setHoveredTech(tech.name)}
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    <motion.div
                      className="w-14 h-14 flex items-center justify-center rounded-xl relative"
                      style={{
                        backgroundColor: themeColors.cardBg,
                        border: `1px solid ${themeColors.border}`,
                      }}
                      whileHover={{
                        scale: 1.15,
                        boxShadow: `0 0 20px ${tech.tooltipColor}55`,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      <motion.div
                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100"
                        style={{
                          background: `radial-gradient(circle at center, ${tech.tooltipColor}25, transparent 70%)`,
                        }}
                      />

                      <img
                        src={tech.src}
                        alt={tech.name}
                        className="w-7 h-7 z-10"
                        style={{
                          filter:
                            theme === "dark" ? "brightness(1.25)" : "none",
                        }}
                      />
                    </motion.div>

                    <AnimatePresence>
                      {hoveredTech === tech.name && (
                        <motion.div
                          className="absolute bottom-full mb-3 px-3 py-1 rounded-md text-xs font-semibold z-50 whitespace-nowrap"
                          style={{
                            backgroundColor: tech.tooltipColor,
                            color: "#fff",
                            boxShadow: `0 6px 16px ${tech.tooltipColor}66`,
                          }}
                          initial={{ opacity: 0, y: 10, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.9 }}
                        >
                          {tech.name}
                          <div
                            className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0
                              border-l-4 border-r-4 border-t-4
                              border-l-transparent border-r-transparent"
                            style={{ borderTopColor: tech.tooltipColor }}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ACHIEVEMENTS & VOLUNTEERING */}
        <div className="mt-24">
          <SectionHeader
            title="Achievements &"
            highlight="Volunteering"
            subtitle="Leadership, Sports & Community Engagement"
          />

          <div
            className="p-10 md:p-12 rounded-3xl mt-8"
            style={{
              background: `${themeColors.cardBg}4D`,
              border: `1px solid ${themeColors.border}`,
            }}
          >
            <ul
              className="space-y-6 text-base md:text-lg leading-relaxed"
              style={{ color: themeColors.summeryText }}
            >
              <li>
                🏅 <strong>State Level Participant</strong> - Swimming & High
                Jump
              </li>
              <li>
                🥇 <strong>District Level Winner</strong> - Athletics & Games
              </li>
              <li>
                🏆 <strong>District Level Mathematics Project Winner</strong>{" "}
                <span className="opacity-80">(2016 - Class XII)</span>
              </li>
              <li>
                🏃‍♂️ Participated in multiple{" "}
                <strong>School & College Level Sports Competitions</strong>
              </li>
              <li>
                🤝 <strong>IEEE Member</strong>
              </li>
              <li>
                🌱 <strong>NSS Volunteer</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
