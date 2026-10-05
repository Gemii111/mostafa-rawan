import React, { useState } from 'react';
import OpeningAnimation from './components/OpeningAnimation';
import ParticlesCanvas from './components/ParticlesCanvas';
import MusicPlayer from './components/MusicPlayer';
import FloatingNav from './components/FloatingNav';
import HeroSection from './components/HeroSection';
import CoupleSection from './components/CoupleSection';
import CountdownSection from './components/CountdownSection';
import CelebrationDetails from './components/CelebrationDetails';
import TimelineSection from './components/TimelineSection';
import LocationSection from './components/LocationSection';
import StorySection from './components/StorySection';
import ClosingSection from './components/ClosingSection';

export default function App() {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <div className="wedding-app-root">
      {/* Initial Minimal Opening Animation */}
      <OpeningAnimation onComplete={() => setIntroFinished(true)} />

      {/* Ambient Floating Particles */}
      <ParticlesCanvas />

      {/* Floating Controls */}
      <FloatingNav />
      <MusicPlayer />

      {/* Main Invitation Content Flow */}
      <main>
        <HeroSection />
        <CoupleSection />
        <CountdownSection />
        <CelebrationDetails />
        <TimelineSection />
        <LocationSection />
        <StorySection />
      </main>

      {/* Cinematic Finale */}
      <ClosingSection />
    </div>
  );
}
