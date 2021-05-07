import React, { useState } from "react";
import Button from "../../components/Button";
import "./DefaultDashboard.css";
import Lottie from "react-lottie";
import circularAnimation from "../../lotties/21751-circular-progress-bar.json";
import windmillAnimation from "../../lotties/15422-wind-mill-animation.json";
import Fade from "@material-ui/core/Fade";
import useInterval from "../../hooks/useInterval";

const TREES_PLANTED = 1000; //! TEMP VALUE
const CARBON_SAVED = 10; //! TEMP VALUE
const MONEY_RAISED = 1; //! TEMP VALUE

const lottieCircular = {
	loop: false,
	autoplay: true,
	animationData: circularAnimation,
};

const lottieWindmill = {
	loop: true,
	autoplay: true,
	animationData: windmillAnimation,
};

const DefaultDashboard = ({ openDonateModal }) => {
	const [imageIndex, setImageIndex] = useState(0);

	useInterval(() => {
		setImageIndex((imageIndex + 1) % 4);
	}, 3000);

	return (
		<div className="DefaultDashboard">
			<div
				className="Mountains"
				style={{ backgroundImage: "url(grass.png)" }}
			/>
			<Fade in={imageIndex === 0} timeout={1000}>
				<div
					className="Mountains"
					style={{ backgroundImage: "url(summer.png)" }}
				/>
			</Fade>
			<Fade in={imageIndex === 1} timeout={1000}>
				<div
					className="Mountains"
					style={{ backgroundImage: "url(autumn.png)" }}
				/>
			</Fade>
			<Fade in={imageIndex === 2} timeout={1000}>
				<div
					className="Mountains"
					style={{ backgroundImage: "url(winter.png)" }}
				/>
			</Fade>
			<Fade in={imageIndex === 3} timeout={1000}>
				<div
					className="Mountains"
					style={{ backgroundImage: "url(spring.png)" }}
				/>
			</Fade>

			<div id="windmill1">
				<Lottie options={lottieWindmill} />
			</div>

			<div id="windmill2">
				<Lottie options={lottieWindmill} />
			</div>

			<ul className="DashboardCards">
				<li>
					{/* <img src='growingtree.gif' alt='growing tree' /> */}
					<div className="DashboardCard">
						<div className="BadgePin">
							<p>1</p>
						</div>
						<img
							src="Badge.png"
							alt="Badge"
							className="BadgeLayer"
							style={{ zIndex: -3 }}
						/>
						<img
							src="Ribbon.png"
							alt="Ribbon"
							className="BadgeLayer"
							style={{ zIndex: -1 }}
						/>
						<div className="CircularBar">
							<Lottie options={lottieCircular} />
						</div>
						<p className="statisticName">Trees Planted</p>
						<p className="statistic">{TREES_PLANTED}</p>
						<p className="statistic">of</p>
						<p className="statistic" style={{ top: "-290px" }}>
							10000
						</p>
					</div>
				</li>
				<li>
					{/* <img src='foot.png' alt='carbon footprint' /> */}
					<div className="DashboardCard">
						<div className="BadgePin">
							<p>2</p>
						</div>
						<img
							src="Badge.png"
							alt="Badge"
							className="BadgeLayer"
							style={{ zIndex: -3 }}
						/>
						<img
							src="Ribbon.png"
							alt="Ribbon"
							className="BadgeLayer"
							style={{ zIndex: -1 }}
						/>
						<div className="CircularBar">
							<Lottie options={lottieCircular} />
						</div>
						<p className="statisticName">Carbon Saved</p>
						<p className="statistic">{CARBON_SAVED} kg</p>
						<p className="statistic">of</p>
						<p className="statistic" style={{ top: "-290px" }}>
							10000kg
						</p>
					</div>
				</li>
				<li>
					{/* <img src='pig.png' alt='piggy bank' /> */}
					<div className="DashboardCard">
						<div className="BadgePin">
							<p>3</p>
						</div>
						<img
							src="Badge.png"
							alt="Badge"
							className="BadgeLayer"
							style={{ zIndex: -3 }}
						/>
						<img
							src="Ribbon.png"
							alt="Ribbon"
							className="BadgeLayer"
							style={{ zIndex: -1 }}
						/>
						<div className="CircularBar">
							<Lottie options={lottieCircular} />
						</div>
						<p className="statisticName">Money Raised</p>
						<p className="statistic">£{MONEY_RAISED}</p>
						<p className="statistic">of</p>
						<p className="statistic" style={{ top: "-290px" }}>
							£10000
						</p>
					</div>
				</li>
			</ul>

			<Button color={"#00552a"} onClick={openDonateModal}>
				Donate Today
			</Button>
		</div>
	);
};
export default DefaultDashboard;
