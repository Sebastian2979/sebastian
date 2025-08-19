import { Head, Link } from '@inertiajs/react';
import React from 'react';
import AppLayout from '@/layouts/AppLayout';

const Hello: React.FC & { layout?: (page: React.ReactNode) => React.ReactNode } = () => {
  return (
    <>
      <Head title="Welcome" />

      {/* Hero-Section mit BG und Overlay – Header liegt (via Layout) oben drüber */}
      <section
        className="relative min-h-screen w-full bg-center bg-cover"
        style={{ backgroundImage: `url('/desert.jpg')` }} // Pfad anpassen
      >
        {/* dunkles Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Hero-Content */}
        <div className="relative z-10 flex min-h-screen items-center">
          <div className="mx-auto max-w-5xl px-4 text-center">
            <h1 className="text-3xl sm:text-5xl font-sans font-light text-white leading-tight tracking-wider uppercase">
              Sebastian Kitschke
            </h1>
            <p className="mt-4 text-lg text-white/90 max-w-2xl tracking-wide">
              Junior Full Stack Developer | React, Laravel, Tailwind CSS
            </p>
          </div>
        </div>
        <div id="nav-sentinel" className="absolute bottom-0 left-0 right-0 h-1" />
      </section>
      <section>
        <div className="max-w-4xl mx-auto px-4 py-16 h-screen">
          <h2 className="text-3xl font-bold mb-6">Über mich</h2>
          <p className="text-lg text-gray-700">
            Wir sind ein innovatives Unternehmen, das sich auf die Bereitstellung von frischen Lebensmitteln und
            hochwertigen Produkten spezialisiert hat. Unser Ziel ist es, dir ein nahtloses Einkaufserlebnis zu bieten.
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
