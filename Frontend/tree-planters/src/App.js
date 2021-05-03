import React from 'react';
import StickyAppBar from './components/StickyAppBar';
import DefaultDashboard from './domain/DefaultDashboard/DefaultDashboard';
import ContentTiles from './components/ContentTiles';
import UserDashboard from './domain/UserDashboard/UserDashboard';
import UserOrchard from './domain/UserOrchard/UserOrchard';

function App() {
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
{/* 
			<StickyAppBar />

			<DefaultDashboard /> */}

			{/* <UserDashboard /> */}

			{/* <ContentTiles /> */}
			<UserOrchard />
		</div>
	);
}

export default App;
