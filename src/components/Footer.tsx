
import { Github, Linkedin, Twitter, Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";

const services = ["Web Development", "Software Development", "Cloud Services", "Mobile Apps", "IT Consulting"];

const contactInfo = [
  { icon: Mail, text: "info@plan-asolution.com", href: "mailto:info@plan-asolution.com" },
  { icon: Phone, text: "+(383) 45 286 424", href: "tel:+38345286424" },
  { icon: MapPin, text: "Kosovo", href: "#" },
];

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="mb-5 brightness-0 invert">
              <Logo />
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-6">
              Plan-A Solutions is your trusted partner for innovative software development.
              We turn complex challenges into elegant, scalable solutions.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="h-10 w-10 bg-white/10 hover:bg-teal-500 rounded-xl flex items-center justify-center text-white/60 hover:text-white transition-all duration-200"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-white/60 hover:text-teal-400 text-sm transition-colors duration-200">
                    {s}
                  </a>
                </li>
              ))}
              <li className="pt-2 border-t border-white/10 mt-2">
                <Link to="/vacancies" className="text-teal-400 hover:text-teal-300 text-sm font-semibold transition-colors duration-200 flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                  Vacancies
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3">
              {contactInfo.map((info) => (
                <li key={info.text}>
                  <a
                    href={info.href}
                    className="flex items-center gap-2.5 text-white/60 hover:text-teal-400 text-sm transition-colors duration-200 group"
                  >
                    <info.icon className="h-4 w-4 shrink-0 text-white/40 group-hover:text-teal-400 transition-colors" />
                    {info.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            &copy; {currentYear} Plan-A Solutions. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="h-10 w-10 bg-teal-500 hover:bg-teal-400 rounded-xl flex items-center justify-center text-white transition-all duration-200 hover:-translate-y-0.5 shadow-md"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
