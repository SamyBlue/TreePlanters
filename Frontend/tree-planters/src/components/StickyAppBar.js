import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
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
			<AppBar style={{ background: 'transparent', boxShadow: 'none' }}>
				<Toolbar>
					<img src='logo.jpg' alt='TreePlanters-logo' width='80' height='80' />
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
						style={{ backgroundColor: '#6BBF30', boxShadow: '2px 3px' }}
						className={classes.menuButton}
						onClick={openDonateModal}
					>
						Donate
					</Button>
					<Button
						style={{ backgroundColor: '#6BBF30', boxShadow: '2px 3px' }}
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
