import React, { useEffect, useState } from "react";
import "./effects.css";
import Message from "./Message";

const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });
  const { name, email } = formState;

  useEffect(() => {
    // console.log("form changed");
  }, [formState]);

  useEffect(() => {
    // console.log("Hey");
  }, []);

  useEffect(() => {
    // console.log("name");
  }, [name]);

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };
  return (
    <>
      <h1>useEffect</h1>
      <hr />
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Nombre"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="Email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>

      {name === "123" && <Message />}
    </>
  );
};

export default SimpleForm;
