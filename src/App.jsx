import { useEffect } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { useTheme } from "./ThemeContext";
import { Layout } from "./components";

import {
  AuthPage,
  Desserts,
  Drinks,
  Feedback,
  GiftCard,
  Home,
  Menu,
} from "./pages";

import "./styles/App.css";

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <div className="app-shell">

      <Router>
          <Layout>
            <Routes>
              {/*Landing or welcome page */}
              <Route path="/" element={<Home />} />
              <Route path="" element={<Home />} />
              <Route path="*" element={<Home />} />

              {/* Menu list */}
              <Route path="/menu" element={<Menu />} />

              {/* Desserts list */}
              <Route path="/desserts" element={<Desserts />} />

              {/* Drinks list */}
              <Route path="/drinks" element={<Drinks />} />

              {/* Feedback Form */}
              <Route path="/feedback" element={<Feedback />} />

              {/* Login Form */}
              <Route path="/login" element={<AuthPage />} />

              {/* Gift Card */}
              <Route path="/giftcard" element={<GiftCard />} />

            </Routes>
          </Layout>
      </Router>
    </div>
  );
}

export default App;