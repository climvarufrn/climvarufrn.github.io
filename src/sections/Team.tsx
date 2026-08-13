import { useEffect, useRef, useState } from 'react';
import { Mail, GraduationCap, ArrowLeft } from 'lucide-react';
import { teamMembers, categories } from '../data/team';
import type { TeamMember } from '../data/team';


// ================================================================
// Team.tsx — PÁGINA COMPLETA DE EQUIPE (/equipe)
// Todos os membros organizados por categoria
// Tema escuro, mantendo a identidade visual do CLIMVAR
// ================================================================

function MemberCard({ member, index, isVisible }: { member: TeamMember; index: number; isVisible: boolean }) {
  const isCoord = member.category === 'coordenacao';

  return (
    <div
      className={`group relative bg-gradient-to-br from-slate-800 to-slate-900 border rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${
        isCoord
          ? 'border-sky-500/50 hover:border-sky-400'
          : 'border-slate-700 hover:border-sky-400/50'
      } ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Highlight bar for coordinator */}
      {isCoord && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 to-blue-500 z-10" />
      )}

      <div className="flex flex-col sm:flex-row">
        {/* Image */}
        <div className="relative sm:w-48 sm:h-auto h-64 flex-shrink-0 overflow-hidden">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent sm:bg-gradient-to-r" />

          {/* Coordinator badge on image */}
          {isCoord && (
            <div className="absolute top-3 left-3">
              <span className="inline-block bg-gradient-to-r from-sky-400 to-blue-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Coordenador
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col justify-center flex-1">
          <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
          <p className="text-sky-400 text-sm font-semibold uppercase tracking-wide mb-4">
            {member.role}
          </p>
          <p className="text-slate-400 text-sm leading-relaxed mb-5">
            {member.bio}
          </p>

          {/* Links */}
          <div className="flex items-center gap-4">
            <a
              href={member.lattes}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-sky-400 text-sm font-medium transition-colors"
            >
              <GraduationCap className="w-4 h-4" />
              Currículo Lattes
            </a>
            <a
              href={`mailto:${member.email}`}
              className="inline-flex items-center gap-2 text-slate-400 hover:text-sky-400 text-sm font-medium transition-colors"
            >
              <Mail className="w-4 h-4" />
              E-mail
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Team() {
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
      { threshold: 0.05 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen bg-slate-950 py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <a
          href="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-sky-400 text-sm font-medium mb-10 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para o site
        </a>

        {/* Page Header */}
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="inline-block px-4 py-1.5 bg-sky-500/10 text-sky-400 rounded-full text-sm font-semibold mb-4 border border-sky-500/20">
            Equipe CLIMVAR
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Nossa <span className="text-sky-400">Equipe</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            Conheça todos os pesquisadores, colaboradores e estudantes que compõem
            o Laboratório de Variabilidade e Mudanças Climáticas.
          </p>
        </div>

        {/* Categories */}
        {categories.map((category) => {
          const members = teamMembers.filter((m) => m.category === category.key);
          if (members.length === 0) return null;

          return (
            <div key={category.key} className="mb-16 last:mb-0">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-1">
                  {category.label}
                </h2>
                <p className="text-slate-500 text-sm">{category.description}</p>
                <div className="mt-3 h-px bg-gradient-to-r from-sky-500/30 via-slate-700 to-transparent" />
              </div>

              <div className="grid gap-6">
                {members.map((member, index) => (
                  <MemberCard
                    key={member.name}
                    member={member}
                    index={index}
                    isVisible={isVisible}
                  />
                ))}
              </div>
            </div>
          );
        })}

        {/* Join CTA */}
        <div
          className={`mt-20 text-center transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="inline-block bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8 max-w-xl">
            <h3 className="text-xl font-bold text-white mb-2">
              Junte-se à Nossa Equipe
            </h3>
            <p className="text-slate-400 text-sm mb-5 leading-relaxed">
              Estamos sempre em busca de talentos apaixonados por climatologia
              e mudanças climáticas. Entre em contato para saber mais sobre
              oportunidades de pesquisa.
            </p>
            <a
              href="/"
              className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-slate-900 font-semibold px-6 py-2.5 rounded-full transition-colors"
            >
              Entre em contato
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
