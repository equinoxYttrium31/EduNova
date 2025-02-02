import '../CSS/pages/Homepage.style.css';
import HeroSection from '../components/HeroSection.component';

function Homepage() {
	return (
		<div className="main_container">
			<section id="hero-section">
				<HeroSection />
			</section>
		</div>
	);
}

export default Homepage;
