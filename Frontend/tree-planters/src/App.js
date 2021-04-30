import StickyAppBar from './components/StickyAppBar';
import DefaultDashboard from './domain/DefaultDashboard/DefaultDashboard';

function App() {
	return (
		<div className='App'>
			{/* Main app 
      <StickyAppBar />
      
      <UserDashboard />*
>
      <DefaultDashboard />
      
      <ContentTiles />

      <About />

      <Footer />*Uses accordion.js
      */}

			<StickyAppBar />

			<DefaultDashboard />
		</div>
	);
}

export default App;
