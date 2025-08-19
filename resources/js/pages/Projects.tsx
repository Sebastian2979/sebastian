import { Head, Link } from '@inertiajs/react';
import React from 'react';
import AppLayout from '@/layouts/AppLayout';

const Hello: React.FC & { layout?: (page: React.ReactNode) => React.ReactNode } = () => {
  return (
    <>
      <Head title="Projekte" />
      <section>
        <div className="max-w-4xl mx-auto px-4 py-16 min-h-screen">
          <h2 className="text-3xl font-bold mb-6">Meine Projekte</h2>
          <p className="text-lg text-gray-700">
            Hier kommt eine Übersicht zu meinen Projekten hin!
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
