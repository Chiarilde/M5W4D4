import Modal from "react-bootstrap/Modal";

const MyModal = ({ show, handleClose }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Aggiungi</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form action="">
                    <input
                        name="title"
                        type="text"
                        placeholder="Titolo del prodotto"
                    />
                    <input
                        name="title"
                        type="text"
                        placeholder="Descrizione del prodotto"
                    />
                    <button className="btn btn-primary">
                        {" "}
                        Salva il prodotto
                    </button>
                </form>
            </Modal.Body>
        </Modal>
    );
};

export default MyModal;
