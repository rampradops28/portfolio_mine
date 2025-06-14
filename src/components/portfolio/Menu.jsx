import task from "../../assets/task_management_img.png"
import pos from "../../assets/restaurant_management_img.png" 
import xclone from "../../assets/x_clone_img.png"
import ml from "../../assets/ml_project_img.png"
import python from '../../assets/python1.png';
import react from '../../assets/react.png';

export const portfolioData = [
  {
    id: 1,
    title: "Task Management",
    description: "A MERN stack-based task management app with authentication and role-based access.",
    image: task, 
    category: ["Full Stack","MERN"],
    url: "https://task-management-mern-amber.vercel.app",
    repositoryUrl: "https://github.com/rampradops28/Task_Management_MERN"
  },
  {
    id: 2,
    title: "Restaurant POS System",
    description: "Full-stack restaurant POS system with order, billing, and product management.",
    image: pos,
    category: ["Full Stack","MERN"],
    url: "https://restaurant-pos-system-mern.vercel.app",
    repositoryUrl: "https://github.com/rampradops28/Restaurant_pos_System_MERN"
  },
  {
    id: 3,
    title: "VibeX",
    description: "Music web app interface inspired by Spotify using React.",
    image: xclone,
    category: ["Full Stack",,"MERN"],
    url: "https://github.com/rampradops28/react-projects",
    repositoryUrl: "https://github.com/rampradops28/VibeX"
  },
  {
    id: 4,
    title: "Plagiarism Detection",
    description: "Machine learning-based plagiarism detection tool using Python and NLP.",
    image: ml,
    category: ["Full Stack","Python"],
    url: "",
    repositoryUrl: "https://github.com/rampradops28/plagarism_detection_ml"
  },
  {
    id: 5,
    title: "Web Scraping Data",
    description: "Python project to scrape and extract data from various websites.",
    image: python,
    category: ["Python"],
    url: "https://github.com/rampradops28/web_scrab/tree/main",
    repositoryUrl: "https://github.com/rampradops28/web_scrab/tree/main"
  },
  {
    id: 6,
    title: "Mini Projects",
    description: "A collection of multiple React mini-projects for learning and demonstration.",
    image: react,
    category: ["Frontend"],
    url: "https://github.com/rampradops28/react-projects",
    repositoryUrl: "https://github.com/rampradops28/react-projects"
  }
];
