import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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

export default function StickyAppBar({ openLoginModal }) {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar style={{ backgroundColor: 'rgb(135, 133, 50)' }}>
				<Toolbar>
					<img src='logo.jpg' alt='TreePlanters-logo' width='60' height='60' />
					<Typography variant='h6' className={classes.title}>
						Tree Planters
					</Typography>
					<Button
						style={{ backgroundColor: '#DBB95F' }}
						className={classes.menuButton}
						/* onClick={} */
					>
						Donate
					</Button>
					<Button
						style={{ backgroundColor: '#DBB95F' }}
						className={classes.menuButton}
						onClick={openLoginModal}
					>
						Login
					</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
}
