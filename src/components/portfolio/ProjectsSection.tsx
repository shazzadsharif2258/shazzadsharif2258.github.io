import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useMotionValue, useAnimation } from "framer-motion";
import { useRef, useState, useEffect } from "react";


// from src/components/portfolio/ProjectsSection.tsx

import book1 from "../../assets/booksphere-1.png";
import book2 from "../../assets/booksphere-2.png";
import obj1 from "../../assets/object-1.png";
import obj2 from "../../assets/object-2.png";
import child1 from "../../assets/children-1.png";
// ⛔️ You have children-2.PNG (uppercase). Match the case exactly:
import child2 from "../../assets/children-2.png";
import food1 from "../../assets/food-1.png";
import food2 from "../../assets/food-2.png";
import enc1 from "../../assets/encrypt-1.png";
import air1 from "../../assets/airline-1.png";
import covid1 from "../../assets/covid-1.png";
import covid2 from "../../assets/covid-2.png";


type Project = {
  title: string;
  slug: string;
  description: string;
  technologies: string[];
  images: string[];
  demoUrl: string;
  githubUrl: string;
};

// ✅ all projects
const PROJECTS: Project[] = [
  {
    title: "BookSphere",
    slug: "booksphere",
    description:
      "Integrated platform for managing and discovering books with modern UX and real-time features.",
    technologies: ["ReactJS", "NodeJS", "Firebase"],
    images: [book1, book2],
    demoUrl: "https://bookshop-c30a2.web.app/",
    githubUrl: "https://github.com/shazzadsharif2258",
  },
  {
    title: "Object Detection System",
    slug: "object-detection",
    description:
      "AI-powered detection pipeline with realtime classification and visualizations.",
    technologies: ["Python", "KNN", "CV2", "Streamlit"],
    images: [obj1, obj2],
    demoUrl: "https://sites.google.com/view/shazzadsharif",
    githubUrl: "https://github.com/shazzadsharif2258",
  },
  {
    title: "Children Learning System",
    slug: "children-learning",
    description:
      "Interactive system for teaching programming concepts in microprocessor labs.",
    technologies: ["Assembly", "Microcontrollers"],
    images: [child1, child2],
    demoUrl: "https://sites.google.com/view/shazzadsharif",
    githubUrl: "https://github.com/shazzadsharif2258",
  },
  {
    title: "Event Booking System",
    slug: "event-booking",
    description:
      "End-to-end  event booking management with auth, orders, restaurants and tracking.",
    technologies: ["HTML", "CSS", "PHP", "MySQL"],
    images: [food1, food2],
    demoUrl: "http://eventorg.42web.io/",
    githubUrl: "https://github.com/shazzadsharif2258",
  },
  {
    title: "Encryption/Decryption System",
    slug: "encryption",
    description:
      "Secure messaging toolkit implementing classic and modern ciphers.",
    technologies: ["Java", "Cryptography"],
    images: [enc1],
    demoUrl: "https://sites.google.com/view/shazzadsharif",
    githubUrl: "https://github.com/shazzadsharif2258",
  },
  {
    title: "Airline Management System",
    slug: "airline",
    description:
      "OOP-first airline ops with scheduling, bookings, and admin panels.",
    technologies: ["Java", "OOP", "Database"],
    images: [air1],
    demoUrl: "https://sites.google.com/view/shazzadsharif",
    githubUrl: "https://github.com/shazzadsharif2258",
  },
  {
    title: "Covid-19 Tracker (Flutter)",
    slug: "covid-tracker",
    description:
      "Country-wise COVID-19 stats with search, shimmer loading, and detail view. Data from disease.sh API.",
    technologies: ["Flutter", "Dart", "REST API"],
    images: [covid1, covid2],
    demoUrl: "https://sites.google.com/view/shazzadsharif",
    githubUrl: "https://github.com/shazzadsharif2258/covid-tracker",
  },
];

function ImageCarousel({ images, title }: { images: string[]; title: string }) {
  const [index, setIndex] = useState(0);
  const canPrev = index > 0;
  const canNext = index < images.length - 1;

  const x = useMotionValue(0);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: -index * 100 + "%",
      transition: { type: "spring", stiffness: 260, damping: 30 },
    });
  }, [index, controls]);

  return (
    <div className="relative aspect-video overflow-hidden rounded-md bg-portfolio-accent/10">
      {/* slides */}
      <motion.div
        className="flex h-full w-full"
        style={{ x }}
        animate={controls}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={(_, info) => {
          const threshold = 50;
          if (info.offset.x < -threshold && canNext) setIndex((i) => i + 1);
          else if (info.offset.x > threshold && canPrev) setIndex((i) => i - 1);
        }}
      >
        {images.map((src, i) => (
          <div key={i} className="min-w-full h-full relative">
            <img
              src={src}
              alt={`${title} ${i + 1}`}
              className="h-full w-full object-cover select-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        ))}
      </motion.div>

      {/* arrows */}
      {images.length > 1 && (
        <>
          <button
            aria-label="Prev"
            onClick={() => canPrev && setIndex((i) => i - 1)}
            className={`absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition ${!canPrev && "opacity-40 cursor-not-allowed"}`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            aria-label="Next"
            onClick={() => canNext && setIndex((i) => i + 1)}
            className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition ${!canNext && "opacity-40 cursor-not-allowed"}`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* dots */}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2.5 w-2.5 rounded-full ${i === index ? "bg-white" : "bg-white/50"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-portfolio-surface">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-portfolio-primary mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-portfolio-text-light max-w-2xl mx-auto">
            A curated selection of my recent work
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <Card className="overflow-hidden portfolio-shadow-card hover:shadow-xl transition group">
                <ImageCarousel images={p.images} title={p.title} />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-portfolio-primary mb-2">
                    {p.title}
                  </h3>
                  <p className="text-portfolio-text-light mb-4 line-clamp-3">
                    {p.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.technologies.map((t) => (
                      <Badge
                        key={t}
                        variant="outline"
                        className="text-xs border-portfolio-accent text-portfolio-accent"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a href={p.demoUrl} target="_blank" rel="noreferrer">
                      <Button
                        size="sm"
                        className="bg-portfolio-accent hover:bg-portfolio-accent/90 text-white"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    </a>
                    <a href={p.githubUrl} target="_blank" rel="noreferrer">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary hover:text-white"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
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
