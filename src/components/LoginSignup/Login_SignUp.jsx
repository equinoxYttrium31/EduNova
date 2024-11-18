import "./Login_SignUp.css";
import { Gamepad } from "../../assets/JSX imports/backgrounds";

export default function Login_SignUp() {
  return (
    <div className="main_container_login">
      <div className="main_container_login_signup">
        <div className="image_container_login">
          <img src={Gamepad} alt="Side_image" className="side_image" />
        </div>
        <div className="forms_container">
          <div className="login_container">
            <div className="header_login">
              <h1 className="header_title">Sign In</h1>
              <p className="introduction_text">
                <strong>Welcome Back to EduNova!</strong> Please log in to
                continue accessing your personalized learning experience.
              </p>
            </div>
            <div className="form_container">
              <form className="login_form">
                <div className="form_group">
                  <input
                    type="email"
                    placeholder="Username"
                    className="form_input"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="form_input"
                  />
                  <button className="Login_btn">Login</button>
                </div>
              </form>
              <div className="footer_form">
                <p className="no_account">Don&apos;t have an Account?</p>
                <a href="" className="link_to_signup">
                  SignUp
                </a>
              </div>
            </div>
          </div>
          <div className="signup_container">
            <div className="header_login">
              <h1 className="header_title">Sign Up</h1>
              <p className="introduction_text">
                <strong>Welcome to EduNova!</strong> Create an account to start
                exploring educational games and quizzes.
              </p>
            </div>
            <div className="form_container">
              <form className="signup_form">
                <div className="form_group">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    className="form_input"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form_input"
                    required
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form_input"
                    required
                  />
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className="form_input"
                    required
                  />
                  <div className="role_selection">
                    <label>
                      <input type="radio" name="role" value="student" />
                      Student
                    </label>
                    <label>
                      <input type="radio" name="role" value="teacher" />
                      Teacher
                    </label>
                  </div>
                  <div className="terms_container">
                    <label>
                      <input type="checkbox" required />I agree to the{" "}
                      <a href="/terms">terms and conditions</a>.
                    </label>
                  </div>
                  <button type="submit" className="Login_btn">
                    Sign Up
                  </button>
                </div>
              </form>
              <div className="footer_form">
                <p className="no_account">Already have an Account?</p>
                <a href="" className="link_to_signup">
                  SignIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
