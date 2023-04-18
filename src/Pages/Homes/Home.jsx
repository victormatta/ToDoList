import "./Home.css";
import { Card } from "../Card/Card";
import React, { useState } from "react";

export function Home() {
  const [card, setCard] = useState("");
  const [task, setTask] = useState([]);

  let handleCard = () => {
    const newCard = {
      name: card,
      date: new Date().toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };
    setTask((prevState) => [...prevState, newCard]);
    setCard("");
  };

  let handleDelete = (index) => {
    const newList = [...task];
    newList.splice(index, 1);
    setTask(newList);
  };

  return (
    <div className="homeStyle">
      <header>
        <h1>What's the plans for today?</h1>

        <div className="boxTask">
          <input
            onChange={(e) => setCard(e.target.value)}
            value={card}
            type="text"
            placeholder="Add a todo"
          />

          <button type="submit" onClick={handleCard}>
            Add Todo
          </button>
        </div>
      </header>

      {task.map((task, index) => (
        <Card
          name={task.name}
          key={task.date}
          onDelete={() => handleDelete(index)}
        />
      ))}
    </div>
  );
}
