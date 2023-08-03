import React, { useState, useEffect } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const fetchPost = async () => {
    await getDocs(collection(db, "Chamarras")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTodos(newData);
      console.log(todos, newData);
    });
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const addTodo = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "Chamarras"), {
        todo: todo,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <section className="todo-container">
      <div className="todo">
        <h1 className="header">Log-In</h1>

        <div>
          <div>
            <input
              type="text"
              placeholder="Usuario"
              onChange={(e) => setTodo(e.target.value)}
            />
            <input
              type="text"
              placeholder="Contraseña"
              onChange={(e) => setTodo(e.target.value)}
            />
          </div>

          <div className="btn-container">
            <button type="submit" className="btn" onClick={addTodo}>
              Log In
            </button>
          </div>
        </div>
        <div className="todo-content">...</div>
      </div>
    </section>
  );
};

export default Todo;
