import { AiFillAppstore } from "react-icons/ai";
import { FaMobileAlt, FaDatabase } from "react-icons/fa";
import { SiDocker } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { MdSmartToy } from "react-icons/md";

// Features Data
export const featuresData = [
  {
    id: 1,
    icon: <CgWebsite />,
    title: "Fullstack Development",
    des: "Building robust web applications from frontend to backend using React, Next.js, Node.js, and modern architectural patterns.",
  },
  {
    id: 2,
    icon: <FaMobileAlt />,
    title: "Mobile App Development",
    des: "Creating engaging and native-feeling mobile applications for Android and iOS using modern cross-platform or native tools.",
  },
  {
    id: 3,
    icon: <MdSmartToy />,
    title: "IoT & Alexa Skills",
    des: "Developing voice-first experiences and IoT integrations, including Alexa skills for home automation and presence detection.",
  },
  {
    id: 4,
    icon: <SiDocker />,
    title: "Systems Integration",
    des: "Designing scalable event-driven architectures and utilizing Docker/Kubernetes for reliable deployment environments.",
  },
  {
    id: 5,
    icon: <FaDatabase />,
    title: "Database Management",
    des: "Architecting and managing databases with PostgreSQL, ensuring data integrity and performance for complex applications.",
  },
  {
    id: 6,
    icon: <AiFillAppstore />,
    title: "Agile Management",
    des: "Certified Scrum Master with experience leading teams, improving processes, and ensuring smooth project delivery.",
  },
];
