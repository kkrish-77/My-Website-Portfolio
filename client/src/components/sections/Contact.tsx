import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import { useForm } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-primary" />
                  <a href="mailto:kkrish@example.com" className="hover:text-primary">
                    kkrish@example.com
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Github className="w-5 h-5 text-primary" />
                  <a href="https://github.com/kkrish" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                    github.com/kkrish
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Linkedin className="w-5 h-5 text-primary" />
                  <a href="https://linkedin.com/in/kkrish" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                    linkedin.com/in/kkrish
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Your Name"
                      {...register("name", { required: true })}
                    />
                    {errors.name && <span className="text-red-500 text-sm">Name is required</span>}
                  </div>
                  
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                    />
                    {errors.email && <span className="text-red-500 text-sm">Valid email is required</span>}
                  </div>
                  
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      {...register("message", { required: true })}
                    />
                    {errors.message && <span className="text-red-500 text-sm">Message is required</span>}
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
