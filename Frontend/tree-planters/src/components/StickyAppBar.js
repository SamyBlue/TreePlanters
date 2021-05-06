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

export default function StickyAppBar({ openLoginModal, openDonateModal, openLeaderboardModal }) {
	const classes = useStyles();

	const [scrollPosition, setScrollPosition] = React.useState(0);
	const handleScroll = () => {
		const position = window.pageYOffset;
		setScrollPosition(position);
	};

	React.useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className={classes.root}>
			<AppBar
				style={{
					backgroundColor: 'rgba(66, 128, 54, 0.95)',
					background: `linear-gradient(0deg, rgba(66, 128, 54, ${
						1 - 0.01 * scrollPosition
					}) 0%, rgba(32, 64, 54, 0.95) 100%)`,
					boxShadow: `${scrollPosition > 5 ? 'none' : ''}`,
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
						color={'#699a30'}
						onClick={openLeaderboardModal}
					>
						Leaderboard
					</Button>
					<Button
						className={classes.menuButton}
						color={'#699a30'}
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
