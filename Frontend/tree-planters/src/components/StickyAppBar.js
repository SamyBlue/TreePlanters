import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from './Button.js';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';

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

export default function StickyAppBar({ openLoginModal, openDonateModal }) {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar
				style={{
					backgroundColor: 'rgba(66, 128, 54, 0.95)',
					background:
						'linear-gradient(0deg, rgba(66, 128, 54, 0.85) 0%, rgba(32, 64, 54, 0.95) 100%)',
				}}
			>
				<Toolbar>
					<img src='logo.png' alt='TreePlanters-logo' width='80' height='80' />
					<Typography variant='h6' className={classes.title}>
						{/* Leave empty unless want title in top-left corner */}
					</Typography>
					<IconButton
						className={classes.menuButton}
						style={{ position: 'relative', left: '15px' }}
					>
						<Badge badgeContent={2} color='secondary'>
							<NotificationsIcon style={{ height: '50px', width: '50px' }} />
						</Badge>
					</IconButton>
					<Button
						className={classes.menuButton}
						color={'#00552a'}
						onClick={openDonateModal}
					>
						Donate
					</Button>
					<Button
						className={classes.menuButton}
						color={'#699a30'}
						onClick={openLoginModal}
					>
						Login
					</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
}
