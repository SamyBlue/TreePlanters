import React from 'react';
import StickyAppBar from './components/StickyAppBar';
import DefaultDashboard from './domain/DefaultDashboard/DefaultDashboard';
import ContentTiles from './components/ContentTiles';

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

			<StickyAppBar />

			<DefaultDashboard />

			<ContentTiles />
		</div>
	);
}

export default App;
