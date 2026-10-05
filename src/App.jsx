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
import GallerySection from './components/GallerySection';
import StorySection from './components/StorySection';
import RsvpSection from './components/RsvpSection';
import ClosingSection from './components/ClosingSection';

export default function App() {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <div className="wedding-app-root">
      {/* Initial Minimal Opening Animation */}
      <OpeningAnimation onComplete={() => setIntroFinished(true)} />

      {/* Ambient Floating Particles */}
      <ParticlesCanvas />

      {/* Floating Elements */}
      <FloatingNav />
      <MusicPlayer />

      {/* Main Page Content Flow */}
      <main>
        <HeroSection />
        <CoupleSection />
        <CountdownSection />
        <CelebrationDetails />
        <TimelineSection />
        <LocationSection />
        <GallerySection />
        <StorySection />
        <RsvpSection />
      </main>

      {/* Cinematic Finale */}
      <ClosingSection />
    </div>
  );
}
