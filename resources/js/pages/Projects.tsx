import { Head } from '@inertiajs/react';
import React from 'react';
import AppLayout from '@/layouts/AppLayout';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@headlessui/react';

const Projects: React.FC & { layout?: (page: React.ReactNode) => React.ReactNode } = () => {
  return (
    <>
      <Head title="Projekte" />

      <section>
        <div className="max-w-4xl mx-auto px-4 py-16 min-h-screen">
          <h2 className="text-3xl font-bold mb-6">Meine Projekte</h2>

          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle>Blogsystem</CardTitle>
              <CardDescription>
                Eine eigenständig entwickelte Plattform auf Basis von Laravel&nbsp;12, Breeze und Blade – mit einem Fokus auf Klarheit, Performance und ein angenehmes Schreibgefühl.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-5 leading-relaxed text-gray-700">
              {/* Projektbild – Screenshot in /public/images/blogsystem.png ablegen */}
              <div className="w-full aspect-video overflow-hidden rounded-xl shadow bg-gray-100">
                <img
                  src="/images/blog.png"
                  alt="Blogsystem Beitragsübersicht und Editor"
                  className="h-full w-full object-cover"
                />
              </div>

              <p>
                Dieses Blogsystem verbindet ein aufgeräumtes Frontend mit einer soliden, gut
                erweiterbaren Architektur. Nutzerinnen und Nutzer verfassen Beiträge, überarbeiten
                sie bei Bedarf und entfernen sie wieder, während ein persönlicher Feed durch
                Folgen-Beziehungen entsteht. Likes und Kommentare fördern echten Austausch; eine
                durchdachte Kategorisierung hält Inhalte auffindbar und die Oberfläche stets
                übersichtlich.
              </p>

              <p>
                Für die mediale Gestaltung setze ich auf die Spatie&nbsp;Media&nbsp;Library: Bilder
                werden komfortabel hochgeladen, in Sammlungen organisiert und automatisch in
                optimierten Varianten bereitgestellt. Damit das Schreiben leicht von der Hand geht,
                ist <strong>TinyMCE</strong> als WYSIWYG-Editor integriert - mit intuitiver
                Formatierung, schnellem Einfügen von Medien und einem Look-and-Feel, das dem finalen
                Ergebnis bereits sehr nahekommt.
              </p>

              <p>
                Unter der Haube arbeiten klar strukturierte Models, Migrations, Factories und
                Seeders zusammen; Policies setzen Autorrechte konsequent durch. Blade-Templates und
                maßgeschneiderte Directives sorgen für präzises Templating, Pagination hält Seiten
                schlank, und rechenintensive Aufgaben wie Bildkonvertierungen laufen asynchron über
                die Queue. So entsteht eine moderne Publishing-Erfahrung, die sowohl als persönliches
                Notizbuch als auch als Grundlage für eine lebendige Community überzeugt.
              </p>
            </CardContent>
            <CardFooter className="flex justify-end">
              <a href="https://app.pumo.digital/" target='/blank' className="block w-full">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-lg">
                  Projekt ansehen
                </Button>
              </a>
            </CardFooter>
          </Card>
        </div>
      </section>
    </>
  );
};

Projects.layout = (page) => (
  <AppLayout title="Projekte">
    {page}
  </AppLayout>
);

export default Projects;
