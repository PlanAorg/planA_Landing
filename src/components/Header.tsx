
import { useState, useEffect } from "react";
import { Menu, X, Mail, Phone } from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import { Logo } from "./Logo";

const navItems = ["Home", "About", "Services", "Clients", "Contact"];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== "/") {
      window.location.href = `/#${sectionId.toLowerCase()}`;
      return;
    }
    document.getElementById(sectionId.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Announcement bar */}
      <div className="bg-[#0f172a] text-white text-xs sm:text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="mailto:info@plan-asolution.com"
              className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors"
            >
              <Mail className="h-3.5 w-3.5 shrink-0" />
              <span className="hidden sm:inline">info@plan-asolution.com</span>
            </a>
            <span className="text-white/30 hidden sm:inline">|</span>
            <a
              href="tel:+38345286424"
              className="hidden sm:flex items-center gap-1.5 text-white/80 hover:text-white transition-colors"
            >
              <Phone className="h-3.5 w-3.5 shrink-0" />
              +(383) 45 286 424
            </a>
          </div>
          <span className="hidden md:block text-white/70 text-center">
            Need a custom software solution?{" "}
            <button
              onClick={() => scrollToSection("contact")}
              className="text-teal-400 hover:text-teal-300 font-semibold transition-colors"
            >
              Contact us
            </button>
          </span>
          <span className="text-white/60 text-xs">🇽🇰 Kosovo</span>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`bg-white transition-shadow duration-300 ${
          isScrolled ? "shadow-md" : "shadow-sm border-b border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Logo />

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="px-4 py-2 text-gray-600 hover:text-[#1a2454] font-medium text-sm rounded-lg hover:bg-gray-50 transition-all duration-200"
                >
                  {item}
                </button>
              ))}
              <Link
                to="/bifrost"
                className={`px-4 py-2 font-semibold text-sm rounded-lg transition-all duration-200 flex items-center gap-1.5 ${
                  location.pathname === "/bifrost"
                    ? "text-[#1a2454] bg-gray-50"
                    : "text-teal-600 hover:text-teal-700 hover:bg-teal-50"
                }`}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-teal-500 shrink-0" />
                Bifrost
              </Link>
            </nav>

            {/* CTA + mobile toggle */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => scrollToSection("contact")}
                className="hidden md:inline-flex items-center px-5 py-2 rounded-xl bg-teal-500 text-white text-sm font-semibold hover:bg-teal-600 transition-colors shadow-sm"
              >
                Get Started
              </button>
              <button
                className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-80" : "max-h-0"
          }`}
        >
          <div className="border-t border-gray-100 py-3 px-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left px-4 py-2.5 text-gray-600 hover:text-[#1a2454] hover:bg-gray-50 rounded-lg font-medium text-sm transition-colors"
              >
                {item}
              </button>
            ))}
            <Link
              to="/bifrost"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2 w-full px-4 py-2.5 text-teal-600 hover:text-teal-700 hover:bg-teal-50 rounded-lg font-semibold text-sm transition-colors"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-teal-500 shrink-0" />
              Bifrost
            </Link>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full px-4 py-2.5 mt-2 bg-teal-500 text-white rounded-xl font-semibold text-sm text-center"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
