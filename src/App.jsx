import './App.css';
import ToDo from './components/ToDo/ToDo';
import ToDoForm from './components/ToDoForm/ToDoForm';

function App() {
  return (
    <div className="App App-header">
      <h1>Lista de Tarefas</h1>
      <ToDoForm />
      <ToDo />
    </div>
  );
}

export default App;
