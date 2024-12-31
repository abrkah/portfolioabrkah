export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];
export const gridItems = [
  {
    id: 1,
    title:
      "I excel in client collaboration, ensuring transparent communication.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title:
      "I adapt seamlessly to different time zones for effective communication.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stacks",
    description: "I strive for continuous improvement in my skills.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "A passionate tech enthusiast dedicated to innovative development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently crafting a cutting-edge JavaScript animation library.",
    description: "Get the inside scoop on my latest projects.",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Are you ready to collaborate on an exciting project?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Inventory Management System",
    des: "A comprehensive system to track, manage, and optimize the inventory of assets and tools, providing real-time insights and reports.",
    img: "/ims.PNG",
    iconLists: [
      "/react1.png",
      "/nest.jfif",
      "/ts.svg",
      "/node.svg",
      "/mysql.svg",
    ],
    link: "/ui.inventory.com",
  },
  {
    id: 2,
    title: "Job Portal System",
    des: "A dynamic platform that connects employers and job seekers, providing job listings, applications, and candidate management features.",
    img: "/jobportal.PNG",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/mongo.svg",
      "/express.svg",
    ],
    link: "/ui.jobportal.com",
  },
  {
    id: 3,
    title: "School Management System",
    des: "An integrated platform for managing school operations, including student records, grades, schedules, and communication between teachers, students, and parents.",
    img: "/school.avif",
    iconLists: [
      "/react.svg",
      "/tail.svg",
      "/ts.svg",
      "/node.svg",
      "/postgres.svg",
    ],
    link: "/ui.school.com",
  },
  {
    id: 4,
    title: "Automatic Vehicle Plate Number Recognition and Gate Control System",
    des: "A smart security solution using automated vehicle plate recognition and gate control systems for seamless vehicle entry and access management.",
    img: "/automatic.PNG",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/python.svg",
      "/raspberrypi.svg",
    ],
    link: "/ui.vehicleplate.com",
  },
];

export const testimonials = [
  {
    quote:
      "Ermiyas's ability to grasp complex requirements quickly and translate them into seamless, functional solutions was impressive. His professionalism and skillset were essential in the timely delivery of our project. We are highly satisfied with the results.",
    name: "Ermiyas Tadese",
    title: "Client",
  },
  {
    quote:
      "Tewdros's expertise in development and problem-solving ensured that our project ran smoothly from start to finish. His commitment to delivering results made him a reliable and valuable team member. We are grateful for his contribution.",
    name: "Tewdros Kirubel",
    title: "Client",
  },
  {
    quote:
      "Abirha's technical expertise, innovative approach, and attention to detail were integral to the success of our project. His ability to tackle complex challenges and deliver high-quality solutions made him an invaluable partner. He truly went above and beyond.",
    name: "Absra Kahsay",
    title: "Client",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];
export const workExperience = [
  {
    id: 1,
    title: "Frontend Development",
    desc: "Utilized React, Next.js, and Ant Design to create dynamic and responsive user interfaces. Focused on enhancing user experience through effective design and performance optimization.",
    className: "md:col-span-2",
    thumbnail: "/front.jfif", // Add appropriate thumbnail path
  },
  {
    id: 2,
    title: "Backend Development",
    desc: "Implemented server-side logic using NestJS and Express, ensuring seamless integration with frontend applications. Managed API development and database interactions for robust functionality.",
    className: "md:col-span-2",
    thumbnail: "/backend3.jfif", // Add appropriate thumbnail path
  },
  {
    id: 3,
    title: "Database Management",
    desc: "Designed and maintained MySQL databases, optimizing data storage and retrieval processes. Ensured data integrity and security while providing efficient access to application data.",
    className: "md:col-span-2",
    thumbnail: "/database.jfif", // Add appropriate thumbnail path
  },
  {
    id: 4,
    title: "Embedded Systems Development",
    desc: "Developed embedded systems solutions using Python, focusing on integrating hardware and software for real-time applications. Worked on projects involving sensors and microcontrollers.",
    className: "md:col-span-2",
    thumbnail: "/embeded.jfif", // Add appropriate thumbnail path
  },
  {
    id: 5,
    title: "Fullstack Development",
    desc: "Engaged in fullstack development using React, Next.js for frontend and NestJS, Express for backend. Managed the entire software development lifecycle, from concept to deployment, ensuring cohesive integration of all components.",
    className: "md:col-span-2",
    thumbnail: "/fullstack.jfif", // Add appropriate thumbnail path
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
