import React from "react";
import Child from  "./Child.jsx";
const Parent = () => {
    const handleMessage = (msg) => {
        alert("Message from Child: +msg");
    }
            return(

        <>
        <Child key1={"hello"} key2={500}>   </Child>
        
        </>

    );
};
export default Parent;
