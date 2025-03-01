import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BriefcaseIcon, GitBranchIcon, ContainerIcon } from "lucide-react";

const experiences = [
  {
    title: "Junior DevOps Engineer",
    company: "Tech Solutions Inc.",
    period: "Feb 2024 - Present",
    description: "Implementing and maintaining CI/CD pipelines, managing cloud infrastructure, and automating deployment processes.",
    achievements: [
      "Reduced deployment time by 40% through pipeline optimization",
      "Implemented container orchestration using Kubernetes",
      "Automated infrastructure provisioning with Terraform"
    ],
    icon: BriefcaseIcon,
    technologies: ["Jenkins", "Docker", "Kubernetes", "AWS", "Terraform"]
  }
];

export default function WorkHistory() {
  return (
    <section id="work" className="py-24 bg-slate-50/50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building real-world experience in DevOps and cloud technologies
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-12 relative"
            >
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-primary/20" />

              <div className="relative flex gap-8">
                {/* Timeline dot */}
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <experience.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>

                <Card className="flex-1">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold">{experience.title}</h3>
                        <p className="text-muted-foreground">{experience.company}</p>
                      </div>
                      <span className="text-sm text-muted-foreground mt-2 md:mt-0">
                        {experience.period}
                      </span>
                    </div>

                    <p className="mb-4 text-muted-foreground">
                      {experience.description}
                    </p>

                    <div className="space-y-2">
                      {experience.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <ContainerIcon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
