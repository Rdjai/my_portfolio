import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  ArrowUpRight,
  Sparkles,
  Code2,
  Smartphone,
  Server,
  Database,
  Layers,
  Rocket,
  Zap
} from "lucide-react";

const Projects = () => {
  const personalProjects = [
    {
      Id: "0",
      title: "RapidReport – Public Safety & SOS Alert System",
      description:
        "An anonymous public safety platform for reporting incidents, tracking area crime heatmaps, and raising SOS alerts. Features volunteer tracking, real-time alerts with Socket.io, image analysis, and location-based crime indicators.",
      github: "https://github.com/Rdjai/repidreport",
      live: "https://repidreport.vercel.app/",
      technologies: [
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "React.js (TypeScript)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Socket.io (Real-time)", icon: "https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg" },
        { name: "Leaflet / Mapbox", icon: "https://upload.wikimedia.org/wikipedia/commons/2/25/Mapbox_logo_2019.svg" }
      ],
      category: "Full Stack",
      featured: true
    },

    {
      id: "1",
      title: "Zore App 🍽️🎬",
      description:
        "Zore App is a Zomato-inspired food delivery platform with integrated Reels feature. Users can browse restaurants, watch reels, place orders, track delivery, and interact with other users. The app includes Admin and Rider dashboards, AI-powered recommendations, auto-generated captions for reels, and a complete menu/order management system.",
      github: "https://github.com/Rdjai/Zore-Food-Ordering-Reels-Platform",
      live: "#",
      technologies: [
        { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", color: "from-blue-400 to-cyan-400" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "from-green-500 to-emerald-400" },
        { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", color: "from-gray-400 to-gray-300" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "from-green-600 to-green-400" },
        { name: "TailwindCSS", icon: "https://img.icons8.com/color/48/tailwindcss.png", color: "from-cyan-400 to-blue-500" },
        { name: "JWT", icon: "https://jwt.io/img/pic_logo.svg", color: "from-purple-500 to-pink-500" }
      ],
      category: "Full Stack",
      featured: true
    },
    {
      Id: "2",
      title: "Taskify – Productivity & Task Management App",
      description:
        "A full-featured task management application built with MERN + TypeScript. Includes project boards, drag-and-drop tasks, deadlines, reminders, and team collaboration features. Clean UI and optimized state management for a smooth user experience.",
      github: "https://github.com/Rdjai/task_management",   // change if needed
      live: "https://task-management-tawny-mu-73.vercel.app/",
      technologies: [
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "React.js (TypeScript)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Redux / Zustand", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" }
      ],
      category: "Full Stack",
      featured: true
    },

    {
      id: "3",
      title: "Twitter Clone",
      description:
        "Built a fully functional Twitter clone using the MERN stack. Implemented features like user authentication, tweeting, liking, retweeting, and following. Designed a responsive UI using React and managed backend using Node.js, Express, and MongoDB.",
      github: "https://github.com/Rdjai/twitterclone",
      live: "#",
      technologies: [
        { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "from-cyan-400 to-blue-500" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "from-green-500 to-emerald-400" },
        { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", color: "from-gray-400 to-gray-300" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "from-green-600 to-green-400" },
        { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg", color: "from-purple-600 to-pink-500" },
        { name: "Tailwind CSS", icon: "https://img.icons8.com/color/48/tailwindcss.png", color: "from-cyan-400 to-blue-500" }
      ],
      category: "Full Stack",
      featured: true
    },
    {
      id: "4",
      title: "Movie Collection App",
      description:
        "Developed a movie collection app using Flutter integrated with the TMDB API. Features include searching movies, viewing details, saving to favorites, and personalized recommendations. Deployed via Android Studio and VS Code.",
      github: "#",
      live: "#",
      technologies: [
        { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", color: "from-blue-400 to-cyan-400" },
        { name: "TMDB API", icon: "https://www.themoviedb.org/assets/2/v4/logos/stacked-blue-f39d9c69bcf3ebc2c652b67c9b5423c4aa14f4c5c5b244fbd2381831c2b1db57.svg", color: "from-blue-600 to-blue-700" },
        { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg", color: "from-blue-500 to-cyan-300" },
        { name: "Android Studio", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg", color: "from-green-500 to-emerald-400" }
      ],
      category: "Mobile App",
      featured: false
    },
    {
      id: "5",
      title: "ShortQR",
      description:
        "A cross-platform URL shortener and QR generator. Features custom aliases, JWT-based authentication, click analytics, QR code download, and a dashboard to manage links and stats. Built for web (MERN) and a companion Flutter app for mobile.",
      github: "https://github.com/Rdjai/shortQr/tree/master",
      live: "#",
      technologies: [
        { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "from-cyan-400 to-blue-500" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "from-green-500 to-emerald-400" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "from-green-600 to-green-400" },
        { name: "QR Code", icon: "https://upload.wikimedia.org/wikipedia/commons/5/5e/QR_Code_example.svg", color: "from-black to-gray-800" },
        { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", color: "from-blue-400 to-cyan-400" }
      ],
      category: "Full Stack",
      featured: false
    },
    {
      id: "6",
      title: "AJ Jewellery Shop",
      description:
        "A jewelry e-commerce web app built using the MERN stack. Features product listing, cart, order tracking, and admin dashboard for inventory management. Mobile responsive UI and secure backend APIs with Stripe payments integration.",
      github: "https://github.com/Rdjai/aj_jewellary_shop",
      live: "#",
      technologies: [
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "from-green-600 to-green-400" },
        { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", color: "from-gray-400 to-gray-300" },
        { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "from-cyan-400 to-blue-500" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "from-green-500 to-emerald-400" },
        { name: "Stripe", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stripe/stripe-original.svg", color: "from-purple-500 to-blue-600" }
      ],
      category: "E-commerce",
      featured: false
    },
    {
      id: "7",
      title: "Notebook App",
      description:
        "Feature-rich note-taking app built with Flutter (frontend) and Node.js, Express, MongoDB (backend). Supports user login, rich text notes, image upload, and cloud storage. Designed for performance and ease of use.",
      github: "https://github.com/Rdjai/notebook",
      live: "#",
      technologies: [
        { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", color: "from-blue-400 to-cyan-400" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "from-green-500 to-emerald-400" },
        { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", color: "from-gray-400 to-gray-300" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "from-green-600 to-green-400" }
      ],
      category: "Mobile App",
      featured: false
    }
  ];

  const categories = ["All", "Full Stack", "Mobile App", "E-commerce"];

  return (
    <div className="min-h-screen  text-gray-100">
      {/* Animated Background */}


      <div className="relative z-10">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-500/20">
              <Rocket className="h-4 w-4 text-purple-400" />
              <span className="text-sm font-medium text-purple-300">Featured Projects</span>
            </div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffdb70] to-yellow-300">Projects</span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              A collection of projects where I transform ideas into functional applications.
              Each project represents a unique challenge and learning experience.
            </motion.p>
          </motion.div>

          {/* Featured Projects */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Sparkles className="h-6 w-6 text-[#ffdb70]" />
              <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {personalProjects.filter(p => p.featured).map((project, index) => (
                <motion.div
                  key={project.id}
                  className="group relative"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 group-hover:border-purple-500/50 transition-all duration-300 overflow-hidden">
                    {/* Project Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-500/20 mb-3">
                          <Code2 className="h-3 w-3 text-purple-400" />
                          <span className="text-xs font-medium text-purple-300">{project.category}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-[#ffdb70] transition-colors duration-300">
                          {project.title}
                        </h3>
                      </div>
                      <div className="flex gap-2">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-purple-500 hover:bg-purple-900/20 transition-all duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="h-5 w-5 text-gray-300 hover:text-white" />
                        </motion.a>
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-blue-500 hover:bg-blue-900/20 transition-all duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="h-5 w-5 text-gray-300 hover:text-white" />
                        </motion.a>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-6 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 4).map((tech, idx) => (
                        <motion.div
                          key={idx}
                          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-br ${tech.color} bg-opacity-20 backdrop-blur-sm border border-gray-700`}
                          whileHover={{ scale: 1.05 }}
                        >
                          <img
                            src={tech.icon}
                            alt={tech.name}
                            className="w-4 h-4 object-contain"
                          />
                          <span className="text-xs font-medium text-gray-200">{tech.name}</span>
                        </motion.div>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-3 py-1.5 rounded-lg bg-gray-800/50 border border-gray-700 text-xs text-gray-400">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* View Project Button */}
                    <motion.div
                      className="flex items-center gap-2 text-sm font-medium text-[#ffdb70] group/view cursor-pointer"
                      whileHover={{ x: 5 }}
                    >
                      <span>View Project Details</span>
                      <ArrowUpRight className="h-4 w-4 group-hover/view:translate-x-1 group-hover/view:-translate-y-1 transition-transform" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* All Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <Layers className="h-6 w-6 text-[#ffdb70]" />
                <h2 className="text-3xl font-bold text-white">All Projects</h2>
              </div>
              <div className="flex gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-gray-800/50 border border-gray-700 hover:border-purple-500 hover:bg-purple-900/20 transition-all duration-300"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {personalProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 group-hover:border-purple-500/50 transition-all duration-300 h-full">
                    {/* Project Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-gray-800/50 border border-gray-600 mb-2">
                          {project.category === "Mobile App" ? (
                            <Smartphone className="h-3 w-3 text-blue-400" />
                          ) : project.category === "Full Stack" ? (
                            <Server className="h-3 w-3 text-green-400" />
                          ) : (
                            <Database className="h-3 w-3 text-yellow-400" />
                          )}
                          <span className="text-xs font-medium text-gray-300">{project.category}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-[#ffdb70] transition-colors duration-300">
                          {project.title}
                        </h3>
                      </div>
                      <div className="flex gap-2">
                        {project.github !== "#" && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg bg-gray-800/50 border border-gray-600 hover:border-gray-400 hover:bg-gray-700/50 transition-all duration-300"
                          >
                            <Github className="h-4 w-4 text-gray-300" />
                          </a>
                        )}
                        {project.live !== "#" && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg bg-gray-800/50 border border-gray-600 hover:border-gray-400 hover:bg-gray-700/50 transition-all duration-300"
                          >
                            <ExternalLink className="h-4 w-4 text-gray-300" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-gray-800/50 border border-gray-700"
                        >
                          <img
                            src={tech.icon}
                            alt={tech.name}
                            className="w-3.5 h-3.5 object-contain"
                          />
                          <span className="text-xs text-gray-300">{tech.name}</span>
                        </div>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 rounded-md bg-gray-800/50 border border-gray-700 text-xs text-gray-400">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* View More Button */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <Zap className="h-3 w-3" />
                        <span>Click to explore</span>
                      </div>
                      <motion.div
                        className="flex items-center gap-1 text-sm font-medium text-[#ffdb70] cursor-pointer"
                        whileHover={{ x: 5 }}
                      >
                        <span>View</span>
                        <ArrowUpRight className="h-3 w-3" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="mt-20 text-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4">
                Want to build something amazing together?
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                I'm always open to discussing new projects, creative ideas, or opportunities
                to be part of your vision. Let's create something extraordinary!
              </p>
              <motion.div
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#ffdb70] to-yellow-400 text-gray-900 font-semibold rounded-lg hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="h-5 w-5" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;