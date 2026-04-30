import React from "react";
const Child = (props) => {

    return(

        <>
        <h2>Parent Component</h2>
        <p>Key1: {props.key1}</p>
        <p>Key2: {props.key2}</p>
        <button onClick={() => sendData("Hi Parent!")}>
            Send Message to Parent
        </button>
        </>
    );
};
export default Child;