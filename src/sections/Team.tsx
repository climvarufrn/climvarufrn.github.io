import { useEffect, useRef, useState } from 'react';
import { Mail, GraduationCap, Award, Linkedin } from 'lucide-react';

const teamMembers = [
  {
    name: 'Dr. Cristiano Prestrelo de Oiveira',
    role: 'Coordenador do Laboratório',
    image: '${import.meta.env.BASE_URL}team/coordenador.jpg',
    bio: 'Doutor em Meteorologia pela USP desde 2014 com experiência em variabilidade climática. Líder de diversos projetos de pesquisa em colaboração com instituições nacionais e internacionais.',
    lattes: 'http://lattes.cnpq.br/2461244145338043',
    email: 'cristiano.prestrelo@ufrn.br',
  },
  {
    name: 'Dra. Ana Paula Mendonça',
    role: 'Pesquisadora Sênior',
    image: '${import.meta.env.BASE_URL}team/team-2.jpg',
    bio: 'Especialista em mudanças climáticas e modelagem numérica. Coordena projetos de projeção climática para a América do Sul e avaliação de impactos.',
    lattes: 'http://lattes.cnpq.br/',
    email: 'ana.mendonca@climvar.br',
  },
  {
    name: 'Dr. Ricardo Oliveira',
    role: 'Pesquisador',
    image: '${import.meta.env.BASE_URL}team/team-3.jpg',
    bio: 'Focado em interação oceano-atmosfera e variabilidade decadal do clima. Desenvolve metodologias para previsão climática sazonal.',
    lattes: 'http://lattes.cnpq.br/',
    email: 'ricardo.oliveira@climvar.br',
  },
  {
    name: 'Dra. Juliana Costa',
    role: 'Pesquisadora',
    image: '${import.meta.env.BASE_URL}team/team-4.jpg',
    bio: 'Especialista em eventos climáticos extremos e análise de tendências. Trabalha com índices de extremos climáticos e seus impactos socioeconômicos.',
    lattes: 'http://lattes.cnpq.br/',
    email: 'juliana.costa@climvar.br',
  },
];

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
      className="py-20 lg:py-32 bg-white"
    >
      <div className="section-padding">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            Nossa Equipe
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Pesquisadores <span className="text-gradient">CLIMVAR</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Nossa equipe é formada por pesquisadores dedicados e experientes, 
            comprometidos com a excelência científica e a geração de conhecimento 
            relevante para a sociedade.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`group bg-slate-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Social Links Overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                  <a
                    href={member.lattes}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-white/90 hover:bg-white text-blue-700 px-3 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-colors"
                  >
                    <GraduationCap className="w-4 h-4" />
                    Lattes
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="bg-white/90 hover:bg-white text-blue-700 p-2 rounded-lg transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 text-sm font-medium mb-3">{member.role}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 max-w-2xl">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-bold text-white mb-2">Junte-se à Nossa Equipe</h3>
              <p className="text-blue-100 text-sm mb-4">
                Estamos sempre em busca de talentos apaixonados por climatologia 
                e mudanças climáticas. Confira nossas oportunidades.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-white font-medium hover:underline"
              >
                Entre em contato
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
