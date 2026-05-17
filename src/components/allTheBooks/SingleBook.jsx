import { useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import "./book.css";

const SingleBook = ({ setSelected, selected, book }) => {
    const navigate = useNavigate();

    return (
        <Card
            onClick={() => setSelected(book.asin)}
            data-testid="book-card"
            className={`
                border-0
                rounded-4
                overflow-hidden
                shadow-sm
                book-card
                ${selected === book.asin ? "selected-card" : ""}
            `}
            style={{
                width: "13rem",
                cursor: "pointer",
            }}
        >
            <div className="book-img-container">
                <Card.Img variant="top" src={book.img} className="book-img" />
            </div>

            <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title
                    className="fs-6 text-dark text-center"
                    style={{
                        minHeight: "50px",
                    }}
                >
                    {book.title}
                </Card.Title>

                <Button
                    className="w-100 mt-3 rounded-pill"
                    variant="info"
                    onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/details/${book.asin}`);
                    }}
                >
                    Dettaglio
                </Button>
            </Card.Body>
        </Card>
    );
};

export default SingleBook;
