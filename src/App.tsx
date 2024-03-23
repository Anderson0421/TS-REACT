import { useState } from "react"
import { Todos } from "./components/Todos"
import { Todo as TodoType, TodoID, FilterValue } from "./type"
import { Footer } from "./components/Footer"
import { TODO_FILTERS } from "./consts"

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
  const [filterSelect, setFilterSelect] = useState<FilterValue>(TODO_FILTERS.ALL)

  const HandleRemove = ({ id }: TodoID): void => {
    const NewTodos = todos.filter(todo => todo.id !== id)
    setTodos(NewTodos)
  }

  const HandleCompleted = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>
  ): void => {
    const NewTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    })
    setTodos(NewTodos)
  }

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelect(filter)
  }

  const filteredTodos = todos.filter(todo => {
    if (filterSelect === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelect === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  const handleClearCompleted = (): void => {
    const NewTodos = todos.filter(todo => !todo.completed)
    setTodos(NewTodos)
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <Todos
        onToggleCompleted={HandleCompleted}
        onRemoveTodo={HandleRemove}
        todos={filteredTodos} />
        <Footer
        activeCount={todos.filter(todo => !todo.completed).length}
        filterSelect={filterSelect}
        handleFilterSelect={handleFilterChange}
        onClearCompleted={handleClearCompleted} // Cambia esta línea
        completedCount={todos.length - todos.filter(todo => !todo.completed).length}
/>
    </div>
  )
}
export default App
