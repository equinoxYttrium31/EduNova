import "../CSS/pages/Homepage.style.css";
import NavigationBar from "../components/NavigationBar.components";

function Homepage() {
	return (
		<div className="main_container">
			{/**This will be the rootpage */}
			<section id="main_navigation_bar">
				<NavigationBar />
			</section>
		</div>
	);
}

export default Homepage;
