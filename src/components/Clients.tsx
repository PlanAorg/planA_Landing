
import Keyframes from "./Keyframes";
import { useScrollReveal, rv } from "@/hooks/useScrollReveal";

const trustMetrics = [
  { label: "Client Satisfaction", value: "4.9 / 5", detail: "Average rating across long-term partnerships" },
  { label: "Projects Shipped",    value: "10+",      detail: "Products launched across SaaS, finance, and logistics" },
  { label: "Client Retention",   value: "93%",      detail: "Clients that extend scope after the first engagement" },
];

const clientLogos = [
  { name: "G-Netz",            imageSrc: "/clients/g-netzLogo.png" },
  { name: "Crowe",             imageSrc: "/clients/crowe-logo.svg" },
  { name: "OWS",               imageSrc: "/clients/OWS.png" },
  { name: "Refractory Group",  imageSrc: "/clients/RefractoryGroupLogo.png" },
  { name: "NB",                imageSrc: "/clients/NBLogo.png" },
  { name: "Arsi",             imageSrc: "/clients/arsi-logo.png" },
  { name: "Graniti Com",      imageSrc: "/clients/GranitiComLogo.png" },
];

export const Clients = () => {
  const { ref, visible } = useScrollReveal(0.05);

  return (
    <section ref={ref} id="clients" className="py-20 bg-white border-t border-gray-100 overflow-hidden">
      <Keyframes />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div style={rv(visible, 0)} className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a2454] mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            From start-ups to enterprise teams, organisations turn to Plan-A when they need
            velocity, reliability, and world-class engineering.
          </p>
        </div>

        {/* Trust metrics */}
        <div className="grid sm:grid-cols-3 gap-5 mb-14">
          {trustMetrics.map((m, i) => (
            <div
              key={m.label}
              style={rv(visible, i * 100, "pop")}
              className="bg-gray-50 rounded-2xl border border-gray-100 p-6 text-center hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
            >
              <p className="text-4xl font-extrabold text-[#1a2454] mb-1">{m.value}</p>
              <p className="text-sm font-semibold text-gray-700 mb-1">{m.label}</p>
              <p className="text-xs text-gray-500">{m.detail}</p>
            </div>
          ))}
        </div>

        {/* Logo strip */}
        <div style={rv(visible, 300)} className="relative overflow-hidden bg-[#0f172a] rounded-2xl px-4 py-8 mb-16">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#0f172a] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0f172a] to-transparent z-10" />
          <div className="overflow-hidden">
            <div
              className="flex items-center"
              style={{ animation: `scrollInfinite ${clientLogos.length * 10}s linear infinite`, width: "fit-content" }}
            >
              {[...clientLogos, ...clientLogos, ...clientLogos].map((client, index) => (
                <div
                  key={`logo-${index}`}
                  className="flex-shrink-0 mx-8 flex items-center justify-center h-14 w-28 transition-all duration-300 hover:scale-105"
                >
                  <img
                    src={client.imageSrc}
                    alt={client.name}
                    className="max-h-full max-w-full object-contain"
                    style={client.name === "Arsi" ? { transform: "scale(1.6)" } : undefined}
                  />
                </div>
              ))}
            </div>
          </div>
          <style>{`
            @keyframes scrollInfinite {
              0%   { transform: translateX(0); }
              100% { transform: translateX(-33.333%); }
            }
          `}</style>
        </div>

      </div>
    </section>
  );
};
