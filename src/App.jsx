import { useEffect } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { useTheme } from "./ThemeContext";
import {
  Desserts,
  Drinks,
  Feedback,
  GiftCard,
  Home,
  Login,
  Menu,
  SignUp
} from "./pages";
import "./styles/App.css";

import LittleLemonFooter from "./components/LittleLemonFooter";
import Navbar from "./components/Navbar";


function App() {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <div className="app-shell">
      <Router>
        {/*Navbar appears on every page */}
        <Navbar />

        {/*Main content switches based on route */}
        <main>
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
            <Route path="/login" element={<Login />} />

            {/* Sign up Form */}
            <Route path="/signup" element={<SignUp />} />

            {/* Gift Card */}
            <Route path="/giftcard" element={<GiftCard />} />

          </Routes>
        </main>

        <LittleLemonFooter />
      </Router>
    </div>
  );
}

export default App;