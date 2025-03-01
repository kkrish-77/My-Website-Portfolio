import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Terminal, Cloud, GitBranch } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="min-h-screen relative">
      {/* Hero Section */}
      <div className="h-screen flex items-center relative overflow-hidden bg-gradient-to-b from-background to-background/95">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Kkrish Singh
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground mb-8">
              DevOps Engineer
            </p>
            <div className="flex justify-center gap-4 mb-12">
              <Terminal className="w-8 h-8 text-primary" />
              <Cloud className="w-8 h-8 text-primary" />
              <GitBranch className="w-8 h-8 text-primary" />
            </div>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Transforming development workflows and optimizing cloud infrastructure
              with modern DevOps practices.
            </p>
            <Button size="lg" className="group" asChild>
              <a href="#experience">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto"
          >
            <Card className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-6">About Me</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Hi, I'm Kkrish Singh, a passionate DevOps Engineer at the beginning
                    of my journey in the tech industry. With 2 months of hands-on
                    experience, I bring fresh perspectives and innovative approaches to
                    DevOps practices.
                  </p>
                  <p>
                    I specialize in:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>CI/CD Pipeline Implementation</li>
                    <li>Container Orchestration</li>
                    <li>Cloud Infrastructure Management</li>
                    <li>Automation & Monitoring</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/60 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <img
                src="https://images.unsplash.com/photo-1573496799515-eebbb63814f2"
                alt="Kkrish Singh"
                className="rounded-lg shadow-xl relative"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}