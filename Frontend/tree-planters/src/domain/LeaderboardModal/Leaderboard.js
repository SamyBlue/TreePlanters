import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import getDonations from "../../services/donationService";

const useStyles1 = makeStyles((theme) => ({
	root: {
		flexShrink: 0,
	},
}));

function TablePaginationActions(props) {
	const classes = useStyles1();
	const theme = useTheme();
	const { count, page, rowsPerPage, onChangePage } = props;

	const handleFirstPageButtonClick = (event) => {
		onChangePage(event, 0);
	};

	const handleBackButtonClick = (event) => {
		onChangePage(event, page - 1);
	};

	const handleNextButtonClick = (event) => {
		onChangePage(event, page + 1);
	};

	const handleLastPageButtonClick = (event) => {
		onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
	};

	return (
		<div className={classes.root}>
			<IconButton
				onClick={handleFirstPageButtonClick}
				disabled={page === 0}
				aria-label="first page"
			>
				{theme.direction === "rtl" ? (
					<LastPageIcon />
				) : (
					<FirstPageIcon />
				)}
			</IconButton>
			<IconButton
				onClick={handleBackButtonClick}
				disabled={page === 0}
				aria-label="previous page"
			>
				{theme.direction === "rtl" ? (
					<KeyboardArrowRight />
				) : (
					<KeyboardArrowLeft />
				)}
			</IconButton>
			<IconButton
				onClick={handleNextButtonClick}
				disabled={page >= Math.ceil(count / rowsPerPage) - 1}
				aria-label="next page"
			>
				{theme.direction === "rtl" ? (
					<KeyboardArrowLeft />
				) : (
					<KeyboardArrowRight />
				)}
			</IconButton>
			<IconButton
				onClick={handleLastPageButtonClick}
				disabled={page >= Math.ceil(count / rowsPerPage) - 1}
				aria-label="last page"
			>
				{theme.direction === "rtl" ? (
					<FirstPageIcon />
				) : (
					<LastPageIcon />
				)}
			</IconButton>
		</div>
	);
}

TablePaginationActions.propTypes = {
	count: PropTypes.number.isRequired,
	onChangePage: PropTypes.func.isRequired,
	page: PropTypes.number.isRequired,
	rowsPerPage: PropTypes.number.isRequired,
};

/* let rows = [
  ["Cupcake", 305],
  ["Donut", 452],
  ["Eclair", 262],
  ["Frozen yoghurt", 159],
  ["Gingerbread", 356],
  ["Honeycomb", 408],
  ["Ice cream sandwich", 237],
  ["Jelly Bean", 375],
  ["KitKat", 518],
  ["Lollipop", 392],
  ["Marshmallow", 318],
  ["Nougat", 360],
  ["Oreo", 437],
]; */

const useStyles2 = makeStyles({
	table: {
		width: "100%",
		margin: "auto",
	},
});

const Leaderboard = () => {
	const classes = useStyles2();
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);
	const [rows, setRows] = useState([]);

	useEffect(() => {
		async function fetchData() {
			//whenever leaderboard loads up do:
			let donations = await getDonations();

			donations = donations.map((obj) => {
				return [obj["username"], obj["donation_amount"]];
			});

			donations = donations.filter((i) => i[0] !== "Anonymous");

			const allUsers = donations.map((x) => x[0]);
			console.log("ALLUSERS: ", allUsers);
			const uniqueUsers = [...new Set(allUsers)];
			console.log("UNIQUEUSERS: ", uniqueUsers);

			let allUserDonations = [
				["Cupcake", 305],
				["Donut", 452],
				["Eclair", 262],
				["Frozen yoghurt", 159],
				["Gingerbread", 356],
				["Honeycomb", 408],
				["Ice cream sandwich", 237],
				["Jelly Bean", 375],
				["KitKat", 518],
				["Lollipop", 392],
				["Marshmallow", 318],
				["Nougat", 360],
				["Oreo", 437],
			  ];
			for (var i = 0; i < uniqueUsers.length; i++) {
				let donationSum = 0;
				for (var j = 0; j < donations.length; j++) {
					if (uniqueUsers[i] === donations[j][0]) {
						donationSum += donations[j][1];
					}
				}
				allUserDonations.push([uniqueUsers[i], donationSum]);
			}

			donations = allUserDonations;

			donations = donations.sort(function (a, b) {
				return b[1] - a[1];
			});

			for (var i = 0; i < donations.length; i++) {
				donations[i].push(i + 1);
				switch (i) {
					case 0:
						donations[i].push("gold");
						break;
					case 1:
						donations[i].push("silver");
						break;
					case 2:
						donations[i].push("#cd7f32");
						break;
					default:
						donations[i].push("black");
				}
			}

			setRows(donations);
		}
		fetchData();
	}, []);

	const emptyRows =
		rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	return (
		<TableContainer>
			<div
				style={{
					width: "40%",
					marginLeft: "auto",
					marginRight: "auto",
				}}
			>
				<h1 style={{ textAlign: "center", color: "black" }}>
					Leaderboard
				</h1>
			</div>

			<Table>
				<TableBody>
					{(rowsPerPage > 0
						? rows.slice(
								page * rowsPerPage,
								page * rowsPerPage + rowsPerPage
						  )
						: rows
					).map((row) => (
						<TableRow key={row[0]}>
							<TableCell align="left">{row[2]}</TableCell>
							<TableCell
								align="left"
								style={{ fontWeight: "bold", color: row[3] }}
							>
								{row[0]}
							</TableCell>
							<TableCell
								align="right"
								style={{ fontWeight: "bold" }}
							>
								£{row[1]}
							</TableCell>
						</TableRow>
					))}

					{emptyRows > 0 && (
						<TableRow style={{ height: 53 * emptyRows }}>
							<TableCell colSpan={6} />
						</TableRow>
					)}
				</TableBody>
			</Table>

			<TableFooter>
				<TableRow>
					<TablePagination
						rowsPerPageOptions={[
							5,
							10,
							25,
							{ label: "All", value: -1 },
						]}
						colSpan={3}
						count={rows.length}
						rowsPerPage={rowsPerPage}
						page={page}
						SelectProps={{
							inputProps: { "aria-label": "rows per page" },
							native: true,
						}}
						onChangePage={handleChangePage}
						onChangeRowsPerPage={handleChangeRowsPerPage}
						ActionsComponent={TablePaginationActions}
					/>
				</TableRow>
			</TableFooter>
		</TableContainer>
	);
};

export default Leaderboard;
