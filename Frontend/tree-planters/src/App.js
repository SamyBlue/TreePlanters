import React from 'react';
import StickyAppBar from './components/StickyAppBar';
import DefaultDashboard from './domain/DefaultDashboard/DefaultDashboard';
import ContentTiles from './components/ContentTiles';
import LoginRegisterModal from './domain/LoginRegisterModal/LoginRegisterModal';
import DonateModal from './domain/DonateModal/DonateModal';

function App() {
	const [loginModalOpen, setLoginModalOpen] = React.useState(false);
	const [donateModalOpen, setDonateModalOpen] = React.useState(false);

	const openLoginModal = () => {
		setLoginModalOpen(true);
	};

	const closeLoginModal = () => {
		setLoginModalOpen(false);
	};

	const openDonateModal = () => {
		setDonateModalOpen(true);
	};

	const closeDonateModal = () => {
		setDonateModalOpen(false);
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

			<StickyAppBar
				openLoginModal={openLoginModal}
				openDonateModal={openDonateModal}
			/>

			<LoginRegisterModal
				open={loginModalOpen}
				closeLoginModal={closeLoginModal}
			/>

			<DonateModal open={donateModalOpen} closeDonateModal={closeDonateModal} />

			<DefaultDashboard openDonateModal={openDonateModal}/>

			<ContentTiles />
		</div>
	);
}

export default App;
