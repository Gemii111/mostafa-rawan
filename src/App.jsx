import React, { useState } from 'react';
import EnvelopeIntro from './components/EnvelopeIntro';
import ParticlesCanvas from './components/ParticlesCanvas';
import MusicPlayer from './components/MusicPlayer';
import FloatingNav from './components/FloatingNav';
import HeroSection from './components/HeroSection';
import CountdownSection from './components/CountdownSection';
import CelebrationSection from './components/CelebrationSection';
import LocationSection from './components/LocationSection';
import ClosingSection from './components/ClosingSection';

/**
 * Mostafa & Rawan — THE WEDDING
 * Clean, non-repetitive luxury digital invitation.
 * The authentic couple artwork is the very first centerpiece at the top.
 */
export default function App() {
  const [isInvitationOpened, setIsInvitationOpened] = useState(false);

  return (
    <div className="wedding-app-root">
      {/* 3D Wax Seal Envelope Intro Screen */}
      <EnvelopeIntro onOpen={() => setIsInvitationOpened(true)} />

      {/* Subtle Floating Ambient Particles (60 FPS zero-lag) */}
      <ParticlesCanvas />

      {/* Header Controls */}
      <FloatingNav />
      <MusicPlayer />

      {/* Main Single-Flow Invitation */}
      <main>
        {/* 1. The Image & Hero Showcase (Top Centerpiece) */}
        <HeroSection />

        {/* 2. Compact Luxury Countdown */}
        <CountdownSection />

        {/* 3. The Celebration */}
        <CelebrationSection />

        {/* 4. Verified Venue & Google Maps Navigation */}
        <LocationSection />
      </main>

      {/* 5. Minimal Heartfelt Closing */}
      <ClosingSection />
    </div>
  );
}
