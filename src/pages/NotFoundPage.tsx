import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  // Parallax offset for the floating 404
  const calcParallax = (strength: number) => ({
    transform: `translate(${(mousePos.x / window.innerWidth - 0.5) * strength}px, ${(mousePos.y / window.innerHeight - 0.5) * strength}px)`,
  });

  return (
    <main
      ref={containerRef}
      className="min-h-[calc(100vh-80px)] bg-white flex flex-col items-center justify-center relative overflow-hidden px-4 font-sans"
      aria-label="Page not found"
    >
      {/* Ambient blobs */}
      <div
        className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-20 animate-blob"
        style={{ background: 'radial-gradient(circle, #4f46e5 0%, transparent 70%)', transition: 'transform 0.1s ease-out', ...calcParallax(-18) }}
      />
      <div
        className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 rounded-full opacity-15 animate-blob animation-delay-2000"
        style={{ background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)', transition: 'transform 0.1s ease-out', ...calcParallax(-12) }}
      />
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5"
        style={{ background: 'radial-gradient(circle, #4f46e5 0%, transparent 60%)' }}
      />

      {/* Big 404 backdrop text */}
      <div
        className="select-none absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ transition: 'transform 0.12s ease-out', ...calcParallax(-8) }}
        aria-hidden="true"
      >
        <span
          className="text-[clamp(10rem,30vw,22rem)] font-extrabold leading-none tracking-tighter"
          style={{
            color: 'transparent',
            WebkitTextStroke: '2px rgba(79,70,229,0.08)',
            userSelect: 'none',
          }}
        >
          404
        </span>
      </div>

      {/* Foreground content */}
      <div
        className={`relative z-10 text-center max-w-lg transition-all duration-700 ease-out ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-6 transition-all duration-700 delay-100 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse inline-block" />
          Error 404
        </div>

        <h1
          className={`text-5xl md:text-6xl font-extrabold text-text mb-4 tracking-tight transition-all duration-700 delay-150 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Page not found<span className="text-primary">.</span>
        </h1>

        <p
          className={`text-lg text-text-light mb-10 leading-relaxed transition-all duration-700 delay-200 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Looks like this page wandered off. It might have been moved, deleted, or never existed in the first place.
        </p>

        {/* Actions */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <Link
            to="/"
            id="not-found-home-btn"
            className="btn-primary flex items-center gap-2 text-base bg-primary text-white hover:bg-primary/90 px-8 py-3 rounded-lg font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-200 hover:-translate-y-0.5"
          >
            <span>← Back to home</span>
          </Link>
          <Link
            to="/contact"
            id="not-found-contact-btn"
            className="flex items-center gap-2 text-base text-text-light hover:text-primary border border-primary/15 hover:border-primary/40 bg-background-light px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:-translate-y-0.5"
          >
            Contact me
          </Link>
        </div>

        {/* Suggested links */}
        <div
          className={`mt-12 pt-8 border-t border-primary/10 transition-all duration-700 delay-[400ms] ${
            mounted ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p className="text-sm text-text-light mb-4">Or jump to one of these:</p>
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2" aria-label="Suggested pages">
            {[
              { label: 'Blog', to: '/blog' },
              { label: 'Work', to: '/work' },
              { label: 'Contact', to: '/contact' },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm font-medium text-primary hover:underline underline-offset-4 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
