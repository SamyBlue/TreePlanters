import React from "react";
import Modal from "../../components/Modal";
import Tabs from "../../components/Tabs";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";

const LoginRegisterModal = ({ open, closeLoginModal }) => {
	return (
		<Modal
			open={open}
			closeModal={closeLoginModal}
			style={{ margin: "0px", marginLeft: "0px", marginRight: "0px" }}
		>
			<div style={{ display: "table-row" }}>
				<div
					style={{
						position: "relative",
						backgroundColor: "rgb(225,225,225)",
						width: "200px",
						height: "50vh",
						display: "table-cell",
						margin: "0px",
						borderStyle: "solid",
						borderWidth: "thin",
					}}
				></div>
				<div
					style={{
						display: "table-cell",
						margin: "0px",
					}}
				>
					<Tabs arrayOfTabs={["Login", "Register"]}>
						<LoginPage closeModal={closeLoginModal} />
						<RegisterPage closeModal={closeLoginModal} />
					</Tabs>
				</div>
			</div>
		</Modal>
	);
};

export default LoginRegisterModal;
