import { Button, ListGroup } from "react-bootstrap";

const SingleComment = ({ comment, getComments }) => {
    const deleteComment = async (asin) => {
        try {
            let response = await fetch(
                "https://striveschool-api.herokuapp.com/api/comments/" + asin,
                {
                    method: "DELETE",
                    headers: {
                        Authorization:
                            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTA5ZjgxYTk5NGE2NzAwMTU1ZjZkMDAiLCJpYXQiOjE3NzkwMzgyMzQsImV4cCI6MTc4MDI0NzgzNH0.KKJF7fETQih2uqm_VL2z60Ej02FFZlhcAeJDk3AP8is",
                    },
                },
            );
            if (response.ok) {
                alert("Recensione cancellata");
                getComments();
            } else {
                throw new Error("Recensione non cancellata");
            }
        } catch (e) {
            alert(e);
        }
    };

    return (
        <ListGroup.Item>
            {comment.comment}
            <p>{"⭐".repeat(comment.rate)}</p>
            <Button
                variant="danger"
                className="ms-2"
                onClick={() => deleteComment(comment._id)}
            >
                Elimina
            </Button>
        </ListGroup.Item>
    );
};

export default SingleComment;
