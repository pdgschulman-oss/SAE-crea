
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Catalog from './components/Catalog';
import AuditSection from './components/AuditSection';
import About from './components/About';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    // Basic reveal animation logic could go here
    console.log("FreeBoost App Mounted");
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Catalog />
        <AuditSection />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default App;
