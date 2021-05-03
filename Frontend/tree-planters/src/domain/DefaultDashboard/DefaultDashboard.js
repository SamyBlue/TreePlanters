import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import LooksOne from '@material-ui/icons/LooksOne';
import LooksTwo from '@material-ui/icons/LooksTwo';
import Looks3 from '@material-ui/icons/Looks3';
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
		<>
			<div
				style={{
					marginTop: '60px',
					backgroundImage: `url(${imageList[index % 4]})`,
					backgroundRepeat: 'repeat-x',
					height: '292px',
				}}
			>
				<img src={imageList[index % 4]} alt='' />
			</div>

			<div className='DefaultDashboard'>
				<ul className='DashboardCards'>
					<li>
						<img src='growingtree.gif' alt='growing tree' />
						<div className='DashboardCard'>
							<LooksOne />
							<p>Trees Planted:</p>
							<p>{TREES_PLANTED}</p>
							<p>
								200,000 acres of rainforest are burned every day. This is why
								planting trees now is so important. Plant for a better tomorrow!
							</p>
						</div>
					</li>
					<li>
						<img src='foot.png' alt='carbon footprint' />
						<div className='DashboardCard'>
							<LooksTwo />
							<p>Carbon Saved:</p>
							<p>{CARBON_SAVED} kg</p>
							<p>
								A mature tree absorbs carbon dioxide at a rate of 21.8 kg per
								year. In one year, an acre of forest can absorb twice the CO2
								produced by the average car's annual mileage.
							</p>
						</div>
					</li>
					<li>
						<img src='pig.png' alt='piggy bank' />
						<div className='DashboardCard'>
							<Looks3 />
							<p>Money Raised:</p>
							<p>£{MONEY_RAISED}</p>
							<p>
								Every pound matters! 100% of our profits go towards planting
								more trees and making the world a more leafy place.
							</p>
						</div>
					</li>
				</ul>

				<Button
					variant='contained'
					size='large'
					style={{ backgroundColor: '#DBB95F' }}
					onClick={openDonateModal}
				>
					Donate
				</Button>
			</div>
		</>
	);
};
export default DefaultDashboard;
