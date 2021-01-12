import React from 'react';

const Scroll =(props)=>{
    return(
    <div style={{border:"1px solid black",overflowY:"scroll",height:"700px"}}>
     {props.children}
    </div>
    )
}

export default Scroll;