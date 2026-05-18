import Spinner from "react-bootstrap/Spinner";

const LoadingMessage = () => {
    return (
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    );
};

export default LoadingMessage;
