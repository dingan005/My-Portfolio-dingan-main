import React, { memo } from "react";
import { useSelector } from "react-redux";

function RightSideContent() {
  const { themeColors } = useSelector((state) => state.themeReducer);

  const approachCards = [
    {
      icon: "🧠",
      title: "Structured Problem Solving",
      description:
        "I approach problems by analyzing requirements, identifying edge cases, and delivering optimized, maintainable solutions.",
    },
    {
      icon: "🔄",
      title: "Learning & Knowledge Sharing",
      description:
        "I actively learn modern technologies and translate complex concepts into clear, practical knowledge for teams and students.",
    },
  ];

  const Highlight = ({ children }) => (
    <span style={{ color: themeColors.primaryColor }}>{children}</span>
  );

  return (
    <div className="lg:w-1/2">
      <div className="sticky top-24">
        <div className="mb-10">
          {/* heading */}
          <h3
            className="text-3xl font-semibold mb-6"
            style={{ color: themeColors.primaryColor }}
          >
            My Development Philosophy
          </h3>

          <div
            className="p-6 rounded-xl"
            style={{
              backgroundColor: `${themeColors.primaryColor}08`,
              border: `1px solid ${themeColors.border}`,
            }}
          >
            <ul
              className="text-lg leading-relaxed space-y-4 list-disc list-inside"
              style={{ color: themeColors.summeryText }}
            >
              <li>
                <Highlight>React, Next.js & TypeScript</Highlight> — I architect
                scalable, type-safe frontend applications with a strong focus on
                performance, SEO, and maintainability using SSR, modern routing,
                and clean component design.
              </li>

              <li>
                <Highlight>MERN Stack & Python Backends</Highlight> — I design
                robust backend systems using Node.js, Express, MongoDB, and
                Python frameworks, building clean REST APIs and scalable
                full-stack architectures.
              </li>

              <li>
                <Highlight>DevOps & Cloud Deployment</Highlight> — I
                containerize applications using Docker and implement CI/CD
                pipelines to ensure reliable, repeatable, and production-ready
                deployments across platforms like Render and Vercel.
              </li>

              <li>
                <Highlight>State Management & Data Integrity</Highlight> — I
                manage complex application state using tools like TanStack Query
                and Redux Toolkit, while enforcing strict validation to ensure
                predictable and reliable data flow.
              </li>

              <li>
                <Highlight>UI/UX & Performance</Highlight> — I build clean,
                responsive, and accessible interfaces using Tailwind CSS, modern
                UI systems, and subtle animations, translating Figma designs
                into pixel-perfect user experiences.
              </li>

              <li>
                <Highlight>Code Quality & Engineering Discipline</Highlight> — I
                enforce high coding standards using ESLint, Husky, and automated
                workflows to maintain long-term code health and team
                productivity.
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {approachCards.map((card, index) => (
            <div
              key={index}
              className="p-5 rounded-lg flex flex-col"
              style={{
                backgroundColor: themeColors.bg,
                border: `1px solid ${themeColors.border}`,
              }}
            >
              <div
                className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center text-2xl"
                style={{
                  backgroundColor: `${themeColors.primaryColor}15`,
                  color: themeColors.primaryColor,
                }}
              >
                {card.icon}
              </div>
              <h4
                className="text-lg font-semibold mb-2"
                style={{ color: themeColors.primaryColor }}
              >
                {card.title}
              </h4>
              <p className="text-sm" style={{ color: themeColors.summeryText }}>
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <h4
            className="text-lg font-semibold mb-4"
            style={{ color: themeColors.primaryColor }}
          >
            Upcoming Learning Goals
          </h4>
          <div className="flex flex-wrap gap-2">
            {[
              "Advanced React & Next.js Architecture",
              "Scalable MERN & Python Backend Systems",
              "System Design & Cloud Deployment",
              "AI Integration in Web Applications",
              "Performance & Security Optimization",
              "DevOps & CI/CD Automation",
            ].map((item, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs font-medium rounded-full"
                style={{
                  backgroundColor: `${themeColors.primaryColor}15`,
                  color: themeColors.primaryColor,
                  border: `1px solid ${themeColors.primaryColor}30`,
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(RightSideContent);
