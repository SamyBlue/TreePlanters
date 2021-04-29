import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));

export default function ButtonAppBar({ openLoginPopup, userState }) {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar>
				<Toolbar>
					<Typography>
						<img
							/* src={} */
							alt='circle-lakers-themed-logo'
							width='60'
							height='60'
						/>
					</Typography>
					<Typography variant='h6' className={classes.title}>
						Tree Planters
					</Typography>
					<Button
						color='inherit'
						/* onClick={userState.id === -1 ? openLoginPopup : undefined} */
					>
						{/* {userState.id === -1
							? 'Login/Register'
							: `Hello, ${userState.username}! Logout`} */}
						<MenuIcon />
					</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
}
