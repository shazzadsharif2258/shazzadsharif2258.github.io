import { Card } from "@/components/ui/card";
import { Code, Palette, Zap } from "lucide-react";
import { motion } from "framer-motion";

const FEATURES = [
  { icon: <Code className="w-8 h-8 text-portfolio-accent" />, title: "Flutter Developer", description: "Flutter, Dart, firbase, and clean architectures." },
  { icon: <Palette className="w-8 h-8 text-portfolio-accent" />, title: "AI & ML", description: "Object detection and intelligent application prototypes." },
  { icon: <Zap className="w-8 h-8 text-portfolio-accent" />, title: "Academic Excellence", description: "CGPA 3.82/4.00, VC & Dean’s Awards at GUB." },
];

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      className="py-20 bg-portfolio-surface"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-portfolio-primary mb-6">About Me</h2>
          <p className="text-xl text-portfolio-text-light max-w-3xl mx-auto leading-relaxed">
            I’m a CSE student at Green University of Bangladesh and an Intern at NextTech Limited.
I build performant, accessible, and user-friendly mobile applications with Flutter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-portfolio-primary mb-6">My Journey</h3>
            <div className="space-y-4 text-portfolio-text-light">
              <p>
                CGPA 3.82/4.00 with multiple awards for academic excellence. Hands-on experience via internships and lab work.
              </p>
              <p>
                HSC in Science (GPA 5.00/5.00). Professional trainings in Python for Django and SEO.
              </p>
              <p>
                I am very passionate as a Flutter Developer focused on building fast, beautiful, and scalable mobile applications. I love turning ideas into pixel-perfect, high-performance apps that deliver smooth user experiences on both Android and iOS..
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {FEATURES.map((f, i) => (
              <Card key={i} className="p-6 portfolio-shadow-card hover:shadow-lg transition hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-portfolio-accent-light rounded-lg">{f.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-portfolio-primary mb-1">{f.title}</h4>
                    <p className="text-portfolio-text-light">{f.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
