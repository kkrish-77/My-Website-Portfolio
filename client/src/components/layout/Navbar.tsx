import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { title: "About", href: "#about" },
  { title: "Experience", href: "#experience" },
  { title: "Projects", href: "#projects" },
  { title: "Skills", href: "#skills" },
  { title: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <nav className="flex items-center justify-between p-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex lg:flex-1">
          <Link href="/" className="text-xl font-bold">
            Kkrish Singh
          </Link>
        </div>
        
        <div className="hidden md:flex md:gap-x-8">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="text-sm font-semibold hover:text-primary transition-colors"
            >
              {link.title}
            </a>
          ))}
        </div>

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
                  <a
                    key={link.title}
                    href={link.href}
                    className="text-lg font-semibold hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.title}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
