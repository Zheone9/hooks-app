import React, { useEffect } from "react";
import useCounter from "../hooks/useCounter";
import useFetch from "../hooks/useFetch";

const MultipleCustomHooks = () => {
  const { counter, increase } = useCounter(1);
  const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;
  const { loading, data } = useFetch(url);
  const { author, quote } = !!data && data.length > 0 && data[0];

  useEffect(() => {
    document.title = counter;
  }, []);

  return (
    <div>
      <h1>Breaking bad quotes</h1>
      <hr />
      {loading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-right">
          <p className="mb-3">{quote}</p>
          <footer className="blockquote-footer"> {author}</footer>
        </blockquote>
      )}

      <button className="btn btn-primary" onClick={() => increase()}>
        Incrementar
      </button>
    </div>
  );
};

export default MultipleCustomHooks;
