import React from 'react';
import FormInput from './FormInput';

/* Example usage (works by converting formFields into multiple FormInputs)
    
const [formFields, setFormFields] = useState({
	"Username": '',
    "Password": {field: '', autoHides : true},
	"Postal Code": '',
	...
})

<Form formFields=formFields setFormFields=setFormFields>

<FormSubmit label='Login' onSubmit=onSubmit attemptSubmitMsg='Logging in...' failedSubmitMsg='Please try again."" />
*/

const Form = ({ formFields, setFormFields }) => {
	return (
		<div>
			{/* <FormInput
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
				<FormSubmit label='Login' /> */}
			{Object.keys(formFields).map((field) => {
				return ;
			})}
		</div>
	);
};

export default Form;
