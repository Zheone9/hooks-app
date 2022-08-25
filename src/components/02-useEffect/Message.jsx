import React, { useEffect, useState } from "react";

const Message = () => {
  const [{ x, y }, setCoords] = useState({});

  useEffect(() => {
    const mouseMove = (e) => {
      const coords = { x: e.x, y: e.y };
      setCoords(coords);
    };

    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
      console.clear();
    };
  }, []);

  return (
    <h3>
      You are nice, {x},{y}
    </h3>
  );
};

export default Message;
