import { useState, useEffect } from 'react';
import { Menu, X, Cloud, Thermometer, Wind } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { label: 'Início', href: '#hero' },
  { label: 'Sobre', href: '#about' },
  { label: 'Pesquisa', href: '#research' },
  { label: 'Equipe', href: '#team' },
  { label: 'Publicações', href: '#publications' },
  { label: 'Contato', href: '#contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full section-padding">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#hero');
            }}
            className="flex items-center gap-2 group"
          >
            <div className="relative">
              <Cloud className={`w-8 h-8 transition-colors duration-300 ${
                isScrolled ? 'text-blue-600' : 'text-white'
              }`} />
              <Thermometer className={`w-4 h-4 absolute -bottom-1 -right-1 transition-colors duration-300 ${
                isScrolled ? 'text-cyan-500' : 'text-cyan-300'
              }`} />
            </div>
            <div className="flex flex-col">
              <span className={`text-lg lg:text-xl font-bold tracking-tight transition-colors duration-300 ${
                isScrolled ? 'text-blue-900' : 'text-white'
              }`}>
                CLIMVAR
              </span>
              <span className={`text-[10px] lg:text-xs -mt-1 transition-colors duration-300 ${
                isScrolled ? 'text-blue-600/70' : 'text-white/70'
              }`}>
                Laboratório de Climatologia
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-blue-50 ${
                  isScrolled
                    ? 'text-slate-700 hover:text-blue-600'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              onClick={() => scrollToSection('#contact')}
              className={`transition-all duration-300 ${
                isScrolled
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-white/10 hover:bg-white/20 text-white border border-white/30'
              }`}
            >
              <Wind className="w-4 h-4 mr-2" />
              Colabore
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-slate-700' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <nav className="section-padding py-4 flex flex-col gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className="px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors"
            >
              {item.label}
            </a>
          ))}
          <Button
            onClick={() => scrollToSection('#contact')}
            className="mt-2 bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Wind className="w-4 h-4 mr-2" />
            Colabore
          </Button>
        </nav>
      </div>
    </header>
  );
}
