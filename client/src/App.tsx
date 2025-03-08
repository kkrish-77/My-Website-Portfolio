import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import Layout from "@/components/layout/Layout";
import NotFound from "@/pages/not-found";
import Hero from "@/components/hero/Hero";
import Expertise from "@/components/expertise/Expertise";
import WorkHistory from "@/components/workHistory/WorkHistory";
import Projects from "@/components/projects/Projects";
import Contact from "@/components/contact/Contact";


function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

export default function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <QueryClientProvider client={queryClient}>
        <Router />
        <Toaster />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <Expertise />
      <WorkHistory />
      <Projects />
      <Contact />
    </main>
  );
}