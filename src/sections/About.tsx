import { useEffect, useRef, useState } from 'react';
import { Target, Eye, Award, BookOpen, Users, Microscope } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Missão',
    description: 'Investigar os processos de variabilidade climática e mudanças globais, contribuindo para a compreensão científica e desenvolvimento de soluções para desafios ambientais.',
  },
  {
    icon: Eye,
    title: 'Visão',
    description: 'Ser referência internacional em pesquisa climática, formando novos pesquisadores e gerando conhecimento de alto impacto para a sociedade.',
  },
  {
    icon: Award,
    title: 'Valores',
    description: 'Excelência científica, colaboração, inovação, integridade acadêmica e compromisso com a sustentabilidade ambiental.',
  },
];

const stats = [
  { icon: BookOpen, value: 30, suffix: '+', label: 'Artigos Publicados' },
  { icon: Users, value: 7, suffix: '', label: 'Pesquisadores Ativos' },
  { icon: Microscope, value: 4, suffix: '+', label: 'Projetos de Pesquisa' },
];

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        const duration = 2000;
        const steps = 60;
        const increment = stat.value / steps;
        let current = 0;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.value) {
            current = stat.value;
            clearInterval(timer);
          }
          setCounters((prev) => {
            const newCounters = [...prev];
            newCounters[index] = Math.floor(current);
            return newCounters;
          });
        }, duration / steps);
      });
    }
  }, [isVisible]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-white"
    >
      <div className="section-padding">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            Sobre Nós
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Conheça o <span className="text-gradient">CLIMVAR</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            O Laboratório de Variabilidade e Mudanças Climáticas (CLIMVAR) é um 
            centro de excelência em pesquisa climática dedicado ao estudo dos 
            processos atmosféricos, oceânicos e terrestres que governam o clima 
            da Terra.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/about-lab.jpg"
                alt="Laboratório CLIMVAR"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 max-w-xs hidden lg:block">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Excelência</div>
                  <div className="text-sm text-slate-500">CNPq</div>
                </div>
              </div>
              <p className="text-sm text-slate-600">
                Reconhecido como grupo de excelência em pesquisa climática.
              </p>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6">
              Pesquisa de Excelência em Climatologia
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Fundado em 2023, o CLIMVAR reúne pesquisadores de diversas áreas 
              da ciência atmosférica, trabalhando em colaboração com instituições 
              nacionais e internacionais para compreender os complexos processos 
              que governam o sistema climático.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Nossas pesquisas abrangem desde a variabilidade de curto prazo, 
              como eventos extremos de precipitação, até mudanças climáticas de 
              longo prazo e seus impactos nos ecossistemas e na sociedade.
            </p>

            {/* Feature Cards */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 rounded-xl bg-slate-50 hover:bg-blue-50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">{feature.title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 lg:p-12">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  {counters[index]}{stat.suffix}
                </div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
