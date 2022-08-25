import React, { useRef } from "react";
import "../02-useEffect/effects.css";

const FocusScreen = () => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.select();
  };
  return (
    <div>
      FocusScreen
      <hr />
      <input
        ref={inputRef}
        type="text"
        name=""
        id=""
        className="form-control"
        placeholder="nombre"
      />
      <button className="btn btn-outline-primary mt-2 " onClick={handleClick}>
        Focus
      </button>
    </div>
  );
};

export default FocusScreen;
