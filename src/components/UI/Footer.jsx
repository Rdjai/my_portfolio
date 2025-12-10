import { motion } from "framer-motion";
import {
  Heart,
  Coffee,
  ArrowUp,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Sparkles,
  Code2,
  ExternalLink
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      href: "https://github.com/Rdjai",
      color: "hover:text-gray-300"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/jagannath-kashyap-81a05b225/",
      color: "hover:text-blue-400"
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      label: "Twitter",
      href: "https://x.com/JayKashyap32254",
      color: "hover:text-sky-400"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      href: "mailto:jagannathkashyap38@gmail.com",
      color: "hover:text-cyan-400"
    }
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Blogs", href: "/blogs" },
    { name: "Resume", href: "/resume" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <footer className="relative    mt-20">
      {/* Animated Background Elements */}


      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-8"></div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.div
              className="text-gray-400 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p className="flex items-center gap-2">
                © {currentYear} Jagannath Kashyap. All rights reserved.
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center gap-1">
                  Made with <Heart className="h-3 w-3 text-red-500 fill-red-500 animate-pulse" /> and
                  <Coffee className="h-3 w-3 text-amber-600 ml-1" />
                </span>
              </p>
            </motion.div>

            <div className="flex items-center gap-4 text-sm text-gray-400">
              <motion.a
                href="#"
                className="hover:text-[#ffdb70] transition-colors"
                whileHover={{ y: -2 }}
              >
                Privacy Policy
              </motion.a>
              <span className="text-gray-600">•</span>
              <motion.a
                href="#"
                className="hover:text-[#ffdb70] transition-colors"
                whileHover={{ y: -2 }}
              >
                Terms of Service
              </motion.a>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-gradient-to-r from-[#ffdb70] to-yellow-400 text-gray-900 shadow-lg hover:shadow-xl hover:shadow-yellow-500/25 transition-all duration-300 z-50"
          whileHover={{ y: -5, scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>

        {/* Gradient Border Bottom */}
        <div className="h-1 bg-gradient-to-r from-purple-600 via-[#ffdb70] to-blue-600"></div>
      </div>
    </footer>
  );
};

export default Footer;  