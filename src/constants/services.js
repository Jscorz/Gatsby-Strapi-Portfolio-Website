import React from "react"
import { FaLaptopCode, FaSketch, FaConnectdevelop } from "react-icons/fa"
const services = [
  {
    id: 1,
    icon: <FaLaptopCode className="service-icon" />,
    title: "web presence",
    text: `Everyone you and I know is on the web nowadays. You need a great web presence for yourself/your business with the right SEO setup. Let me take care of that for you!`,
  },
  {
    id: 2,
    icon: <FaSketch className="service-icon" />,
    title: "web design",
    text: `Let me help you design, build and grow an amazing website with a completely responsive design that will look amazing on any screen.`,
  },
  {
    id: 3,
    icon: <FaConnectdevelop className="service-icon" />,
    title: "Front-end Development",
    text: `I focus most of my time and work towards front-end web development. I would love to build a beautiful and functional website for you.`,
  },
]

export default services
