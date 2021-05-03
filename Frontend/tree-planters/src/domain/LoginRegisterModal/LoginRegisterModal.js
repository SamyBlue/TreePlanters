import React from 'react';
import Modal from '../../components/Modal';
import Tabs from '../../components/Tabs';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

const LoginRegisterModal = ({ open, closeLoginModal }) => {
	return (
		<Modal open={open} closeModal={closeLoginModal}>
			<Tabs arrayOfTabs={['Login', 'Register']}>
				<LoginPage />
				<RegisterPage />
			</Tabs>
		</Modal>
	);
};

export default LoginRegisterModal;
