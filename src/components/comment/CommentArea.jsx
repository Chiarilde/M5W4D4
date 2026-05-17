import { useEffect, useState } from "react";
import CommentList from "./CommentList.jsx";
import AddComment from "./AddComment";

const CommentArea = ({ asin }) => {
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const getComments = async () => {
        setIsLoading(true);
        try {
            let response = await fetch(
                "https://striveschool-api.herokuapp.com/api/comments/" + asin,
                {
                    headers: {
                        Authorization:
                            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTA5ZjgxYTk5NGE2NzAwMTU1ZjZkMDAiLCJpYXQiOjE3NzkwNDE5MzUsImV4cCI6MTc4MDI1MTUzNX0.SCA7t28FXcY8m2kJ_u3Jfwvh0VwkDvoyz6USvFhn-hE",
                    },
                },
            );
            console.log(response);
            if (response.ok) {
                let comments = await response.json();
                setComments(comments);
                setIsLoading(false);
                setIsError(false);
            } else {
                console.log("error");
                setIsLoading(false);
                setIsError(true);
            }
        } catch (error) {
            console.log(error);
            setIsLoading(false);
            setIsError(true);
        }
    };
    useEffect(() => {
        if (asin) {
            getComments();
        }
    }, [asin]);

    return (
        <div className="text-center" style={{ border: "2px solid blue" }}>
            {/* {isLoading && <Loading />}
            {isError && <Error />} */}
            <AddComment asin={asin} getComments={getComments} />
            <CommentList commentsToShow={comments} getComments={getComments} />
        </div>
    );
};

export default CommentArea;
