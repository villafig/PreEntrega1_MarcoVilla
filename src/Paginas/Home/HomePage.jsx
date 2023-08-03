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
        <h1 className="header">Catálogo General</h1>

        <div></div>
        <div>
          <h4>
            {JSON.stringify(
              todos.map((Chamarras) => {
                return Chamarras.Chamarras;
              })
            )}
          </h4>
        </div>
        <div>
          {todos.map((Chamarras) => (
            <img
              style={{ height: "500px" }}
              key={Chamarras.id}
              src={Chamarras.Foto}
              alt={`Foto de ${Chamarras.Foto}`}
            />
          ))}
        </div>

        <div className="todo-content">...</div>
      </div>
    </section>
  );
};

export default Todo;
