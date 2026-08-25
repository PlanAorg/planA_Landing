
import { useState } from "react";
import { ArrowRight, Globe, Monitor, Smartphone, Layers, Users, Cloud, Shield, BarChart3 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Keyframes from "./Keyframes";
import { useScrollReveal, rv } from "@/hooks/useScrollReveal";

type ServiceCard = {
  tag: string;
  title: string;
  description: string;
  bg: string;
  icon: LucideIcon;
};

type Category = {
  id: string;
  name: string;
  cards: ServiceCard[];
};

const categories: Category[] = [
  {
    id: "dev",
    name: "Custom Software Development",
    cards: [
      { tag: "WEB DEVELOPMENT",     title: "Web Development Solutions",   description: "Create a powerful online presence with our custom web development services.",                bg: "bg-teal-50",   icon: Globe },
      { tag: "SOFTWARE DEVELOPMENT", title: "Software Development",        description: "Optimise the design & functionality of your software systems with our architecture services.", bg: "bg-amber-50",  icon: Monitor },
      { tag: "MOBILE APP",           title: "Mobile App Development",      description: "Build high-performance, intuitive, and engaging native mobile applications.",                bg: "bg-emerald-50",icon: Smartphone },
      { tag: "CROSS-PLATFORM",       title: "Cross-Platform Applications", description: "Develop applications that work seamlessly on multiple platforms.",                           bg: "bg-sky-50",    icon: Layers },
    ],
  },
  {
    id: "teams",
    name: "Dedicated Teams",
    cards: [
      { tag: "FRONTEND TEAMS", title: "Frontend Development",   description: "React, Vue, and Angular specialists delivering pixel-perfect interfaces.",            bg: "bg-purple-50", icon: Monitor },
      { tag: "BACKEND TEAMS",  title: "Backend Engineering",    description: ".NET, Node.js, and Python engineers building robust APIs and services.",              bg: "bg-amber-50",  icon: Layers },
      { tag: "DEVOPS TEAMS",   title: "DevOps & Infrastructure",description: "Cloud and infrastructure specialists keeping your systems running smoothly.",        bg: "bg-teal-50",   icon: Cloud },
      { tag: "QA ENGINEERING", title: "QA & Testing Teams",     description: "Dedicated quality engineers ensuring every release is solid and stable.",           bg: "bg-sky-50",    icon: Shield },
    ],
  },
  {
    id: "cloud",
    name: "Cloud Services",
    cards: [
      { tag: "MANAGED HOSTING", title: "Secure Cloud Hosting", description: "SSL/TLS, WAF, automated backups, and 24/7 uptime monitoring.",                       bg: "bg-sky-50",    icon: Cloud },
      { tag: "CI/CD PIPELINES", title: "Automated Delivery",   description: "Continuous integration and deployment pipelines for faster, safer releases.",        bg: "bg-teal-50",   icon: Layers },
      { tag: "SECURITY",        title: "Cloud Security",        description: "WAF, intrusion detection, and compliance-ready configurations.",                    bg: "bg-emerald-50",icon: Shield },
      { tag: "MONITORING",      title: "24/7 Observability",    description: "Real-time dashboards, logs, and instant alerting for any anomalies.",               bg: "bg-amber-50",  icon: BarChart3 },
    ],
  },
  {
    id: "consulting",
    name: "IT Consulting",
    cards: [
      { tag: "ARCHITECTURE",     title: "System Architecture",    description: "Expert guidance on designing scalable and maintainable software systems.",        bg: "bg-purple-50", icon: Layers },
      { tag: "DIGITAL STRATEGY", title: "Digital Transformation", description: "Aligning technology investments with your core business outcomes.",              bg: "bg-amber-50",  icon: BarChart3 },
      { tag: "TECH AUDIT",       title: "Technology Audit",       description: "Independent review of your codebase, infrastructure, and processes.",            bg: "bg-sky-50",    icon: Monitor },
      { tag: "TEAM TRAINING",    title: "Team Training",          description: "Upskilling workshops and coaching for engineering and product teams.",           bg: "bg-teal-50",   icon: Users },
    ],
  },
  {
    id: "management",
    name: "Management Software",
    cards: [
      { tag: "ERP SOLUTIONS", title: "ERP Integration",    description: "Streamline operations with modular ERP systems tailored to your workflow.",             bg: "bg-teal-50",   icon: BarChart3 },
      { tag: "CRM SYSTEMS",   title: "CRM Development",    description: "Custom customer relationship management tools to grow your pipeline.",                  bg: "bg-purple-50", icon: Users },
      { tag: "HR SOFTWARE",   title: "HR & Payroll",        description: "Automate HR operations from onboarding to payroll with custom software.",              bg: "bg-amber-50",  icon: Shield },
      { tag: "ANALYTICS",     title: "Business Analytics",  description: "Real-time dashboards and KPIs to drive informed business decisions.",                 bg: "bg-sky-50",    icon: BarChart3 },
    ],
  },
  {
    id: "hosting",
    name: "Secured Hosting",
    cards: [
      { tag: "MANAGED HOSTING",   title: "Managed Web Hosting",     description: "Reliable, fully managed hosting with guaranteed uptime and fast load times.",  bg: "bg-sky-50",    icon: Globe },
      { tag: "DEDICATED SERVERS", title: "Dedicated Infrastructure", description: "High-performance dedicated server environments for demanding workloads.",      bg: "bg-emerald-50",icon: Cloud },
      { tag: "SSL & WAF",         title: "Security Layer",           description: "SSL certificates, web application firewall, and DDoS protection included.",   bg: "bg-amber-50",  icon: Shield },
      { tag: "BACKUP & RESTORE",  title: "Backup Solutions",         description: "Daily automated backups with point-in-time restore for peace of mind.",       bg: "bg-purple-50", icon: Layers },
    ],
  },
];

export const About = () => {
  const [activeId, setActiveId] = useState("dev");
  const [cardsKey, setCardsKey] = useState(0);
  const { ref, visible } = useScrollReveal(0.05);

  const handleCategory = (id: string) => {
    setActiveId(id);
    setCardsKey((k) => k + 1);
  };

  const active = categories.find((c) => c.id === activeId) ?? categories[0];

  return (
    <section ref={ref} id="about" className="py-20 bg-gray-50 border-t border-gray-100 overflow-hidden">
      <Keyframes />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div style={rv(visible, 0)} className="mb-12">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a2454] max-w-lg leading-tight">
              Build, Integrate &amp; Grow With Plan-A
            </h2>
            <div className="flex items-start gap-4 max-w-sm">
              <p className="text-gray-500 text-sm leading-relaxed">
                One partner for custom apps, cloud hosting, integrations, and ongoing support.
              </p>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="group shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-500 text-white text-sm font-semibold hover:bg-teal-600 transition-all duration-200 hover:-translate-y-0.5 shadow-sm hover:shadow-md whitespace-nowrap"
              >
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Two-column */}
        <div className="grid lg:grid-cols-[280px_1fr] gap-8">

          {/* Left — category list */}
          <div style={rv(visible, 100, "left")} className="space-y-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategory(cat.id)}
                className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-left text-sm font-semibold transition-all duration-200 group ${
                  activeId === cat.id
                    ? "bg-white text-[#1a2454] shadow-md border border-gray-200 translate-x-1"
                    : "text-gray-500 hover:bg-white hover:text-[#1a2454] hover:shadow-sm hover:translate-x-0.5"
                }`}
              >
                <span>{cat.name}</span>
                <ArrowRight
                  className={`h-4 w-4 transition-all duration-200 ${
                    activeId === cat.id
                      ? "text-teal-500 translate-x-1"
                      : "text-gray-300 group-hover:text-teal-400"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Right — cards (key forces remount → animations replay on category switch) */}
          <div key={cardsKey} className="grid sm:grid-cols-2 gap-5">
            {active.cards.map((card, i) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  style={rv(true, i * 90, "pop")}
                  className={`${card.bg} rounded-2xl p-6 border border-white hover:shadow-lg transition-shadow duration-300`}
                >
                  <div className="mb-4">
                    <div className="h-12 w-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-3">
                      <Icon className="h-6 w-6 text-[#1a2454]" />
                    </div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">{card.tag}</p>
                    <h3 className="text-base font-bold text-[#1a2454]">{card.title}</h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
