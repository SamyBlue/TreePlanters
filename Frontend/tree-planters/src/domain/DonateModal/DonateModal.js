import React from 'react';
import Modal from '../../components/Modal';
import Form from '../../components/Forms/Form';
import FormSubmit from '../../components/Forms/FormSubmit';

const Donate = ({ open, closeDonateModal }) => {
	const [formFields, setFormFields] = React.useState({
		'Donate Amount (£)': '',
		'Voucher*': '',
		'Postal Code': '',
	});

	return (
		<Modal open={open} closeModal={closeDonateModal}>
			<h2>Thanks for your contribution</h2>
			<Form formFields={formFields} setFormFields={setFormFields} />
			<FormSubmit
				label='Send'
				attemptSubmitMsg='Sending...'
				failedSubmitMsg="Some of your information isn't correct. Please try again."
				color='#2e963a'
			/>
		</Modal>
	);
};

export default Donate;
