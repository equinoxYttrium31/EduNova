import NavigationBar from '../components/NavigationBar.components';
import Homepage from '../pages/homepage.pages';
import About from '../pages/About.pages';
import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<div className="EduNova_Container">
			{/**This will be the rootpage */}
			<section id="main_navigation_bar">
				<NavigationBar />
			</section>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</div>
	);
}

export default App;
