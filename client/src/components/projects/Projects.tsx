import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, GitBranch, Server } from "lucide-react";

const projects = [
  {
    title: "Cloud Infrastructure Automation",
    description: "Developed comprehensive IaC templates for AWS infrastructure using Terraform and CloudFormation",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9",
    github: "https://github.com/kkrish/cloud-automation",
    demo: "https://cloud-demo.dev",
    tags: ["Terraform", "AWS", "IaC", "CloudFormation"]
  },
  {
    title: "Kubernetes Cluster Management",
    description: "Implemented automated Kubernetes cluster setup with monitoring and scaling capabilities",
    image: "https://images.unsplash.com/photo-1667372397557-b4f84b0ff6b3",
    github: "https://github.com/kkrish/k8s-automation",
    demo: "https://k8s-demo.dev",
    tags: ["Kubernetes", "Docker", "Prometheus", "Grafana"]
  },
  {
    title: "CI/CD Pipeline Orchestration",
    description: "Built scalable CI/CD pipelines with Jenkins, integrating security scanning and automated testing",
    image: "https://images.unsplash.com/photo-1667372393913-84465a8844ae",
    github: "https://github.com/kkrish/cicd-orchestration",
    tags: ["Jenkins", "GitOps", "Security", "Testing"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing my expertise in DevOps and cloud infrastructure through real-world projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group h-full hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Server className="w-5 h-5 text-primary" />
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" className="group" asChild>
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </Button>
                    {project.demo && (
                      <Button variant="outline" size="sm" className="group" asChild>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
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
