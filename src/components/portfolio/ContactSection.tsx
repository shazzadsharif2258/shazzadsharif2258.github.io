import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const INFO = [
  { icon: <Mail className="w-6 h-6" />, title: "Email", value: "sharifsh846@gmail.com", href: "mailto:sharifsh846@gmail.com" },
  { icon: <Phone className="w-6 h-6" />, title: "Phone", value: "(+880) 1722400194", href: "tel:+8801722400194" },
  { icon: <MapPin className="w-6 h-6" />, title: "Location", value: "Mirpur, Dhaka, Bangladesh", href: "#" },
];

export default function ContactSection() {
  return (
    <motion.section
      id="contact"
      className="py-20 bg-background"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-portfolio-primary mb-6">Let's Work Together</h2>
          <p className="text-xl text-portfolio-text-light max-w-2xl mx-auto">Have a project in mind? I’d love to hear about it.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <Card className="portfolio-shadow-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-portfolio-primary mb-6">Send Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-portfolio-primary">First Name</Label>
                    <Input id="firstName" placeholder="John" className="mt-2 border-portfolio-accent/20 focus:border-portfolio-accent" />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-portfolio-primary">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" className="mt-2 border-portfolio-accent/20 focus:border-portfolio-accent" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-portfolio-primary">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" className="mt-2 border-portfolio-accent/20 focus:border-portfolio-accent" />
                </div>

                <div>
                  <Label htmlFor="subject" className="text-portfolio-primary">Subject</Label>
                  <Input id="subject" placeholder="Project inquiry" className="mt-2 border-portfolio-accent/20 focus:border-portfolio-accent" />
                </div>

                <div>
                  <Label htmlFor="message" className="text-portfolio-primary">Message</Label>
                  <Textarea id="message" rows={5} placeholder="Tell me about your project..." className="mt-2 border-portfolio-accent/20 focus:border-portfolio-accent resize-none" />
                </div>

                <Button type="submit" size="lg" className="w-full bg-portfolio-accent hover:bg-portfolio-accent/90 text-white">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Info */}
          <div className="space-y-6">
            {INFO.map((i, idx) => (
              <Card key={idx} className="portfolio-shadow-card hover:shadow-lg transition">
                <CardContent className="p-6">
                  <a href={i.href} className="flex items-center gap-4 text-portfolio-primary hover:text-portfolio-accent transition">
                    <div className="p-3 bg-portfolio-accent-light rounded-lg text-portfolio-accent">{i.icon}</div>
                    <div>
                      <h4 className="font-semibold">{i.title}</h4>
                      <p className="text-portfolio-text-light">{i.value}</p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
