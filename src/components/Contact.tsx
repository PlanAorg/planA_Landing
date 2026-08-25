
import { Send } from "lucide-react";
import { Link } from "react-router-dom";
import Keyframes from "./Keyframes";
import { useScrollReveal, rv } from "@/hooks/useScrollReveal";

export const Contact = () => {
  const { ref, visible } = useScrollReveal(0.05);

  return (
    <section ref={ref} id="contact" className="py-20 bg-gray-50 border-t border-gray-100 overflow-hidden">
      <Keyframes />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div
          style={rv(visible, 0)}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 via-amber-50 to-purple-50 border border-gray-100 px-6 py-14 sm:px-12 sm:py-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a2454] mb-4">
            Ready To Build Something Remarkable?
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-8">
            Share your vision and our team will co-create a roadmap that turns complex challenges
            into elegant, scalable products.
          </p>
          <Link
            to="/contact-us"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#1a2454] font-semibold text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
          >
            Get Started
            <Send className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
