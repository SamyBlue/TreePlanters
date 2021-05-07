import React from "react";
import Form from "../../components/Forms/Form";
import FormSubmit from "../../components/Forms/FormSubmit";
import login from "../../services/loginService";
import register from "../../services/registerService";
import { useUserData } from "../../hooks/useUserData";

const RegisterPage = ({ closeModal }) => {
	const [userData, setUserData] = useUserData();

	const [formFields, setFormFields] = React.useState({
		Username: "",
		"Password*": "",
		"Confirm Password*": "",
		Email: "",
	});

	const onSubmit = async () => {
		if (formFields["Password*"] !== formFields["Confirm Password*"]) {
			alert("Password and Confirm Password do not match");
			throw Error("Password and Confirm Password do not match");
		}

		await register(
			formFields["Username"],
			formFields["Password*"],
			formFields["Email"]
		);

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
				label="Register"
				attemptSubmitMsg="Registering..."
				failedSubmitMsg="Some of your information isn't correct. Please try again."
				color="#22B4CF"
				onSubmit={onSubmit}
			/>
		</div>
	);
};

export default RegisterPage;
