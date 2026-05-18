import Alert from "react-bootstrap/Alert";

const ErrorMessage = ({ message = "Errore" }) => {
    return (
        <Alert variant="danger" className="mt-3 text-center">
            {message}
        </Alert>
    );
};

export default ErrorMessage;
