import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Automated Deployment Pipeline",
    description: "Implemented a fully automated CI/CD pipeline using Jenkins, Docker, and AWS",
    image: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8",
    github: "https://github.com/kkrish/deployment-pipeline",
    demo: "https://pipeline-demo.dev"
  },
  {
    title: "Infrastructure as Code",
    description: "Developed Terraform modules for standardized cloud infrastructure provisioning",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    github: "https://github.com/kkrish/terraform-modules",
  },
  {
    title: "Monitoring Dashboard",
    description: "Created a comprehensive monitoring solution using Prometheus and Grafana",
    image: "https://images.unsplash.com/photo-1739514984003-330f7c1d2007",
    github: "https://github.com/kkrish/monitoring-dashboard",
    demo: "https://metrics.demo.dev"
  },
  {
    title: "Container Orchestration",
    description: "Set up Kubernetes cluster with automated scaling and deployment strategies",
    image: "https://images.unsplash.com/photo-1510759395231-72b17d622279",
    github: "https://github.com/kkrish/k8s-cluster",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    {project.demo && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
