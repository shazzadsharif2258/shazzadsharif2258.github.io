import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  // animate background opacity 0 -> 0.75
  const bgOpacity = useTransform(scrollY, [0, 60], [0, 0.75]);
  const background = useMotionTemplate`rgba(255 255 255 / ${bgOpacity})`;

  // animate shadow opacity 0 -> 0.08
  const shadowOpacity = useTransform(scrollY, [0, 60], [0, 0.08]);
  const boxShadow = useMotionTemplate`0 10px 30px rgba(0 0 0 / ${shadowOpacity})`;

  useEffect(() => {
    const onHash = () => setOpen(false);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <motion.nav
      style={{ background, boxShadow }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-white/10"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-center justify-between h-16">
          <a
            href="#"
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-sky-400 to-cyan-300"
          >
            Shazzad Sharif
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-portfolio-primary/80 hover:text-portfolio-accent transition-colors"
              >
                {item.label}
              </a>
            ))}
            {/* 👇 Download Resume */}
            <a href="public\Sharif_CV.pdf" download="Shazzad_Hossain_Sharif_Resume.pdf">
              <Button size="sm" className="bg-portfolio-accent hover:bg-portfolio-accent/90 text-white">
                Resume
              </Button>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-portfolio-primary"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile nav */}
        {open && (
          <div className="md:hidden bg-white rounded-lg mt-2 p-4 shadow-lg">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-portfolio-primary hover:text-portfolio-accent transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a href="public\Sharif_CV.pdf" download="Shazzad_Hossain_Sharif_Resume.pdf" className="self-start">
                <Button size="sm" className="bg-portfolio-accent hover:bg-portfolio-accent/90 text-white">
                  Resume
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </motion.nav>
  );
}
