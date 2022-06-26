import { createContext, useReducer } from "react";
import { v4 } from "uuid";

import appReducer from "./AppReducer";

const initialState = {
  tasks: [],
};

// crea el context de la data que se va a manejar, 
// Es necesario para el initialState ????
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {

  //************ utilizando el reducer ****************************//

  //Podira como initiaState un [] pero la data tien que estar conectada con context 
  const [state, dispatch] = useReducer(appReducer, initialState);

  // funciones que soporta el reducer
  const addTask = (task)=> {
    dispatch({
      type: "ADD_TASK",
      payload: { ...task, id: v4(), done: false },
    });
  }

  const updateTask = (updatedTask) => {
    dispatch({
      type: "UPDATE_TASK",
      payload: updatedTask,
    });
  }

  const deleteTask = (id)=> {
    dispatch({
      type: "DELETE_TASK",
      payload: id,
    });
  }

  const toggleTaskDone =(id)=> {
    dispatch({
      type: "TOGGLE_TASK_DONE",
      payload: id,
    });
  }

  // retornando el State y las funciones que manejan el reducer
  return (
    <GlobalContext.Provider
      value={{
        tasks: state.tasks,
        addTask,
        updateTask,
        deleteTask,
        toggleTaskDone
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};