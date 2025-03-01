import { useState } from "react";
import { Link } from "wouter";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { motion } from "framer-motion";

const navLinks = [
  { title: "About", href: "#about" },
  { title: "Experience", href: "#experience" },
  { title: "Projects", href: "#projects" },
  { title: "Skills", href: "#skills" },
  { title: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <nav className="flex items-center justify-between p-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex lg:flex-1">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Kkrish Singh
            </Link>
          </motion.div>
        </div>

        <div className="hidden md:flex md:gap-x-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.title}
              href={link.href}
              className="text-sm font-semibold hover:text-primary transition-colors"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {link.title}
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <SunIcon className="h-5 w-5" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )}
          </Button>

          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <motion.a
                      key={link.title}
                      href={link.href}
                      className="text-lg font-semibold hover:text-primary transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {link.title}
                    </motion.a>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}