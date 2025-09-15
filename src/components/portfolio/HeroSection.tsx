import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import portrait from "@/assets/me-portrait.jpg";

export default function HeroSection() {
  // subtle parallax for the CONTENT (background stays steady)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 150, damping: 20 });
  const sy = useSpring(my, { stiffness: 150, damping: 20 });
  const tx = useTransform(sx, (v) => v * 6);
  const ty = useTransform(sy, (v) => v * 6);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const { innerWidth: w, innerHeight: h } = window;
      mx.set(e.clientX / w - 0.5);
      my.set(e.clientY / h - 0.5);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* ✅ Full-bleed BACKGROUND like the screenshot */}
      <motion.div
        aria-hidden
        className="
          absolute inset-0 -z-40
          bg-no-repeat bg-cover
          [background-position:50%_30%] md:[background-position:60%_22%]
        "
        style={{ backgroundImage: `url(${portrait})` }}
        initial={{ scale: 1.04 }}
        animate={{ scale: 1.12 }}
        transition={{ duration: 40, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Soft left→right shade to keep text readable (tweak or remove if you want) */}
      <div className="absolute inset-0 -z-30 pointer-events-none bg-[linear-gradient(90deg,rgba(5,10,20,.82)_0%,rgba(5,10,20,.56)_35%,rgba(5,10,20,.18)_65%,rgba(5,10,20,0)_100%)]" />

      {/* CONTENT (your original) */}
      <motion.div
        style={{ x: tx, y: ty }}
        className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto will-change-transform"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-[0_6px_28px_rgba(0,0,0,0.35)]">
          Hi, I’m{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-portfolio-accent">
            Shazzad Hossain Sharif
          </span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
          Computer Science & Engineering student • Full-Stack Developer • AI Enthusiast
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a href="#projects">
            <Button className="bg-white text-portfolio-primary hover:bg-white/90 px-8 py-6 text-lg font-semibold portfolio-shadow-elegant">
              View My Work
            </Button>
          </a>
          <a href="#contact">
            <Button
              variant="outline"
              className="border-white text-black hover:bg-white hover:text-portfolio-primary px-8 py-6 text-lg font-semibold"
            >
              Get In Touch
            </Button>
          </a>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://github.com/shazzadsharif2258"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-white/30 rounded-full hover:bg-white/10 transition"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/shazzad-sharif-969b08267"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-white/30 rounded-full hover:bg-white/10 transition"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:sharifsh846@gmail.com"
            className="p-3 border border-white/30 rounded-full hover:bg-white/10 transition"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <ChevronDown className="w-8 h-8 text-white/70 animate-float" />
        </div>
      </motion.div>
    </section>
  );
}
