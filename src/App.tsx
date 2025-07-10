import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PracticeAreas from './components/PracticeAreas';
import About from './components/AboutSection';
import Podcast from './components/ResourcesSection';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import PodcastSection from './components/PodcastSection';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <PracticeAreas />
      <About />
      <PodcastSection />
      <Podcast />
      
      <ContactForm />

      <Footer />
    </div>
  );
}

export default App;