import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl } from '@material-ui/core';
import Button from '../Button';

const useStyles = makeStyles((theme) => ({
	margin: {
		marginLeft: theme.spacing(3),
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
	},
	textField: {
		width: '40ch',
	},
	button: {
		margin: theme.spacing(2),
	},
}));

const FormSubmit = ({
	label,
	onSubmit,
	attemptSubmitMsg,
	failedSubmitMsg,
	color,
}) => {
	const [retrySubmit, setRetrySubmit] = React.useState(false);
	const [attemptingSubmit, setAttemptingSubmit] = React.useState(false);

	//wrap onSubmit with retry and attempting logic

	const onClick = () => {
		setAttemptingSubmit(true);
		try {
			onSubmit();
		} catch {
			setRetrySubmit(true);
		}
		setAttemptingSubmit(false);
	};

	const classes = useStyles();

	return (
		<div>
			<FormControl className={clsx(classes.margin, classes.textField)}>
				<Button color={color} className={classes.button} onClick={onClick}>
					{attemptingSubmit ? attemptSubmitMsg : label}
				</Button>
			</FormControl>

			{retrySubmit && <p style={{ color: 'red' }}>{failedSubmitMsg}</p>}
		</div>
	);
};

export default FormSubmit;
