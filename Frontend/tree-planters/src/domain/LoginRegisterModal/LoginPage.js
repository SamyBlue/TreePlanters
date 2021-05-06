import React from 'react';
import Form from '../../components/Forms/Form';
import FormSubmit from '../../components/Forms/FormSubmit';
import login from '../../services/loginService';
import { useUserData } from '../../hooks/useUserData';

const LoginPage = ({ closeModal }) => {
	const [userData, setUserData] = useUserData();

	const [formFields, setFormFields] = React.useState({
		Username: '',
		'Password*': '',
	});

	const onSubmit = async () => {
		const fetchData = await login(
			formFields['Username'],
			formFields['Paassword*']
		).catch((error) => {
			alert(error);
			throw Error(error);
		}); //Remove the catch in production. This is used to see the error easily in development

		setUserData({
			loggedIn: true,
			username: formFields['Username'] /* fetchData['username'], */,
			user_id: formFields['Paassword*'] /* fetchData['user_id'], */,
		});

		closeModal();
	};

	return (
		<div>
			<h2>Welcome</h2>
			<Form formFields={formFields} setFormFields={setFormFields} />
			<FormSubmit
				label='Login'
				attemptSubmitMsg='Logging in...'
				failedSubmitMsg="Some of your information isn't correct. Please try again."
				color='#2e963a'
				onSubmit={onSubmit}
			/>
		</div>
	);
};

export default LoginPage;
