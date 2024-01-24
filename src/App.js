import React, { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Info } from "./components/Info";
import { List } from "./components/List";
import { ListItem } from "./components/ListItem";

function App() {
  const [items, setItem] = useState([
    { id: 1, content: "공부하기" },
    { id: 2, content: "밥먹기" },
  ]);
  const [content, setcontet] = useState("");
  const [id, SetId] = useState("");
  const date = new Date();
  const Year = date.getFullYear();
  const Month = date.getMonth() + 1;
  const day = date.getDate();
  const Today = `${Year}.${Month}.${day}`;
  const hanldeContent = (e) => {
    setcontet(e.target.value);
  };
  const AddList = (e) => {
    e.preventDefault();
    setcontet(e.target.value);
    const newItem = { id: crypto.randomUUID(), content };
    const newItems = [...items, newItem];
    setItem(newItems);
  };
  const handleDelete = (id) => {
    const newItems = items.filter((items) => items.id !== id);
    setItem(newItems);
  };
  return (
    <div className="main-container">
      <div className="sub-container">
        <header className="header">
          <Header />
        </header>
        <div className="edit">
          <Info Today={Today} />
        </div>
        <article className="article">
          <List
            items={items}
            initialList={items}
            AddList={AddList}
            content={content}
            hanldeContent={hanldeContent}
            handleDelete={handleDelete}
          />
        </article>
      </div>
    </div>
  );
}

export default App;
