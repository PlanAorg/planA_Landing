
import { useState } from "react";
import { Monitor, Database, Globe, Smartphone, Cloud, Palette } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Services = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      icon: Globe,
      title: "Landing Pages",
      description: "Beautiful, conversion-optimized landing pages that capture attention and drive results.",
      technologies: ["React.js", "Tailwind CSS", "Next.js", "Framer Motion"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Monitor,
      title: "Web Applications",
      description: "Full-stack web applications with modern UI/UX and robust backend systems.",
      technologies: ["React.js", "Node.js", "TypeScript", "PostgreSQL"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Database,
      title: ".NET Core Systems",
      description: "Enterprise-grade applications built with .NET Core for maximum performance and scalability.",
      technologies: [".NET Core", "C#", "Entity Framework", "Azure"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Palette,
      title: "Content Management",
      description: "Custom CMS solutions that give you complete control over your content and workflows.",
      technologies: ["Strapi", "Sanity", "WordPress", "Custom CMS"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Responsive designs that work flawlessly across all devices and screen sizes.",
      technologies: ["React Native", "PWA", "Responsive Design", "Mobile UX"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions for modern applications.",
      technologies: ["AWS", "Azure", "Docker", "Kubernetes"],
      color: "from-teal-500 to-blue-500"
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From concept to deployment, we provide comprehensive software development 
            services tailored to your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`bg-slate-800/50 border-slate-600/30 backdrop-blur-sm transition-all duration-300 transform hover:scale-105 cursor-pointer ${
                hoveredCard === index ? "shadow-2xl" : ""
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}>
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                <CardDescription className="text-gray-300">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs bg-slate-700/50 text-blue-300 rounded-full border border-slate-600/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
