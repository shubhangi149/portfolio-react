// Personalize all content here
export const PROFILE = {
    name: "Shubhangi Bhausaheb Raundal",
    displayName: "Shubhangi Raundal",
    tag: "Aspiring Software Engineer • Final Year B.Tech at Sandip University",
    about:
        "Enthusiastic and detail-oriented Junior Python Developer with a strong foundation in Python programming and a passion for solving complex problems. Skilled in developing scripts for data manipulation, automation, and web scraping. Proficient in working with databases such as MySQL and MongoDB. A quick learner with excellent problem-solving skills and a commitment to delivering efficient and reliable solutions. Actively seeking an opportunity to contribute to impactful projects while growing technical expertise in a collaborative environment.",
    photo: "/dp.png",
    contactInfo: {
        location: { icon: "fa fa-map-marker", text: "Nashik, Maharashtra, India" },
        phone: { icon: "fa fa-phone", text: "+91 869 844 7820" },
        email: { icon: "fa fa-envelope", text: "shubhangiraundal2160@gmail.com" },
    },
	quickLinks: [
        { name: "About Me", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Resume", href: "/shubhangi_resume.pdf" },
    ],
	social_media_links: {
        LinkedIn: { url: "https://www.linkedin.com/in/shubhangi-raundal-721b96366/", icon: "fa fa-linkedin" },
        GitHub: { url: "https://github.com/shubhangi149", icon: "fa fa-github" },
        Resume: { url: "/shubhangi_resume.pdf", icon: "fa fa-file" },
    },
    emailjs_cred:{
        SERVICE_ID: import.meta.env.VITE_SERVICE_ID,
        TEMPLATE_ID: import.meta.env.VITE_TEMPLATE_ID,
        PUBLIC_KEY: import.meta.env.VITE_PUBLIC_KEY,
    },
    skills: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "HTML & CSS",
        "Python",
        "Java",
        "SQL",
        "Git & GitHub",
        "REST APIs",
    ],
    projects: [
        {
            title: "Book My Pandit",
            desc:
                "Book My Pandit is a web application built using Python (FastAPI) for the backend and React for the frontend, designed to help users easily book pandits (priests) for various religious ceremonies and events. The platform enables users to search for available pandits based on location, ceremony type, and preferred timing. MongoDB is used as the database to manage user data, appointments, and pandit profiles in real time. The application provides a clean, user-friendly interface, secure authentication, and a seamless booking workflow, making it simple and efficient for users to schedule their religious rituals online.",
            tech: ["Python", "FastAPI", "React", "MongoDB"],
            link: "#",
            repo: "#",
        }
    ],
    education: [
        {
            title: "B.Tech",
            period: "2023 — Present",
            detail: "Sandip University",
            marks: "N/A"
        },
        {
            title: "Diploma in Information Technology",
            period: "2020 — 2023",
            detail: "MSBTE",
            marks: "71.20%"
        },
        {
            title: "Intermediate",
            period: "2019 — 2020",
            detail: "Maharashtra Board",
            marks: "60%"
        },
        {
            title: "Matriculation",
            period: "2017 — 2018",
            detail: "Maharashtra Board",
            marks: "82.20%"
        },
    ],
    experiences:[
        {
            role: "Web Development Intern",
            company: "ExternsClub",
            period: "March 2024 – April 2024",
            responsibilities: [
                "Gained hands-on experience in web development by learning HTML, CSS, JavaScript, and Bootstrap.",
                "Developed a static website using modern web development practices.",
                "Successfully created a Static clone of a school website, showcasing attention to detail and design consistency."
            ]
        },
    ]
};
