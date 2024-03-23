import { useState } from "react"
import { Todos } from "./components/Todos"
import { Todo as TodoType, TodoID } from "./type"

const ListTODOS = [
  {
    id: 1,
    title: 'Learn React',
    completed: true
  },
  {
    id: 2,
    title: 'Learn Vue',
    completed: false
  },
  {
    id: 3,
    title: 'Learn Angular',
    completed: false
  }
]

function App (): JSX.Element {
  const [todos, setTodos] = useState(ListTODOS)

  const HandleRemove = ({ id }: TodoID): void => {
    const NewTodos = todos.filter(todo => todo.id !== id)
    setTodos(NewTodos)
  }

  const HandleCompleted = ({id, completed}: Pick<TodoType, 'id' | 'completed'>
  ): void => {

  }

  return (
    <div className="flex justify-center items-center h-screen">
      <Todos
      onRemoveTodo={HandleRemove}
      todos={todos} />
    </div>
  )
}
export default App
