import React from 'react';
import FormInput from './FormInput';

/* Example usage (works by converting formFields into multiple FormInputs)
    
const [formFields, setFormFields] = useState({
	"Username": '',
    "Password*": '',		//add a * to end if contains sensitive information
	"Postal Code": '',
	...
})

<Form formFields=formFields setFormFields=setFormFields>

<FormSubmit label='Login' onSubmit=onSubmit attemptSubmitMsg='Logging in...' failedSubmitMsg='Please try again."" />
*/

const Form = ({ formFields, setFormFields }) => {
	return (
		<div>
			{Object.keys(formFields).map((field) => {
				const label = field.slice(-1) === '*' ? field.slice(0, -1) : field;
				return (
					<FormInput
						label={label}
						changesField={field}
						formFields={formFields}
						setFormFields={setFormFields}
						autoHides={field.slice(-1) === '*'}
					/>
				);
			})}
		</div>
	);
};

export default Form;
