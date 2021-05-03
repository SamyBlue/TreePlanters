import React from 'react';
import Form from '../../components/Forms/Form';
import FormSubmit from '../../components/Forms/FormSubmit';

const RegisterPage = ({ closeModal }) => {
	const [formFields, setFormFields] = React.useState({
		Username: '',
		'Password*': '',
		'Confirm Password*': '',
		'Postal Code': '',
	});

	return (
		<div>
			<h2>Welcome</h2>
			<Form formFields={formFields} setFormFields={setFormFields} />
			<FormSubmit
				label='Register'
				attemptSubmitMsg='Registering...'
				failedSubmitMsg="Some of your information isn't correct. Please try again."
			/>
		</div>
	);
};

export default RegisterPage;
