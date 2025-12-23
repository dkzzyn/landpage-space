import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { HowItWorks } from './components/sections/HowItWorks';
import { ForCompanies } from './components/sections/ForCompanies';
import { ForTechnicians } from './components/sections/ForTechnicians';
import { Services } from './components/sections/Services';
import { Differentiators } from './components/sections/Differentiators';
import { Testimonials } from './components/sections/Testimonials';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg text-gray-900 dark:text-white transition-colors duration-300 font-sans">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <ForCompanies />
        <ForTechnicians />
        <Services />
        <Differentiators />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
