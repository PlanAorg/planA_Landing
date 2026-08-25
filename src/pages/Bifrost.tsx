
import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useScrollReveal, rv } from "@/hooks/useScrollReveal";
import Keyframes from "@/components/Keyframes";
import { ArrowRight, Play, Search, ScanLine, ShoppingCart, Truck, Bell, LayoutGrid, Building2, PackageCheck, TrendingUp, Package, ClipboardList, Users } from "lucide-react";

/* ── Dashboard mock data ── */
const mockOrders = [
  { id: 1, date: "17 Qer 2026", nr: "BIF-20260617-4821", seller: "Demo Distributor SH.P.K.", amount: "€45.00",  status: "Porosi e re",   statusColor: "bg-amber-100 text-amber-700" },
  { id: 2, date: "16 Qer 2026", nr: "BIF-20260616-3310", seller: "Demo Distributor SH.P.K.", amount: "€108.00", status: "Porosi e re",   statusColor: "bg-amber-100 text-amber-700" },
  { id: 3, date: "15 Qer 2026", nr: "BIF-20260615-7782", seller: "Alpha Foods SH.P.K.",      amount: "€26.00",  status: "E konfirmuar", statusColor: "bg-blue-100 text-blue-700" },
  { id: 4, date: "14 Qer 2026", nr: "BIF-20260614-2291", seller: "Demo Distributor SH.P.K.", amount: "€90.00",  status: "E nisur",      statusColor: "bg-purple-100 text-purple-700" },
  { id: 5, date: "13 Qer 2026", nr: "BIF-20260613-9934", seller: "Alpha Foods SH.P.K.",      amount: "€125.00", status: "E derguar",    statusColor: "bg-green-100 text-green-700" },
];

const mockTopProducts = [
  { rank: 1, name: "Frosch Limone 70 Tabs",        sold: "4 copë",  total: "€44" },
  { rank: 2, name: "Frosch Liquid Hand Soap 500ml", sold: "3 copë",  total: "€18" },
  { rank: 3, name: "Coppini Uthull Bazilik",        sold: "3 copë",  total: "€30" },
  { rank: 4, name: "Coppini Vaj Ulliri 1L",         sold: "2 copë",  total: "€20" },
];

const rankColors = ["text-amber-500", "text-gray-400", "text-orange-400", "text-gray-300"];

const dashTabs = ["Përmbledhje", "Porositë", "Detaje Porosie", "Raporte"];

/* Skeleton bar — replaces any readable data value */
const Skel = ({ w = "w-24", h = "h-3" }: { w?: string; h?: string }) => (
  <div className={`${w} ${h} bg-gray-200 rounded-full`} />
);

const orderStatuses = [
  { label: "Porosi e re",   cls: "bg-amber-100 text-amber-700" },
  { label: "Porosi e re",   cls: "bg-amber-100 text-amber-700" },
  { label: "E konfirmuar",  cls: "bg-blue-100 text-blue-700" },
  { label: "E nisur",       cls: "bg-purple-100 text-purple-700" },
  { label: "E derguar",     cls: "bg-green-100 text-green-700" },
];

function DashboardOverview() {
  return (
    <div className="bg-[#f8f9fa] rounded-xl p-6 text-gray-800 text-sm">
      <div className="flex items-start justify-between mb-5">
        <div>
          <h3 className="font-bold text-base text-gray-900">Përmbledhje</h3>
          <p className="text-gray-400 text-xs mt-0.5">Pasqyrë e përgjithshme e biznesit tuaj</p>
        </div>
        <div className="h-7 w-28 bg-gray-200 rounded-lg" />
      </div>
      {/* Stat cards */}
      <div className="grid grid-cols-4 gap-3 mb-5">
        {[
          { icon: Package,       iconBg: "bg-blue-50",   iconColor: "text-blue-500" },
          { icon: ClipboardList, iconBg: "bg-green-50",  iconColor: "text-green-500" },
          { icon: TrendingUp,    iconBg: "bg-purple-50", iconColor: "text-purple-500" },
          { icon: Users,         iconBg: "bg-orange-50", iconColor: "text-orange-500" },
        ].map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={i} className="bg-white rounded-xl p-4 border border-gray-100">
              <div className="flex items-start justify-between mb-3">
                <Skel w="w-20" h="h-2.5" />
                <div className={`h-7 w-7 rounded-lg ${s.iconBg} flex items-center justify-center`}>
                  <Icon className={`h-3.5 w-3.5 ${s.iconColor}`} />
                </div>
              </div>
              <Skel w="w-12" h="h-6" />
              <Skel w="w-28" h="h-2" />
            </div>
          );
        })}
      </div>
      {/* Bottom panels */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white rounded-xl p-4 border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <ClipboardList className="h-4 w-4 text-violet-500" />
              <p className="font-semibold text-sm">Porositë e Fundit</p>
            </div>
            <span className="text-xs bg-gray-100 text-gray-500 rounded-full px-2 py-0.5">—</span>
          </div>
          {[0, 1].map((i) => (
            <div key={i} className="flex items-center justify-between py-2.5 border-b border-gray-50 last:border-0">
              <div className="flex items-center gap-2">
                <div className="h-7 w-7 rounded-full bg-gray-200 shrink-0" />
                <div className="space-y-1.5">
                  <Skel w="w-28" h="h-2.5" />
                  <Skel w="w-16" h="h-2" />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Skel w="w-16" h="h-5" />
                <Skel w="w-8" h="h-3" />
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-violet-500" />
              <p className="font-semibold text-sm">Produktet Më të Shitura</p>
            </div>
            <span className="text-xs bg-gray-100 text-gray-500 rounded-full px-2 py-0.5">—</span>
          </div>
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
              <div className="flex items-center gap-2">
                <span className={`text-sm font-extrabold w-4 ${rankColors[i]}`}>{i + 1}</span>
                <div className="space-y-1.5">
                  <Skel w="w-32" h="h-2.5" />
                  <Skel w="w-16" h="h-2" />
                </div>
              </div>
              <Skel w="w-8" h="h-3" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DashboardOrders() {
  return (
    <div className="bg-[#f8f9fa] rounded-xl p-6 text-gray-800 text-sm">
      <div className="mb-5">
        <h3 className="font-bold text-base text-gray-900">Porositë e Mia</h3>
        <p className="text-gray-400 text-xs mt-0.5">Ndiqni dhe menaxhoni të gjitha porositë tuaja</p>
      </div>
      <div className="flex flex-wrap gap-2 mb-5">
        {[["Porosi e re","5","bg-white border-gray-200 text-gray-700"],
          ["E konfirmuar","1","bg-white border-gray-200 text-gray-500"],
          ["Ne proces","0","bg-white border-gray-200 text-gray-400"],
          ["E nisur","0","bg-white border-gray-200 text-gray-400"],
          ["E derguar","0","bg-white border-gray-200 text-gray-400"],
        ].map(([label, count, cls]) => (
          <span key={label} className={`px-3 py-1.5 rounded-lg border text-xs font-medium ${cls}`}>
            {label} <span className="ml-1 font-bold">{count}</span>
          </span>
        ))}
      </div>
      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <div className="grid grid-cols-[24px_90px_1fr_1fr_70px_110px_60px] gap-3 px-4 py-2.5 bg-gray-50 border-b border-gray-100 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
          <span>#</span><span>DATA</span><span>NR. POROSISË</span><span>SHITËSI</span><span>SHUMA</span><span>STATUSI</span><span>VEPRIMET</span>
        </div>
        {orderStatuses.map((o, i) => (
          <div key={i} className="grid grid-cols-[24px_90px_1fr_1fr_70px_110px_60px] gap-3 px-4 py-3 border-b border-gray-50 last:border-0 items-center hover:bg-gray-50 transition-colors">
            <span className="text-gray-300 text-xs">{i + 1}</span>
            <Skel w="w-20" />
            <Skel w="w-36" />
            <Skel w="w-28" />
            <Skel w="w-12" />
            <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full w-fit ${o.cls}`}>{o.label}</span>
            <div className="w-12 h-3 bg-blue-200 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

function DashboardOrderDetail() {
  return (
    <div className="bg-[#f8f9fa] rounded-xl p-6 text-gray-800 text-sm">
      <div className="flex items-center gap-3 mb-5">
        <span className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs text-gray-500">Shitjet Totale</span>
        <span className="px-3 py-1.5 bg-white border border-blue-300 rounded-lg text-xs text-blue-600 font-semibold flex items-center gap-2">
          <Skel w="w-36" h="h-2.5" />
          <span className="text-gray-400">×</span>
        </span>
      </div>
      <div className="bg-white rounded-xl border border-gray-100 p-5 mb-4">
        <h3 className="font-bold text-base mb-1">Detajet e Porosisë</h3>
        <Skel w="w-48" h="h-2.5" />
        <div className="grid grid-cols-3 gap-x-6 gap-y-5 mt-5">
          {[
            "Data e Porosisë","Statusi","Totali",
            "Nën-Totali","Afiliati","Telefoni",
            "Qyteti","Adresa","Email",
            "Blerësi","Qyteti i Blerësit","NUI",
          ].map((label) => (
            <div key={label}>
              <p className="text-gray-400 text-xs mb-1.5">{label}</p>
              {label === "Statusi"
                ? <span className="inline-block px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-[10px] font-semibold">E derguar</span>
                : <Skel w={label === "Afiliati" || label === "Blerësi" ? "w-36" : "w-24"} />
              }
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-xl border border-gray-100 p-5">
        <h3 className="font-bold text-sm mb-4">Produktet e Porosisë</h3>
        <div className="grid grid-cols-[24px_1fr_70px_70px_70px] gap-3 px-2 py-2 bg-gray-50 rounded-lg text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">
          <span>#</span><span>PRODUKTI</span><span>SASIA</span><span>ÇMIMI</span><span>TOTALI</span>
        </div>
        {[1, 2].map((n) => (
          <div key={n} className="grid grid-cols-[24px_1fr_70px_70px_70px] gap-3 px-2 py-3 border-b border-gray-50 last:border-0 items-center">
            <span className="text-gray-300 text-xs">{n}</span>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-gray-100 rounded-lg shrink-0" />
              <div className="space-y-1.5">
                <Skel w="w-32" />
                <Skel w="w-20" h="h-2" />
              </div>
            </div>
            <Skel w="w-6" />
            <Skel w="w-12" />
            <Skel w="w-12" />
          </div>
        ))}
        <div className="flex justify-end gap-8 pt-3 border-t border-gray-100 mt-2 items-center">
          <span className="text-xs text-gray-400">Totali:</span>
          <Skel w="w-14" h="h-4" />
        </div>
      </div>
    </div>
  );
}

function DashboardReports() {
  return (
    <div className="bg-[#f8f9fa] rounded-xl p-6 text-gray-800 text-sm">
      <h3 className="font-bold text-base text-gray-900 mb-4">Blerjet në Detaje</h3>
      <div className="flex flex-wrap gap-3 mb-5">
        <div className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 flex items-center gap-3">
          <p className="text-[10px] text-gray-400 uppercase font-bold">Intervali Kohor</p>
          <Skel w="w-24" h="h-2.5" />
        </div>
        <div className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 flex items-center gap-3">
          <span className="text-[10px] text-gray-400">Data Nga</span>
          <Skel w="w-20" h="h-2.5" />
          <span className="text-[10px] text-gray-400">Data Deri</span>
          <Skel w="w-20" h="h-2.5" />
        </div>
        <button className="bg-blue-500 text-white text-xs font-semibold px-4 py-2.5 rounded-xl flex items-center gap-1.5">
          <Search className="h-3.5 w-3.5" /> Kërko
        </button>
      </div>
      <div className="grid grid-cols-4 gap-3 mb-5">
        {["TOTALI I BLERJEVE","TOTALI NETO","TOTALI TVSH","TOTALI SASISE"].map((label) => (
          <div key={label} className="bg-white rounded-xl border border-gray-100 p-4">
            <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-3">{label}</p>
            <Skel w="w-20" h="h-6" />
          </div>
        ))}
      </div>
      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <div className="grid grid-cols-[20px_1fr_80px_1fr_70px_1fr_90px_1fr] gap-2 px-4 py-2.5 bg-gray-50 border-b border-gray-100 text-[9px] font-bold text-gray-400 uppercase tracking-wider">
          <span>#</span><span>NR. POROSISË</span><span>DATA</span><span>BIZNESIT</span><span>NUI</span><span>LOKACIONI</span><span>BARCODE</span><span>PRODUKTI</span>
        </div>
        {[1, 2].map((id) => (
          <div key={id} className="grid grid-cols-[20px_1fr_80px_1fr_70px_1fr_90px_1fr] gap-2 px-4 py-3 border-b border-gray-50 last:border-0 items-center hover:bg-gray-50 transition-colors">
            <span className="text-gray-300 text-xs">{id}</span>
            <div className="w-24 h-3 bg-blue-200 rounded-full" />
            <Skel w="w-16" />
            <Skel w="w-28" />
            <Skel w="w-14" />
            <Skel w="w-24" />
            <Skel w="w-20" />
            <div className="w-24 h-3 bg-blue-200 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

const outcomes = [
  { stat: "8+",   label: "Product categories",        sub: "Food, drinks, hygiene, household & more" },
  { stat: "B2B",  label: "Verified business buyers",  sub: "Restaurants, retailers, hotels" },
  { stat: "🇽🇰",  label: "Kosovo-wide distribution",  sub: "Fast & secure delivery across the country" },
  { stat: "0",    label: "Hidden fees or middlemen",   sub: "Direct trade, transparent pricing" },
];

const features = [
  {
    number: "01",
    for: "Buyers",
    icon: Search,
    title: "Search by product, brand or barcode",
    desc: "Find exactly what you need — search across the full catalogue by name, brand, or scan a barcode directly from your device. Built for fast, intentional ordering.",
  },
  {
    number: "02",
    for: "Distributors",
    icon: LayoutGrid,
    title: "Structured catalogue by category",
    desc: "Products organised across Food, Drinks, Hygiene, Personal Health, Household, Textile, Pet and more — so buyers browse exactly where they need to.",
  },
  {
    number: "03",
    for: "Buyers",
    icon: ScanLine,
    title: "Scan to order",
    desc: "Point your camera at any product barcode and instantly pull up its listing, stock availability, and price. Reordering from a shelf has never been faster.",
  },
  {
    number: "04",
    for: "Both",
    icon: Truck,
    title: "Distribution across Kosovo",
    desc: "Bifröst handles fulfilment end-to-end. Buyers see delivery zones before checkout. Distributors define their reach and manage dispatch from one dashboard.",
  },
  {
    number: "05",
    for: "Both",
    icon: Bell,
    title: "Real-time notifications",
    desc: "Order updates, new product listings, promotions, and dispatch confirmations — delivered instantly so both sides stay informed without chasing anyone.",
  },
  {
    number: "06",
    for: "Distributors",
    icon: PackageCheck,
    title: "Inventory & order management",
    desc: "Track stock levels, incoming orders, and fulfilment status from a single interface. Your sales operation, running smoothly without the spreadsheets.",
  },
];

const categories = [
  "Ushqime", "Pije", "Higjienë", "Shëndeti", "Shtëpi", "Tekstil", "Kafshë", "Produkte të tjera",
];

export default function Bifrost() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const { ref: problemRef,  visible: problemVisible  } = useScrollReveal(0.05);
  const { ref: productRef,  visible: productVisible  } = useScrollReveal(0.05);
  const { ref: dashRef,     visible: dashVisible     } = useScrollReveal(0.05);
  const { ref: videoRef,    visible: videoVisible    } = useScrollReveal(0.05);
  const { ref: featuresRef, visible: featuresVisible } = useScrollReveal(0.05);
  const { ref: outcomesRef, visible: outcomesVisible } = useScrollReveal(0.05);
  const { ref: ctaRef,      visible: ctaVisible      } = useScrollReveal(0.1);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0c10] text-white">
      <Keyframes />
      <Header />

      {/* ── Hero ── DARK ── */}
      <section className="relative min-h-screen flex flex-col justify-center pt-[72px] border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full py-24">

          <div style={rv(heroVisible, 0)} className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10 sm:mb-16">
            <span className="text-[10px] sm:text-[11px] font-mono text-white/30 tracking-[0.2em] sm:tracking-[0.25em] uppercase">Plan-A Solutions</span>
            <span className="h-px flex-1 max-w-[40px] sm:max-w-[60px] bg-white/15" />
            <span className="text-[10px] sm:text-[11px] font-mono text-white/30 tracking-[0.2em] sm:tracking-[0.25em] uppercase">B2B Commerce · Kosovo</span>
          </div>

          <h1
            style={{ ...rv(heroVisible, 80), fontSize: "clamp(52px, 16vw, 160px)", lineHeight: 0.9, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "2.5rem" }}
            className="text-white"
          >
            Bifröst
          </h1>

          <div style={rv(heroVisible, 160)} className="flex items-center gap-6 mb-10">
            <div className="h-px bg-white/20 flex-1 max-w-xs" />
            <span className="text-white/25 text-xs font-mono tracking-widest uppercase">The Bridge</span>
            <div className="h-px bg-white/20 flex-1 max-w-xs" />
          </div>

          <div style={rv(heroVisible, 220)} className="grid sm:grid-cols-2 gap-8 max-w-3xl mb-14">
            <p className="text-white/45 text-lg leading-relaxed">
              A B2B e-commerce platform connecting verified businesses with distributors across Kosovo — built for speed, transparency, and scale.
            </p>
            <p className="text-white text-lg leading-relaxed font-medium">
              Buyers browse a structured catalogue, scan barcodes to reorder, and receive across Kosovo. Distributors manage inventory, reach, and orders — all in one place.
            </p>
          </div>

          <div style={rv(heroVisible, 300)} className="flex flex-wrap items-center gap-5">
            <a
              href="mailto:info@plan-asolution.com?subject=Bifrost - Request Access"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-[#0b0c10] font-bold text-sm hover:bg-white/90 transition-all duration-200 hover:-translate-y-0.5"
            >
              Request Access
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="mailto:info@plan-asolution.com?subject=Bifrost - Join as Distributor"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 text-white/60 hover:text-white"
              style={{ border: "1px solid rgba(255,255,255,0.12)" }}
            >
              Join as Distributor
            </a>
          </div>

          <div style={rv(heroVisible, 400)} className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mt-16 sm:mt-20 pt-8 border-t border-white/[0.06]">
            <div>
              <p className="text-white/20 text-[11px] font-mono uppercase tracking-widest mb-1">Midgard</p>
              <p className="text-white/50 text-sm font-medium">Buyers — businesses, restaurants, retailers</p>
            </div>
            <div className="sm:text-right">
              <p className="text-white/20 text-[11px] font-mono uppercase tracking-widest mb-1">Asgard</p>
              <p className="text-white/50 text-sm font-medium">Distributors — suppliers & wholesalers</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Product snapshot ── WHITE ── */}
      <section ref={productRef} className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div style={rv(productVisible, 0, "left")}>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0b0c10] leading-tight mb-6">
                A full marketplace,<br />
                <em className="not-italic text-gray-400">built for B2B.</em>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                Bifröst is a live platform already serving businesses across Kosovo. Buyers log in,
                browse categorised distributor catalogues, scan barcodes to reorder, and track
                delivery — all from a single dashboard.
              </p>

              {/* Category pills */}
              <div className="flex flex-wrap gap-2">
                {categories.map((c) => (
                  <span key={c} className="px-3 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-600 border border-gray-200">
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* App mockup card */}
            <div style={rv(productVisible, 150, "right")}>
              <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-xl">
                {/* Fake app header */}
                <div className="px-5 py-3 flex items-center justify-between" style={{ background: "linear-gradient(90deg, #3b0764, #6d28d9)" }}>
                  <div className="flex items-center gap-2">
                    <div className="h-5 w-5 bg-white/20 rounded" />
                    <span className="text-white font-bold text-sm">Bifrost</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-7 w-32 bg-white/20 rounded-lg" />
                    <div className="h-7 w-16 bg-white rounded-lg flex items-center justify-center">
                      <span className="text-violet-700 font-bold text-xs">Kërko</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <ScanLine className="h-4 w-4 text-white/70" />
                    <ShoppingCart className="h-4 w-4 text-white/70" />
                    <Building2 className="h-4 w-4 text-white/70" />
                  </div>
                </div>
                {/* Category nav */}
                <div className="px-4 py-2 bg-white border-b border-gray-100 flex gap-2 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  {["Kryefaqja", "Ushqime", "Pije", "Higjienë", "Shëndeti"].map((c, i) => (
                    <span key={c} className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap shrink-0 ${i === 0 ? "bg-violet-600 text-white" : "text-gray-500 bg-gray-100"}`}>{c}</span>
                  ))}
                </div>
                {/* Banner */}
                <div className="px-4 py-4 bg-white">
                  <div className="rounded-xl p-5 flex items-center justify-between" style={{ background: "linear-gradient(135deg, #1e3a8a, #4f46e5)" }}>
                    <div>
                      <p className="text-white font-bold text-sm mb-1">Shpërndarje në të gjithë Kosovën</p>
                      <p className="text-white/70 text-xs">Dorëzim i shpejtë & i sigurt</p>
                      <div className="mt-3 px-3 py-1.5 bg-white rounded-full inline-block">
                        <span className="text-blue-700 font-bold text-xs">Shiko Zonat →</span>
                      </div>
                    </div>
                    <Truck className="h-12 w-12 text-white/30 shrink-0" />
                  </div>
                </div>
                {/* Products row */}
                <div className="px-4 pb-5 bg-white">
                  <p className="text-gray-900 font-bold text-sm mb-3">Produktet më të kërkuara</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {["Uthull Bazilik", "Vaj Ulliri 500ml", "Toilet Cleaner"].map((name) => (
                      <div key={name} className="border border-gray-100 rounded-xl p-3 bg-gray-50">
                        <div className="h-12 w-full bg-gray-200 rounded-lg mb-2" />
                        <p className="text-gray-700 text-[10px] font-medium leading-tight">{name}</p>
                        <p className="text-gray-400 text-[10px]">Coppini</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Dashboard mockups ── DARK ── */}
      <section ref={dashRef} className="py-24 bg-[#0b0c10] border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div style={rv(dashVisible, 0)} className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-3">
              See it in action.
            </h2>
            <p className="text-white/40 text-lg max-w-xl">
              A live look at what buyers and distributors see inside Bifröst — from order management to real-time analytics.
            </p>
          </div>

          {/* Tab switcher */}
          <div style={rv(dashVisible, 100)} className="flex flex-wrap gap-2 mb-6">
            {dashTabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  activeTab === i
                    ? "bg-white text-[#0b0c10]"
                    : "text-white/50 hover:text-white border border-white/10 hover:border-white/25"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Window chrome + mockup */}
          <div style={rv(dashVisible, 180)} className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            {/* Fake browser bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#16171d] border-b border-white/[0.06]">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-400/60" />
                <div className="h-3 w-3 rounded-full bg-amber-400/60" />
                <div className="h-3 w-3 rounded-full bg-green-400/60" />
              </div>
              <div className="flex-1 mx-4 h-6 bg-white/5 rounded-lg flex items-center justify-center">
                <span className="text-white/25 text-xs font-mono">app.bifrost.com · dashboard</span>
              </div>
            </div>
            {/* Screen content */}
            <div className="p-2 sm:p-4 bg-[#f0f0f0] overflow-x-auto">
              <div className="min-w-[640px] sm:min-w-0">
                {activeTab === 0 && <DashboardOverview />}
                {activeTab === 1 && <DashboardOrders />}
                {activeTab === 2 && <DashboardOrderDetail />}
                {activeTab === 3 && <DashboardReports />}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Video ── DARK ── */}
      <section ref={videoRef} className="py-24 bg-[#0b0c10] border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div style={rv(videoVisible, 0)} className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight max-w-lg">
              Commerce isn't a transaction.<br />
              <em className="not-italic text-white/35">It's a connection.</em>
            </h2>
          </div>

          <div
            style={rv(videoVisible, 100)}
            className="relative rounded-2xl overflow-hidden cursor-pointer group"
            onClick={() => {}}
          >
            <div
              className="w-full flex items-center justify-center"
              style={{ aspectRatio: "16/7", background: "#111217", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <div className="relative z-10 flex flex-col items-center gap-5">
                <button
                  className="h-16 w-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}
                >
                  <Play className="h-6 w-6 text-white fill-white ml-0.5" />
                </button>
                <p className="text-white/20 text-xs font-mono tracking-[0.25em] uppercase">Video coming soon</p>
              </div>
            </div>
          </div>

          <div style={rv(videoVisible, 200)} className="mt-8 max-w-xl">
            <p className="text-white/40 text-base leading-relaxed">
              Every order placed on Bifröst is a handshake across the bridge — fast, trusted, and built to scale across Kosovo and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* ── Features ── GREY ── */}
      <section ref={featuresRef} className="py-24 bg-[#f4f4f6] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div style={rv(featuresVisible, 0)} className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b0c10] leading-tight">
              Two sides. One platform.<br />
              <em className="not-italic text-gray-400">Built for both.</em>
            </h2>
          </div>

          <div className="space-y-px bg-gray-200 rounded-2xl overflow-hidden">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.number}
                  style={rv(featuresVisible, i * 70, "up")}
                  className="grid sm:grid-cols-[80px_48px_1fr_1fr] gap-6 items-center bg-[#f4f4f6] px-8 py-7 hover:bg-gray-100 transition-colors duration-200"
                >
                  <p className="text-gray-200 text-4xl font-extrabold tabular-nums leading-none">{f.number}</p>
                  <div className="h-10 w-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center shrink-0">
                    <Icon className="h-4 w-4 text-gray-500" />
                  </div>
                  <h3 className="font-bold text-[#0b0c10] text-lg">{f.title}</h3>
                  <div className="flex flex-col gap-2">
                    <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                    <span className={`self-start text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${
                      f.for === "Buyers"       ? "text-cyan-700 bg-cyan-50" :
                      f.for === "Distributors" ? "text-violet-700 bg-violet-50" :
                      "text-gray-500 bg-gray-200"
                    }`}>{f.for}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Outcomes ── NAVY ── */}
      <section ref={outcomesRef} className="py-24 bg-[#1a2454] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div style={rv(outcomesVisible, 0)} className="mb-16 max-w-lg">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Built for Kosovo.<br />
              <em className="not-italic text-white/35">Ready to scale.</em>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden">
            {outcomes.map((o, i) => (
              <div
                key={o.label}
                style={rv(outcomesVisible, i * 70, "up")}
                className="bg-[#1a2454] px-8 py-10 hover:bg-[#243070] transition-colors duration-200"
              >
                <p className="text-5xl font-extrabold text-white mb-3 tabular-nums">{o.stat}</p>
                <p className="text-white font-semibold text-base mb-1">{o.label}</p>
                <p className="text-white/40 text-sm">{o.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Problem ── WHITE ── */}
      <section ref={problemRef} className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div style={rv(problemVisible, 0, "left")}>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0b0c10] leading-tight">
                The problem isn't supply.<br />
                <em className="not-italic text-gray-400">It's the distance.</em>
              </h2>
            </div>
            <div style={rv(problemVisible, 120, "right")} className="space-y-5 pt-2">
              <p className="text-gray-500 text-lg leading-relaxed">
                Businesses in Kosovo spend days calling distributors, comparing prices over WhatsApp, and manually tracking orders on spreadsheets. Distributors lose buyers they never even knew were looking.
              </p>
              <p className="text-gray-900 text-lg leading-relaxed font-medium">
                Bifröst replaces all of that with one platform — structured, fast, and built for how B2B actually works.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-px mt-20 bg-gray-100 rounded-2xl overflow-hidden">
            {[
              { from: "WhatsApp orders & phone calls", to: "One structured platform" },
              { from: "Manual spreadsheet tracking",   to: "Live order & inventory visibility" },
              { from: "Unknown buyer networks",        to: "Verified B2B marketplace" },
            ].map((s, i) => (
              <div
                key={i}
                style={rv(problemVisible, 280 + i * 80, "up")}
                className="bg-white px-8 py-8"
              >
                <p className="text-gray-300 text-sm line-through mb-3">{s.from}</p>
                <p className="text-[#0b0c10] font-semibold text-base">{s.to}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── WHITE ── */}
      <section ref={ctaRef} className="py-32 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div style={rv(ctaVisible, 0)} className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <div>
              <p className="text-gray-300 text-[11px] font-mono tracking-[0.25em] uppercase mb-6">Ready to cross?</p>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#0b0c10] leading-[0.9] tracking-tight">
                Cross the<br />bridge.
              </h2>
            </div>
            <div className="flex flex-col gap-4 lg:items-end">
              <p className="text-gray-400 text-base max-w-xs lg:text-right leading-relaxed">
                Join the businesses and distributors already using Bifröst across Kosovo — or get in touch to onboard your network.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:info@plan-asolution.com?subject=Bifrost - Request Access"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#0b0c10] text-white font-bold text-sm hover:bg-[#1a2454] transition-all duration-200 hover:-translate-y-0.5"
                >
                  Request Access
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="mailto:info@plan-asolution.com?subject=Bifrost - Become a Distributor"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm border border-gray-200 text-gray-600 hover:border-gray-400 hover:text-gray-900 transition-all duration-200 hover:-translate-y-0.5"
                >
                  Become a Distributor
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
