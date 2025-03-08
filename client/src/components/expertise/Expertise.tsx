import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { SiAmazon, SiDocker, SiKubernetes, SiJenkins, SiAnsible, SiTerraform } from "react-icons/si";

const areas = [
  {
    title: "Infrastructure Management",
    description: "Designing and maintaining scalable cloud infrastructure on AWS",
    icon: SiAmazon,
    skills: ["AWS Services", "Infrastructure as Code", "Cost Optimization"]
  },
  {
    title: "Containerization",
    description: "Building and managing containerized applications",
    icon: SiDocker,
    skills: ["Docker", "Containerization Deployment", "Microservices Architecture"]
  },
  {
    title: "CI/CD Implementation",
    description: "Setting up automated deployment pipelines",
    icon: SiJenkins,
    skills: ["Jenkins", "GitOps", "Continuous Deployment"]
  },
  {
    title: "K8s",
    description: "Skilled in managing clusters, ensuring reliability, and optimizing resources for smooth application performance.",
    icon: SiKubernetes,
    skills: ["Kubernetes", "Container Orchestration", "Cluster Management"]
  }
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Technical Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Specializing in modern DevOps practices and cloud-native technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {areas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <area.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
                  <p className="text-muted-foreground mb-4">{area.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {area.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
                      >
                        {skill}
                      </span>
                    ))}
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
