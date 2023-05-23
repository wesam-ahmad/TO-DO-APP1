import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";

const List = () => {
  const [tasks, setTasks] = useState([]);
  const [data, setData] = useState({
    title: "",
    description: "",
    priority: "",
    date: ""
  });
  const [editTaskId, setEditTaskId] = useState(null);

  const firebaseConfig = {
    apiKey: "AIzaSyBJ5ImdDH0gQCcyroB08i7ZJ51o0D99kEw",
    authDomain: "todo-app-f2499.firebaseapp.com",
    projectId: "todo-app-f2499",
    storageBucket: "todo-app-f2499.appspot.com",
    messagingSenderId: "360456462073",
    appId: "1:360456462073:web:8b39e36dcbd23b84920c28"
  };

  initializeApp(firebaseConfig);
  const db = getFirestore();
  const colRef = collection(db, "Tasks");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await getDocs(colRef);
        const lists = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setTasks(lists);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [colRef, tasks]);

  function handleSubmit(event) {
    event.preventDefault();

    if (editTaskId) {
      // Update existing task
      const docRef = doc(colRef, editTaskId);
      updateDoc(docRef, {
        title: data.title,
        description: data.description,
        priority: data.priority,
        date: data.date
      })
        .then(() => {
          setEditTaskId(null);
          setData({
            title: "",
            description: "",
            priority: "",
            date: ""
          });
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      // Add new task
      addDoc(colRef, {
        title: data.title,
        description: data.description,
        priority: data.priority,
        date: data.date
      })
        .then(() => {
          setData({
            title: "",
            description: "",
            priority: "",
            date: ""
          });
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  }

  function handleDelete(event) {
    event.preventDefault();
    const { id } = event.target;
    const docRef = doc(colRef, id);

    deleteDoc(docRef)
      .then(() => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  function handleEdit(task) {
    setData({
      title: task.title,
      description: task.description,
      priority: task.priority,
      date: task.date
    });
    setEditTaskId(task.id);
  }

  function handleCancelEdit() {
    setEditTaskId(null);
    setData({
      title: "",
      description: "",
      priority: "",
      date: ""
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setData((info) => ({
      ...info,
      [name]: value
    }));
  }

  const taskCard = tasks.map((task) => (
    <div className="card w-96 bg-base-100 shadow-xl border-2 border-solid border-accent" key={task.id}>
      <div className="card-body">
        <h2 className="card-title">{task.title}</h2>
        <p>{task.description}</p>
        <p className="badge badge-primary">{task.priority}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={() => handleEdit(task)}>Edit</button>
          <button className="btn btn-primary" id={task.id} onClick={handleDelete}>Delete</button>
        </div>
        <div>Due Date: {task.date}</div>
      </div>
    </div>
  ));

  return (
    <>
      <div className="box p-5 flex flex-col gap-10">
        <form id="form" action="#" onSubmit={handleSubmit} className="flex items-center gap-5">
          <div className="form-control w-full max-w-xs">
            <label className="label">Title</label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              name="title"
              value={data.title}
              onChange={handleChange}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">Description</label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              name="description"
              value={data.description}
              onChange={handleChange}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">Due date</label>
            <input
              type="date"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              name="date"
              value={data.date}
              onChange={handleChange}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Priority</span>
            </label>
            <select
              className="select select-primary w-full max-w-xs"
              onChange={handleChange}
              value={data.priority}
              name="priority"
            >
              <option value="Task Priority">Task Priority</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
          {editTaskId ? (
            <>
              <button className="btn btn-primary" type="button" onClick={handleCancelEdit}>
                Cancel
              </button>
              <button className="btn btn-primary mt-8" type="submit">
                Update task
              </button>
            </>
          ) : (
            <button className="btn btn-primary mt-8" type="submit">
              Add task
            </button>
          )}
        </form>
        <div className="tasks grid grid-cols-3 gap-3 border-2 border-dashed border-primary p-3 rounded-lg">
          {tasks.length !== 0 ? taskCard : <h1 className="text-center text-2xl">There are no tasks</h1>}
        </div>
      </div>
    </>
  );
};

export default List;
