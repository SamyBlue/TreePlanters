import { ModalManager } from '@material-ui/core';
import React from 'react';
import Modal from '../../components/Modal';
import Leaderboard from './Leaderboard';

const LeaderboardModal = ({ open, closeLeaderboardModal }) => {
    return (
        <Modal open={open} closeModal={closeLeaderboardModal}>
            <Leaderboard />
        </Modal>
    )
}

export default LeaderboardModal
