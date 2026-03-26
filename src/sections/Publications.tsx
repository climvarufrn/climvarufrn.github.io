import { useEffect, useRef, useState } from 'react';
import { BookOpen, FileText, ExternalLink, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const publications = [
  {
    title: 'Climate Extremes over the Brazilian Caatinga Based on Performance-Based Projections from Selected NEX-GDDP-CMIP6 Models',
    authors: 'Cristiano Prestrelo de Oliveira, Pedro Rodrigues Mutti, Eduardo Nunes Cho-Luck, Marina Siqueira, Giovanninni Batista, Rayane Ferreira Costa, Maria Leidinice da Silva, Felipe Jeferson de Medeiros, Wendy Lu Aramayo Alonso',
    journal: 'EGU26-3469',
    year: 2026,
    doi: 'https://doi.org/10.5194/egusphere-egu26-3469',
    type: 'prossedings',
  },
  {
    title: 'Analysis of climate extremes indices in tropical South America through the RegCM4. 7',
    authors: 'Maria Leidinice da Silva, Cristiano Prestrelo de Oliveira, Cláudio Moisés Santos e Silva, Joao Medeiros de Araujo',
    journal: 'International Journal of Climatology',
    year: 2023,
    doi: 'https://doi.org/10.1002/joc.8100',
    type: 'article',
  },
  {
    title: 'Assessing of Two Planetary Boundary Layer Schemes in RegCM4 Model Over the Tropical Region of Brazil',
    authors: 'Maria Leidinice da Silva, Luiz Eduardo Nunes Cho-Luck, Jéssica Cristina Gabriel da Silva, Cristiano Prestrelo de Oliveira, Cláudio Moisés Santos e Silva',
    journal: 'Pure and Applied Geophysics',
    year: 2023,
    doi: 'https://doi.org/10.1007/s00024-023-03282-2',
    type: 'article',
  },
  {
    title: 'Dynamic downscaling of climate simulations and projected changes in tropical South America using RegCM4. 7',
    authors: 'Maria Leidinice da Silva, Cristiano Prestrelo de Oliveira, Claudio Moises Santos e Silva, Joao Medeiros de Araujo',
    journal: 'International Journal of Climatology',
    year: 2023,
    doi: 'https://doi.org/10.1002/joc.8035',
    type: 'article',
  },
  {
    title: 'Assessment of dry and heavy rainfall days and their projected changes over Northeast Brazil in Coupled Model Intercomparison Project Phase 6 models',
    authors: 'FJ Medeiros, CP Oliveira',
    journal: 'International Journal of Climatology',
    year: 2022,
    doi: '10.1002/joc.7759',
    type: 'article',
  },
  {
    title: 'Evaluation of extreme precipitation climate indices and their projected changes for Brazil: From CMIP3 to CMIP6',
    authors: 'Mendonça, A.P.; Silva, C.E.',
    journal: 'Felipe Jeferson de Medeiros, Cristiano Prestrelo de Oliveira, Alvaro Avila-Diaz',
    year: 2022,
    doi: 'https://doi.org/10.1016/j.wace.2022.100511',
    type: 'article',
  },
];

export function Publications() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState<'all' | 'article' | 'book'>('all');

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

  const filteredPublications = publications.filter(
    (pub) => filter === 'all' || pub.type === filter
  );

  return (
    <section
      id="publications"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-slate-50"
    >
      <div className="section-padding">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            Publicações
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Produção <span className="text-gradient">Científica</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Nossas pesquisas são publicadas em revistas científicas de alto 
            impacto, contribuindo para o avanço do conhecimento em climatologia.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-2 mb-10">
          {[
            { key: 'all', label: 'Todas' },
            { key: 'article', label: 'Artigos' },
            { key: 'book', label: 'Livros' },
          ].map((item) => (
            <button
              key={item.key}
              onClick={() => setFilter(item.key as typeof filter)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                filter === item.key
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                  : 'bg-white text-slate-600 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Publications List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredPublications.map((pub, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  pub.type === 'book' ? 'bg-amber-100' : 'bg-blue-100'
                }`}>
                  {pub.type === 'book' ? (
                    <BookOpen className="w-6 h-6 text-amber-600" />
                  ) : (
                    <FileText className="w-6 h-6 text-blue-600" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2 leading-snug">
                    {pub.title}
                  </h3>
                  
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-600 mb-3">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {pub.authors}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                    <span className="font-medium text-blue-700">{pub.journal}</span>
                    <span className="flex items-center gap-1 text-slate-500">
                      <Calendar className="w-4 h-4" />
                      {pub.year}
                    </span>
                  </div>
                </div>

                {/* DOI Link */}
                {pub.doi && (
                  <a
                    href={`https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 p-2 text-slate-400 hover:text-blue-600 transition-colors"
                    title="Ver publicação"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Button
            variant="outline"
            className="border-blue-600 text-blue-600 hover:bg-blue-50"
            onClick={() => window.open('https://scholar.google.com/citations?hl=pt-BR&authuser=1&user=MgZBP4kAAAAJ/', '_blank')}
          >
            <BookOpen className="w-4 h-4 mr-2" />
            Ver Todas as Publicações
          </Button>
        </div>
      </div>
    </section>
  );
}
