import './appContact.sass';
import { useState } from 'react';
import ModalContact from '../modals/modalContact/ModalContact';

const AppContact = () => {

    const [isModalOpen, setIsModalOpen] = useState(true);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="appContact">
            <div className="appContact__title">Get in touch</div>
            <div className="appContact__subtitle">Ready to make your website a digital marvel? Contact Eugene Gudoshnikov and watch your ideas burst into life.</div>
            <button onClick={handleOpenModal} className="appContact_btn">Contact</button>
            <ModalContact isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
    )
}

export default AppContact;