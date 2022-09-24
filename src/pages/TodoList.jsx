import ListaDeTareas from "../components/ListaDeTareas";
import BorrarTodo from "../components/BorrarTodo";

export default function TodoList() {
  return (
    <>
      <h1>toDo List</h1>
      <div className="toDoList">
        <div className="tareas-lista-principal">
          <h2>Mis Tareas</h2>
          <ListaDeTareas />
          <BorrarTodo />
        </div>
      </div>
    </>
  );
}
