import React from 'react';
import Form from '../../components/Forms/Form';
import FormSubmit from '../../components/Forms/FormSubmit';

const LoginPage = ({closeModal}) => {
	const [formFields, setFormFields] = React.useState({
		Username: '',
		'Password*': '',
	});

	return (
		<div>
			<h2>Welcome</h2>
			<Form formFields={formFields} setFormFields={setFormFields} />
			<FormSubmit
				label='Login'
				attemptSubmitMsg='Logging in...'
				failedSubmitMsg="Some of your information isn't correct. Please try again."
			/>
		</div>
	);
};

export default LoginPage;
