import { Head, Link } from '@inertiajs/react';

type Project = {
  id: number;
  slug: string;
  title: string;
  excerpt?: string;
  body?: string;      // HTML von TinyMCE
  cover?: string;     // /images/…
  categories?: string[];
  url?: string;       // https://…
};

export default function Show({ project }: { project: Project }) {
  return (
    <>
      <Head title={project.title} />
      <article className="max-w-3xl mx-auto px-4 py-12">
        <div className="mb-6">
          <Link href={route('projects.index')} className="text-sm text-gray-600 hover:underline">
            ← Zur Übersicht
          </Link>
        </div>

        <h1 className="text-3xl font-bold">{project.title}</h1>
        {project.excerpt && <p className="mt-2 text-gray-600">{project.excerpt}</p>}

        {project.cover && (
          <img src={project.cover} alt={project.title} className="rounded-xl my-6 w-full object-cover" />
        )}

        {project.body && (
          <div
            className="prose prose-neutral max-w-none"
            dangerouslySetInnerHTML={{ __html: project.body }}
          />
        )}
        {project.url && (
          <p className="mt-6">
            <a  href={project.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Projekt besuchen  →
            </a>
          </p>
        )}
      </article>
    </>
  );
}
