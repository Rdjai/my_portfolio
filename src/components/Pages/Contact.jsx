import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  Twitter,
  Github,
  Calendar,
  MapPin,
  Phone,
  MessageSquare,
  Coffee,
  Sparkles,
  Clock,
  ArrowUpRight
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "jaykashyap283125@gmail.com",
      href: "mailto:jaykashyap283125@gmail.com",
      color: "from-blue-500 to-cyan-400",
      description: "For quick responses and general inquiries"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Location",
      value: "India • Open to Remote",
      href: "#",
      color: "from-purple-500 to-pink-500",
      description: "Available for remote work worldwide"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      value: "Available upon request",
      href: "#",
      color: "from-green-500 to-emerald-400",
      description: "+91-7456877315"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/jagannath-kashyap-81a05b225/",
      color: "from-blue-600 to-blue-700",
      description: "Professional profile and work experience"
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      label: "Twitter/X",
      href: "https://x.com/JayKashyap32254",
      color: "from-sky-400 to-blue-500",
      description: "Tech thoughts and daily updates"
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      href: "https://github.com/Rdjai",
      color: "from-gray-700 to-gray-900",
      description: "Open source projects and code"
    }
  ];

  return (
    <div className="min-h-screen  text-gray-100">


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
              <MessageSquare className="h-4 w-4 text-purple-400" />
              <span className="text-sm font-medium text-purple-300">Let's Connect</span>
            </div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffdb70] to-yellow-300">Touch</span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Whether you have a project idea, want to collaborate, or just want to say hello —
              I'd love to hear from you. Let's create something amazing together!
            </motion.p>
          </motion.div>

          {/* Contact Information Grid */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Coffee className="h-6 w-6 text-[#ffdb70]" />
                Contact Information
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    className={`block group relative overflow-hidden bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-transparent transition-all duration-300`}
                    whileHover={{ x: 10 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className={`absolute inset-0 bg-gradient-to-r ${info.color} opacity-0 group-hover:opacity-10`}></div>
                    </div>
                    <div className="relative">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${info.color} bg-opacity-20 flex-shrink-0`}>
                          <div className="text-gray-200">{info.icon}</div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div className="text-sm font-medium text-gray-400">{info.title}</div>
                            <ArrowUpRight className="h-4 w-4 text-gray-500 group-hover:text-[#ffdb70] transition-colors" />
                          </div>
                          <div className="text-lg font-semibold text-white group-hover:text-[#ffdb70] transition-colors mb-1">
                            {info.value}
                          </div>
                          <p className="text-sm text-gray-500">{info.description}</p>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links & Meeting */}
            <div className="space-y-8">
              {/* Social Links */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <Sparkles className="h-6 w-6 text-[#ffdb70]" />
                  Connect on Social
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group relative overflow-hidden bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-5 border border-gray-700 hover:border-transparent transition-all duration-300`}
                      whileHover={{ x: 5 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className={`absolute inset-0 bg-gradient-to-r ${social.color} opacity-0 group-hover:opacity-10`}></div>
                      </div>
                      <div className="relative flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-xl bg-gradient-to-br ${social.color} bg-opacity-20`}>
                            <div className="text-gray-200">{social.icon}</div>
                          </div>
                          <div>
                            <div className="text-lg font-semibold text-white group-hover:text-[#ffdb70] transition-colors">
                              {social.label}
                            </div>
                            <p className="text-sm text-gray-500">{social.description}</p>
                          </div>
                        </div>
                        <ArrowUpRight className="h-5 w-5 text-gray-500 group-hover:text-white transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Schedule Meeting Card */}
              <motion.div
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-purple-900/30 to-blue-900/30">
                    <Calendar className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">Schedule a Meeting</h4>
                    <p className="text-gray-400 text-sm">Let's chat face-to-face!</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  Prefer a video call? Book a 30-minute slot to discuss your project,
                  ask questions, or explore collaboration opportunities.
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                  <Clock className="h-4 w-4" />
                  <span>30 min • Flexible scheduling • Free consultation</span>
                </div>
                <motion.a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#ffdb70] to-yellow-400 text-gray-900 font-semibold rounded-lg hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Calendar className="h-5 w-5" />
                  Book a Meeting
                </motion.a>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Connect Section */}
          <motion.div
            className="mt-16 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Quickest Way to Reach Me
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                For the fastest response, please use email or LinkedIn. I typically respond
                within a few hours during business days.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="mailto:jaykashyap283125@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="h-5 w-5" />
                  Send Email
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/jagannath-kashyap-81a05b225/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-700 to-blue-800 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 border border-blue-600 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="h-5 w-5" />
                  Connect on LinkedIn
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Response Time Promise */}
          <motion.div
            className="mt-12 text-center"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700">
              <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-gray-300">
                <span className="font-semibold text-white">24-hour response time</span> guaranteed for all inquiries
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact; 