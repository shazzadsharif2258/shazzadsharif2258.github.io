import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    title: "BookSphere",
    description:
      "Integrated platform for managing and discovering books with modern UX and real-time features.",
    technologies: ["ReactJS", "NodeJS", "Firebase"],
    demoUrl: "https://sites.google.com/view/shazzadsharif",
    githubUrl: "https://github.com/shazzadsharif2258",
  },
  {
    title: "Object Detection System",
    description:
      "AI-powered detection pipeline with realtime classification and visualizations.",
    technologies: ["Python", "KNN", "CV2", "Streamlit"],
    demoUrl: "https://sites.google.com/view/shazzadsharif",
    githubUrl: "https://github.com/shazzadsharif2258",
  },
  {
    title: "Children Learning System",
    description:
      "Interactive system for teaching programming concepts in microprocessor labs.",
    technologies: ["Assembly", "Microcontrollers"],
    demoUrl: "https://sites.google.com/view/shazzadsharif",
    githubUrl: "https://github.com/shazzadsharif2258",
  },
  {
    title: "Food Delivery System",
    description:
      "End-to-end food delivery management with auth, orders, restaurants and tracking.",
    technologies: ["HTML", "CSS", "PHP", "MySQL"],
    demoUrl: "https://sites.google.com/view/shazzadsharif",
    githubUrl: "https://github.com/shazzadsharif2258",
  },
  {
    title: "Encryption/Decryption System",
    description:
      "Secure messaging toolkit implementing classic and modern ciphers.",
    technologies: ["Java", "Cryptography"],
    demoUrl: "https://sites.google.com/view/shazzadsharif",
    githubUrl: "https://github.com/shazzadsharif2258",
  },
  {
    title: "Airline Management System",
    description:
      "OOP-first airline ops with scheduling, bookings, and admin panels.",
    technologies: ["Java", "OOP", "Database"],
    demoUrl: "https://sites.google.com/view/shazzadsharif",
    githubUrl: "https://github.com/shazzadsharif2258",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-portfolio-surface">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-portfolio-primary mb-6">Featured Projects</h2>
          <p className="text-xl text-portfolio-text-light max-w-2xl mx-auto">A curated selection of my recent work</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5, delay: i * 0.05 }}>
              <Card className="overflow-hidden portfolio-shadow-card hover:shadow-xl transition group">
                {/* animated header placeholder with shimmer */}
                <div className="relative aspect-video bg-gradient-to-br from-portfolio-accent-light to-portfolio-accent/25">
                  <div className="absolute inset-0 bg-[linear-gradient(100deg,transparent_40%,rgba(255,255,255,0.6)_50%,transparent_60%)] bg-[length:200%_100%] animate-shimmer" />
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-portfolio-primary mb-3">{p.title}</h3>
                  <p className="text-portfolio-text-light mb-4 line-clamp-3">{p.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.technologies.map((t, j) => (
                      <Badge key={j} variant="outline" className="text-xs border-portfolio-accent text-portfolio-accent">
                        {t}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex space-x-3">
                    <a href={p.demoUrl} target="_blank" rel="noreferrer">
                      <Button size="sm" className="bg-portfolio-accent hover:bg-portfolio-accent/90 text-white">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    </a>
                    <a href={p.githubUrl} target="_blank" rel="noreferrer">
                      <Button size="sm" variant="outline" className="border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary hover:text-white">
                        <Github className="w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
