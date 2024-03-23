// Tipos de props en React con typescript
// Para importar el tipo de dato que se va a utilizar en el componente se debe importar el tipo de dato que se va a utilizar
import { TodoID, type ListofTodos } from '../type'
import { Todo } from '../components/Todo'

interface Props {
  todos: ListofTodos
  onRemoveTodo: ({ id }: TodoID) => void
}

// Conel React.FC se define el tipo de componente que se va a crear
// y con <Props> se le pasan las propiedades que va a recibir el componente

export const Todos: React.FC<Props> = ({ todos, onRemoveTodo }) => {
  return (
        <ul className="shadow-lg shadow-gray-500 p-20 flex flex-col gap-3">
            {todos.map(todo => (
                <li key={todo.id}>
                    <Todo id={todo.id} title={todo.title} completed={todo.completed}
                    onRemoveTodo={onRemoveTodo}
                    />
                </li>
            ))}
        </ul>
  )
}
