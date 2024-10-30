import { useState } from "react";
import AddTask from "./Components/AddTask";
import Tasks from "./Components/Tasks";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar programação",
      description: "Estudar programação para virar um desenvolvedor full-stack",
      isCompleted: false,
    },

    {
      id: 2,
      title: "Estudar um novo idioma",
      description:
        "Para expandir minhas possibilidades de comunicação e trabalho",
      isCompleted: false,
    },

    {
      id: 3,
      title: "Estudar matemática",
      description:
        "Estudar matemática para melhorar minha lógica de programação",
      isCompleted: false,
    },
  ]);

  return (
    <>
      <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
        <div className="w[500px]">
          <h1 className="text-3xl font-bold text-slate-100 text-center">
            Gerenciador de Tarefas
          </h1>
          <Tasks tasks={tasks} />
          <AddTask />
        </div>
      </div>
    </>
  );
};

export default App;
