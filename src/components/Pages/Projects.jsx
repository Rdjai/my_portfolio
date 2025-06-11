import { motion } from "framer-motion";

const Projects = () => {
  const personalProjects = [
    {
      Id: "1",
      title: "Twitter Clone",
      description:
        "Built a fully functional Twitter clone using the MERN stack. Implemented features like user authentication, tweeting, liking, retweeting, and following. Designed a responsive UI using React and managed backend using Node.js, Express, and MongoDB.",
      github: "https://github.com/Rdjai/twitterclone",
      live: "#",
    },
    {
      Id: "2",
      title: "Movie Collection App",
      description:
        "Developed a movie collection app using Flutter integrated with the TMDB API. Features include searching movies, viewing details, and saving to favorites. Deployed via Android Studio and VS Code.",
      github: "#",
      live: "#",
    },
    {
      Id: "3",
      title: "ShortQR App",
      description:
        "Built a cross-platform URL shortener and QR generator using MERN for web and Flutter for Android. Includes custom aliasing, JWT authentication, click analytics, and QR code downloads.",
      github: "https://github.com/Rdjai/shortQr/tree/master",
      live: "#",
    },
    {
      Id: "4",
      title: "AJ Jewellery Shop",
      description:
        "A jewelry e-commerce web app built using the MERN stack. Features product listing, cart, order tracking, and admin dashboard for inventory management. Mobile responsive UI and secure backend APIs.",
      github: "https://github.com/Rdjai/aj_jewellary_shop",
      live: "#",
    },
    {
      Id: "5",
      title: "Notebook App",
      description:
        "Feature-rich note-taking app built with Flutter (frontend) and Node.js, Express, MongoDB (backend). Supports user login, rich text notes, image upload, and cloud storage. Designed for performance and ease of use.",
      github: "https://github.com/Rdjai/notebook",
      live: "#",
    },
  ];

  return (
    <motion.div
      className="max-w-3xl mx-auto px-5"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <motion.section
        className="mb-10"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold text-[#fafafa] mb-8 border-l-2 pl-2 rounded-2xl border-[#d2bb77]">
          Personal Projects
        </h2>
        <div className="flex flex-col gap-10">
          {personalProjects.map((project, id) => (
            <motion.div
              key={id}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + id * 0.1, duration: 0.5 }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#ffdb70] mb-1 flex items-center gap-2">
                    <span className="inline-block w-2 h-2 bg-[#ffdb70] rounded-full"></span>
                    {project.title}
                  </h3>
                  <p className="text-[#d6d6d6] text-base mb-2">
                    {project.description}
                  </p>
                  <div className="flex gap-5 mt-5">
                    <a
                      href={project.github}
                      className="text-[#ffdb70] hover:text-[#d2bb77] flex items-center border-1 rounded-2xl px-4"
                    >
                      <span>Code</span>
                    </a>
                    <a
                      href={project.live}
                      className="text-[#ffdb70] hover:text-[#d2bb77] flex items-center border-1 rounded-2xl px-4"
                    >
                      <span>Live</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="absolute left-0 top-full w-full h-px bg-gradient-to-r from-[#ffdb70]/60 via-[#d2bb77]/30 to-transparent mt-6"></div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Projects;
