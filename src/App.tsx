import React from 'react';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <AnimatePresence mode="wait">
      <Layout>
        <HomePage />
      </Layout>
    </AnimatePresence>
  );
}

export default App;