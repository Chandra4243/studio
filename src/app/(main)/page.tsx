
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Mail, Phone, MapPin, ChevronDown } from "lucide-react";

import { projects, blogPosts, skills, certifications } from "@/lib/data.tsx";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ContactForm } from "@/components/contact-form";
import { CopyButton } from "@/components/copy-button";

export default function HomePage() {
  const featuredProjects = projects;
  const latestPosts = blogPosts;

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section id="home" className="relative flex min-h-[calc(100vh-4rem)] items-center bg-background">
        <div className="container mx-auto">
          <div className="flex flex-col items-start justify-center space-y-8 text-left">
            <div className="space-y-4">
              <h2 
                className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-primary"
              >
                Welcome to my portfolio
              </h2>
            </div>
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                Hello, I'm <br />
                <span className="animate-text-gradient bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Chandrabhushan
                </span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground md:text-xl">
                 A passionate AI/ML Engineer and Data Analyst dedicated to building intelligent solutions that solve real-world problems.
              </p>
              <div className="mt-10 flex items-center justify-start gap-x-6">
                  <Button asChild size="lg">
                      <Link href="/#projects">View My Work</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                      <Link href="/#contact">Get in Touch</Link>
                  </Button>
              </div>
            </div>
          </div>
        </div>
         <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <Link href="/#skills" aria-label="Scroll to next section">
                <ChevronDown className="h-8 w-8 animate-bounce text-primary" />
            </Link>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 md:py-24 bg-muted/40">
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Technical Skills
            </h2>
            <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
              My proficiency in various technologies and frameworks.
            </p>
          </div>
          <div className="mt-12 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {skills.map((skill) => (
              <Card key={skill.name} className="flex flex-col items-center justify-center p-6 text-center">
                <div className="mb-4">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{skill.proficiency}/10</p>
                <Progress value={skill.proficiency * 10} aria-label={`${skill.name} proficiency`} />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Certifications
            </h2>
            <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
              My professional certifications and credentials.
            </p>
          </div>
          <div className="mt-12 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert) => (
              <Card key={cert.name} className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <Award className="h-10 w-10 text-primary"/>
                    </div>
                    <div>
                      <CardTitle>{cert.name}</CardTitle>
                      <CardDescription>{cert.issuingBody}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground">Issued {cert.date}</p>
                </CardContent>
                <CardFooter>
                  {cert.credentialUrl && (
                    <Button asChild variant="secondary" className="w-full">
                      <Link href={cert.credentialUrl} target="_blank">
                        View Credential <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-24 bg-muted/40">
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              My Projects
            </h2>
            <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
             A collection of my work, from web applications to personal experiments.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Card
                key={project.slug}
                className="overflow-hidden flex flex-col group"
              >
                <CardHeader className="p-0">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105 bg-muted rounded-t-lg"
                    data-ai-hint={
                      project.slug === "customer-churn-prediction"
                        ? "data analytics"
                        : project.slug === "sales-forecasting-dashboard"
                        ? "dashboard chart"
                        : "code screen"
                    }
                  />
                </CardHeader>
                <CardContent className="p-6 flex-grow">
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="mt-2">
                    {project.description}
                  </CardDescription>
                </CardContent>
                 <CardFooter>
                  <Button asChild className="w-full">
                    <Link href={`/projects/${project.slug}`}>
                      View Project <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              From the Blog
            </h2>
            <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
              I write about web development, new technologies, and my personal
              learnings.
            </p>
            <Button variant="link" asChild className="mt-2 text-primary">
              <Link href="/blog">
                Read all posts <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <Card key={post.slug} className="flex flex-col">
                 <CardHeader>
                    <CardDescription>{post.date}</CardDescription>
                    <CardTitle>{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{post.description}</p>
                </CardContent>
                <CardFooter>
                   <Button asChild variant="secondary">
                    <Link href={`/blog/${post.slug}`}>
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-muted/40">
        <div className="container mx-auto">
             <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    Have a question or want to work together? Fill out the form below
                    or reach out via email.
                </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                        <Mail className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">Email</h3>
                        <p className="text-muted-foreground">
                        Drop me a line anytime.
                        </p>
                        <div className="flex items-center gap-2">
                            <a
                            href="mailto:chandr4243@gmail.com"
                            className="text-primary hover:underline"
                            >
                            chandr4243@gmail.com
                            </a>
                            <CopyButton textToCopy="chandr4243@gmail.com" />
                        </div>
                    </div>
                    </div>
                    <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                        <Phone className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">Phone</h3>
                        <p className="text-muted-foreground">
                        Available during business hours.
                        </p>
                        <div className="flex items-center gap-2">
                            <a href="tel:+919389604243" className="text-primary hover:underline">
                            +91 9389604243
                            </a>
                            <CopyButton textToCopy="+919389604243" />
                        </div>
                    </div>
                    </div>
                    <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                        <MapPin className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">Location</h3>
                        <p className="text-muted-foreground">
                        Aligarh, Uttar Pradesh, India
                        </p>
                    </div>
                    </div>
                </div>
                <div>
                    <ContactForm />
                </div>
                </div>
            </div>
        </div>
        </section>
    </div>
  );
}
