import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { SiAmazon, SiDocker, SiKubernetes, SiJenkins, SiAnsible, SiTerraform, SiGrafana, SiPrometheus } from "react-icons/si";

const skills = [
  { name: "AWS", icon: SiAmazon, level: 75 },
  { name: "Docker", icon: SiDocker, level: 85 },
  { name: "Kubernetes", icon: SiKubernetes, level: 70 },
  { name: "Jenkins", icon: SiJenkins, level: 80 },
  { name: "Ansible", icon: SiAnsible, level: 75 },
  { name: "Terraform", icon: SiTerraform, level: 70 },
  { name: "Grafana", icon: SiGrafana, level: 65 },
  { name: "Prometheus", icon: SiPrometheus, level: 65 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <skill.icon className="w-8 h-8 text-primary" />
                    <h3 className="text-xl font-semibold">{skill.name}</h3>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}