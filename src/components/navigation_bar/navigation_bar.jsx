import { EduNova } from "../../assets/JSX imports/logo";
import { Link, useNavigate } from "react-router-dom";
import "./navigation_bar.css";

export default function Navigation_Bar() {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/login");
  };

  return (
    <div className="navigation_main_container">
      <div className="navigation_container">
        <div className="logo_container">
          <img src={EduNova} alt="Logo" className="logo_img" />
          <h2 className="logo_name_text">EduNova</h2>
        </div>

        <div className="navigations_content">
          <div className="navigation_controls_container">
            <ul className="navigation_controls">
              <Link to="/" className="navigation_links">
                <li>Home</li>
              </Link>
              <Link to="/about" className="navigation_links">
                <li>About</li>
              </Link>
              <Link to="/contact-us" className="navigation_links">
                <li>Contact Us</li>
              </Link>
            </ul>
          </div>

          <div className="navigation_buttons">
            <button className="navigation_button signUp">Sign Up</button>
            <button onClick={handleSignIn} className="navigation_button signIn">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
