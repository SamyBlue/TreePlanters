import React from "react";
import Form from "../../components/Forms/Form";
import FormSubmit from "../../components/Forms/FormSubmit";
import login from "../../services/loginService";
import { useUserData } from "../../hooks/useUserData";

const LoginPage = ({ closeModal }) => {
	const [userData, setUserData] = useUserData();

	const [formFields, setFormFields] = React.useState({
		Username: "",
		"Password*": "",
	});

	const onSubmit = async () => {
		const fetchData = await login(
			formFields["Username"],
			formFields["Password*"]
		).catch((error) => {
			alert(error);
			throw Error(error); //prevents below setUserData() line from executing
		}); //Remove this catch in production as it is redundant. This is used to see the error easily in development

		setUserData({
			loggedIn: true,
			username: fetchData["username"],
			user_id: fetchData["user_id"],
		});

		closeModal();
	};

	return (
		<div style={{ height: "50vh" }}>
			<h2>Welcome</h2>
			<Form formFields={formFields} setFormFields={setFormFields} />
			<FormSubmit
				label="Login"
				attemptSubmitMsg="Logging in..."
				failedSubmitMsg="Some of your information isn't correct. Please try again."
				color="#2e963a"
				onSubmit={onSubmit}
			/>
		</div>
	);
};

export default LoginPage;
