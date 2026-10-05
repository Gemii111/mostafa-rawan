import React from 'react';
import ParticlesCanvas from './components/ParticlesCanvas';
import MusicPlayer from './components/MusicPlayer';
import FloatingNav from './components/FloatingNav';
import HeroSection from './components/HeroSection';
import CountdownSection from './components/CountdownSection';
import TimelineSection from './components/TimelineSection';
import LocationSection from './components/LocationSection';
import ClosingSection from './components/ClosingSection';

/**
 * Mostafa & Rawan — THE WEDDING
 * Clean, non-repetitive luxury digital invitation.
 * The authentic couple artwork is the very first centerpiece at the top.
 */
export default function App() {
  return (
    <div className="wedding-app-root">
      {/* Subtle Floating Ambient Particles */}
      <ParticlesCanvas />

      {/* Floating Controls */}
      <FloatingNav />
      <MusicPlayer />

      {/* Main Single-Flow Invitation */}
      <main>
        {/* 1. The Image & Hero Showcase (Top Centerpiece) */}
        <HeroSection />

        {/* 2. Compact Luxury Countdown */}
        <CountdownSection />

        {/* 3. Streamlined 5-Step Timeline */}
        <TimelineSection />

        {/* 4. Verified Venue & Google Maps Navigation */}
        <LocationSection />
      </main>

      {/* 5. Minimal Heartfelt Closing */}
      <ClosingSection />
    </div>
  );
}
