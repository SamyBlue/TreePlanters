// import React from 'react';
// import clsx from 'clsx';
// import { makeStyles } from '@material-ui/core/styles';
// import IconButton from '@material-ui/core/IconButton';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import { FormControl, FormControlLabel } from '@material-ui/core';
// import Visibility from '@material-ui/icons/Visibility';
// import VisibilityOff from '@material-ui/icons/VisibilityOff';
// import { Button, Checkbox } from '@material-ui/core';
// import SendIcon from '@material-ui/icons/Send';

// const useStyles = makeStyles((theme) => ({
// 	root: {
// 		display: 'flex',
// 		flexWrap: 'wrap',
// 	},
// 	margin: {
// 		marginLeft: theme.spacing(3),
// 		marginTop: theme.spacing(1),
// 		marginBottom: theme.spacing(1),
// 	},
// 	textField: {
// 		width: '40ch',
// 	},
// 	button: {
// 		margin: theme.spacing(2),
// 	},
// }));

// export default function Forms({
// 	closeLoginPopup,
// 	userState,
// 	setUserState,
// }) {
// 	const [values, setValues] = React.useState({
// 		username: '',
// 		password: '',
// 		showPassword: false,
// 		isCustomer: true,
// 	});
// 	const [retryLogin, setRetryLogin] = React.useState(false);
// 	const [attemptingLogin, setAttemptingLogin] = React.useState(false);

// 	const handleChange = (prop) => (event) => {
// 		setValues({ ...values, [prop]: event.target.value });
// 	};

// 	const handleClickShowPassword = () => {
// 		setValues({ ...values, showPassword: !values.showPassword });
// 	};

// 	const handleMouseDownPassword = (event) => {
// 		event.preventDefault();
// 	};

// 	const showPasswordButton = (
// 		<InputAdornment position="end">
// 			<IconButton
// 				aria-label="toggle password visibility"
// 				onClick={handleClickShowPassword}
// 				onMouseDown={handleMouseDownPassword}
// 			>
// 				{values.showPassword ? <Visibility /> : <VisibilityOff />}
// 			</IconButton>
// 		</InputAdornment>
// 	);

// 	const classes = useStyles();

// 	return (
// 		<div className={classes.root}>
// 			<div>
// 				<h2>Welcome</h2>

// 				<FormControl className={clsx(classes.margin, classes.textField)}>
// 					{/* Username */}
// 					<InputLabel htmlFor="standard-adornment">Username</InputLabel>
// 					<Input
// 						id="standard-adornment"
// 						value={values.username}
// 						onChange={handleChange('username')}
// 					/>
// 				</FormControl>

// 				<FormControl className={clsx(classes.margin, classes.textField)}>
// 					{/* Password */}
// 					<InputLabel htmlFor="standard-adornment-password">
// 						Password
// 					</InputLabel>
// 					<Input
// 						id="standard-adornment-password"
// 						type={values.showPassword ? 'text' : 'password'}
// 						value={values.password}
// 						onChange={handleChange('password')}
// 						endAdornment={showPasswordButton}
// 					/>
// 				</FormControl>

// 				<h2>Are you a customer or volunteer?</h2>

// 				<FormControlLabel
// 					label="Customer"
// 					className={clsx(classes.margin)}
// 					control={
// 						<Checkbox
// 							checked={values.isCustomer}
// 							onChange={(_, checked) =>
// 								setValues({ ...values, isCustomer: checked })
// 							}
// 							name="checkedB"
// 							color="primary"
// 						/>
// 					}
// 				/>

// 				<FormControlLabel
// 					label="Volunteer"
// 					className={clsx(classes.margin)}
// 					control={
// 						<Checkbox
// 							checked={!values.isCustomer}
// 							onChange={(_, checked) =>
// 								setValues({ ...values, isCustomer: !checked })
// 							}
// 							name="checkedB"
// 							color="primary"
// 						/>
// 					}
// 				/>

// 				<FormControl className={clsx(classes.margin, classes.textField)}>
// 					{/* Sign In Button*/}
// 					<Button
// 						variant="contained"
// 						style={{ backgroundColor: 'green' }}
// 						className={classes.button}
// 						endIcon={<SendIcon />}
// 						onClick={onSubmit}
// 					>
// 						{attemptingLogin ? 'Logging in...' : 'Sign In'}
// 					</Button>
// 				</FormControl>

// 				{retryLogin && (
// 					<p style={{ color: 'red' }}>
// 						Some of your information isn't correct. Please try again.
// 					</p>
// 				)}
// 			</div>
// 		</div>
// 	);
// }
