import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from './components';
import {
  Login,
  Desserts,
  Drinks,
  Feedback,
  Store,
  Home,
  Menu,
  Register,
  Account,
  Accessibility,
} from './pages';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = userData => setUser(userData);
  const handleLogout = () => setUser(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Router basename="/little_lemon_website">
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
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/register" element={<Register onRegister={handleLogin} />} />
            <Route path="/account" element={<Account user={user} onLogout={handleLogout} />} />
            <Route path="/accessibility" element={<Accessibility />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
