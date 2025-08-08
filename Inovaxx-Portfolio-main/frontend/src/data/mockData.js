// Mock data for Inovaxx Solutions website
import ruhanImg from './ruhan.png';
import anasImg from './anas.png';
import zainImg from './zain.png';


export const companies = [
  {
    name: "Toyota",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Toyota_logo.svg/2560px-Toyota_logo.svg.png",
    alt: "Toyota"
  },
  {
    name: "Meta",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/2560px-Meta_Platforms_Inc._logo.svg.png",
    alt: "Meta (Facebook)"
  },
  {
    name: "Nike",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/2560px-Logo_NIKE.svg.png",
    alt: "Nike"
  },
  {
    name: "Unilever",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Unilever_logo.svg/2560px-Unilever_logo.svg.png",
    alt: "Unilever"
  },
  {
    name: "Tesla",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Tesla_T_symbol.svg/1200px-Tesla_T_symbol.svg.png",
    alt: "Tesla"
  },
  {
    name: "HP",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/2560px-HP_logo_2012.svg.png",
    alt: "Hewlett-Packard"
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2560px-Microsoft_logo.svg.png",
    alt: "Microsoft"
  },
  {
    name: "Samsung",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png",
    alt: "Samsung"
  },
  {
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Apple_logo_grey.svg/1920px-Apple_logo_grey.svg.png",
    alt: "Apple"
  },
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png",
    alt: "Google"
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png",
    alt: "Amazon"
  },
  {
    name: "IBM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png",
    alt: "IBM"
  }
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Revolution",
    description: "Built a cutting-edge e-commerce platform with AI-powered recommendations",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    technologies: ["React", "Node.js", "AI/ML", "MongoDB"],
    category: "Web Development"
  },
  {
    id: 2,
    title: "Blockchain DeFi Platform",
    description: "Developed a decentralized finance platform for secure transactions",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
    technologies: ["Solidity", "Web3", "React", "Ethereum"],
    category: "Blockchain"
  },
  {
    id: 3,
    title: "AI Customer Support",
    description: "Created an intelligent chatbot system with natural language processing",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    technologies: ["Python", "TensorFlow", "NLP", "FastAPI"],
    category: "AI Agents"
  },
  {
    id: 4,
    title: "Mobile Banking App",
    description: "Designed and developed a secure mobile banking solution",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
    technologies: ["React Native", "Node.js", "PostgreSQL", "AWS"],
    category: "Mobile Development"
  },
  {
    id: 5,
    title: "IoT Smart Home",
    description: "Built an integrated smart home management system",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop",
    technologies: ["IoT", "React", "Python", "MQTT"],
    category: "IoT Solutions"
  },
  {
    id: 6,
    title: "Cloud Analytics Dashboard",
    description: "Created a real-time analytics dashboard for business intelligence",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    technologies: ["React", "D3.js", "AWS", "BigQuery"],
    category: "Data Analytics"
  }
];

export const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies",
    icon: "Code",
    features: ["Responsive Design", "Performance Optimization", "SEO Ready", "Cross-browser Compatible"],
    color: "from-red-500 to-red-600"
  },
  {
    id: 2,
    title: "Blockchain Solutions",
    description: "Decentralized applications and smart contract development",
    icon: "Link",
    features: ["Smart Contracts", "DeFi Platforms", "NFT Marketplaces", "Tokenization"],
    color: "from-red-600 to-red-700"
  },
  {
    id: 3,
    title: "AI Agents",
    description: "Intelligent automation and AI-powered solutions for your business",
    icon: "Brain",
    features: ["Chatbots", "Process Automation", "Machine Learning", "Natural Language Processing"],
    color: "from-red-700 to-red-800"
  },
  {
    id: 4,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications",
    icon: "Smartphone",
    features: ["iOS & Android", "React Native", "Flutter", "Progressive Web Apps"],
    color: "from-red-500 to-red-700"
  },
  {
    id: 5,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and deployment solutions",
    icon: "Cloud",
    features: ["AWS/Azure/GCP", "DevOps", "Microservices", "Serverless Architecture"],
    color: "from-red-600 to-red-800"
  },
  {
    id: 6,
    title: "UI/UX Design",
    description: "User-centered design that drives engagement and conversions",
    icon: "Palette",
    features: ["User Research", "Prototyping", "Design Systems", "Usability Testing"],
    color: "from-red-500 to-red-800"
  }
];

export const teamMembers = [
  {
    id: 1,
    name: "Muhammad Anas",
    position: "Founder & Software Engineer",
    bio: "Building smart, scalable AI systems that power the next wave of tech innovation.",
    image: anasImg,
    skills: ["JavaScript", "Python", "DeFi", "Ethereum"],
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  },
  {
    id: 2,
    name: "Ruhan Ahmed",
    position: "Co-founder & Mobile App Developer",
    bio: "Driving intelligent innovation through cutting-edge AI solutions",
    image: ruhanImg,
    skills: ["UI/UX", "Vibe Coding", "Kotlin", "AI Workflows"],
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  },
  {
    id: 3,
    name: "Zain Baig",
    position: "Co-founder & Full Stack Developer",
    bio: "Bridging front-end elegance with back-end power to build seamless digital experiences",
    image: zainImg,
    skills: ["MongoDB", "TensorFlow", "Machine Learning", "Data Science"],
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  }
];

export const contactInfo = {
  email: "inovaxxsolutions@gmail.com",
  location: "Karachi, Pakistan",
  phone: "+92 3392005365",
  social: {
    linkedin: "#",
    github: "#",
    twitter: "#",
    instagram: "#"
  }
};

// Mock function to simulate contact form submission
export const submitContactForm = async (formData) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  console.log("Contact form submitted:", formData);
  
  // Mock success response
  return {
    success: true,
    message: "Thank you for your message! We'll get back to you soon."
  };
};

// Mock function to simulate service order
export const orderService = async (serviceId, serviceTitle) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  console.log(`Service ordered: ${serviceTitle} (ID: ${serviceId})`);
  
  // Mock success response
  return {
    success: true,
    message: `Thank you for your interest in ${serviceTitle}! We'll contact you shortly.`
  };
};