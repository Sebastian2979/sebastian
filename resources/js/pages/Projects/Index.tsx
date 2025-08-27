import { Head } from '@inertiajs/react';
import React from 'react';
import AppLayout from '@/layouts/AppLayout';
import MyProjectCard from '@/myComponents/ProjectCard';

type Project = {
  id: number;
  slug: string;
  title: string;
  excerpt?: string; // kurze Beschreibung aus config/projects.php
};

const Projects: React.FC<{ projects: Project[] }> & { layout?: (page: React.ReactNode) => React.ReactNode } = ({ projects }) => {
  return (
    <>
      <Head title="Meine Projekte" />
      <section>
        <div className="max-w-6xl mx-auto px-4 py-16 min-h-screen">
          <h2 className="text-center sm:text-left text-3xl font-bold mb-6">Meine Projekte</h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {projects?.map((p) => (
              <MyProjectCard
                key={p.id}
                link={`/projects/${p.slug}`}               // interner Link zur Detailseite
                title={p.title}
                description={p.excerpt ?? ''}             // falls excerpt fehlt, leerer String
                image={`/images/${p.slug}.png`}            // Bild im public/images Ordner
              />
            ))}

            {/* Fallback, falls nichts geliefert wird */}
            {(!projects || projects.length === 0) && (
              <div className="text-gray-600">Aktuell sind keine Projekte hinterlegt.</div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

Projects.layout = (page) => <AppLayout title="Projekte">{page}</AppLayout>;

export default Projects;
