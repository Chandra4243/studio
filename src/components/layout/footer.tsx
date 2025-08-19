import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com/Chandra4243" },
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/chandr34" },
    { name: "Twitter", icon: Twitter, href: "https://x.com/https_raja" },
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/raja._.upadhyay" },
  ];

  return (
    <footer className="w-full bg-muted">
      <div className="container mx-auto py-8 px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Chandrabhushan Upadhyay. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            {socialLinks.map((social) => (
              <Button
                key={social.name}
                variant="ghost"
                size="icon"
                asChild
                aria-label={social.name}
              >
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  <social.icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
