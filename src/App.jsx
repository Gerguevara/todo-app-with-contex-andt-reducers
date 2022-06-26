import {Routes, Route} from "react-router-dom";
import { Header, TaskForm, TaskList } from "./components/";
import {GlobalProvider } from "./context/GlobalContex";

import "./App.css";

function App() {
  return (
    <>
    <GlobalProvider>
      <Header />
      <div className="h-screen text-white text-center p-10">
      <div className="container mx-auto h-full">
      {/* en este caso ve el routes como un switch que segun la ruta pinta el componente */}
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/add" element={<TaskForm />} />
        <Route path="/edit/:id" element={<TaskForm />} />
      </Routes>
      </div>
      </div>
      </GlobalProvider>
    </>
  );
}

export default App;
