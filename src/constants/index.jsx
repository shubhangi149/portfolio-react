// Personalize all content here
export const PROFILE = {
    name: "Shubhangi Bhausaheb Raundal",
    tag: "Aspiring Software Engineer • Final Year B.Tech at Sandip University",
    about:
        "I'm a final-year B.Tech student at Sandip University. I love building user-friendly web apps, exploring algorithms, and learning by doing. I'm seeking internship/full-time opportunities to grow and contribute to meaningful products.",
    location: "Nashik, India",
    email: "shubhangiraundal2160@gmail.com",
    phone: "+91-8698447820",
    photo: "/dgp.png",
    links: {
        github: "https://github.com/shubhangi149",
        linkedin: "https://www.linkedin.com/in/shubhangi-raundal-721b96366/",
        resume: "/resume.pdf",
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
                "'Book My Pandit' is a mobile application built using Java for Android development, designed to help users easily book pandits (priests) for various religious ceremonies and events. The app allows users to search for available pandits based on their location, preferred ceremony type, and timing. Firebase is used as the backend database to manage user data, appointments, and pandit profiles in real-time. The application offers a user-friendly interface, secure login, and seamless booking process, making it convenient for users to schedule their religious rituals with just a few taps. ",
            tech: ["Java", "Android Stdio", "Firebase"],
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
