import React from 'react';
import StickyAppBar from './components/StickyAppBar';
import DefaultDashboard from './domain/DefaultDashboard/DefaultDashboard';
import ContentTiles from './components/ContentTiles';
import LoginRegisterModal from './domain/LoginRegisterModal/LoginRegisterModal';

function App() {
	const [loginModalOpen, setLoginModalOpen] = React.useState(true); //false

	const openLoginModal = () => {
		setLoginModalOpen(true);
	};

	const closeLoginModal = () => {
		setLoginModalOpen(false);
	};

	return (
		<div className='App'>
			{/* Main app 
			<StickyAppBar />
			
			<UserDashboard />*

			<DefaultDashboard />
			
			<ContentTiles />

			<About />

			<Footer />*Uses accordion.js
			*/}

			<StickyAppBar />

			<LoginRegisterModal
				open={loginModalOpen}
				closeLoginModal={closeLoginModal}
			/>

			<DefaultDashboard />

			<ContentTiles />
		</div>
	);
}

export default App;
