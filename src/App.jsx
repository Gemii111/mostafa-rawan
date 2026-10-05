import React, { useState } from 'react';
import OpeningAnimation from './components/OpeningAnimation';
import ParticlesCanvas from './components/ParticlesCanvas';
import MusicPlayer from './components/MusicPlayer';
import FloatingNav from './components/FloatingNav';
import HeroSection from './components/HeroSection';
import CoupleSection from './components/CoupleSection';
import CelebrationDetails from './components/CelebrationDetails';
import CountdownSection from './components/CountdownSection';
import TimelineSection from './components/TimelineSection';
import LocationSection from './components/LocationSection';
import ClosingSection from './components/ClosingSection';

export default function App() {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <div className="wedding-app-root">
      {/* Minimal Opening Reveal */}
      <OpeningAnimation onComplete={() => setIntroFinished(true)} />

      {/* Ambient Champagne Floating Particles */}
      <ParticlesCanvas />

      {/* Floating Controls */}
      <FloatingNav />
      <MusicPlayer />

      {/* Main Essential Sections */}
      <main>
        <HeroSection />
        <CoupleSection />
        <CelebrationDetails />
        <CountdownSection />
        <TimelineSection />
        <LocationSection />
      </main>

      {/* Refined Finale */}
      <ClosingSection />
    </div>
  );
}
