import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Code2, Terminal, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen relative bg-gradient-to-b from-slate-950 to-background py-32 flex items-center">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.2) 2%, transparent 0%)',
          backgroundSize: '50px 50px' 
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center mb-12"
          >
            {/* Profile Picture */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative mb-8 group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-primary/50 to-primary rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-background">
                <img
                  src="https://i.postimg.cc/g21KBKhp/profile-pic-1.png"
                  alt="Kkrish Singh"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <Code2 className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary">DevOps Engineer</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Hi, I'm{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent decoration-transparent">
                  Kkrish Singh
                </span>
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl">
            Ambitious DevOps Engineer, Automating everything—except my coffee! ☕ 
            Passionate about DevOps & Cloud, and coding my way out of repetitive tasks.
            If it can be automated, consider it done! 
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <Button size="lg" className="group" asChild>
              <a href="#expertise">
                Explore My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="group" asChild>
              <a href="#contact">
                <Terminal className="mr-2 h-4 w-4" />
                Get in Touch
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}