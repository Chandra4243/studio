"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download, Code, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#skills", label: "Skills" },
  { href: "/#certifications", label: "Certifications" },
  { href: "/#projects", label: "Projects" },
  { href: "/#blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();

  const renderNavLinks = (isMobile = false) =>
    navLinks.map((link) => (
      <Button
        key={link.href}
        variant="link"
        asChild
        className={cn(
          "text-muted-foreground transition-colors hover:text-foreground",
          pathname === link.href && "text-foreground font-semibold",
          isMobile && "justify-start text-lg"
        )}
      >
        <Link href={link.href}>{link.label}</Link>
      </Button>
    ));

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/#home" className="flex items-center gap-2">
          <Code className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">Portfolio</span>
        </Link>
        <nav className="hidden md:flex items-center gap-4 text-sm flex-1 justify-center">
            {renderNavLinks()}
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <Button asChild>
            <a href="https://drive.google.com/uc?export=download&id=1V2qp2lfRgr1Zlblq7vWRiuI7zdGztQT8" target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-4 w-4" />
              Resume
            </a>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>
                  <Link href="/#home" className="flex items-center gap-2">
                    <Code className="h-6 w-6 text-primary" />
                    <span className="font-bold text-lg">Portfolio</span>
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-4 mt-8">
                <nav className="flex flex-col space-y-2">
                  {renderNavLinks(true)}
                </nav>
                <Button asChild className="w-full">
                   <a href="https://drive.google.com/uc?export=download&id=1V2qp2lfRgr1Zlblq7vWRiuI7zdGztQT8" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
