import React from "react";

interface Props {
  a: string;
  b?: { name: string };
  c: { name: string }[];
}

const FuncComponent = (props: Props) => {
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
