import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HackathonsSection } from './components/HackathonsSection';
import { ConstitutionViewer } from './components/ConstitutionViewer';
import { SignupForm } from './components/SignupForm';
import { DevPortal } from './components/DevPortal';
import { Footer } from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('overview');

  return (
    <div className="min-h-screen flex flex-col bg-[#17171d] text-white font-sans selection:bg-[#ec3750] selection:text-white">
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <main className="flex-1">
        {activeTab === 'overview' && (
          <>
            <Hero setActiveTab={setActiveTab} />
            <HackathonsSection setActiveTab={setActiveTab} />
            <SignupForm />
            <ConstitutionViewer />
          </>
        )}

        {activeTab === 'hackathons' && <HackathonsSection setActiveTab={setActiveTab} />}

        {activeTab === 'constitution' && <ConstitutionViewer />}

        {activeTab === 'signup' && <SignupForm />}

        {activeTab === 'devportal' && <DevPortal />}
      </main>

      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}
