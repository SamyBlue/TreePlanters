import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "block",
		marginLeft: "auto",
		marginRight: "auto",
		width: "100%",
	},
	heading: {
		fontSize: theme.typography.pxToRem(25),
		flexShrink: 0,
		fontWeight: "bold",
	},
}));

const About = () => {
	const classes = useStyles();
	const [expanded, setExpanded] = useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	return (
		<div className={classes.root}>
			<Accordion
				expanded={expanded === "panel1"}
				onChange={handleChange("panel1")}
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1bh-content"
					id="panel1bh-header"
					style={{ backgroundColor: "#DAB85F" }}
				>
					<Typography
						className={classes.heading}
						style={{
							// color: "white",
							textAlign: "center",
							width: "100%",
						}}
					>
						Why did we create Tree Planters?
					</Typography>
				</AccordionSummary>
				<AccordionDetails style={{ backgroundColor: "#DAB85F" }}>
					<Typography style={{ textAlign: "center", width: "100%" }}>
						Tree planters makes it easy to help reforestation
						through an intuitive user interface. You don't even need
						an account!
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === "panel2"}
				onChange={handleChange("panel2")}
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel2bh-content"
					id="panel2bh-header"
					style={{ backgroundColor: "#7F5F16" }}
				>
					<Typography
						className={classes.heading}
						style={{
							color: "white",
							textAlign: "center",
							width: "100%",
						}}
					>
						How can I reduce my carbon footprint?
					</Typography>
				</AccordionSummary>
				<AccordionDetails style={{ backgroundColor: "#7F5F16" }}>
					<Typography
						style={{
							color: "white",
							textAlign: "center",
							width: "100%",
						}}
					>
						Helping reforestation is a great start! Reduce, reuse
						and recycle.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === "panel3"}
				onChange={handleChange("panel3")}
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel3bh-content"
					id="panel3bh-header"
					style={{ backgroundColor: "#DAB85F" }}
				>
					<Typography
						className={classes.heading}
						style={{
							// color: "white",
							textAlign: "center",
							width: "100%",
						}}
					>
						Where are the trees planted?
					</Typography>
				</AccordionSummary>
				<AccordionDetails style={{ backgroundColor: "#DAB85F" }}>
					<Typography style={{ textAlign: "center", width: "100%" }}>
						You can choose which reforestation project you would
						like to help out when you donate. Create an account and
						you can see where your trees are on the map.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === "panel4"}
				onChange={handleChange("panel4")}
			>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel4bh-content"
					id="panel4bh-header"
					style={{ backgroundColor: "#7F5F16" }}
				>
					<Typography
						className={classes.heading}
						style={{
							color: "white",
							textAlign: "center",
							width: "100%",
						}}
					>
						How is my donation spent?
					</Typography>
				</AccordionSummary>
				<AccordionDetails style={{ backgroundColor: "#7F5F16" }}>
					<Typography
						style={{
							color: "white",
							textAlign: "center",
							width: "100%",
						}}
					>
						Your donation goes straight towards planting trees. For
						a more detailed breakdown, please check the website of
						the reforestation project you donated to.
					</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	);
};

export default About;
