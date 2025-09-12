import { motion } from "framer-motion";

const Projects = () => {
  const personalProjects = [
    {
      Id: "0",
      title: "Zore App 🍽️🎬",
      description:
        "Zore App is a Zomato-inspired food delivery platform with integrated Reels feature. Users can browse restaurants, watch reels, place orders, track delivery, and interact with other users. The app includes Admin and Rider dashboards, AI-powered recommendations, auto-generated captions for reels, and a complete menu/order management system.",
      github: "https://github.com/yourusername/zore-app", // replace with actual repo link
      live: "#", // replace with live link if deployed
      technologies: [
        { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "TailwindCSS", icon: "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000" },
        { name: "JWT Authentication", icon: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/4/jwt-icon-138bxvrhijus263d2f2wur.png/jwt-icon-aqjx58uyj3lrxtborzgyg.png?_a=DATAdtAAZAA0" }
      ],
    }
    ,

    {
      Id: "1",
      title: "Twitter Clone",
      description:
        "Built a fully functional Twitter clone using the MERN stack. Implemented features like user authentication, tweeting, liking, retweeting, and following. Designed a responsive UI using React and managed backend using Node.js, Express, and MongoDB.",
      github: "https://github.com/Rdjai/twitterclone",
      live: "#",
      technologies: [
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
        { name: "Tailwind CSS", icon: "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000" },
        { name: "JWT Authentication", icon: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/4/jwt-icon-138bxvrhijus263d2f2wur.png/jwt-icon-aqjx58uyj3lrxtborzgyg.png?_a=DATAdtAAZAA0" }
      ],
    },

    {
      Id: "2",
      title: "Movie Collection App",
      description:
        "Developed a movie collection app using Flutter integrated with the TMDB API. Features include searching movies, viewing details, and saving to favorites. Deployed via Android Studio and VS Code.",
      github: "#",
      live: "#",
      technologies: [
        { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
        { name: "TMDB API", icon: "https://www.themoviedb.org/assets/2/v4/logos/stacked-blue-f39d9c69bcf3ebc2c652b67c9b5423c4aa14f4c5c5b244fbd2381831c2b1db57.svg" },
        { name: "Android Studio", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" },
        { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" }
      ],
    },

    {
      Id: "3",
      title: "ShortQR",
      description:
        "A cross-platform URL shortener and QR generator. Features custom aliases, JWT-based authentication, click analytics, QR code download, and a dashboard to manage links and stats. Built for web (MERN) and a companion Flutter app for mobile.",
      github: "https://github.com/Rdjai/shortQr/tree/master",
      live: "#",
      technologies: [
        { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "JWT", icon: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/4/jwt-icon-138bxvrhijus263d2f2wur.png/jwt-icon-aqjx58uyj3lrxtborzgyg.png?_a=DATAdtAAZAA0" },
        { name: "QR Code", icon: "https://upload.wikimedia.org/wikipedia/commons/5/5e/QR_Code_example.svg" },
        { name: "Tailwind CSS", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/375px-QR_code_for_mobile_English_Wikipedia.svg.png" },
        { name: "Flutter (mobile)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" }
      ],
    },

    {
      Id: "4",
      title: "AJ Jewellery Shop",
      description:
        "A jewelry e-commerce web app built using the MERN stack. Features product listing, cart, order tracking, and admin dashboard for inventory management. Mobile responsive UI and secure backend APIs.",
      github: "https://github.com/Rdjai/aj_jewellary_shop",
      live: "#",
      technologies: [
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Stripe (payments)", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Stripe_Logo%2C_revised_2016.png" }
      ],
    },

    {
      Id: "5",
      title: "Notebook App",
      description:
        "Feature-rich note-taking app built with Flutter (frontend) and Node.js, Express, MongoDB (backend). Supports user login, rich text notes, image upload, and cloud storage. Designed for performance and ease of use.",
      github: "https://github.com/Rdjai/notebook",
      live: "#",
      technologies: [
        { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
      ],
    }
  ];


  return (
    <motion.div

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
                  <p className="text-[#d6d6d6] text-base mb-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-3 mb-4">
                    {project.technologies.map((tech, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 bg-[#1e1e1e] px-3 py-1 rounded-xl shadow-md hover:shadow-lg transition"
                      >
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className="w-5 h-5 object-contain"
                        />
                        <span className="text-sm text-[#fafafa]">{tech.name}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-5 mt-4">
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
