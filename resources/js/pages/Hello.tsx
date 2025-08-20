import { Head, Link } from '@inertiajs/react';
import React from 'react';
import AppLayout from '@/layouts/AppLayout';
import { Github, Linkedin, Mail } from "lucide-react";

const Hello: React.FC & { layout?: (page: React.ReactNode) => React.ReactNode } = () => {
  return (
    <>
      <Head title="Welcome" />

      {/* Hero-Section mit BG und Overlay – Header liegt (via Layout) oben drüber */}
      <section
        className="relative min-h-screen w-full bg-center bg-cover"
        style={{ backgroundImage: `url('/images/bvg-berlin.jpg')` }} // Pfad anpassen
      >
        {/* dunkles Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Hero-Content */}
        <div className="relative z-10 flex min-h-screen items-center">
          <div className="mx-auto max-w-5xl px-4 text-center">
            <h2 className="text-3xl sm:text-5xl font-sans font-light text-white leading-tight tracking-wider uppercase">
              Sebastian Kitschke
            </h2>
            <h1 className="text-base text-white/90 max-w-2xl tracking-wider uppercase">
              Junior Web Developer | React, Laravel, Tailwind CSS
            </h1>
          </div>
        </div>
        <div id="nav-sentinel" className="absolute bottom-0 left-0 right-0 h-1" />
      </section>
      <section>
        <div className="flex flex-col justify-center items-center gap-6 max-w-4xl mx-auto px-8 py-24">
          <h2 className="text-3xl font-bold">Über mich</h2>
          <img src="/images/aboutme.png" alt="Sebastian" className="w-40 h-auto" />
          <div className="flex gap-4">
            <a
              href="https://github.com/Sebastian2979"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              <Github className="inline-block w-8 h-8 text-gray-600 hover:text-gray-800 transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/sebastian-kitschke-ba853420b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              <Linkedin className="inline-block w-8 h-8 text-gray-600 hover:text-gray-800 transition-colors" />
            </a>
            <a
              href="mailto:sebastian@pumo.digital"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              <Mail className="inline-block w-8 h-8 text-gray-600 hover:text-gray-800 transition-colors" />
            </a>
          </div>
          <p className="text-lg/7 text-gray-700 text-center font-normal">
            Hey, ich bin Sebastian Kitschke. Entwickler, Tüftler und immer neugierig auf neue Technologien. Seit meiner Umschulung zum Fachinformatiker für Anwendungsentwicklung im Jahr 2020 baue ich Webanwendungen mit Laravel, React und Tailwind CSS. Wenn ich nicht gerade Code schreibe oder neue Features teste, sitze ich im Bus, als Fahrer bei der BVG halte ich Berlin in Bewegung. Ob privat oder beruflich: Ich mag es, Dinge ins Rollen zu bringen, digital wie auf der Straße.
          </p>
        </div>
      </section>
    </>
  );
};

// Diese Seite will transparente (light) Navi über dem Bild:
Hello.layout = (page) => (
  <AppLayout title="Welcome" transparentHeader navVariant="light">
    {page}
  </AppLayout>
);

export default Hello;
