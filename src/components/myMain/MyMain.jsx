import AllTheBooks from "../allTheBooks/AllTheBooks";
import MyModal from "../modals/MyModal";
import Welcome from "../welcome/Welcome";

const MyMain = ({ show, handleClose }) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Welcome />
                    <MyModal show={show} handleClose={handleClose} />
                    <AllTheBooks />
                </div>
            </div>
        </div>
    );
};

export default MyMain;
