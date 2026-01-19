export interface Project {
  id: number;
  title: string;
  subtitle: string;
  heroImage: string;
  description: string;
  youtubeVideoId?: string;
  externalLink?: string;
  githubLink?: string;
  technologies: {
    category: string;
    tools: string[];
  }[];
  timeline: {
    phase: string;
    date: string;
    description: string;
    status: "completed" | "in-progress" | "planned";
  }[];
  challenges: string[];
  outcomes: string[];
  team: string[];
  tags: string[]; // Added this based on your LandingPage.tsx needs
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    subtitle:
      "Full-stack online shopping experience with modern payment integration",
    heroImage:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=1200",
    description: "A comprehensive e-commerce platform built with Next.js...",
    youtubeVideoId: "dQw4w9WgXcQ",
    externalLink: "https://demo.example.com",
    githubLink: "https://github.com/username/ecommerce",
    tags: ["Next.js", "TypeScript", "Stripe"],
    technologies: [
      {
        category: "Frontend",
        tools: [
          "Next.js 14",
          "TypeScript",
          "Tailwind CSS",
          "React Query",
          "Zustand",
        ],
      },
      // ... fill in the rest of your data here
    ],
    timeline: [
      {
        phase: "Planning & Design",
        date: "Jan 2024",
        description: "Requirements gathering...",
        status: "completed",
      },
    ],
    challenges: ["Inventory synchronization", "PCI compliance"],
    outcomes: ["Processed 10k orders", "99.9% uptime"],
    team: ["Lead Developer", "UI/UX Designer"],
  },
  // ... Add Project 2 and 3 here
];

// Helper to find a project by ID (useful for dynamic routing)
export function getProjectById(id: number | string) {
  return projects.find((p) => p.id === Number(id));
}
