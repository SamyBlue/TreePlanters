import React, { useState, useEffect } from 'react';
import Button from '../../components/Button';
import './DefaultDashboard.css';
import Lottie from 'react-lottie';
import animationData from '../../lotties/21751-circular-progress-bar.json';

const TREES_PLANTED = 1000; //! TEMP VALUE
const CARBON_SAVED = 10; //! TEMP VALUE
const MONEY_RAISED = 1; //! TEMP VALUE

const lottieOptions = {
	loop: true,
	autoplay: true,
	animationData: animationData,
};

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
						<img
							src='Badge.png'
							alt='Badge'
							className='BadgeLayer'
							style={{ zIndex: -3 }}
						/>
						<img
							src='Ribbon.png'
							alt='Ribbon'
							className='BadgeLayer'
							style={{ zIndex: -1 }}
						/>
						<div id='CircularBar'>
							<Lottie options={lottieOptions} />
						</div>
						<p className='statisticName'>Trees Planted</p>
						<p className='statistic'>{TREES_PLANTED}</p>
						<p className='statistic'>of</p>
						<p className='statistic' style={{ top: '-290px' }}>
							10000
						</p>
					</div>
				</li>
				<li>
					{/* <img src='foot.png' alt='carbon footprint' /> */}
					<div className='DashboardCard'>
						<img
							src='Badge.png'
							alt='Badge'
							className='BadgeLayer'
							style={{ zIndex: -3 }}
						/>
						<img
							src='Ribbon.png'
							alt='Ribbon'
							className='BadgeLayer'
							style={{ zIndex: -1 }}
						/>
						<div id='CircularBar'>
							<Lottie options={lottieOptions} />
						</div>
						<p className='statisticName'>Carbon Saved</p>
						<p className='statistic'>{CARBON_SAVED} kg</p>
						<p className='statistic'>of</p>
						<p className='statistic' style={{ top: '-290px' }}>
							10000kg
						</p>
					</div>
				</li>
				<li>
					{/* <img src='pig.png' alt='piggy bank' /> */}
					<div className='DashboardCard'>
						<img
							src='Badge.png'
							alt='Badge'
							className='BadgeLayer'
							style={{ zIndex: -3 }}
						/>
						<img
							src='Ribbon.png'
							alt='Ribbon'
							className='BadgeLayer'
							style={{ zIndex: -1 }}
						/>
						<div id='CircularBar'>
							<Lottie options={lottieOptions} />
						</div>
						<p className='statisticName'>Money Raised</p>
						<p className='statistic'>£{MONEY_RAISED}</p>
						<p className='statistic'>of</p>
						<p className='statistic' style={{ top: '-290px' }}>
							£10000
						</p>
					</div>
				</li>
			</ul>

			<Button
				color={'#00552a'}
				onClick={openDonateModal}
			>
				Donate Today
			</Button>
		</div>
	);
};
export default DefaultDashboard;
