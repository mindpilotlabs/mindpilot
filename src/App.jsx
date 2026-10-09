import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutProgram from './components/AboutProgram';
import CurriculumExplorer from './components/CurriculumExplorer';
import SchoolPartnerships from './components/SchoolPartnerships';
import StudentAILab from './components/StudentAILab';
import TeachersParents from './components/TeachersParents';
import ImpactAnalytics from './components/ImpactAnalytics';
import ResponsibleAIPage from './components/ResponsibleAIPage';
import FAQSection from './components/FAQSection';
import ContactPage from './components/ContactPage';
import ResourcesPage from './components/ResourcesPage';
import ProposalModal from './components/ProposalModal';
import Footer from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
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
      
      {/* Top Sticky Header */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        openProposalModal={openProposalModal}
      />

      {/* Main Content Router */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HeroSection 
            setActiveTab={setActiveTab} 
            openProposalModal={openProposalModal}
          />
        )}

        {activeTab === 'program' && (
          <AboutProgram 
            setActiveTab={setActiveTab} 
          />
        )}

        {activeTab === 'curriculum' && (
          <CurriculumExplorer 
            setActiveTab={setActiveTab} 
            setLabPrompt={setLabPrompt}
          />
        )}

        {activeTab === 'schools' && (
          <SchoolPartnerships 
            setActiveTab={setActiveTab} 
            openProposalModal={openProposalModal}
          />
        )}

        {activeTab === 'students' && (
          <StudentAILab 
            initialPrompt={labPrompt} 
          />
        )}

        {activeTab === 'teachers-parents' && (
          <TeachersParents 
            setActiveTab={setActiveTab} 
          />
        )}

        {activeTab === 'impact' && (
          <ImpactAnalytics 
            setActiveTab={setActiveTab} 
          />
        )}

        {activeTab === 'responsible-ai' && (
          <ResponsibleAIPage 
            setActiveTab={setActiveTab} 
          />
        )}

        {activeTab === 'faq' && (
          <FAQSection 
            setActiveTab={setActiveTab} 
          />
        )}

        {activeTab === 'contact' && (
          <ContactPage />
        )}

        {activeTab === 'resources' && (
          <ResourcesPage 
            setActiveTab={setActiveTab} 
          />
        )}
      </main>

      {/* Proposal Scope Modal */}
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
