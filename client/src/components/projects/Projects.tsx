import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, GitBranch, Server } from "lucide-react";

const projects = [
  {
    title: "Netflix Trends Visualize using AWS QuickSight",
    description: "Netflix trends visualization with AWS QuickSight utilizes Amazon's analytics tool to design insightful dashboards and analyze catalog data.",
    image: "https://i.postimg.cc/rwfJTPXs/Screenshot-2025-03-07-211632.png",
    github: "https://github.com/kkrish-77/Netflix-Trends-Visualize-using-QuickSight.git",
    demo: "https://cloud-demo.dev",
    tags: ["AWS", "QuickSight", "Data Visualization"]
  },
  {
    title: "Deploying 2048: The Docker Way",
    description: "Deploying 2048 using Docker simplifies hosting the game by creating a portable, consistent environment.",
    image: "https://i.postimg.cc/D0SpN6VN/image.png",
    github: "https://github.com/kkrish-77/Deploying-2048-The-Docker-Way.git",
    demo: "https://k8s-demo.dev",
    tags: ["Docker", "Conatainerization", "Game deployment"]
  },
  {
    title: "Spotify-playlist-automation-using-Terraform",
    description: "Spotify playlist automation with Terraform simplifies playlist creation and management using infrastructure-as-code principles.",
    image: "https://i.postimg.cc/CL3ZqCG7/image.png",
    github: "https://github.com/kkrish-77/Spotify-Playlist-Automation-using-Terraform.git",
    tags: ["Terraform", "Spotify API", "Automation"]
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
