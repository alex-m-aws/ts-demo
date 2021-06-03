import React from "react";

const FuncComponent = (props) => {
  if (!props.b) return null;
  
  return (
    <div>
      <div>{props.a}</div>
      <div>{props.b.name}</div>
      <div>{props.c.map(ci => <div>{ci.name}</div>)}</div>
    </div>
  )
}

export default FuncComponent;
