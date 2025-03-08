import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import { Card, CardContent } from "@/components/ui/card";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
          
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold">Junior DevOps Engineer</h3>
                  <p className="text-muted-foreground">Tech Solutions Inc.</p>
                </div>
                <p className="text-sm text-muted-foreground">Feb 2024 - Present</p>
              </div>
              
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Assisted in maintaining and improving CI/CD pipelines using Jenkins</li>
                <li>Collaborated with development teams to implement containerization solutions</li>
                <li>Participated in monitoring and logging system setup using ELK stack</li>
                <li>Helped automate deployment processes using Ansible</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
