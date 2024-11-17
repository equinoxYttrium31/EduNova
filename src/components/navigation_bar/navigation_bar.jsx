import { EduNova } from "../../assets/JSX imports/logo";
import "./navigation_bar.css";

export default function Navigation_Bar() {
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
              <li className="navigation_links">Homepage</li>
              <li className="navigation_links">About Us</li>
              <li className="navigation_links">Contact Us</li>
            </ul>
          </div>

          <div className="navigation_buttons">
            <button className="navigation_button signUp">Sign Up</button>
            <button className="navigation_button signIn">Sign In</button>
          </div>
        </div>
      </div>
    </div>
  );
}
