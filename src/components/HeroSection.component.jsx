import '../CSS/components/HeroSection.style.css';

function HeroSection() {
	return (
		<>
			<div className="hero_section_container_main">
				<div className="hero_section_text">
					<h1 className="hero_text_heading">
						Enjoy, Learn, and Achieve
					</h1>
					<p className="hero_text_subheading">
						An innovative learning platform design for modern
						education. Access interactive courses, personalized
						learning paths, and real-time analytics to boost your
						learning expirience.
					</p>
				</div>

				<div className="hero_section_container_button">
					<button className="hero_cta btn-dark-outline">
						Start Learning Now
					</button>
				</div>
			</div>
		</>
	);
}

export default HeroSection;
