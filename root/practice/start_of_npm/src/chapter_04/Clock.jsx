import React from "react";

function Clock(props){
    return (
        <div>
            <h1> hello!</h1>
            <h2> current time : {new Date().toLocaleTimeString()}</h2>
        </div>
    );
}

export default Clock;