import React from "react";
import StickyAppBar from "./components/StickyAppBar";
import DefaultDashboard from "./domain/DefaultDashboard/DefaultDashboard";
import ContentTiles from "./domain/ContentTiles/ContentTiles";
import LoginRegisterModal from "./domain/LoginRegisterModal/LoginRegisterModal";
import DonateModal from "./domain/DonateModal/DonateModal";
/* import UserDashboard from './domain/UserDashboard/UserDashboard'; */
import UserOrchard from "./domain/UserOrchard/UserOrchard";
import Title from "./domain/Title/Title";
import { UserDataProvider } from "./hooks/useUserData";
import LeaderboardModal from "./domain/LeaderboardModal/LeaderboardModal";
import About from "./domain/About/About";
import Footer from "./components/Footer";
import OurPartners from "./domain/OurPartners/OurPartners";

function App() {
	const [loginModalOpen, setLoginModalOpen] = React.useState(false);
	const [donateModalOpen, setDonateModalOpen] = React.useState(false);
	const [LeaderboardModalOpen, setLeaderboardModalOpen] = React.useState(
		false
	);

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

	const openLeaderboardModal = () => {
		setLeaderboardModalOpen(true);
	};

	const closeLeaderboardModal = () => {
		setLeaderboardModalOpen(false);
	};

	return (
		<div className="App">
			<UserDataProvider>
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
					openLeaderboardModal={openLeaderboardModal}
				/>
				<LeaderboardModal
					open={LeaderboardModalOpen}
					closeLeaderboardModal={closeLeaderboardModal}
				/>
				<LoginRegisterModal
					open={loginModalOpen}
					closeLoginModal={closeLoginModal}
				/>
				<DonateModal
					open={donateModalOpen}
					closeDonateModal={closeDonateModal}
				/>
				<Title />
				<UserOrchard />
				<DefaultDashboard openDonateModal={openDonateModal} />
				<OurPartners />
				<ContentTiles />
				<About />
				<Footer />
			</UserDataProvider>
		</div>
	);
}

export default App;
