import { motion } from "framer-motion";
import {
    Download,
    FileText,
    Briefcase,
    GraduationCap,
    Award,
    Code2,
    Users,
    Calendar,
    MapPin,
    ExternalLink,
    Sparkles,
    Mail,
    Phone,
    Linkedin,
    Github,
    ArrowDownToLine
} from "lucide-react";

const Resume = () => {
    const skills = {
        "Frontend": ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript", "HTML/CSS"],
        "Backend": ["Node.js", "Express", "MongoDB", "REST APIs", "JWT", "Firebase"],
        "Mobile": ["Flutter", "Dart", "React Native", "Android Studio"],
        "Tools": ["Git", "VS Code", "Postman", "Figma", "Docker", "AWS"]
    };

    const experience = [
        // {
        //     role: "Full Stack Developer",
        //     company: "Freelance",
        //     period: "2023 - Present",
        //     location: "Remote",
        //     description: "Building web and mobile applications for clients across various industries.",
        //     achievements: ["Delivered 10+ projects", "Improved app performance by 40%", "Maintained 100% client satisfaction"]
        // },
        // {
        //     role: "Web Development Intern",
        //     company: "Tech Com   pany",
        //     period: "2023",
        //     location: "Remote",
        //     description: "Contributed to frontend development and collaborated on team projects.",
        //     achievements: ["Built 5+ features", "Reduced load time by 30%", "Implemented responsive designs"]
        // }
    ];

    const education = [
        {
            degree: "MCA",
            institution: " Lakshmi Narain College of Technology",
            period: "2024 - 2026",
            location: "Bhopal, MP",
            grade: "CGPA: 7.8/10"
        },
        {
            degree: "BCA",
            institution: "Dr. MPS Group of Institutions",
            period: "2021 - 2024",
            location: "Agra, up",
            grade: "CGPA: 69.5/100"
        }
    ];

    const certifications = [
        "MERN Stack Development",
        "Flutter & Dart - The Complete Guide",
        "AWS Certified Cloud Practitioner",
        "React - The Complete Guide"
    ];

    const contactInfo = [
        {
            icon: <Mail className="h-4 w-4" />,
            text: "jagannathkashyap38@gmail.com",
            href: "mailto:jagannathkashyap38@gmail.com"
        },
        {
            icon: <Phone className="h-4 w-4" />,
            text: "Available upon request",
            href: "#"
        },
        {
            icon: <MapPin className="h-4 w-4" />,
            text: "India • Open to Remote",
            href: "#"
        }
    ];

    const socialLinks = [
        {
            icon: <Linkedin className="h-4 w-4" />,
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/jagannath-kashyap-81a05b225/"
        },
        {
            icon: <Github className="h-4 w-4" />,
            label: "GitHub",
            href: "https://github.com/Rdjai"
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
                        className="text-center mb-12"
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-500/20">
                            <FileText className="h-4 w-4 text-purple-400" />
                            <span className="text-sm font-medium text-purple-300">Professional Profile</span>
                        </div>

                        <motion.h1
                            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent"
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffdb70] to-yellow-300">Resume</span>
                        </motion.h1>

                        <motion.p
                            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            Full Stack Developer specializing in modern web and mobile applications.
                            Passionate about creating scalable solutions and delivering exceptional user experiences.
                        </motion.p>

                        {/* Action Buttons */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            <motion.a
                                href="my_resume_for_mern.pdf"
                                download="Jagannath_Kashyap_Resume.pdf"
                                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#ffdb70] to-yellow-400 text-gray-900 font-semibold rounded-xl hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Download className="h-5 w-5" />
                                Download PDF Resume
                            </motion.a>

                            <motion.a
                                href="mailto:jagannathkashyap38@gmail.com"
                                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/25 border border-purple-500/50 transition-all duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Mail className="h-5 w-5" />
                                Contact for Opportunities
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left Column - Contact & Skills */}
                        <motion.div
                            className="space-y-8"
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            {/* Contact Info */}
                            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                                    <Sparkles className="h-5 w-5 text-[#ffdb70]" />
                                    Contact Information
                                </h3>
                                <div className="space-y-3">
                                    {contactInfo.map((info, index) => (
                                        <a
                                            key={index}
                                            href={info.href}
                                            className="flex items-center gap-3 text-gray-300 hover:text-[#ffdb70] transition-colors"
                                        >
                                            {info.icon}
                                            <span className="text-sm">{info.text}</span>
                                        </a>
                                    ))}
                                </div>

                                {/* Social Links */}
                                <div className="mt-6 pt-6 border-t border-gray-700">
                                    <div className="flex gap-4">
                                        {socialLinks.map((social, index) => (
                                            <a
                                                key={index}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-purple-500 hover:bg-purple-900/20 transition-all duration-300"
                                            >
                                                <div className="text-gray-300 hover:text-white">
                                                    {social.icon}
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Skills */}
                            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                    <Code2 className="h-5 w-5 text-[#ffdb70]" />
                                    Technical Skills
                                </h3>
                                <div className="space-y-6">
                                    {Object.entries(skills).map(([category, items], index) => (
                                        <div key={category}>
                                            <h4 className="text-sm font-semibold text-gray-400 mb-2">{category}</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {items.map((skill, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-3 py-1.5 rounded-lg bg-gray-800/50 border border-gray-700 text-sm text-gray-300"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Middle Column - Experience & Education */}
                        <motion.div
                            className="lg:col-span-2 space-y-8"
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            {/* Experience */}
                            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
                                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                    <Briefcase className="h-6 w-6 text-[#ffdb70]" />
                                    Work Experience
                                </h3>
                                <div className="space-y-8">
                                    {experience.map((exp, index) => (
                                        <motion.div
                                            key={index}
                                            className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-gradient-to-b before:from-[#ffdb70] before:via-yellow-400 before:to-transparent"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.5 + index * 0.1 }}
                                        >
                                            <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-gradient-to-r from-[#ffdb70] to-yellow-400"></div>

                                            <div className="mb-2">
                                                <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                                                <div className="flex flex-wrap items-center gap-2 text-gray-400 text-sm mt-1">
                                                    <span className="font-medium">{exp.company}</span>
                                                    <span className="text-gray-600">•</span>
                                                    <Calendar className="h-3 w-3" />
                                                    <span>{exp.period}</span>
                                                    <span className="text-gray-600">•</span>
                                                    <MapPin className="h-3 w-3" />
                                                    <span>{exp.location}</span>
                                                </div>
                                            </div>

                                            <p className="text-gray-300 mb-3">{exp.description}</p>

                                            <div className="space-y-2">
                                                {exp.achievements.map((achievement, idx) => (
                                                    <div key={idx} className="flex items-start gap-2">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-[#ffdb70] mt-2"></div>
                                                        <span className="text-sm text-gray-300">{achievement}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Education & Certifications */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Education */}
                                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
                                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                        <GraduationCap className="h-5 w-5 text-[#ffdb70]" />
                                        Education
                                    </h3>
                                    <div className="space-y-6">
                                        {education.map((edu, index) => (
                                            <div key={index} className="space-y-2">
                                                <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                                                <div className="flex items-center gap-2 text-gray-400 text-sm">
                                                    <Calendar className="h-3 w-3" />
                                                    <span>{edu.period}</span>
                                                </div>
                                                <p className="text-gray-300">{edu.institution}</p>
                                                <p className="text-gray-400 text-sm">{edu.location}</p>
                                                <p className="text-[#ffdb70] text-sm font-medium">{edu.grade}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Certifications */}
                                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
                                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                        <Award className="h-5 w-5 text-[#ffdb70]" />
                                        Certifications
                                    </h3>
                                    <div className="space-y-3">
                                        {certifications.map((cert, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/50 border border-gray-700"
                                            >
                                                <div className="w-2 h-2 rounded-full bg-[#ffdb70]"></div>
                                                <span className="text-gray-300 text-sm">{cert}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* PDF Viewer Section */}
                    <motion.div
                        className="mt-16"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-1">Interactive Resume Preview</h3>
                                    <p className="text-gray-400">View or download the complete PDF version</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <motion.a
                                        href="my_resume_for_mern.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-blue-500 hover:bg-blue-900/20 transition-all duration-300"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <ExternalLink className="h-4 w-4" />
                                        <span className="text-sm">Open in New Tab</span>
                                    </motion.a>
                                    <motion.a
                                        href="my_resume_for_mern.pdf"
                                        download="Jagannath_Kashyap_Resume.pdf"
                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#ffdb70] to-yellow-400 text-gray-900 font-semibold transition-all duration-300"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <ArrowDownToLine className="h-4 w-4" />
                                        <span className="text-sm">Download</span>
                                    </motion.a>
                                </div>
                            </div>

                            <div className="rounded-xl overflow-hidden border border-gray-700 bg-gray-900">
                                <iframe
                                    src="my_resume_for_mern.pdf"
                                    title="resume"
                                    width="100%"
                                    height="600px"
                                    className="border-0"
                                ></iframe>
                            </div>

                            <div className="mt-4 flex flex-wrap items-center justify-between gap-4 text-sm text-gray-400">
                                <div className="flex items-center gap-4">
                                    <span>File: my_resume_for_mern.pdf</span>
                                    <span className="text-gray-600">•</span>
                                    <span>Last updated: Recently</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Users className="h-3 w-3" />
                                    <span>This resume has been viewed 500+ times</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* CTA Section */}
                    <motion.div
                        className="mt-16 text-center"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.7 }}
                    >
                        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                            <h3 className="text-2xl font-bold text-white mb-4">
                                Interested in Working Together?
                            </h3>
                            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                                I'm currently open to new opportunities, freelance projects, and collaborations.
                                Let's discuss how we can work together to build something amazing.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <motion.a
                                    href="mailto:jagannathkashyap38@gmail.com"
                                    className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#ffdb70] to-yellow-400 text-gray-900 font-semibold rounded-xl hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Mail className="h-5 w-5" />
                                    Contact Me
                                </motion.a>
                                <motion.a
                                    href="/projects"
                                    className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/25 border border-purple-500/50 transition-all duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Briefcase className="h-5 w-5" />
                                    View Projects
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Resume;      