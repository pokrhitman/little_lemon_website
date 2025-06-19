import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Box, ColorModeScript } from '@chakra-ui/react';
import { Layout } from './components';
import { AuthPage, Desserts, Drinks, Feedback, Store, Home, Menu } from './pages';

function App() {
  return (
    <>
      <ColorModeScript initialColorMode="light" />
      <Box minH="100vh" bg={['gray.50', 'gray.900']}>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="" element={<Home />} />
              <Route path="*" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/desserts" element={<Desserts />} />
              <Route path="/drinks" element={<Drinks />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/login" element={<AuthPage />} />
              <Route path="/store" element={<Store />} />
            </Routes>
          </Layout>
        </Router>
      </Box>
    </>
  );
}

export default App;
