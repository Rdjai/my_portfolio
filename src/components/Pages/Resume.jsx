import React from "react";

const Resume = () => {
    return (
        <div className="flex flex-col items-center p-10">
            <h1 className="text-3xl font-bold mb-6">My Resume</h1>

            {/* Embedded PDF Viewer */}
            <iframe
                src="my_resume_for_mern.pdf"
                title="resume"
                width="100%"
                height="600px"
                className="border rounded-xl shadow-lg"
            ></iframe>

            {/* Download Button */}
            <a
                href="my_resume_for_mern.pdf"
                download="Jagannath_Kashyap_Resume.pdf"
                className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
            >
                Download Resume
            </a>
        </div>
    );
};

export default Resume;
