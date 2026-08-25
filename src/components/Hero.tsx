
import { useState, useEffect } from "react";
import { ArrowRight, CheckCircle, Star, TrendingUp, Users, Zap } from "lucide-react";
import Keyframes from "./Keyframes";
import { rv } from "@/hooks/useScrollReveal";

function useCountUp(to: number, duration = 1100, startWhen = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!startWhen) return;
    let frame = 0;
    const total = Math.round(duration / 16);
    const id = setInterval(() => {
      frame++;
      const eased = 1 - Math.pow(1 - frame / total, 3);
      setValue(Math.round(eased * to));
      if (frame >= total) { setValue(to); clearInterval(id); }
    }, 16);
    return () => clearInterval(id);
  }, [to, duration, startWhen]);
  return value;
}

const bullets = [
  "Real-Time Dashboards & KPIs",
  "End-to-End Product Delivery",
  "Fast, Secure & Scalable Systems",
];

const tasks = [
  { label: "E-commerce Platform", status: "Complete", color: "bg-emerald-100 text-emerald-700" },
  { label: "ERP Integration",      status: "Active",   color: "bg-sky-100 text-sky-700" },
  { label: "Mobile App Build",     status: "Active",   color: "bg-violet-100 text-violet-700" },
  { label: "Cloud Migration",      status: "Queued",   color: "bg-amber-100 text-amber-700" },
];

export const Hero = () => {
  const [visible, setVisible] = useState(false);
  const count = useCountUp(10, 1100, visible);

  // Hero is always in the viewport — fire after a short paint delay
  useEffect(() => {
    const id = setTimeout(() => setVisible(true), 120);
    return () => clearTimeout(id);
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-teal-50/40 pt-[100px] overflow-hidden"
    >
      <Keyframes />

      {/* Background blobs */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-teal-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full bg-blue-100/40 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* ── Left content ── */}
          <div className="space-y-7">
            <h1 style={rv(visible, 0)} className="text-[clamp(36px,5.5vw,64px)] font-extrabold text-[#1a2454] leading-[1.05] tracking-tight">
              Building Digital Solutions{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-cyan-400 to-teal-600 anim-gradient-text">
                For Your Business
              </span>
            </h1>

            <p style={rv(visible, 100)} className="text-gray-600 text-lg leading-relaxed max-w-xl">
              We design and build custom software that fits your exact workflow—fast, secure, and
              scalable. From discovery to deployment, Plan-A delivers clean code, clear timelines,
              and measurable results.
            </p>

            <div style={rv(visible, 200)} className="flex items-start gap-6">
              <div className="shrink-0 bg-[#f0edff] rounded-2xl px-6 py-5 text-center min-w-[130px] shadow-sm">
                <p className="text-4xl font-extrabold text-[#1a2454] tabular-nums">{count}+</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mt-1">PROJECTS DELIVERED</p>
              </div>
              <div className="space-y-3 pt-1">
                {bullets.map((b, i) => (
                  <div key={b} style={rv(visible, 380 + i * 90)} className="flex items-center gap-2.5">
                    <CheckCircle className="h-5 w-5 text-teal-500 shrink-0" />
                    <span className="text-gray-700 text-sm font-medium">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={rv(visible, 600)} className="flex flex-wrap gap-3 pt-1">
              <button
                onClick={() => scrollTo("contact")}
                className="group inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-[#1a2454] text-white font-semibold text-sm hover:bg-[#2d3f7b] transition-colors duration-200 shadow-md hover:shadow-xl hover:-translate-y-0.5"
              >
                Work With Us
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => scrollTo("services")}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl border-2 border-gray-300 text-[#1a2454] font-semibold text-sm hover:border-[#1a2454] hover:bg-gray-50 transition-all duration-200"
              >
                Our Services
              </button>
            </div>
          </div>

          {/* ── Right — dashboard mockup ── */}
          <div style={rv(visible, 250, "right")} className="relative mx-auto w-full max-w-[520px]">

            {/* Floating top badge */}
            <div style={rv(visible, 700, "pop")} className="absolute -top-5 -right-2 z-20 bg-white rounded-2xl shadow-lg border border-gray-100 px-4 py-3 flex items-center gap-3 anim-float">
              <div className="h-10 w-10 bg-[#1a2454] rounded-xl flex items-center justify-center shrink-0">
                <TrendingUp className="h-5 w-5 text-teal-300" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Completed Projects</p>
                <p className="text-lg font-bold text-[#1a2454]">10+</p>
              </div>
            </div>

            {/* Floating bottom badge */}
            <div style={rv(visible, 850, "pop")} className="absolute -bottom-5 -left-2 z-20 bg-[#1a2454] rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3 anim-float-delay">
              <div className="h-10 w-10 bg-teal-500 rounded-xl flex items-center justify-center shrink-0">
                <Star className="h-5 w-5 text-white fill-white" />
              </div>
              <div>
                <p className="text-xs text-teal-300">Client Rating</p>
                <div className="flex items-center gap-1.5">
                  <p className="text-lg font-bold text-white">4.9 / 5</p>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 text-amber-400 fill-amber-400" />)}
                  </div>
                </div>
              </div>
            </div>

            {/* Dashboard card */}
            <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
              <div className="bg-[#1a2454] px-5 py-3.5 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400/90" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/90" />
                <span className="h-3 w-3 rounded-full bg-green-400/90" />
                <div className="ml-3 flex items-center gap-2">
                  <Zap className="h-4 w-4 text-teal-300" />
                  <span className="text-white/80 text-sm font-medium">Plan-A Dashboard</span>
                </div>
                <span className="ml-auto text-xs text-white/50 bg-white/10 px-2 py-0.5 rounded-full flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 anim-pulse-glow" />
                  Live
                </span>
              </div>

              <div className="grid grid-cols-3 gap-3 p-5">
                {[
                  { Icon: Users,      value: "45+",   label: "Clients",  bg: "bg-purple-50", col: "text-purple-500" },
                  { Icon: TrendingUp, value: "10+",   label: "Projects", bg: "bg-teal-50",   col: "text-teal-500" },
                  { Icon: Star,       value: "4.9/5", label: "Rating",   bg: "bg-amber-50",  col: "text-amber-500" },
                ].map(({ Icon, value, label, bg, col }, i) => (
                  <div key={label} style={rv(visible, 500 + i * 80, "pop")} className={`${bg} rounded-xl p-3.5 text-center`}>
                    <Icon className={`h-5 w-5 ${col} mx-auto mb-1`} />
                    <p className="text-xl font-bold text-[#1a2454]">{value}</p>
                    <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wide">{label}</p>
                  </div>
                ))}
              </div>

              <div className="px-5 pb-4">
                <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                  <span className="font-semibold text-[#1a2454]">Sprint Progress</span>
                  <span>78% complete</span>
                </div>
                <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className={`h-full bg-gradient-to-r from-teal-400 to-teal-500 rounded-full ${visible ? "anim-progress" : "w-0"}`} />
                </div>
              </div>

              <div className="px-5 pb-5 space-y-2.5">
                <p className="text-xs font-bold uppercase tracking-wide text-gray-400 mb-3">Active Projects</p>
                {tasks.map((task, i) => (
                  <div key={task.label} style={rv(visible, 700 + i * 80)} className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 rounded-xl px-4 py-3 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-teal-400 shrink-0" />
                      <span className="text-sm font-medium text-gray-700">{task.label}</span>
                    </div>
                    <span className={`text-[11px] px-3 py-1 rounded-full font-semibold ${task.color}`}>
                      {task.status}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-100 bg-gray-50 px-5 py-3 flex items-center justify-between">
                <span className="text-xs text-gray-500">100% Uptime · 24/7 Monitoring</span>
                <span className="flex items-center gap-1.5 text-xs text-emerald-600 font-semibold">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  All systems operational
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/60 to-transparent pointer-events-none" />
    </section>
  );
};
