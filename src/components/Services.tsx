
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Keyframes from "./Keyframes";
import { useScrollReveal, rv } from "@/hooks/useScrollReveal";

type Bullet = { key: string; desc: string };
type TabData = { heading: string; bullets: Bullet[] };

const tabs = [
  { id: "web",        label: "Web Development" },
  { id: "software",   label: "Software Development" },
  { id: "cloud",      label: "Cloud Services" },
  { id: "mobile",     label: "Mobile Apps" },
  { id: "consulting", label: "IT Consulting" },
];

const tabContent: Record<string, TabData> = {
  web: {
    heading: "Web Development Based On Your Requirement",
    bullets: [
      { key: "Discovery & Planning",   desc: "—clear project scope, sitemap, and technical architecture from day one." },
      { key: "Responsive Design",      desc: "pixel-perfect, mobile-first layouts that look great on every device." },
      { key: "Performance & SEO",      desc: "optimised loading speeds, accessibility, and search-engine-ready structure." },
      { key: "CMS Integration",        desc: "headless or traditional CMS solutions tailored to your content workflow." },
      { key: "Security & Reliability", desc: "SSL, hardened configs, automated backups, and 24/7 monitoring." },
      { key: "Post-launch support",    desc: "ongoing maintenance, updates, and continuous improvement cycles." },
    ],
  },
  software: {
    heading: "Custom Software Built For Your Business",
    bullets: [
      { key: "Requirements discovery",      desc: "—interviews, user stories, and clear acceptance criteria." },
      { key: "Rapid wireframes/prototypes", desc: "let stakeholders validate flows before we write code." },
      { key: "Backups you can trust",       desc: "daily automated backups and point-in-time restore." },
      { key: "24/7 monitoring",             desc: "real-time alerts and logs—issues spotted before users feel them." },
      { key: "Documentation & training",    desc: "ensure your team can use and extend the product confidently." },
      { key: "Post-launch iteration",       desc: "support and improvements based on real user feedback." },
    ],
  },
  cloud: {
    heading: "Cloud Infrastructure That Scales With You",
    bullets: [
      { key: "Cloud architecture design", desc: "—right-sized infrastructure for your workload and budget." },
      { key: "CI/CD pipelines",           desc: "automated build, test, and deploy workflows for faster releases." },
      { key: "Container orchestration",   desc: "Docker and Kubernetes deployments with auto-scaling." },
      { key: "Security & compliance",     desc: "WAF, SSL/TLS, IAM, and audit-ready configurations." },
      { key: "Cost optimisation",         desc: "FinOps practices to keep cloud spend predictable and efficient." },
      { key: "24/7 monitoring & alerts",  desc: "proactive observability so issues never become outages." },
    ],
  },
  mobile: {
    heading: "Mobile Applications For iOS & Android",
    bullets: [
      { key: "Cross-platform development", desc: "—React Native and Flutter for iOS & Android from one codebase." },
      { key: "Native performance",         desc: "platform-specific optimisations for buttery-smooth UX." },
      { key: "Offline-first architecture", desc: "apps that work reliably even with poor or no connectivity." },
      { key: "Push notifications",         desc: "targeted messaging to keep users engaged and returning." },
      { key: "App Store submission",       desc: "end-to-end support for Apple App Store and Google Play." },
      { key: "Analytics & crash reporting",desc: "built-in tracking to understand behaviour and fix issues fast." },
    ],
  },
  consulting: {
    heading: "Expert IT Guidance For Your Business",
    bullets: [
      { key: "Architecture review",        desc: "—independent assessment of your systems and accumulated tech debt." },
      { key: "Technology roadmapping",     desc: "a clear plan to modernise legacy systems at the right pace." },
      { key: "Digital transformation",     desc: "proven frameworks to align IT initiatives with business outcomes." },
      { key: "Team augmentation strategy", desc: "guidance on when to hire, contract, or outsource." },
      { key: "Security audits",            desc: "identify vulnerabilities and implement best-practice hardening." },
      { key: "Vendor & tool evaluation",   desc: "unbiased guidance on choosing the right software and partners." },
    ],
  },
};

export const Services = () => {
  const [activeTab, setActiveTab] = useState("software");
  const [contentKey, setContentKey] = useState(0);
  const { ref, visible } = useScrollReveal(0.1);

  const handleTab = (id: string) => {
    setActiveTab(id);
    setContentKey((k) => k + 1);
  };

  const content = tabContent[activeTab];

  return (
    <section ref={ref} id="services" className="py-20 bg-white border-t border-gray-100 overflow-hidden">
      <Keyframes />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section label */}
        <div style={rv(visible, 0)} className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2454]">What We Deliver</h2>
        </div>

        {/* Tab pills */}
        <div style={rv(visible, 100)} className="flex flex-wrap gap-2 justify-center mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTab(tab.id)}
              className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 overflow-hidden ${
                activeTab === tab.id
                  ? "bg-[#1a2454] text-white shadow-md scale-105"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-[#1a2454] hover:scale-[1.03]"
              }`}
            >
              {activeTab === tab.id && (
                <span className="absolute inset-0 anim-shimmer pointer-events-none opacity-20" />
              )}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content — key forces remount so inline styles replay on tab switch */}
        <div key={contentKey} className="max-w-5xl mx-auto">
          <h3 style={rv(true, 0)} className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a2454] mb-10 leading-tight">
            {content.heading}
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6 mb-12">
            {content.bullets.map((b, i) => (
              <div key={b.key} style={rv(true, i * 70)} className="flex items-start gap-3">
                <span className="mt-1 h-5 w-5 rounded-full bg-teal-100 flex items-center justify-center shrink-0">
                  <span className="h-2 w-2 rounded-full bg-teal-500" />
                </span>
                <p className="text-gray-600 text-sm leading-relaxed">
                  <strong className="text-gray-800 font-semibold">{b.key}</strong> {b.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={rv(true, 500)} className="text-center">
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="group inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-teal-500 text-white font-semibold text-sm hover:bg-teal-600 transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              More Details
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
