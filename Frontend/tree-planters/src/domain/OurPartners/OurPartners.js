import React from "react";
import "./OurPartners.css";

const OurPartners = () => {
	return (
		<div className="OurPartners">
			<h1 style={{ margin: "0px", paddingBottom: "40px" }}>
				Our Partners
			</h1>
			<div className="PartnersTable">
				<div className="Partners">
					<div className="Partner">
						<img src="chase-africa-logo.png" alt="logo" />
						<h3>Chase Africa</h3>
						<p>
							Chase Africa works with a local partner and the
							Kenya Forest Service to restore the degraded forests
							on the slopes of Mount Kenya. The Mount Kenya forest
							supports a vast array of flora and fauna and is an
							UNESCO World Heritage Site.
						</p>
					</div>

					<div className="Partner">
						<img src="TIST_Logo_Green.png" alt="logo" />
						<h3>Tist</h3>
						<p>
							TIST (The International Small Group and Tree
							Planting Program) encourages small groups of
							subsistence farmers to improve their local
							environment and farms by planting and maintaining
							trees on degraded and/or unused land. Over 88,000
							farmers in 4 countries have successfully planted
							more than 18 millions trees since their foundation
							in 1999.
						</p>
					</div>
					<div className="Partner">
						<img src="OneTreePlanted-logo.png" alt="logo" />
						<h3>One Tree Planted</h3>
						<p>
							One Tree Planted is a non-profit organization with
							over 2.5 millions trees planted since their
							foundation in 2014. They are based in Vermont, USA.
							They currently have reforestation projects in the
							many countries.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OurPartners;
