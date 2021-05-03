import React from 'react'
import Form from '../../components/Forms/Form'
import FormInput from '../../components/Forms/FormSubmit'
import Modal from '../../components/Modal'
import Tabs from '../../components/Tabs'

const LoginRegisterModal = ({open, closeLoginModal}) => {
    return (
        <Modal open={open} closeModal={closeLoginModal}>
            <Tabs arrayOfTabs={["Login", "Register"]} >
                
            </Tabs>
        </Modal>
    )
}

export default LoginRegisterModal
