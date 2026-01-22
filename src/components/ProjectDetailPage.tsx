// import React from 'react';
import { ArrowLeft, ExternalLink, Github, Calendar, CheckCircle, Circle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Project } from '@/data/projects';

interface ProjectDetailPageProps {
  // projectId: number;
  // onBack: () => void;
  project: Project; // Accept the full project object
}

export function ProjectDetailPage({ project }: ProjectDetailPageProps) {

  return (
    <div className="min-h-screen">
      {/* Back Button */}
      <div className="bg-background/80 backdrop-blur-md border-b transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Button variant="ghost" className="gap-2 text-foreground">
            <a href='./projects'>
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </a>
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <img
          src={project.heroImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-white mb-2">{project.title}</h1>
            <p className="text-xl text-white/90">{project.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Overview & Links */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Card className="p-6 bg-secondary dark:border-gray-600">
              <h2 className="mb-4">Project Overview</h2>
              <p className="text-muted-foreground mb-6">{project.description}</p>
              
              <div className="flex flex-wrap gap-3">
                {project.externalLink && (
                  <Button asChild>
                    <a href={project.externalLink} target="_blank" rel="noopener noreferrer" className="gap-2">
                      <ExternalLink className="w-4 h-4" />
                      View Live Demo
                    </a>
                  </Button>
                )}
                <Button variant="outline" asChild>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="gap-2">
                    <Github className="w-4 h-4" />
                    View Source Code
                  </a>
                </Button>
              </div>
            </Card>
          </div>

          <div>
            <Card className="p-6 bg-secondary dark:border-gray-600">
              <h3 className="mb-4">Team</h3>
              <div className="space-y-2">
                {project.team.map((member, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    {member}
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Video Demo */}
        <Card className="p-6 mb-12 bg-secondary dark:border-gray-600">
          <h2 className="mb-4">Demo Video</h2>
          <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${project.youtubeVideoId}`}
              title="Project Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </Card>

        {/* Technologies */}
        <Card className="p-6 mb-12 bg-secondary dark:border-gray-600">
          <h2 className="mb-6">Technologies & Tools</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.technologies.map((tech, index) => (
              <div key={index}>
                <h3 className="mb-3">{tech.category}</h3>
                <div className="space-y-2">
                  {tech.tools.map((tool) => (
                    <Badge key={tool} variant="secondary" className="mr-2 mb-2">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Timeline */}
        <Card className="p-6 mb-12 bg-secondary dark:border-gray-600">
          <h2 className="mb-6">Project Timeline</h2>
          <div className="space-y-6">
            {project.timeline.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex flex-col items-center">
                  {item.status === 'completed' ? (
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  ) : (
                    <Circle className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  )}
                  {index < project.timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-gray-200 mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <div className="flex items-center gap-3 mb-1">
                    <h3>{item.phase}</h3>
                    <Badge variant={item.status === 'completed' ? 'default' : 'secondary'}>
                      {item.status}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Calendar className="w-4 h-4" />
                    {item.date}
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Challenges & Outcomes */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-6 bg-secondary dark:border-gray-600">
            <h2 className="mb-4">Key Challenges</h2>
            <ul className="space-y-3">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex gap-3 text-muted-foreground">
                  <span className="text-red-500 mt-1">•</span>
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-6 bg-secondary dark:border-gray-600">
            <h2 className="mb-4">Outcomes & Impact</h2>
            <ul className="space-y-3">
              {project.outcomes.map((outcome, index) => (
                <li key={index} className="flex gap-3 text-muted-foreground">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}
