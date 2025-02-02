import "../CSS/components/NavigationBar.style.css";
import { EduNova } from "../assets/imports/logo.imports";
import { Link } from 'react-router-dom';

function NavigationBar() {
	return (
		<div className="navbar_container_main">
			<div className="navbar_container_logo">
				<img
					src={EduNova}
					alt="edunova logo"
					className="navbar_logo_img"
				/>
			</div>
			<div className="navbar_container_links">
				<ul className="navbar_links">
					<li className="navbar_links_item">
						<Link to="/" className="item li-links">
							Home
						</Link>
					</li>
					<li className="navbar_links_item">
						<Link to="/about" className="item li-links">
							About
						</Link>
					</li>
					<li className="navbar_links_item">
						<Link href="/" className="item li-links">
							Contact Us
						</Link>
					</li>
				</ul>
			</div>
			<div className="navbar_container_buttons">
				<button className="btn-light">Sign Up</button>
				<button className="btn-dark">Login</button>
			</div>
		</div>
	);
}

export default NavigationBar;
