import React from "react";

function Book(props){
    return (
        <div>
            <h1>{`the name of this book is ${props.name}`}</h1>
            <h2>{`this book has total ${props.numOfPage} page`}</h2>
        </div>
    );
}

export default Book;