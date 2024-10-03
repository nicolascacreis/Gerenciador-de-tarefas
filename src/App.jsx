import AddTask from "./components/AddTask.jsx";
import Tasks from "./components/Tasks.jsx";

function App() {
  return (
    <div>
      <h1 className="text-red-500">Gerenciador de tarefas</h1>
      <AddTask />
      <Tasks />
    </div>
  );
}

export default App;
