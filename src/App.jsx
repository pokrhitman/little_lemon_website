import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from './components';
import { Login, Desserts, Drinks, Feedback, Store, Home, Menu, Register, Account } from './pages';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = userData => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Router basename="/little_lemon_website">
        <Layout user={user} onLogout={handleLogout}>
          <main className="flex-1 flex flex-col items-center justify-center">
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
            </Routes>
          </main>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
