import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "dasd",
        comment: "hi",
    },
    {
        name: "yjhk",
        comment: "hello",
    },
    {
        name:"yjha",
        comment:"yeah"
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;
