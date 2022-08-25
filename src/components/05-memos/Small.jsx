import React from "react";

const Small = React.memo(({ value }) => {
  //este componente solamente se vuelve a renderizar si el value cambia
  console.log("me volvi a llamar");
  return <div>{value}</div>;
});

export default Small;
