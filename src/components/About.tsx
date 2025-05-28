
import { Users, Target, Award } from "lucide-react";

export const About = () => {
  const stats = [
    { icon: Users, label: "Happy Clients", value: "150+" },
    { icon: Target, label: "Projects Delivered", value: "300+" },
    { icon: Award, label: "Years Experience", value: "8+" },
  ];

  return (
    <section id="about" className="py-20 bg-slate-800/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose Plan-A Solutions?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're not just developers – we're digital architects crafting solutions 
            that transform businesses and drive innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-slate-700/30 rounded-xl backdrop-blur-sm border border-slate-600/30 hover:bg-slate-600/30 transition-all duration-300 transform hover:scale-105"
            >
              <stat.icon className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            From startups to enterprise-level corporations, we deliver robust, scalable solutions 
            using cutting-edge technologies. Our team of expert developers ensures your project 
            is built with best practices, optimal performance, and future-ready architecture.
          </p>
        </div>
      </div>
    </section>
  );
};
