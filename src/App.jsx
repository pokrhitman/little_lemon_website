import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Box, ColorModeScript } from '@chakra-ui/react';
import { Layout } from './components';
import {
  AuthPage,
  Desserts,
  Drinks,
  Feedback,
  Store,
  Home,
  Menu,
  Register,
  Account,
} from './pages';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = userData => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <>
      <ColorModeScript initialColorMode="light" />
      <Box minH="100vh" bg={['gray.50', 'gray.900']}>
        <Router>
          <Layout user={user} onLogout={handleLogout}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="" element={<Home />} />
              <Route path="*" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/desserts" element={<Desserts />} />
              <Route path="/drinks" element={<Drinks />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/store" element={<Store />} />
              <Route path="/login" element={<AuthPage onLogin={handleLogin} />} />
              <Route path="/register" element={<Register onRegister={handleLogin} />} />
              <Route path="/account" element={<Account user={user} onLogout={handleLogout} />} />
            </Routes>
          </Layout>
        </Router>
      </Box>
    </>
  );
}

export default App;
