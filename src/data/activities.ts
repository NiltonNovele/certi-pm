export interface ActivityItem {
  id: number;
  nome: string;
  tipo: "Desporto" | "Igreja" | "Café" | "Ginásio";
  localizacao: string;
  lat: number;
  lng: number;
  pais: string;
  imagem: string;
  descricao: string;
  link: string;
}

export const activities: ActivityItem[] = [
  // 🌍 Moçambique
  {
    id: 1,
    nome: "Café Sol",
    tipo: "Café",
    localizacao: "Maputo, Moçambique",
    lat: -25.964,
    lng: 32.589,
    pais: "Moçambique",
    imagem: "/activities/sol.jpg",
    descricao: "Café acolhedor ideal para estudar ou encontrar amigos, com WiFi gratuito e ambiente tranquilo.",
    link: "https://www.cafesol.co"
  },
  {
    id: 2,
    nome: "Pro Gym Fitness",
    tipo: "Ginásio",
    localizacao: "Maputo, Moçambique",
    lat: -25.9632,
    lng: 32.5856,
    pais: "Moçambique",
    imagem: "/activities/gym1.jpg",
    descricao: "Ginásio equipado com aparelhos modernos, aulas de grupo e acompanhamento profissional.",
    link: "https://progym.co.mz"
  },
  {
    id: 3,
    nome: "Sé Catedral de Maputo",
    tipo: "Igreja",
    localizacao: "Maputo, Moçambique",
    lat: -25.968,
    lng: 32.591,
    pais: "Moçambique",
    imagem: "/activities/catedral.jpg",
    descricao: "Igreja acolhedora que recebe estudantes e visitantes para momentos de fé e comunhão.",
    link: "https://www.facebook.com/ParoquiaSeCatedralMaputo"
  },
  {
    id: 4,
    nome: "Museu de História Natural",
    tipo: "Museu",
    localizacao: "Maputo, Moçambique",
    lat: -25.9666,
    lng: 32.5732,
    pais: "Moçambique",
    imagem: "/activities/museu1.jpg",
    descricao: "Museu famoso pelos seus dioramas de animais e exposições culturais.",
    link: "Museu de História Natural"
  },
  {
    id: 5,
    nome: "Shopping 24",
    tipo: "Shopping",
    localizacao: "Maputo, Moçambique",
    lat: -25.9629,
    lng: 32.5839,
    pais: "Moçambique",
    imagem: "/activities/shp24.jpg",
    descricao: "Centro comercial com lojas, restaurantes e cinema, muito popular entre jovens.",
    link: "https://www.facebook.com/profile.php?id=100069098776531#"
  },

  // 🇿🇦 África do Sul
  {
    id: 4,
    nome: "Centro Desportivo UCT",
    tipo: "Desporto",
    localizacao: "Cidade do Cabo, África do Sul",
    lat: -33.927,
    lng: 18.423,
    pais: "África do Sul",
    imagem: "/activities/uct1.jpg",
    descricao:
      "Centro moderno com diversas atividades desportivas, incluindo natação, futebol e ténis, exclusivo para estudantes da UCT.",
    link: "https://sport.uct.ac.za",
  },
  {
    id: 5,
    nome: "Truth Coffee Roasting",
    tipo: "Café",
    localizacao: "Cidade do Cabo, África do Sul",
    lat: -33.9195,
    lng: 18.4232,
    pais: "África do Sul",
    imagem: "/activities/truth.jpg",
    descricao:
      "Café premiado mundialmente, com ambiente vibrante, ideal para estudar ou relaxar.",
    link: "https://truth.coffee/",
  },
  {
    id: 6,
    nome: "Virgin Active Gym - Cape Town",
    tipo: "Ginásio",
    localizacao: "Cidade do Cabo, África do Sul",
    lat: -33.918,
    lng: 18.421,
    pais: "África do Sul",
    imagem: "/activities/vg1.jpg",
    descricao:
      "Ginásio de última geração com piscina, spa e aulas de grupo, perfeito para manter a forma.",
    link: "https://www.virginactive.co.za/",
  },
  {
    id: 7,
    nome: "Hillsong Church Cape Town",
    tipo: "Igreja",
    localizacao: "Cidade do Cabo, África do Sul",
    lat: -33.9023,
    lng: 18.4111,
    pais: "África do Sul",
    imagem: "/activities/church1.jpg",
    descricao:
      "Comunidade cristã vibrante que acolhe jovens estudantes e visitantes em cultos e eventos.",
    link: "https://hillsong.com/southafrica/capetowncity",
  },
  {
    id: 8,
    nome: "V&A Waterfront",
    tipo: "Shopping",
    localizacao: "Cape Town, África do Sul",
    lat: 38.755,
    lng: -9.160,
    pais: "África do Sul",
    imagem: "/activities/va.avif",
    descricao:
      "O V&A Waterfront, frequentemente chamado de The Waterfront e The V&A, é um subúrbio de uso misto na Cidade do Cabo, África do Sul.",
    link: "https://www.waterfront.co.za",
  },

//   // 🇵🇹 Portugal
  {
    id: 9,
    nome: "Fábrica Coffee Roasters",
    tipo: "Café",
    localizacao: "Lisboa, Portugal",
    lat: 38.7202,
    lng: -9.1466,
    pais: "Portugal",
    imagem: "/activities/cafe3.jpg",
    descricao:
      "Café popular entre estudantes, conhecido pelo café artesanal e espaço perfeito para trabalhar ou estudar.",
    link: "https://fabricacoffeeroasters.com",
  },
  {
    id: 10,
    nome: "Ginásio Lisboa FitClub",
    tipo: "Ginásio",
    localizacao: "Lisboa, Portugal",
    lat: 38.7263,
    lng: -9.1505,
    pais: "Portugal",
    imagem: "/activities/gym2.jpg",
    descricao:
      "Ginásio moderno com planos acessíveis e aulas coletivas para estudantes universitários.",
    link: "https://100fitclub.com",
  },
  {
    id: 11,
    nome: "Igreja da Sé de Lisboa",
    tipo: "Igreja",
    localizacao: "Lisboa, Portugal",
    lat: 38.7096,
    lng: -9.1322,
    pais: "Portugal",
    imagem: "/activities/chruch2.jpg",
    descricao:
      "Igreja histórica de Lisboa, conhecida pela sua arquitetura e eventos culturais e espirituais.",
    link: "https://www.sedelisboa.pt",
  },
  {
    id: 12,
    nome: "Complexo Desportivo em Lisboa",
    tipo: "Desporto",
    localizacao: "Lisboa, Portugal",
    lat: 52.5205,
    lng: 13.4094,
    pais: "Portugal",
    imagem: "/activities/lsb1.jpg",
    descricao:
      "Centro desportivo com diversas modalidades, desde escalada a basquetebol, ideal para estudantes.",
    link: "https://centrosupera.pt/telheiras",
  },
  {
    id: 13,
    nome: "Colombo Shopping Centre",
    tipo: "Shopping",
    localizacao: "Lisboa, Portugal",
    lat: 52.5299,
    lng: 13.4081,
    pais: "Portugal",
    imagem: "/activities/colo.webp",
    descricao:
      "Tem tudo para todos.",
    link: "https://www.colombo.pt",
  },

  // 🇩🇪 Alemanha
  {
    id: 14,
    nome: "Berlin Sports Center",
    tipo: "Desporto",
    localizacao: "Berlim, Alemanha",
    lat: 52.5205,
    lng: 13.4094,
    pais: "Alemanha",
    imagem: "/activities/ger1.jpg",
    descricao:
      "Centro desportivo com diversas modalidades, desde escalada a basquetebol, ideal para estudantes.",
    link: "https://www.berlin.de/en/sports-leisure",
  },
  {
    id: 15,
    nome: "Bonanza Coffee Roasters",
    tipo: "Café",
    localizacao: "Berlim, Alemanha",
    lat: 52.5299,
    lng: 13.4081,
    pais: "Alemanha",
    imagem: "/activities/ger2.jpg",
    descricao:
      "Café alternativo muito frequentado por estudantes e freelancers, conhecido pelo café artesanal.",
    link: "https://bonanzacoffee.de/",
  },
  {
    id: 16,
    nome: "McFit Gym Berlin",
    tipo: "Ginásio",
    localizacao: "Berlim, Alemanha",
    lat: 52.5218,
    lng: 13.4103,
    pais: "Alemanha",
    imagem: "/activities/ger3.avif",
    descricao:
      "Ginásio acessível com equipamentos modernos e espaços dedicados a treino funcional.",
    link: "https://www.mcfit.com/",
  },
  {
    id: 17,
    nome: "Berliner Dom",
    tipo: "Igreja",
    localizacao: "Berlim, Alemanha",
    lat: 52.5194,
    lng: 13.401,
    pais: "Alemanha",
    imagem: "/activities/ger5.jpg",
    descricao:
      "Igreja icónica em Berlim, com eventos culturais e religiosos abertos ao público.",
    link: "https://www.berlinerdom.de/",
  },
  {
    id: 18,
    nome: "Student Sports Center",
    tipo: "Desporto",
    localizacao: "Alemanha",
    lat: 40.7306,
    lng: -73.995,
    pais: "Alemanha",
    imagem: "/activities/sports4.jpg",
    descricao:
      "Instalações desportivas de topo com courts de basquete, piscina olímpica e ginásio.",
    link: "https://www.nyu.edu/",
  },

//   // 🇺🇸 Estados Unidos
  {
    id: 19,
    nome: "Blue Bottle Coffee",
    tipo: "Café",
    localizacao: "Nova Iorque, EUA",
    lat: 40.724,
    lng: -74.0018,
    pais: "Estados Unidos da América",
    imagem: "/activities/caf.webp",
    descricao:
      "Café minimalista famoso pelo café artesanal, perfeito para sessões de estudo.",
    link: "https://bluebottlecoffee.com/",
  },
  // {
  //   id: 20,
  //   nome: "Planet Fitness NYC",
  //   tipo: "Ginásio",
  //   localizacao: "Nova Iorque, EUA",
  //   lat: 40.7295,
  //   lng: -73.9965,
  //   pais: "Estados Unidos da América",
  //   imagem: "/images/gym5.jpg",
  //   descricao:
  //     "Ginásio acessível com ambiente acolhedor, ideal para estudantes em Manhattan.",
  //   link: "https://www.planetfitness.com/",
  // },
  // {
  //   id: 21,
  //   nome: "St. Patrick's Cathedral",
  //   tipo: "Igreja",
  //   localizacao: "Nova Iorque, EUA",
  //   lat: 40.7585,
  //   lng: -73.976,
  //   pais: "Estados Unidos da América",
  //   imagem: "/images/church5.jpg",
  //   descricao:
  //     "Catedral histórica em Manhattan, local perfeito para momentos de reflexão.",
  //   link: "https://saintpatrickscathedral.org/",
  // },

  // // 🇬🇧 Reino Unido
  // {
  //   id: 22,
  //   nome: "Manchester Sport Complex",
  //   tipo: "Desporto",
  //   localizacao: "Manchester, Reino Unido",
  //   lat: 53.4809,
  //   lng: -2.2374,
  //   pais: "Reino Unido",
  //   imagem: "/images/sports5.jpg",
  //   descricao:
  //     "Complexo desportivo moderno que oferece modalidades como futebol, ténis e squash.",
  //   link: "https://www.manchester.ac.uk/",
  // },
  // {
  //   id: 23,
  //   nome: "Kaffeine Coffee",
  //   tipo: "Café",
  //   localizacao: "Londres, Reino Unido",
  //   lat: 51.516,
  //   lng: -0.138,
  //   pais: "Reino Unido",
  //   imagem: "/images/cafe6.jpg",
  //   descricao:
  //     "Café popular em Londres, ideal para encontros entre estudantes e freelancers.",
  //   link: "https://kaffeine.co.uk/",
  // },
  // {
  //   id: 24,
  //   nome: "PureGym London Central",
  //   tipo: "Ginásio",
  //   localizacao: "Londres, Reino Unido",
  //   lat: 51.512,
  //   lng: -0.125,
  //   pais: "Reino Unido",
  //   imagem: "/images/gym6.jpg",
  //   descricao:
  //     "Ginásio com planos acessíveis e aulas variadas, perfeito para manter a forma.",
  //   link: "https://www.puregym.com/",
  // },
  // {
  //   id: 25,
  //   nome: "Westminster Abbey",
  //   tipo: "Igreja",
  //   localizacao: "Londres, Reino Unido",
  //   lat: 51.4993,
  //   lng: -0.1273,
  //   pais: "Reino Unido",
  //   imagem: "/images/church6.jpg",
  //   descricao:
  //     "Igreja icónica de Londres, conhecida pela sua arquitetura e eventos culturais.",
  //   link: "https://www.westminster-abbey.org/",
  // },

//   // india
  
];
