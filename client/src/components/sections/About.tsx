import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-24 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1573496799515-eebbb63814f2"
              alt="Kkrish Singh"
              className="rounded-lg shadow-xl"
            />
          </div>
          
          <Card>
            <CardContent className="p-6">
              <h2 className="text-3xl font-bold mb-4">About Me</h2>
              <p className="text-muted-foreground mb-4">
                Hi, I'm Kkrish Singh, a passionate DevOps Engineer with a drive for automating and optimizing development workflows. Despite being early in my career with 2 months of professional experience, I bring fresh perspectives and a strong foundation in modern DevOps practices.
              </p>
              <p className="text-muted-foreground">
                I specialize in containerization, CI/CD pipelines, and cloud infrastructure, constantly learning and adapting to new technologies. My goal is to bridge the gap between development and operations, making software delivery more efficient and reliable.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
