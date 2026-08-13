import { useEffect, useRef, useState } from 'react';
import { ArrowRight, GraduationCap, Mail } from 'lucide-react';

// ================================================================
// TeamHome.tsx — SEÇÃO DE EQUIPE NA PÁGINA PRINCIPAL
// Mostra apenas: Coordenador + 2 pesquisadores seniores
// Botão "Conheça nossa equipe completa →"
// ================================================================

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  lattes: string;
  email: string;
  highlight?: boolean;
}

const featuredMembers: TeamMember[] = [
  {
    name: 'Dr. Cristiano Prestrelo de Oliveira',
    role: 'Coordenador do Laboratório',
    image: '/team/coordenador.jpg',
    bio: 'Doutor em Meteorologia pela USP (2014). Líder de projetos de variabilidade climática em colaboração com instituições nacionais e internacionais.',
    lattes: 'http://lattes.cnpq.br/2461244145338043',
    email: 'cristiano.prestrelo@ufrn.br',
    highlight: true,
  },
  {
    name: 'Dra. Maria Leidinice da Silva',
    role: 'Pesquisadora Colaboradora',
    image: '/team/pesquisador2.jpg',
    bio: 'Doutora em Ciências do Clima pela UFRN. Pós-doutoranda no ICTP, com foco em modelagem regional, mudanças climáticas e eventos extremos.',
    lattes: 'https://orcid.org/0000-0002-9495-3974',
    email: 'mda_silv@ictp.it',
  },
  {
    name: 'Dr. Felipe Jeferson de Medeiros',
    role: 'Pesquisador Colaborador',
    image: '/team/pesquisador1.jpg',
    bio: 'Mestre e Doutor em Ciências Climáticas pela UFRN. Especialista em variabilidade climática, extremos climáticos e modelagem numérica.',
    lattes: 'http://lattes.cnpq.br/2451224020373508',
    email: 'felipetkd_@hotmail.com',
  },
];

const totalMembers = 7; // Atualize conforme sua equipe crescer

export function TeamHome() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="team"
      ref={sectionRef}
      className="py-20 lg:py-28 bg-slate-900"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="inline-block px-4 py-1.5 bg-sky-500/10 text-sky-400 rounded-full text-sm font-semibold mb-4 border border-sky-500/20">
            Nossa Equipe
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Pesquisadores <span className="text-sky-400">CLIMVAR</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Conheça os pesquisadores que lideram as pesquisas do laboratório
          </p>
        </div>

        {/* Featured Members Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {featuredMembers.map((member, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br from-slate-800 to-slate-900 border rounded-2xl p-8 text-center transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl ${
                member.highlight
                  ? 'border-sky-500/60 hover:border-sky-400'
                  : 'border-slate-700 hover:border-sky-400/60'
              } ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              {/* Highlight bar for coordinator */}
              {member.highlight && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 to-blue-500 rounded-t-2xl" />
              )}

              {/* Photo */}
              <div className="relative mb-5">
                <img
                  src={member.image}
                  alt={member.name}
                  className={`w-28 h-28 rounded-full object-cover mx-auto border-3 transition-colors duration-300 ${
                    member.highlight
                      ? 'border-sky-500/50 group-hover:border-sky-400'
                      : 'border-slate-600 group-hover:border-sky-400'
                  }`}
                />
              </div>

              {/* Coordinator Badge */}
              {member.highlight && (
                <span className="inline-block bg-gradient-to-r from-sky-400 to-blue-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                  Coordenador
                </span>
              )}

              {/* Name */}
              <h3 className="text-lg font-bold text-white mb-1 leading-tight">
                {member.name}
              </h3>

              {/* Role */}
              <p className="text-sky-400 text-sm font-medium uppercase tracking-wide mb-3">
                {member.role}
              </p>

              {/* Bio */}
              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                {member.bio}
              </p>

              {/* Social Links */}
              <div className="flex items-center justify-center gap-3">
                <a
                  href={member.lattes}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-400 hover:text-sky-400 text-sm transition-colors"
                  title="Currículo Lattes"
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>Lattes</span>
                </a>
                <span className="text-slate-700">|</span>
                <a
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center gap-1.5 text-slate-400 hover:text-sky-400 text-sm transition-colors"
                  title="Enviar e-mail"
                >
                  <Mail className="w-4 h-4" />
                  <span>E-mail</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div
          className={`text-center transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <a
            href="/equipe"
            className="inline-flex items-center gap-2.5 border-2 border-sky-400 text-sky-400 px-8 py-3.5 rounded-full font-semibold text-base transition-all duration-300 hover:bg-sky-400 hover:text-slate-900 hover:shadow-[0_0_24px_rgba(56,189,248,0.35)] group"
          >
            Conheça nossa equipe completa
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <p className="text-slate-500 text-sm mt-4">
            +{totalMembers - featuredMembers.length} pesquisadores, doutorandos e graduandos
          </p>
        </div>
      </div>
    </section>
  );
}
