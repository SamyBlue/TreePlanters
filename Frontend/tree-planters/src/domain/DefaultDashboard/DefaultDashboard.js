import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import './DefaultDashboard.css';

const TREES_PLANTED = 1000; //! TEMP VALUE
const CARBON_SAVED = 10; //! TEMP VALUE
const MONEY_RAISED = 1; //! TEMP VALUE

const DefaultDashboard = ({ openDonateModal }) => {
	const [index, setIndex] = useState(0);
	const imageList = ['summer.png', 'autumn.png', 'winter.png', 'spring.png'];

	useEffect(() => {
		const timer = setInterval(() => {
			setIndex((index) => index + 1);
		}, 5000);
		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<div className='DefaultDashboard'>
			<div
				style={{
					marginTop: '60px',
					backgroundImage: `url(${imageList[index % 4]})`,
					backgroundRepeat: 'repeat-x',
					height: '292px',
					position: 'absolute',
					zIndex: '-5',
					width: '100vw',
					left: '50%',
					right: '50%',
					marginLeft: '-50vw',
					marginRight: '-50vw',
					bottom: '0',
				}}
			>
				<img src={imageList[index % 4]} alt='' />
			</div>

			<ul className='DashboardCards'>
				<li>
					{/* <img src='growingtree.gif' alt='growing tree' /> */}
					<div className='DashboardCard'>
						<p>Trees Planted</p>
						<p className='statistic'>{TREES_PLANTED}</p>
						<p className='statistic'>of</p>
						<p className='statistic'>10000</p>
					</div>
				</li>
				<li>
					{/* <img src='foot.png' alt='carbon footprint' /> */}
					<div className='DashboardCard'>
						<p>Carbon Saved</p>
						<p className='statistic'>{CARBON_SAVED} kg</p>
						<p className='statistic'>of</p>
						<p className='statistic'>10000kg</p>
					</div>
				</li>
				<li>
					{/* <img src='pig.png' alt='piggy bank' /> */}
					<div className='DashboardCard'>
						<p>Money Raised</p>
						<p className='statistic'>£{MONEY_RAISED}</p>
						<p className='statistic'>of</p>
						<p className='statistic'>£10000</p>
					</div>
				</li>
			</ul>

			<Button
				variant='contained'
				id='LargeDonate'
				style={{ backgroundColor: '#6BBF30', boxShadow: '2px 3px' }}
				onClick={openDonateModal}
			>
				Donate
			</Button>
		</div>
	);
};
export default DefaultDashboard;
