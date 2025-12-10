import { NavLink } from "react-router-dom";
import GitHubCalendar from "react-github-calendar";
import { motion } from "framer-motion";
import {
  Mail,
  Twitter,
  Linkedin,
  Github,
  Calendar,
  PenTool,
  Coffee,
  ExternalLink,
  Sparkles,
  Code2,
  Rocket,
  Zap,
  Users,
  BookOpen
} from "lucide-react";

const About = () => {
  const socialLinks = [
    {
      href: "mailto:jagannathkashyap38@gmail.com",
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      color: "from-blue-500 to-cyan-400"
    },
    {
      href: "https://x.com/JayKashyap32254",
      icon: <Twitter className="h-5 w-5" />,
      label: "Twitter",
      color: "from-sky-400 to-blue-500"
    },
    {
      href: "https://www.linkedin.com/in/jagannath-kashyap-81a05b225/",
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      color: "from-blue-600 to-blue-700"
    },
    {
      href: "https://github.com/Rdjai",
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      color: "from-gray-700 to-gray-900"
    },
  ];

  const stats = [
    { label: "Projects Built", value: "10+", icon: <Rocket className="h-4 w-4" /> },
    { label: "Open Source", value: "100%", icon: <Code2 className="h-4 w-4" /> },
    { label: "Blog Posts", value: "10+", icon: <PenTool className="h-4 w-4" /> },
  ];

  const skills = [
    "React.js", "Next.js", "TypeScript", "Tailwind CSS",
    "Flutter", "Dart", "Node.js", "MongoDB",
    "Firebase", "Git", "REST APIs", "Framer Motion"
  ];

  return (
    <div className="min-h-screen">


      <div className="relative z-10">
        <motion.div
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Hero Section */}
          <motion.div
            className="text-center mb-16"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-500/20">
              <Sparkles className="h-4 w-4 text-purple-400" />
              <span className="text-sm font-medium text-purple-300">Mern & Flutter Developer</span>
            </div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              Hey <span className="text-yellow-500">👋</span>, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffdb70] to-yellow-300">Jagannath</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Building <span className="font-semibold text-white">digital experiences</span> that solve
              real-world problems through clean code & innovative design
            </motion.p>

            {/* Social Links */}
            <motion.div
              className="flex justify-center gap-4 mb-12"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative group p-3 rounded-xl bg-gradient-to-br ${link.color} bg-opacity-10 backdrop-blur-sm border border-gray-700 hover:border-transparent transition-all duration-300`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <div className="text-gray-300 group-hover:text-white transition-colors">
                    {link.icon}
                  </div>
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-purple-900/30 to-blue-900/30">
                    <div className="text-purple-400">{stat.icon}</div>
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                </div>
                <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - About & Skills */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {/* About Section */}
              <div className="mb-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-8 w-1 bg-gradient-to-b from-[#ffdb70] to-yellow-400 rounded-full"></div>
                  <h2 className="text-2xl font-bold text-white">My Journey</h2>
                </div>

                <div className="space-y-6">
                  <motion.p
                    className="text-gray-300 text-lg leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    What started as <span className="font-semibold text-white">curiosity</span> quickly
                    evolved into a <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#ffdb70] to-yellow-300">passion</span> for creating
                    digital solutions. From my first "Hello World" to building complex applications,
                    every line of code has been a step toward mastering this craft.
                  </motion.p>

                  <motion.p
                    className="text-gray-300 text-lg leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    Today, I specialize in creating <span className="font-semibold text-white">scalable web applications</span>
                    and <span className="font-semibold text-white">cross-platform mobile solutions</span> with Flutter.
                    I believe in <NavLink to="/projects" className="text-[#ffdb70] hover:text-yellow-300 font-medium transition-colors">
                      building things that matter
                    </NavLink> — which is why everything I create is open source and community-driven.
                  </motion.p>
                </div>
              </div>

              {/* Skills Section */}
              <motion.div
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Zap className="h-5 w-5 text-[#ffdb70]" />
                  <h3 className="text-xl font-bold text-white">Tech Stack</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      className="px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-lg text-gray-300 text-sm font-medium hover:border-[#ffdb70] transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Connect & GitHub */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {/* Connect Section */}
              <motion.div
                className="mb-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Users className="h-5 w-5 text-[#ffdb70]" />
                  <h3 className="text-xl font-bold text-white">Let's Connect</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  I'm always excited to connect with fellow developers, creators, and innovators.
                  Whether you have a project in mind, want to collaborate, or just chat about tech —
                  I'd love to hear from you!
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-400">
                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm">Currently open to freelance projects</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></div>
                    <span className="text-sm">Exploring full-time opportunities</span>
                  </div>
                </div>
                <motion.div
                  className="mt-6"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <NavLink
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#ffdb70] to-yellow-400 text-gray-900 font-semibold rounded-lg hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300"
                  >
                    <span>Start a Conversation</span>
                    <ExternalLink className="h-4 w-4" />
                  </NavLink>
                </motion.div>
              </motion.div>

              {/* GitHub Calendar - FIXED */}
              <motion.div
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">GitHub Activity</h3>
                    <p className="text-sm text-gray-400">Consistency in code</p>
                  </div>
                  <Github className="h-6 w-6 text-gray-400" />
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <div className="p-4 bg-gray-900/50 rounded-xl">
                    <GitHubCalendar
                      username="Rdjai"
                      blockSize={10}
                      blockMargin={4}
                      fontSize={14}
                      theme={{
                        dark: ['#0d1117', '#161b22', '#0d4429', '#006d32', '#26a641'],
                      }}
                      style={{ margin: '0 auto' }}
                    />
                  </div>
                  <p className="text-center text-sm text-gray-400 mt-4">
                    Daily contributions to open source projects
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Writing Section */}
          <motion.div
            className="mt-12 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-purple-900/30 to-blue-900/30">
                <BookOpen className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Writing & Knowledge Sharing</h3>
                <p className="text-gray-400">Helping others grow through technical content</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              I believe knowledge grows when shared. That's why I write technical blogs and tutorials
              to help others in their engineering journey. From beginner guides to advanced concepts,
              I document my learnings to give back to the community that helped me grow.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <NavLink
                to="/blogs"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                <PenTool className="h-5 w-5" />
                <span>Read My Blogs</span>
              </NavLink>
            </motion.div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="mt-16 text-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <p className="text-lg text-gray-400 mb-6">
              Ready to bring your ideas to life?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <NavLink
                  to="/projects"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                >
                  <Code2 className="h-5 w-5" />
                  <span>View My Work</span>
                </NavLink>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <NavLink
                  to="/resume"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-gray-700 to-gray-800 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-gray-500/25 border border-gray-600 transition-all duration-300"
                >
                  <span>View Resume</span>
                  <ExternalLink className="h-5 w-5" />
                </NavLink>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;