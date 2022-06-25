import {useState} from "react";

const TaskForm = () => {

  const [task, setTask] = useState({
    id: "",
    title: "",
    description: "",
  });

//Graba los cambios del input y los agrega al state
// toma dinamicamente el name dle input y ese utiliza como key para asignacion del value en state
  const handleChange = (e) =>
  setTask({ ...task, [e.target.name]: e.target.value });


  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(e.target);
  }

  return (
    <div className="flex justify-center items-center h-3/4">
      <form onSubmit={handleSubmit} className="bg-gray-900 p-10">
        <h2 className="text-3xl mb-7">
          {/* {task.id ? "Update " : "Create "}A Task */}
        </h2>
        <div className="mb-5">
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={handleChange}
            placeholder="Write a title"
            className="py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full"
            autoFocus
          />
        </div>
        <div className="mb-5">
          <textarea
            value={task.description}
            name="description"
            rows="2"
            placeholder="write a description"
            onChange={handleChange}
            className="py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full"
          ></textarea>
          <button className="bg-green-600 w-full hover:bg-green-500 py-2 px-4 mt-5">
            {/* {task.id ? "Update Task" : "Create Task"} */}
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
