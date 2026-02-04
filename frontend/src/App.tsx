import React, { useState } from 'react';
import Layout from './components/layout/Layout';
import Dashboard from './components/dashboard/Dashboard';
import AnalyticsPage from './components/analytics/AnalyticsPage';

function App() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'analytics'>('dashboard');

  const handleTabChange = (tab: 'dashboard' | 'analytics') => {
    setActiveTab(tab);
  };

  return (
    <Layout activeTab={activeTab} onTabChange={handleTabChange}>
      {activeTab === 'dashboard' ? <Dashboard /> : <AnalyticsPage />}
    </Layout>
  );
}

export default App;
