import { Header } from './sections/Header';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Research } from './sections/Research';
import { TeamHome } from './sections/TeamHome';
import { Team } from './sections/Team';
import { Publications } from './sections/Publications';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

function App() {
  const isTeamPage = window.location.pathname === '/equipe';

  if (isTeamPage) {
    return (
      <div className="min-h-screen bg-slate-950">
        <Header />
        <Team />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <Hero />
        <About />
        <Research />
        <TeamHome />
        <Publications />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
