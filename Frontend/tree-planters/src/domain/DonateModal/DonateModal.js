import React from "react";
import Modal from "../../components/Modal";
import Form from "../../components/Forms/Form";
import FormSubmit from "../../components/Forms/FormSubmit";
import donate from "../../services/paymentService";
import { useUserData } from "../../hooks/useUserData";

const Donate = ({ open, closeDonateModal }) => {
  const [formFields, setFormFields] = React.useState({
    "Donate Amount (£)": "",
    "Voucher*": "",
  });

  const [userData, setUserData] = useUserData();

  const onSubmit = async () => {
    const data = await donate(Number(formFields["Donate Amount (£)"])).catch((error) => {
		alert(error);
		throw Error(error); //prevents below setUserData() line from executing
	  }); //Remove this catch in production as it is redundant. This is used to see the error easily in development

    closeDonateModal();
  };

  return (
    <Modal open={open} closeModal={closeDonateModal}>
      <h2>Thanks for your contribution</h2>
      <Form formFields={formFields} setFormFields={setFormFields} />
      <FormSubmit
        label="Send"
        attemptSubmitMsg="Sending..."
        failedSubmitMsg="Some of your information isn't correct. Please try again."
        color="#2e963a"
        onSubmit={onSubmit}
      />
    </Modal>
  );
};

export default Donate;
