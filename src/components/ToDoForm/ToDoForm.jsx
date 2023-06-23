import { useContext, useState } from "react"
import { ToDoContext } from "../../contexts/ContextToDo"
import { Button } from "../Button"

const ToDoForm = () => {

    const [task, setTask] = useState("")

    const { saveToDo } = useContext(ToDoContext)

    const handleSaveNewTask = (event) => {
        event.preventDefault()

        // setInputValue(event.target.value)
        saveToDo(task)
        setTask("")
    }

    return (
        <form onSubmit={handleSaveNewTask}>
            <input 
                type="text"
                placeholder="Exemplo: Estudar"
                value={task}
                onChange={(event) => setTask(event.target.value)}
            />
            <Button>+</Button>
        </form>
    )
}

export default ToDoForm