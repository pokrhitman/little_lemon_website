import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/LittleLemonFooter";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import MenuDetail from "./pages/MenuDetail";
import Desserts from "./pages/Desserts";
import DessertDetail from "./pages/DessertDetail";
import Drinks from "./pages/Drinks";
import Feedback from "./pages/Feedback";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

import "./styles/App.css";

function App() {

  return (
    <Router>
      {/*Navbar appears on every page */}
      <Navbar />

      {/*Main content switches based on route */}
      <main>
        <Routes>
          {/*Landing or welcome page */}
          <Route path="/" element={<Home />} />

          {/* Menu list */}
          <Route path="/menu" element={<Menu />} />

          {/* Single Menu details */}
          <Route path="/menu/:id" element={<MenuDetail />} />

          {/* Desserts list */}
          <Route path="/desserts" element={<Desserts />} />

          {/* Single dessert details (optional, dynamic route) */}
          <Route path="/desserts/:id" element={<DessertDetail />} />

          {/* Drinks list */}
          <Route path="/drinks" element={<Drinks />} />

          {/* Feedback Form */}
          <Route path="/feedback" element={<Feedback />} />

          {/* Login Form */}
          <Route path="/login" element={<Login />} />

          {/* Sign up Form */}
          <Route path="/signup" element={<SignUp />} />
     
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;