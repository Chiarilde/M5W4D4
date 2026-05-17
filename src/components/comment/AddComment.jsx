import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";

const AddComment = ({ asin, getComments }) => {
    const [comment, setComment] = useState({
        comment: "",
        rate: 1,
        elementId: asin,
    });

    useEffect(() => {
        setComment((c) => ({
            ...c,
            elementId: asin,
        }));
    }, [asin]);

    const sendComment = async (e) => {
        e.preventDefault();
        try {
            let response = await fetch(
                "https://striveschool-api.herokuapp.com/api/comments",
                {
                    method: "POST",
                    body: JSON.stringify(comment),
                    headers: {
                        "Content-type": "application/json",
                        Authorization:
                            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTA5ZjgxYTk5NGE2NzAwMTU1ZjZkMDAiLCJpYXQiOjE3NzkwMzgyMzQsImV4cCI6MTc4MDI0NzgzNH0.KKJF7fETQih2uqm_VL2z60Ej02FFZlhcAeJDk3AP8is",
                    },
                },
            );
            if (response.ok) {
                getComments();
                alert("Recensione inviata");
                setComment({
                    comment: "",
                    rate: 1,
                    elementId: asin,
                });
            } else {
                throw new Error("Ops, qualcosa non ha funzionato...");
            }
        } catch (err) {
            alert(err);
        }
    };

    return (
        <div className="my-3">
            <Form onSubmit={sendComment}>
                <Form.Group className="mb-2">
                    <Form.Label>Recensione</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Inserisci il testo..."
                        value={comment.comment}
                        onChange={(e) =>
                            setComment({
                                ...comment,
                                comment: e.target.value,
                            })
                        }
                    />
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Label>Rating</Form.Label>
                    <Form.Control
                        as="select"
                        value={comment.rate}
                        onChange={(e) =>
                            setComment({
                                ...comment,
                                rate: e.target.value,
                            })
                        }
                    >
                        <option value={1}>⭐</option>
                        <option value={2}>⭐⭐</option>
                        <option value={3}>⭐⭐⭐</option>
                        <option value={4}>⭐⭐⭐⭐</option>
                        <option value={5}>⭐⭐⭐⭐⭐</option>
                    </Form.Control>
                </Form.Group>
                <Button variant="info" type="submit">
                    Invia
                </Button>
            </Form>
        </div>
    );
};

export default AddComment;
