import '../CSS/components/NotFound.style.css';
import { not_found_logo } from '../assets/imports/logo.imports';
import { Link } from 'react-router-dom';

function NotFound() {
	return (
		<div className="not_container_found">
			<div className="not_found_container_image">
				<img
					src={not_found_logo}
					alt="box without content"
					className="not_found_image"
				/>
			</div>
			<div className="not_found_container_text">
				<h1 className="not_found_text">Page Not Found.</h1>
				<Link to="/">
					<button className="btn-dark back">Back to Home</button>
				</Link>
			</div>
		</div>
	);
}

export default NotFound;
