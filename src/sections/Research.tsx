import { useEffect, useRef, useState } from 'react';
import { Thermometer, Droplets, Wind, CloudRain, Map, BarChart3 } from 'lucide-react';

const researchAreas = [
  {
    icon: Thermometer,
    title: 'Variabilidade Climática',
    description: 'Estudo dos padrões de variabilidade climática em escalas sazonais, interanuais e decenais, incluindo fenômenos como El Niño e La Niña.',
    image: '/research-climate.jpg',
    topics: ['ENSO', 'Oscilação de Madden Julian', 'Modos de Variabilidade'],
  },
  {
    icon: Droplets,
    title: 'Mudanças Climáticas Globais',
    description: 'Análise de tendências de longo prazo em temperatura e precipitação, projeções futuras e impactos regionais das mudanças climáticas.',
    image: '/research-amazon.jpg',
    topics: ['Tendências Térmicas', 'Projeções Climáticas', 'Cenários Futuros'],
  },
  {
    icon: Wind,
    title: 'Interação Oceano-Atmosfera',
    description: 'Investigação dos processos de acoplamento entre oceano e atmosfera e seu papel na variabilidade climática regional e global.',
    image: '/research-ocean.jpg',
    topics: ['Circulação Oceânica', 'Troca de Calor', 'Correntes Marinhas'],
  },
  {
    icon: CloudRain,
    title: 'Eventos Climáticos Extremos',
    description: 'Caracterização e análise de eventos extremos de precipitação, secas, ondas de calor e suas tendências no contexto das mudanças climáticas.',
    image: '/research-extremes.jpg',
    topics: ['Secas', 'Chuvas Intensas', 'Ondas de Calor'],
  },
];

const methodologies = [
  {
    icon: Map,
    title: 'Sensoriamento Remoto',
    description: 'Uso de dados de satélites para monitoramento climático e ambiental.',
  },
  {
    icon: BarChart3,
    title: 'Modelagem Numérica',
    description: 'Simulações com modelos climáticos regionais e globais.',
  },
  {
    icon: Thermometer,
    title: 'Observações In Situ',
    description: 'Redes de estações meteorológicas e coleta de dados de campo.',
  },
];

export function Research() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeArea, setActiveArea] = useState(0);

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
      id="research"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-slate-50"
    >
      <div className="section-padding">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            Linhas de Pesquisa
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Nossas <span className="text-gradient">Pesquisas</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Desenvolvemos pesquisas multidisciplinares focadas na compreensão 
            dos processos climáticos e seus impactos na sociedade e no meio ambiente.
          </p>
        </div>

        {/* Research Areas Tabs */}
        <div className="mb-16">
          {/* Tab Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {researchAreas.map((area, index) => (
              <button
                key={index}
                onClick={() => setActiveArea(index)}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all ${
                  activeArea === index
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                    : 'bg-white text-slate-600 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                <area.icon className="w-5 h-5" />
                <span className="hidden sm:inline">{area.title}</span>
              </button>
            ))}
          </div>

          {/* Active Area Content */}
          <div
            className={`bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="grid lg:grid-cols-2">
              {/* Image */}
              <div className="relative h-64 lg:h-auto">
                <img
                  src={researchAreas[activeArea].image}
                  alt={researchAreas[activeArea].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-transparent lg:bg-gradient-to-l" />
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  {(() => {
                    const Icon = researchAreas[activeArea].icon;
                    return <Icon className="w-7 h-7 text-blue-600" />;
                  })()}
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
                  {researchAreas[activeArea].title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {researchAreas[activeArea].description}
                </p>

                {/* Topics */}
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">Tópicos de Pesquisa:</h4>
                  <div className="flex flex-wrap gap-2">
                    {researchAreas[activeArea].topics.map((topic, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Methodologies */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">
            Metodologias e Ferramentas
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {methodologies.map((method, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <method.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{method.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
