
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MapPin, Clock, ArrowRight, Briefcase, Users, Globe, Heart } from "lucide-react";
import { useScrollReveal, rv } from "@/hooks/useScrollReveal";
import Keyframes from "@/components/Keyframes";

type Vacancy = {
  id: number;
  title: string;
  department: string;
  type: "Full-time" | "Part-time" | "Contract";
  location: string;
  remote: boolean;
  description: string;
  skills: string[];
  departmentColor: string;
};

const vacancies: Vacancy[] = [
  {
    id: 1,
    title: "Full-Stack Developer",
    department: "Development",
    type: "Full-time",
    location: "Kosovo",
    remote: true,
    description:
      "Build end-to-end features across our client products — from clean React UIs to robust .NET or Node.js APIs. You'll work in an agile squad with direct client impact.",
    skills: ["React", "TypeScript", "Node.js / .NET", "PostgreSQL"],
    departmentColor: "bg-teal-100 text-teal-700",
  },
  {
    id: 2,
    title: "Frontend Developer",
    department: "Development",
    type: "Full-time",
    location: "Kosovo",
    remote: true,
    description:
      "Craft pixel-perfect, performant interfaces using React and Tailwind. You care deeply about UX, accessibility, and clean component architecture.",
    skills: ["React", "TypeScript", "Tailwind CSS", "Figma"],
    departmentColor: "bg-teal-100 text-teal-700",
  },
  {
    id: 3,
    title: "Backend Developer",
    department: "Development",
    type: "Full-time",
    location: "Kosovo",
    remote: true,
    description:
      "Design and maintain scalable APIs, event-driven services, and data pipelines. Experience with .NET or Node.js and relational databases is essential.",
    skills: [".NET / Node.js", "REST & GraphQL", "PostgreSQL", "Docker"],
    departmentColor: "bg-teal-100 text-teal-700",
  },
  {
    id: 4,
    title: "DevOps Engineer",
    department: "Infrastructure",
    type: "Full-time",
    location: "Kosovo",
    remote: true,
    description:
      "Own CI/CD pipelines, cloud infrastructure, and deployment reliability. You'll help teams ship faster and more confidently on AWS or Azure.",
    skills: ["AWS / Azure", "Docker & Kubernetes", "CI/CD", "Terraform"],
    departmentColor: "bg-sky-100 text-sky-700",
  },
  {
    id: 5,
    title: "UI/UX Designer",
    department: "Design",
    type: "Full-time",
    location: "Kosovo",
    remote: true,
    description:
      "Define user experiences from discovery to high-fidelity prototypes. You'll collaborate closely with engineers and product leads to ship delightful interfaces.",
    skills: ["Figma", "User Research", "Design Systems", "Prototyping"],
    departmentColor: "bg-purple-100 text-purple-700",
  },
  {
    id: 6,
    title: "Project Manager",
    department: "Management",
    type: "Full-time",
    location: "Kosovo",
    remote: false,
    description:
      "Keep cross-functional squads aligned and clients informed. You'll run sprints, manage timelines, and ensure every delivery meets our quality bar.",
    skills: ["Agile / Scrum", "Stakeholder Management", "Jira", "Risk Planning"],
    departmentColor: "bg-amber-100 text-amber-700",
  },
  {
    id: 7,
    title: "QA Engineer",
    department: "Development",
    type: "Full-time",
    location: "Kosovo",
    remote: true,
    description:
      "Build automated test suites and own quality gates across our delivery pipeline. You'll catch issues before they reach production and improve team confidence.",
    skills: ["Playwright / Cypress", "API Testing", "CI Integration", "Test Strategy"],
    departmentColor: "bg-teal-100 text-teal-700",
  },
  {
    id: 8,
    title: "Business Development Representative",
    department: "Sales",
    type: "Full-time",
    location: "Kosovo",
    remote: false,
    description:
      "Identify and qualify new opportunities, build relationships with prospective clients, and support the sales pipeline from first touch to proposal.",
    skills: ["B2B Sales", "CRM tools", "Communication", "Market Research"],
    departmentColor: "bg-rose-100 text-rose-700",
  },
];

const departments = ["All", "Development", "Infrastructure", "Design", "Management", "Sales"];

const perks = [
  { icon: Globe,     title: "Remote-friendly",     desc: "Most roles are hybrid or fully remote — work from where you do your best thinking." },
  { icon: Users,     title: "Small, sharp squads",  desc: "Work in focused cross-functional teams with real ownership and direct client impact." },
  { icon: Heart,     title: "Health & wellbeing",   desc: "Private health insurance, flexible hours, and a culture that respects personal time." },
  { icon: Briefcase, title: "Growth budget",        desc: "Annual learning allowance for courses, conferences, and certifications." },
];

export default function Vacancies() {
  const [activeFilter, setActiveFilter] = useState("All");
  const { ref: heroRef, visible: heroVisible } = useScrollReveal(0.05);
  const { ref: listRef, visible: listVisible } = useScrollReveal(0.05);
  const { ref: perksRef, visible: perksVisible } = useScrollReveal(0.05);
  const { ref: ctaRef, visible: ctaVisible } = useScrollReveal(0.1);

  const filtered =
    activeFilter === "All"
      ? vacancies
      : vacancies.filter((v) => v.department === activeFilter);

  const openEmail = (title: string) => {
    window.location.href = `mailto:info@plan-asolution.com?subject=Application: ${encodeURIComponent(title)}`;
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Keyframes />
      <Header />

      {/* ── Hero ── */}
      <section
        ref={heroRef}
        className="relative pt-[100px] pb-16 bg-gradient-to-br from-slate-50 via-white to-teal-50/40 overflow-hidden"
      >
        <div className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-teal-100/40 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-blue-100/30 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 style={rv(heroVisible, 0)} className="text-[clamp(36px,5.5vw,64px)] font-extrabold text-[#1a2454] leading-[1.05] tracking-tight mb-6">
            Join Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-cyan-400 to-teal-600 anim-gradient-text">
              Growing Team
            </span>
          </h1>
          <p style={rv(heroVisible, 100)} className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            We're a team of builders, designers, and problem-solvers working on products that
            matter. If you're driven by impact and love clean craft, you'll fit right in.
          </p>

          {/* Stats */}
          <div style={rv(heroVisible, 200)} className="flex flex-wrap justify-center gap-8">
            {[
              { value: `${vacancies.length}`, label: "Open positions" },
              { value: "100%",                label: "Remote-eligible roles" },
              { value: "Kosovo",              label: "Headquartered" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-extrabold text-[#1a2454]">{s.value}</p>
                <p className="text-sm text-gray-500 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Perks ── */}
      <section ref={perksRef} className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={rv(perksVisible, 0)} className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a2454]">Life at Plan-A Solutions</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk, i) => {
              const Icon = perk.icon;
              return (
                <div
                  key={perk.title}
                  style={rv(perksVisible, i * 80, "pop")}
                  className="bg-gray-50 rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="h-11 w-11 bg-[#1a2454]/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5 text-[#1a2454]" />
                  </div>
                  <h3 className="font-bold text-[#1a2454] mb-1">{perk.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{perk.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Job listings ── */}
      <section ref={listRef} className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div style={rv(listVisible, 0)} className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a2454] mb-6">Current Vacancies</h2>

            {/* Filter tabs */}
            <div className="flex flex-wrap gap-2">
              {departments.map((d) => (
                <button
                  key={d}
                  onClick={() => setActiveFilter(d)}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    activeFilter === d
                      ? "bg-[#1a2454] text-white shadow-md scale-105"
                      : "bg-white border border-gray-200 text-gray-600 hover:border-[#1a2454] hover:text-[#1a2454]"
                  }`}
                >
                  {d}
                  {d === "All" && (
                    <span className="ml-1.5 text-xs font-bold opacity-60">{vacancies.length}</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-5">
            {filtered.map((v, i) => (
              <div
                key={v.id}
                style={rv(listVisible, 100 + i * 70)}
                className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className={`inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-2 ${v.departmentColor}`}>
                      {v.department}
                    </span>
                    <h3 className="text-lg font-bold text-[#1a2454]">{v.title}</h3>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="flex items-center gap-1.5 text-xs text-gray-500 bg-gray-50 border border-gray-100 px-2.5 py-1 rounded-full">
                    <Clock className="h-3 w-3" />
                    {v.type}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-gray-500 bg-gray-50 border border-gray-100 px-2.5 py-1 rounded-full">
                    <MapPin className="h-3 w-3" />
                    {v.location}
                  </span>
                  {v.remote && (
                    <span className="flex items-center gap-1.5 text-xs text-teal-700 bg-teal-50 border border-teal-100 px-2.5 py-1 rounded-full font-semibold">
                      <Globe className="h-3 w-3" />
                      Remote
                    </span>
                  )}
                </div>

                <p className="text-gray-500 text-sm leading-relaxed mb-5">{v.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {v.skills.map((s) => (
                    <span key={s} className="text-xs font-medium text-gray-600 bg-gray-100 px-2.5 py-1 rounded-lg">
                      {s}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => openEmail(v.title)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1a2454] text-white text-sm font-semibold hover:bg-[#2d3f7b] transition-all duration-200 shadow-sm hover:shadow-md group-hover:-translate-y-0.5"
                >
                  Apply Now
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-gray-400">
              <Briefcase className="h-12 w-12 mx-auto mb-3 opacity-30" />
              <p className="text-lg font-semibold">No openings in this category right now.</p>
              <p className="text-sm mt-1">Check back soon or send us a speculative application.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section ref={ctaRef} className="py-20 bg-[#1a2454]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div style={rv(ctaVisible, 0)}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Don't see your role?
            </h2>
            <p className="text-white/70 text-lg mb-8">
              We're always looking for exceptional people. Send us your CV and tell us how you'd
              contribute — we'll keep you in mind for future openings.
            </p>
            <a
              href="mailto:info@plan-asolution.com?subject=Speculative Application"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-teal-500 text-white font-semibold hover:bg-teal-400 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Send Speculative Application
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
