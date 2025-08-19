import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Github } from "lucide-react";

import { projects, type Project } from "@/lib/data.tsx";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProject(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto py-16 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
          {project.title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-8">
          <Carousel className="w-full">
            <CarouselContent>
              {project.images.map((img, index) => (
                <CarouselItem key={index}>
                  <Image
                    src={img}
                    alt={`${project.title} screenshot ${index + 1}`}
                    width={1200}
                    height={800}
                    className="rounded-lg shadow-lg w-full object-cover"
                    data-ai-hint="application interface"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold">Project Overview</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            {project.longDescription}
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold">Technologies Used</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="default" className="text-sm px-3 py-1">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          {project.liveUrl && (
            <Button asChild size="lg">
              <Link href={project.liveUrl} target="_blank">
                View Live Project
              </Link>
            </Button>
          )}
          {project.githubUrl && (
            <Button asChild size="lg" variant="secondary">
              <Link href={project.githubUrl} target="_blank">
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
