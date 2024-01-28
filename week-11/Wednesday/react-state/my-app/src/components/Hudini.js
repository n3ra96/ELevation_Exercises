import React, { useState } from 'react';

const Hudini = () => {
    let [Show, setShow] = useState("false")

    const changeShow = () => {
        setShow( Show === "false" ? "true" : "false" );
    }  

    return (
      <div>
          { Show === "false"  ? "Now you see me" : "Now you don’t"}
          <button onClick={changeShow}>Change!</button>
      </div>
    );
  }
  
  
  export default Hudini;