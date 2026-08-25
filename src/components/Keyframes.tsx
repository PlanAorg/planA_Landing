
export const Keyframes = () => (
  <style>{`
    /* ── Continuous animations (not scroll-triggered) ── */

    @keyframes heroFloat {
      0%, 100% { transform: translateY(0px); }
      50%       { transform: translateY(-10px); }
    }
    .anim-float       { animation: heroFloat 5s ease-in-out infinite; }
    .anim-float-delay { animation: heroFloat 5s ease-in-out 1.5s infinite; }

    @keyframes gradShift {
      0%, 100% { background-position: 0% 50%; }
      50%       { background-position: 100% 50%; }
    }
    .anim-gradient-text {
      background-size: 200% 200%;
      animation: gradShift 4s ease infinite;
    }

    @keyframes progFill {
      from { width: 0%; }
      to   { width: 78%; }
    }
    .anim-progress { animation: progFill 1.4s cubic-bezier(0.4,0,0.2,1) 0.6s both; }

    @keyframes pulseGlow {
      0%, 100% { box-shadow: 0 0 0 0 rgba(52,211,153,0.5); }
      50%       { box-shadow: 0 0 0 6px rgba(52,211,153,0); }
    }
    .anim-pulse-glow { animation: pulseGlow 2s ease-in-out infinite; }

    @keyframes shimmerSweep {
      0%   { background-position: -200% center; }
      100% { background-position:  200% center; }
    }
    .anim-shimmer {
      background: linear-gradient(90deg, transparent 25%, rgba(255,255,255,0.4) 50%, transparent 75%);
      background-size: 200% auto;
      animation: shimmerSweep 2.5s linear infinite;
    }

    @keyframes spin {
      from { transform: rotate(0deg); }
      to   { transform: rotate(360deg); }
    }
  `}</style>
);

export default Keyframes;
