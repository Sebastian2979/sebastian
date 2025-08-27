// resources/js/layouts/AppLayout.tsx
import { Head, Link, usePage } from '@inertiajs/react';
import React, { useEffect, useRef, useState } from 'react';

type Props = {
  children: React.ReactNode;
  title?: string;
  /** Landing: true → Header startet transparent und liegt über dem Hero */
  transparentHeader?: boolean;
  /** Link-/Icon-Farbe solange transparent: 'light' (weiß) oder 'dark' */
  navVariant?: 'light' | 'dark';
};

function NavLink({
  href,
  children,
  variant = 'dark',
}: {
  href: string;
  children: React.ReactNode;
  variant?: 'light' | 'dark';
}) {
  const { url } = usePage();
  const isActive = url === href || (href !== '/' && url.startsWith(href));
  const base =
    variant === 'light'
      ? 'text-white/90 hover:text-white hover:underline'
      : 'text-gray-700 hover:text-gray-900';
  const active =
    variant === 'light'
      ? 'text-white font-semibold hover:underline'
      : 'text-amber-400 font-semibold';

  return (
    <Link href={href} className={`px-2 py-1 rounded transition ${isActive ? active : base}`}>
      {children}
    </Link>
  );
}

export default function AppLayout({
  children,
  title = 'Meine App',
  transparentHeader = false,
  navVariant = 'dark',
}: Props) {
  const { url } = usePage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const headerRef = useRef<HTMLElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Initialzustand (sofort) aus DOM messen
  const computeInitialScrolled = () => {
    if (!transparentHeader) {
      setScrolled(false);
      return;
    }
    const headerH = Math.ceil(headerRef.current?.getBoundingClientRect().height || 64);
    const sentinel = document.getElementById('nav-sentinel');
    if (!sentinel) {
      // Keine Landing/Hero → solid
      setScrolled(true);
      return;
    }
    const top = sentinel.getBoundingClientRect().top;
    setScrolled(top <= headerH);
  };

  // Observer setzen/erneuern – auf Landing und bei URL-/Resize-Änderungen
  useEffect(() => {
    if (!transparentHeader) {
      setScrolled(false);
      return;
    }

    // Initialzustand NACH Render sicher messen (2 Frames, damit Layout steht)
    const raf1 = requestAnimationFrame(() => {
      computeInitialScrolled();
      requestAnimationFrame(computeInitialScrolled);
    });

    const setup = () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
      const sentinel = document.getElementById('nav-sentinel');
      const headerEl = headerRef.current;
      if (!sentinel || !headerEl) return;

      const headerH = Math.ceil(headerEl.getBoundingClientRect().height || 64);
      const obs = new IntersectionObserver(
        (entries) => {
          const e = entries[0];
          setScrolled(!e.isIntersecting);
        },
        {
          root: null,
          // kleine Hysterese: Headerhöhe + 8px verhindert „Kanten-Bouncen“
          rootMargin: `-${Math.max(headerH + 8, 0)}px 0px 0px 0px`,
          threshold: 0,
        }
      );
      obs.observe(sentinel);
      observerRef.current = obs;
    };

    const raf2 = requestAnimationFrame(setup);

    const onResize = () => {
      computeInitialScrolled();
      setup();
    };
    window.addEventListener('resize', onResize);
    window.addEventListener('orientationchange', onResize);

    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('orientationchange', onResize);
      if (observerRef.current) observerRef.current.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transparentHeader, url]);

  // Menü bei Routenwechsel schließen
  useEffect(() => {
    setOpen(false);
  }, [url]);

  // Header immer fixed; nur Skin/Colors wechseln
  const headerBase = 'fixed top-0 inset-x-0 z-50 h-16';
  const headerSkin =
    transparentHeader && !scrolled ? 'bg-transparent' : 'bg-white/90 backdrop-blur shadow-sm';
  const currentNavVariant = transparentHeader && !scrolled ? navVariant : 'dark';

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Head title={title} />

      {/* Header */}
      <header ref={headerRef} className={`${headerBase} ${headerSkin}`}>
        <nav className="h-full">
          <div className="mx-auto max-w-6xl p-4 h-full">
            <div className="flex h-auto items-center justify-between">
              <Link
                href="/"
                className={`text-lg font-bold tracking-wide ${currentNavVariant === 'light' ? 'text-white' : 'text-gray-900'
                  }`}
              >
                <img src={'/images/pumo.svg'} alt="Pumo Digital" className='h-10' />
              </Link>

              {/* Desktop */}
              <div className="hidden sm:flex items-center gap-3 uppercase">
                <NavLink href="/" variant={currentNavVariant}>
                  Start
                </NavLink>
                <NavLink href="/projects" variant={currentNavVariant}>
                  Projekte
                </NavLink>
                <NavLink href="/contact" variant={currentNavVariant}>
                  Kontakt
                </NavLink>
              </div>

              {/* Hamburger */}
              <button
                aria-label="Menu"
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className={`sm:hidden inline-flex items-center justify-center rounded-md p-2
                  ${currentNavVariant === 'light'
                    ? 'text-white hover:bg-white/10 focus:ring-white/30'
                    : 'text-gray-800 hover:bg-gray-900/5 focus:ring-gray-400/40'
                  }
                  focus:outline-none focus:ring-2`}
              >
                <svg
                  className={`h-6 w-6 ${open ? 'hidden' : 'block'}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path strokeWidth="2" strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
                </svg>
                <svg
                  className={`h-6 w-6 ${open ? 'block' : 'hidden'}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path strokeWidth="2" strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Panel */}
          {open && (
            <div className="sm:hidden absolute left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-transparent z-40 uppercase">
              <div className="flex flex-col gap-2 pl-4 pt-4">
                <Link
                  onClick={() => setOpen(false)}
                  className={`${currentNavVariant === 'light'
                      ? 'text-white/90 hover:text-white'
                      : 'text-gray-800 hover:text-gray-900'
                    } py-2 pr-4`}
                  href="/"
                >
                  Start
                </Link>
                <Link
                  onClick={() => setOpen(false)}
                  className={`${currentNavVariant === 'light'
                      ? 'text-white/90 hover:text-white'
                      : 'text-gray-800 hover:text-gray-900'
                    } py-2 pr-4`}
                  href="/projects"
                >
                  Projekte
                </Link>
                <Link
                  onClick={() => setOpen(false)}
                  className={`${currentNavVariant === 'light'
                      ? 'text-white/90 hover:text-white'
                      : 'text-gray-800 hover:text-gray-900'
                    } py-2 pr-4`}
                  href="/contact"
                >
                  Kontakt
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Spacer: h-0 wenn transparent, h-16 wenn solid */}
      <div
        aria-hidden
        className={transparentHeader && !scrolled ? 'h-0' : 'h-16'}
        style={{ transition: 'height 150ms ease' }}
      />

      {/* Content */}
      <main className="flex-1">{children}</main>

      <footer className="flex bg-white border-t">
        <div className="max-w-6xl mx-auto px-4 py-4 text-sm text-gray-500">
          © {new Date().getFullYear()} 
        </div>
      </footer>
    </div>
  );
}
