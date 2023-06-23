import { useContext } from "react"
import { ToDoContext } from "../../contexts/ContextToDo"
import { Button } from "../Button"

const ToDo = () => {

    const { todos, deleteToDo, completedTask } = useContext(ToDoContext)

    return (
        <div>
            <ul>
                {
                    !todos.length ? (

                        <h3>Lista Vazia</h3>

                    ) : (
                        todos.map(todo => (

                        <li key={todo.id}>
                            <input
                                className="checkbox"
                                type="checkbox"
                                onClick={() => completedTask(todo.id)}
                            />

                            <span
                                style={{textDecoration: todo.completed && "line-through"}}
                            >
                            { todo.task }
                            </span>
                            <Button 
                                className="btn-delete"
                                onClick={() => deleteToDo(todo.id)}
                            >
                                Excluir
                            </Button>
                        </li>
                        ))
                    )
                }
            </ul>
        </div>
    )
}

export default ToDo