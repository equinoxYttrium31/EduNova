import Navigation_Bar from "../../components/navigation_bar/navigation_bar";
import "./HomePage.css";
export default function HomePage() {
  return (
    <div className="homepage_main_container">
      {/**This will be the Parent Component */}
      <div className="header">
        <Navigation_Bar />
      </div>
      <div className="landing_page">Landing Page</div>
    </div>
  );
}
