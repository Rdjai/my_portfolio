import { motion } from "framer-motion";
import {
  BookOpen,
  Calendar,
  Clock,
  ArrowUpRight,
  Tag,
  Sparkles,
  PenTool,
  ExternalLink,
  TrendingUp,
  Code2,
  Zap,
  SunMedium
} from "lucide-react";

const Blogs = () => {
  const blogPosts = [
    {
      title: "Redux vs Zustand: Which State Management Tool is the GOAT?",
      date: "Jun 5, 2025",
      readTime: "3 min read",
      link: "#",
      category: "React",
      tags: ["State Management", "React", "Performance"],
      featured: true,
      description: "A comprehensive comparison of Redux and Zustand for modern React applications, examining performance, developer experience, and scalability."
    },
    {
      title: "Top 5 VS Code Extensions for Frontend Developers",
      date: "May 26, 2025",
      readTime: "5 min read",
      link: "#",
      category: "Tools",
      tags: ["VS Code", "Productivity", "Extensions"],
      featured: true,
      description: "Boost your development workflow with these essential VS Code extensions that every frontend developer should have."
    },
    {
      title: "Let's Understand CI/CD Pipeline",
      date: "Feb 27, 2025",
      readTime: "5 min read",
      link: "#",
      category: "DevOps",
      tags: ["CI/CD", "Automation", "Best Practices"],
      featured: false,
      description: "Demystifying Continuous Integration and Continuous Deployment pipelines for modern web development."
    },
    {
      title: "Mastering React Hooks: Beyond useState and useEffect",
      date: "Jan 15, 2025",
      readTime: "8 min read",
      link: "#",
      category: "React",
      tags: ["React Hooks", "Advanced", "Custom Hooks"],
      featured: false,
      description: "Dive deep into advanced React hooks patterns and learn how to build custom hooks for complex scenarios."
    },
    {
      title: "Tailwind CSS vs Traditional CSS: When to Use What",
      date: "Dec 10, 2024",
      readTime: "6 min read",
      link: "#",
      category: "CSS",
      tags: ["Tailwind", "CSS", "Styling"],
      featured: false,
      description: "Comparing utility-first CSS frameworks with traditional approaches to help you choose the right tool for your project."
    },
    {
      title: "Building Scalable Flutter Architecture",
      date: "Nov 5, 2024",
      readTime: "7 min read",
      link: "#",
      category: "Flutter",
      tags: ["Flutter", "Architecture", "Mobile"],
      featured: false,
      description: "Best practices and patterns for building scalable and maintainable Flutter applications."
    }
  ];

  const categories = ["All", "React", "Tools", "DevOps", "CSS", "Flutter"];
  const stats = [
    { label: "Total Articles", value: "15+", icon: <BookOpen className="h-4 w-4" /> },
    { label: "Medium", value: "10+", icon: <SunMedium className="h-4 w-4" /> },
    { label: "Avg. Reading Time", value: "6 min", icon: <Clock className="h-4 w-4" /> },
    { label: "Topics Covered", value: "8+", icon: <Tag className="h-4 w-4" /> },
  ];

  return (
    <div className="min-h-screen text-gray-100">


      <div className="relative z-10">
        <motion.div
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
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
              <PenTool className="h-4 w-4 text-purple-400" />
              <span className="text-sm font-medium text-purple-300">Technical Writing</span>
            </div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffdb70] to-yellow-300">Blog</span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Sharing knowledge, documenting learnings, and helping fellow developers grow through
              technical articles and tutorials.
            </motion.p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-4 border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-purple-900/30 to-blue-900/30">
                    <div className="text-purple-400">{stat.icon}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Featured Articles */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Sparkles className="h-6 w-6 text-[#ffdb70]" />
              <h2 className="text-3xl font-bold text-white">Featured Articles</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {blogPosts.filter(post => post.featured).map((post, index) => (
                <motion.article
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 group-hover:border-purple-500/50 transition-all duration-300 h-full"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-500/20">
                        <Tag className="h-3 w-3 text-purple-400" />
                        <span className="text-xs font-medium text-purple-300">{post.category}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white group-hover:text-[#ffdb70] transition-colors duration-300 mb-3">
                      {post.title}
                    </h3>

                    <p className="text-gray-300 mb-4 line-clamp-2">
                      {post.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-lg bg-gray-800/50 border border-gray-700 text-xs text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                      <motion.div
                        className="flex items-center gap-2 text-sm font-medium text-[#ffdb70]"
                        whileHover={{ x: 5 }}
                      >
                        <span>Read Article</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </motion.div>
                    </div>
                  </a>
                </motion.article>
              ))}
            </div>
          </motion.div>

          {/* All Articles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <BookOpen className="h-6 w-6 text-[#ffdb70]" />
                <h2 className="text-3xl font-bold text-white">All Articles</h2>
              </div>
              <div className="flex gap-2 overflow-x-auto">
                {categories.map((category) => (
                  <button
                    key={category}
                    className="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap bg-gray-800/50 border border-gray-700 hover:border-purple-500 hover:bg-purple-900/20 transition-all duration-300"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.05 }}
                  whileHover={{ x: 5 }}
                >
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 group-hover:border-purple-500/50 transition-all duration-300"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                      <div className="lg:w-2/3">
                        <div className="flex items-center gap-4 mb-3">
                          <div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-gray-800/50 border border-gray-600">
                            <span className="text-xs font-medium text-gray-300">{post.category}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-400">
                            <Calendar className="h-3 w-3" />
                            <span>{post.date}</span>
                            <span className="text-gray-600">•</span>
                            <Clock className="h-3 w-3" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>

                        <h3 className="text-xl font-bold text-white group-hover:text-[#ffdb70] transition-colors duration-300 mb-2">
                          {post.title}
                        </h3>

                        <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                          {post.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {post.tags.slice(0, 2).map((tag, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 rounded-md bg-gray-800/50 border border-gray-700 text-xs text-gray-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="lg:w-1/3 flex items-center justify-end">
                        <motion.div
                          className="inline-flex items-center gap-2 text-sm font-medium text-[#ffdb70]"
                          whileHover={{ x: 5 }}
                        >
                          <span>Read</span>
                          <ArrowUpRight className="h-4 w-4" />
                        </motion.div>
                      </div>
                    </div>
                  </a>
                </motion.article>
              ))}
            </div>
          </motion.div>



          {/* Writing Platforms */}
          <motion.div
            className="mt-12 text-center"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <p className="text-gray-400 mb-4">Also writing on:</p>
            <div className="flex flex-wrap gap-4 justify-center">
              {["Hashnode", "Dev.to", "Medium", "Personal Blog"].map((platform) => (
                <motion.a
                  key={platform}
                  href="#"
                  className="px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 text-gray-300 hover:border-purple-500 hover:text-white transition-all duration-300"
                  whileHover={{ y: -2 }}
                >
                  {platform}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blogs;