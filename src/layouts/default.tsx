import { Link } from '@nextui-org/link';

import { Navbar } from '@/components/navbar';
import Particles from '@/UI/Particles';

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col h-screen">
      {/* Background de partículas */}
      <div className="fixed inset-0 z-0">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col h-screen">
        <Navbar />
        <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">{children}</main>
        <footer className="w-full flex items-center justify-center py-3">
          <Link isExternal className="flex items-center gap-1 text-current" href="/">
            <span className="text-default-600">2026</span>
            <p className="text-primary">Alexander Gómez</p>
          </Link>
        </footer>
      </div>
    </div>
  );
}
