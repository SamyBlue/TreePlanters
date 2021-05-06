import React from "react";
import StickyAppBar from "./components/StickyAppBar";
import DefaultDashboard from "./domain/DefaultDashboard/DefaultDashboard";
import ContentTiles from "./domain/ContentTiles/ContentTiles";
import LoginRegisterModal from "./domain/LoginRegisterModal/LoginRegisterModal";
import DonateModal from "./domain/DonateModal/DonateModal";
/* import UserDashboard from './domain/UserDashboard/UserDashboard'; */
import UserOrchard from "./domain/UserOrchard/UserOrchard";
import Title from "./domain/Title/Title";

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
    <div className="App">
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

      <UserOrchard />

      <LoginRegisterModal
        open={loginModalOpen}
        closeLoginModal={closeLoginModal}
      />

      <DonateModal open={donateModalOpen} closeDonateModal={closeDonateModal} />

      <Title />

      <DefaultDashboard openDonateModal={openDonateModal} />

      <ContentTiles />
    </div>
  );
}

export default App;
