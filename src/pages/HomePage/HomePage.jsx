import Navigation_Bar from "../../components/navigation_bar/navigation_bar";
import Hero from "../../components/hero_section/Hero";
import "./HomePage.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login_SignUp from "../../components/LoginSignup/Login_SignUp";

export default function HomePage() {
  return (
    <Router>
      <div className="homepage_main_container">
        {/**This will be the Parent Component */}
        <div className="header">
          <Navigation_Bar />
        </div>
        <div className="landing_page">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/login" element={<Login_SignUp />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
