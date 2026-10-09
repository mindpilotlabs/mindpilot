import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ExecutiveOverview from './components/ExecutiveOverview';
import CurriculumExplorer from './components/CurriculumExplorer';
import StudentAILab from './components/StudentAILab';
import ImpactAnalytics from './components/ImpactAnalytics';
import PartnershipCalculator from './components/PartnershipCalculator';
import BeyondClassroom from './components/BeyondClassroom';
import ProposalModal from './components/ProposalModal';
import Footer from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [labPrompt, setLabPrompt] = useState('');
  const [isProposalModalOpen, setIsProposalModalOpen] = useState(false);
  const [proposalData, setProposalData] = useState({
    schoolName: 'Greenwood International School',
    studentCount: 150,
    planTier: 'Premier Campus Plan',
    selectedGrades: ['Grades 6–8', 'Grades 9–10']
  });

  const openProposalModal = () => setIsProposalModalOpen(true);
  const closeProposalModal = () => setIsProposalModalOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-indigo-600 selection:text-white">
      
      {/* Top Header */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        openProposalModal={openProposalModal}
      />

      {/* Main Content Area based on selected Tab */}
      <main className="flex-1">
        {activeTab === 'overview' && (
          <>
            <HeroSection 
              setActiveTab={setActiveTab} 
              openProposalModal={openProposalModal}
            />
            <ExecutiveOverview setActiveTab={setActiveTab} />
            <BeyondClassroom />
          </>
        )}

        {activeTab === 'curriculum' && (
          <CurriculumExplorer 
            setActiveTab={setActiveTab} 
            setLabPrompt={setLabPrompt}
          />
        )}

        {activeTab === 'ailab' && (
          <StudentAILab initialPrompt={labPrompt} />
        )}

        {activeTab === 'impact' && (
          <ImpactAnalytics setActiveTab={setActiveTab} />
        )}

        {activeTab === 'calculator' && (
          <PartnershipCalculator 
            openProposalModal={openProposalModal}
            setProposalData={setProposalData}
          />
        )}
      </main>

      {/* Proposal Modal Exporter */}
      <ProposalModal 
        isOpen={isProposalModalOpen}
        onClose={closeProposalModal}
        proposalData={proposalData}
      />

      {/* Footer */}
      <Footer 
        setActiveTab={setActiveTab}
        openProposalModal={openProposalModal}
      />

    </div>
  );
}
