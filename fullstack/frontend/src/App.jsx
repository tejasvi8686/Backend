import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <div>
      <h1>Tejasvi raj</h1>
      <p>JOKES : {jokes.length}</p>

      {jokes.map((jokes, index) => (
        <div key={jokes?.id}>
          <h3>{jokes?.title}</h3>
          <p>{jokes?.content}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
