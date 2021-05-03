import React from 'react';
import StickyAppBar from './components/StickyAppBar';
import DefaultDashboard from './domain/DefaultDashboard/DefaultDashboard';
import ContentTiles from './components/ContentTiles';
import LoginRegisterModal from './domain/LoginRegisterModal/LoginRegisterModal'

function App() {

	const [loginPopupOpen, setLoginPopupOpen] = React.useState(false);

	const openLoginPopup = () => {
		setLoginPopupOpen(true);
	};

	const closeLoginPopup = () => {
		setLoginPopupOpen(false);
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

			<LoginRegisterModal />

			<DefaultDashboard />

			<ContentTiles />
		</div>
	);
}

export default App;
