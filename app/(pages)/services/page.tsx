"use client";

import { useEffect } from "react";
import { FaBullseye, FaLaptop, FaPaintBrush } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    title: "Traffic Management",
    description:
      "Maximize your reach and attract more customers with our traffic management strategies. We ensure your ads are seen by the right people at the right time.",
    icon: FaBullseye,
    details: [
      "Target audience analysis",
      "Campaign optimization",
      "Detailed reports",
    ],
    reason:
      "Efficient traffic management is crucial to increasing visibility and attracting qualified customers, maximizing your return on investment.",
  },
  {
    title: "Website Creation",
    description:
      "We develop modern and responsive websites that reflect your brand identity. Our sites are optimized to provide the best user experience.",
    icon: FaLaptop,
    details: [
      "Custom landing pages",
      "Responsive design",
      "Integrated SEO",
      "Optimized user experience",
    ],
    reason:
      "A well-designed website is essential to establish a strong online presence, facilitate navigation, and improve user experience.",
  },
  {
    title: "Design Services",
    description:
      "Create an impactful visual identity with our graphic design services. We develop designs that capture the essence of your brand and engage your audience.",
    icon: FaPaintBrush,
    details: [
      "Custom logos",
      "Marketing materials",
      "Social media design",
    ],
    reason:
      "Quality graphic design is essential to effectively communicate your brand identity and attract your target audience.",
  },
];

export default function ServicesPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="relative" id="services">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center pt-32 pb-12 md:pt-40 md:pb-20">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4">
            Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-l from-orange-500 to-red-400">
              Services
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            We offer a variety of services to meet your digital marketing needs. See below how we can help you achieve your goals.
          </p>
        </div>

        {services.map((service, index) => (
          <div
            key={index}
            className="mb-16 flex flex-col lg:flex-row border-2 border-gray-300 text-gray-700 p-10 rounded-md relative"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="lg:ml-8 ">
              <div className="flex items-center left-1/2 -translate-x-1/2 w-2/3 sm:left-auto sm:translate-x-0 sm:w-auto gap-2 bg-neutral-600 text-white h-16 absolute top-0 -translate-y-1/2 p-4 rounded-lg rounded-r-2xl">
                <service.icon className="w-10 h-10" />

                <h2 className="text-base sm:text-3xl font-bold leading-snug tracking-tight pr-2 ">
                  {service.title}
                </h2>
              </div>
              <p className="text-xl mt-6 mb-4">{service.description}</p>
              <ul className="list-disc list-inside marker:text-primary text-lg pl-4 mb-4 space-y-1">
                {service.details.map((detail, idx) => (
                  <li key={idx} className="font-semibold">
                    {detail}
                  </li>
                ))}
              </ul>
              <p className="text-lg font-medium mt-10">{service.reason}</p>
            </div>
          </div>
        ))}
        <div className="flex gap-4 items-center mt-4 mb-10">
          <h2 className="font-medium">Check out our service packages:</h2>
          <button className="bg-primary text-white btn font-bold hover:opacity-90">
            See our packages
          </button>
        </div>
      </div>
    </section>
  );
}
