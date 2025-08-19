import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { initializeTheme } from './hooks/use-appearance';
import AppLayout from './layouts/AppLayout';
import type { ReactNode } from 'react';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
  title: (title) => (title ? `${title} - ${appName}` : appName),

  resolve: (name) =>
    resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx'))
      .then((mod: any) => {
        // => Page-Komponente
        const Page = mod.default;

        // **Hier** die layout-Property setzen – NICHT auf dem Modul
        (Page as any).layout ??= (node: ReactNode) => <AppLayout>{node}</AppLayout>;

        // Wichtig: die **Komponente** zurückgeben (nicht das Modul)
        return Page;
      }),

  setup({ el, App, props }) {
    const root = createRoot(el);
    root.render(<App {...props} />);
  },

  progress: { color: '#4B5563' },
});

initializeTheme();
