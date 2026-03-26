import { Header } from './sections/Header';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Research } from './sections/Research';
import { Team } from './sections/Team';
import { Publications } from './sections/Publications';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Research />
        <Team />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
