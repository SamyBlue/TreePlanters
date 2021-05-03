import React from 'react';
import StickyAppBar from './components/StickyAppBar';
import DefaultDashboard from './domain/DefaultDashboard/DefaultDashboard';
//temp
import Form from './components/Forms/Form';
import FormInput from './components/Forms/FormInput';
import FormSubmit from './components/Forms/FormSubmit';

function App() {
	const [formFields, setFormFields] = React.useState({
		username: '',
		password: '',
	});

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

			<Form formFields={formFields} setFormFields={setFormFields}>
				<h2>Welcome</h2>
				<FormInput
					label='Username'
					changesField='username'
					formFields={formFields}
					setFormFields={setFormFields}
				/>
				<FormInput
					label='Password'
					changesField='password'
					autoHides={true}
					formFields={formFields}
					setFormFields={setFormFields}
				/>
				<FormSubmit label='Login' />
			</Form>
		</div>
	);
}

export default App;
