import React from "react";
import Modal from "../../components/Modal";
import Form from "../../components/Forms/Form";
import FormSubmit from "../../components/Forms/FormSubmit";
import donate from "../../services/paymentService";
import { useUserData } from "../../hooks/useUserData";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));

const Donate = ({ open, closeDonateModal }) => {
	const classes = useStyles();
	const [tree_type, setTreeType] = React.useState("");

	const handleChange = (event) => {
		setTreeType(event.target.value);
	};

	const [formFields, setFormFields] = React.useState({
		"Donate Amount (£)": "",
		"Voucher*": "",
	});

	const [userData, setUserData] = useUserData();

	const onSubmit = async () => {
		const tree_data = await donate(
			Number(formFields["Donate Amount (£)"]),
			tree_type,
			userData["loggedIn"] && userData["username"]
		);

		setUserData({ ...userData, trees: tree_data });

		closeDonateModal();
	};

	return (
		<Modal open={open} closeModal={closeDonateModal}>
			<div style={{ height: "50vh", width: 500,  }}>
				<h2>Thanks for your contribution</h2>
				<Form formFields={formFields} setFormFields={setFormFields} />
				<FormControl className={classes.formControl}>
					<InputLabel id="demo-simple-select-label">
						Tree Type
					</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={tree_type}
						onChange={handleChange}
					>
						<MenuItem value={"ash"}>Ash</MenuItem>
						<MenuItem value={"beech"}>Beech</MenuItem>
						<MenuItem value={"pine"}>Pine</MenuItem>
					</Select>
				</FormControl>
				<FormSubmit
					label="Send"
					attemptSubmitMsg="Sending..."
					failedSubmitMsg="Some of your information isn't correct. Please try again."
					color="#2e963a"
					onSubmit={onSubmit}
				/>
			</div>
		</Modal>
	);
};

export default Donate;
