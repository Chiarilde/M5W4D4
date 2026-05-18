import { useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import "./book.css";

const SingleBook = ({ setSelected, selected, book }) => {
    const navigate = useNavigate();

    return (
        <Card
            onClick={() =>
                setSelected(selected === book.asin ? null : book.asin)
            }
            data-testid="book-card"
            className={`
               
                rounded-2
                overflow-hidden
                shadow-sm
                book-card
                h.100
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

            <Card.Body className="d-flex flex-column justify-content-between flex-grow-1">
                <Card.Title
                    className="fs-6 text-dark text-center"
                    style={{
                        minHeight: "50px",
                    }}
                >
                    {book.title}
                </Card.Title>
                <Button
                    className="border-0 mt-3 rounded-2 text-black mx-auto d-block detail-btn"
                    style={{ backgroundColor: "#CFE2FF", width: "70%" }}
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
