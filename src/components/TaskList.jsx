import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContex";

const TaskList = () => {
  const context = useContext(GlobalContext);

  return <div>{JSON.stringify(context)}</div>;
};

export default TaskList;
