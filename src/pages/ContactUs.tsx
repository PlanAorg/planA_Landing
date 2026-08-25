
import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import Keyframes from "@/components/Keyframes";
import { useScrollReveal, rv } from "@/hooks/useScrollReveal";
import { Send, Mail, Phone, MapPin } from "lucide-react";

const interests = [
  "Custom Software Development",
  "Product Acceleration / MVP",
  "ERP Solutions",
  "Hosting & Infrastructure",
  "Something else",
];

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    interest: "",
    message: "",
    consent: false,
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const { ref: heroRef, visible: heroVisible } = useScrollReveal(0.05);
  const { ref: formRef, visible: formVisible } = useScrollReveal(0.05);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.consent) {
      toast({ title: "Consent required", description: "Please accept the privacy policy to continue." });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
      setFormData({ name: "", email: "", mobile: "", subject: "", interest: "", message: "", consent: false });
      setLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Keyframes />
      <Header />

      {/* ── Hero ── */}
      <section
        ref={heroRef}
        className="relative pt-[120px] pb-20 bg-gradient-to-br from-emerald-50 via-amber-50 to-purple-50 overflow-hidden"
      >
        <div className="pointer-events-none absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-teal-100/40 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 w-[380px] h-[380px] rounded-full bg-purple-100/40 blur-3xl" />

        <div style={rv(heroVisible, 0)} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a2454] mb-4">
            Contact Us
          </h1>
          <p className="text-sm text-gray-500">
            <Link to="/" className="text-[#1a2454] font-semibold hover:underline">Home</Link>
            {" / "}
            <span>Contact Us</span>
          </p>
        </div>
      </section>

      {/* ── Form section ── */}
      <section ref={formRef} className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-8 items-stretch">

          {/* Left — form */}
          <div style={rv(formVisible, 0, "left")} className="lg:col-span-3">
            <p className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-3">Get In Touch</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2454] mb-8 leading-tight">
              Available 24/7 For Assistance
            </h2>

            <form
              onSubmit={handleSubmit}
              className="rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 p-6 sm:p-9 space-y-5"
            >
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5 ml-1">Name</label>
                <input
                  type="text" name="name" placeholder="Jane Doe"
                  value={formData.name} onChange={handleChange} required
                  className="w-full h-12 rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 focus:bg-white transition-all"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5 ml-1">Email</label>
                  <input
                    type="email" name="email" placeholder="you@company.com"
                    value={formData.email} onChange={handleChange} required
                    className="w-full h-12 rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5 ml-1">Mobile Number</label>
                  <input
                    type="tel" name="mobile" placeholder="+383 ..."
                    value={formData.mobile} onChange={handleChange}
                    className="w-full h-12 rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5 ml-1">Subject</label>
                  <input
                    type="text" name="subject" placeholder="How can we help?"
                    value={formData.subject} onChange={handleChange}
                    className="w-full h-12 rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5 ml-1">Interested in</label>
                  <select
                    name="interest" value={formData.interest} onChange={handleChange}
                    className="w-full h-12 rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-700 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 focus:bg-white transition-all"
                  >
                    <option value="">Select an option</option>
                    {interests.map((i) => (
                      <option key={i} value={i}>{i}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5 ml-1">Message</label>
                <textarea
                  name="message" placeholder="Tell us a bit about your project or question..." rows={5}
                  value={formData.message} onChange={handleChange} required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 focus:bg-white transition-all resize-none"
                />
              </div>

              <div className="flex items-start gap-3 pt-1">
                <input
                  type="checkbox" name="consent" checked={formData.consent} onChange={handleChange}
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-teal-500 focus:ring-teal-400"
                />
                <p className="text-xs text-gray-500">
                  By submitting this form, you consent to the processing of your personal
                  data in accordance with our{" "}
                  <span className="text-teal-600 font-semibold">Privacy Policy</span>.
                </p>
              </div>

              <div className="flex items-center justify-between gap-4 pt-2 flex-wrap">
                <p className="text-xs text-gray-400">We typically reply within 24 hours.</p>
                <button
                  type="submit" disabled={loading}
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#1a2454] text-white font-semibold text-sm hover:bg-[#2d3f7b] disabled:opacity-70 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  {loading ? "Sending…" : "Let's Talk"}
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>

          {/* Right — Say hi panel */}
          <div
            style={rv(formVisible, 150, "right")}
            className="lg:col-span-2 relative overflow-hidden bg-gradient-to-br from-[#1a2454] to-[#2d3f7b] rounded-3xl p-8 sm:p-10 flex flex-col"
          >
            <div className="pointer-events-none absolute -top-16 -right-16 w-56 h-56 rounded-full bg-teal-400/10 blur-2xl" />
            <div className="pointer-events-none absolute bottom-0 left-0 w-40 h-40 rounded-full bg-purple-400/10 blur-2xl" />

            <h3 className="relative text-3xl font-bold text-white mb-4">Say Hi!</h3>
            <p className="relative text-white/70 leading-relaxed mb-8">
              Got a question or a project in mind? Drop us a message and we'll get back fast with
              clear next steps — whether it's support, ERP, custom software, or hosting.
            </p>

            <div className="relative divide-y divide-white/10 border-t border-b border-white/10 mb-8">
              {[
                { icon: Mail,   label: "Email",    value: "info@plan-asolution.com", href: "mailto:info@plan-asolution.com" },
                { icon: Phone,  label: "Phone",    value: "+(383) 45 286 424",        href: "tel:+38345286424" },
                { icon: MapPin, label: "Location", value: "Kosovo",                   href: "#" },
              ].map((c) => {
                const Icon = c.icon;
                return (
                  <a
                    key={c.label}
                    href={c.href}
                    className="flex items-center justify-between gap-4 py-4 group"
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="text-[11px] font-bold uppercase tracking-widest text-teal-300/70 w-16 shrink-0">{c.label}</span>
                      <span className="text-sm font-semibold text-white group-hover:text-teal-300 transition-colors">{c.value}</span>
                    </div>
                    <Icon className="h-4 w-4 text-white/25 group-hover:text-teal-300 transition-colors shrink-0" strokeWidth={1.75} />
                  </a>
                );
              })}
            </div>

            <div className="relative mt-auto">
              <p className="text-[11px] font-bold uppercase tracking-widest text-teal-300/70 mb-1">Response Time</p>
              <p className="text-lg font-bold text-white">Under 24 hours, every time.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
