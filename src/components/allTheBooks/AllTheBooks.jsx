import { Col, Row } from "react-bootstrap";
import fantasy from "../../assets/fantasy.json";
import SingleBook from "../allTheBooks/SingleBook";
import CommentArea from "../comment/CommentArea";
import { useState } from "react";

const AllTheBooks = ({ searchBook }) => {
    const [selected, setSelected] = useState("");

    return (
        <Row>
            <Col md={8}>
                <Row className="g-2 mt-3">
                    {fantasy
                        .filter((b) =>
                            b.title.toLowerCase().includes(searchBook),
                        )
                        .map((book) => {
                            return (
                                <Col xs={12} md={4} key={book.asin}>
                                    <SingleBook
                                        book={book}
                                        selected={selected}
                                        setSelected={setSelected}
                                    />
                                </Col>
                            );
                        })}
                </Row>
            </Col>
            <Col md={4}>
                <CommentArea asin={selected} />
            </Col>
        </Row>
    );
};

export default AllTheBooks;
