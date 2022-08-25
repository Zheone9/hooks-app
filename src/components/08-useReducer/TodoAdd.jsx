import React from "react";
import useForm from "../hooks/useForm";

const TodoAdd = ({ handleAddTodo }) => {
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim().length === 0) return;

    //nuevo todo con su description
    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    handleAddTodo(newTodo);
    //reinicia el input
    reset();
  };
  return (
    <div className="col">
      <h4>Agregar TODO</h4>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="text"
          name="description"
          value={description}
          placeholder="aprender..."
          autoComplete="off"
          onChange={handleInputChange}
        />

        <button type="submit" className="btn btn-primary mt-1 w-100">
          Agregar
        </button>
      </form>
    </div>
  );
};

export default TodoAdd;
