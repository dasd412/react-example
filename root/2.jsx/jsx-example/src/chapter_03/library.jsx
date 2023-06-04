import React from "react";
import Book from "./Book";

function Library(props){
    return (
      <div>
        <Book name="first" numOfPage={300}/>
        <Book name="second" numOfPage={400}/>
        <Book name="third" numOfPage={500}/>
      </div>  
    );
}

export default Library;