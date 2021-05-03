import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { FormControl } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles((theme) => ({
	margin: {
		marginLeft: theme.spacing(3),
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
	},
	textField: {
		width: '40ch',
	},
}));

const FormInput = ({
	label,
	changesField,
	autoHides,
	formFields,
	setFormFields,
}) => {
	autoHides = autoHides === true;
	const [inputVisible, setInputVisible] = React.useState(!autoHides);

	const handleChange = (prop) => (event) => {
		setFormFields({ ...formFields, [prop]: event.target.value });
	};

	const clickToggleHideInput = () => {
		setInputVisible(!inputVisible);
	};

	const mouseDownHideInput = (event) => {
		event.preventDefault();
	};

	const showInputButton = (
		<InputAdornment position='end'>
			<IconButton
				aria-label='toggle password visibility'
				onClick={clickToggleHideInput}
				onMouseDown={mouseDownHideInput}
			>
				{inputVisible ? <Visibility /> : <VisibilityOff />}
			</IconButton>
		</InputAdornment>
	);

	const classes = useStyles();

	return (
		<FormControl className={clsx(classes.margin, classes.textField)}>
			<InputLabel
				htmlFor={
					autoHides ? 'standard-adornment-password' : 'standard-adornment'
				}
			>
				{label}
			</InputLabel>
			<Input
				id={autoHides ? 'standard-adornment-password' : 'standard-adornment'}
				type={inputVisible ? 'text' : 'password'}
				value={formFields[changesField]}
				onChange={handleChange(changesField)}
				endAdornment={autoHides && showInputButton}
			/>
		</FormControl>
	);
};

export default FormInput;
