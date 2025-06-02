import Image from "next/image";
import { Project } from "./ProjectsPortifolio";

interface ProjectCardProps {
  project: Project;
  isPriority: boolean;
}

export default function ProjectCard({ project, isPriority }: ProjectCardProps) {
  return (
    <div className="group relative h-full w-full overflow-hidden rounded-lg bg-blue-800/50 p-4 transition-all duration-300 hover:bg-blue-800/70 dark:bg-gray-800/50 dark:hover:bg-gray-700/70">
      <div className="relative aspect-video w-full overflow-hidden rounded-lg">
        <Image
          src={project.imageUrl}
          alt={project.title}
          width={350}
          height={200}
          loading={isPriority ? "eager" : "lazy"}
          priority={isPriority}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="mt-4 space-y-2">
        <h3 className="text-lg font-semibold text-white dark:text-gray-100">
          {project.title}
        </h3>
        <p className="text-sm text-blue-200 dark:text-gray-300">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-blue-700/50 px-2 py-1 text-xs text-blue-200 dark:bg-gray-700/50 dark:text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-500 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600"
          >
            Ver Projeto
          </a>
        )}
      </div>
    </div>
  );
}
