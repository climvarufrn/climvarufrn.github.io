export type TeamCategory =
  | 'coordenacao'
  | 'colaborador'
  | 'doutorando'
  | 'graduando';

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  lattes: string;
  email: string;
  category: TeamCategory;
  highlight?: boolean;
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Dr. Cristiano Prestrelo de Oliveira',
    role: 'Coordenador do Laboratório',
    image: '/team/coordenador.jpg',
    bio: 'Doutor em Meteorologia pela USP desde 2014 com experiência em variabilidade climática. Líder de diversos projetos de pesquisa em colaboração com instituições nacionais e internacionais.',
    lattes: 'http://lattes.cnpq.br/2461244145338043',
    email: 'cristiano.prestrelo@ufrn.br',
    category: 'coordenacao',
    highlight: true,
  },
  {
    name: 'Dr. Felipe Jeferson de Medeiros',
    role: 'Pesquisador Colaborador',
    image: '/team/pesquisador1.jpg',
    bio: 'Meteorologista. Mestre e doutor em Ciências Climáticas pela UFRN. Possui experiência e interesse nas áreas de variabilidade climática, extremos climáticos e modelagem numérica.',
    lattes: 'http://lattes.cnpq.br/2451224020373508',
    email: 'felipetkd_@hotmail.com',
    category: 'colaborador',
  },
  {
    name: 'Dra. Maria Leidinice da Silva',
    role: 'Pesquisadora Colaboradora',
    image: '/team/pesquisador2.jpg',
    bio: 'Possui graduação em Física, mestrado em Ciências Físicas Aplicadas e doutorado em Ciências do Clima pela UFRN. Atualmente, atua como pós-doutoranda no ICTP. Sua pesquisa foca em modelagem regional, mudanças climáticas, eventos extremos, teleconexões e hidrologia.',
    lattes: 'https://orcid.org/0000-0002-9495-3974',
    email: 'mda_silv@ictp.it',
    category: 'colaborador',
  },
  {
    name: 'Luiz Eduardo Nunes Cho-Luck',
    role: 'Doutorando em Ciências Climáticas',
    image: '/team/doutorando-01.jpg',
    bio: 'Meteorologista e Mestre em Ciências Climáticas pela UFRN. Possui experiência em previsão do tempo, modelagem climática, sensoriamento remoto, geoprocessamento e análise de dados.',
    lattes: 'http://lattes.cnpq.br/2652719958867337',
    email: 'choluck.eduardo@gmail.com',
    category: 'doutorando',
  },
  {
    name: 'Marina Siqueira',
    role: 'Doutoranda em Ciências Climáticas',
    image: '/team/doutorando-03.jpg',
    bio: 'Doutoranda e Mestra em Ciências Climáticas, bacharela em Gestão de Políticas Públicas e licenciada em Ciências Biológicas. Especialista em sensoriamento remoto, geoprocessamento e análise de dados aplicados à sustentabilidade.',
    lattes: 'http://lattes.cnpq.br/9651892429509278',
    email: 'siqueira.maride@gmail.com',
    category: 'doutorando',
  },
  {
    name: 'Giovanninni Leite De Freitas Batista',
    role: 'Doutorando em Ciências Climáticas',
    image: '/team/doutorando-02.jpg',
    bio: 'Professor Efetivo de Física no IFRN, Mestre em Ensino de Ciências Naturais e Matemática e Doutorando em Ciências Climáticas pela UFRN. Atua em pesquisas com ênfase em variabilidade climática e energias renováveis.',
    lattes: 'http://lattes.cnpq.br/9902527520234187',
    email: 'giovanninni@gmail.com',
    category: 'doutorando',
  },
  {
    name: 'Rayane Ferreira',
    role: 'Graduanda em Meteorologia',
    image: '/team/graduacao-01.jpg',
    bio: 'Graduanda em Meteorologia pela UFRN. Atua na área de Geociências, com ênfase em Meteorologia e Climatologia. Conhecimentos em análise e processamento de dados nas linguagens Python e R.',
    lattes: 'http://lattes.cnpq.br/0117543397640729',
    email: 'rayane.ferreira.130@ufrn.edu.br',
    category: 'graduando',
  },
];

export const featuredMembers = teamMembers.filter(
  (member) => member.highlight || member.category === 'colaborador'
).slice(0, 3);

export const categories = [
  {
    key: 'coordenacao' as const,
    label: 'Coordenação',
    description: 'Liderança do laboratório',
  },
  {
    key: 'colaborador' as const,
    label: 'Pesquisadores Colaboradores',
    description: 'Pesquisadores doutores vinculados ao CLIMVAR',
  },
  {
    key: 'doutorando' as const,
    label: 'Doutorandos',
    description: 'Pesquisadores em formação de doutorado',
  },
  {
    key: 'graduando' as const,
    label: 'Graduandos',
    description: 'Estudantes de iniciação científica',
  },
];
