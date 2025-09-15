import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const CATS = [
  { title: "Programming Languages", skills: ["Python", "Java", "Dart", "C++", "JavaScript", "PHP", "Assembly Language"] },
  { title: "Web Technologies", skills: ["HTML", "CSS", "ReactJS", "NodeJS", "Firebase", "MongoDB", "MySQL", "React"] },
  { title: "Tools & Technologies", skills: ["Git", "LaTeX", "KNN", "CV2", "Flutter", "SEO"] },
];

export default function SkillsSection() {
  return (
    <motion.section
      id="skills"
      className="py-20 bg-background"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-portfolio-primary mb-6">Skills & Technologies</h2>
          <p className="text-xl text-portfolio-text-light max-w-2xl mx-auto">What I use to bring ideas to life</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {CATS.map((c, i) => (
            <div key={i} className="text-center p-8 rounded-2xl bg-portfolio-surface portfolio-shadow-card hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-portfolio-primary mb-6">{c.title}</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {c.skills.map((s, j) => (
                  <Badge key={j} variant="secondary" className="bg-portfolio-accent-light text-portfolio-primary hover:bg-portfolio-accent hover:text-white transition px-4 py-2 text-sm font-medium">
                    {s}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
