import { TodoID, type Todo as TodoType } from "../type"

interface Props extends TodoType {
  onRemoveTodo: ({ id }: TodoID) => void
  onToggleCompleted: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onToggleCompleted }) => {
  return (
    <div key={id} className="flex gap-6 items-center">
      <input type="checkbox" checked={completed} className="text-xl" onChange={(event) => {
        onToggleCompleted({ id, completed: event.target.checked })
      }}>
      </input>
      <h1 className={`text-2xl ${completed ? 'line-through text-gray-800' : 'no-underline text-black'}`}>
        {title}
      </h1>
      <button className="text-xl hover:text-red-600 duration-300 transition-colors" onClick={() => {
        onRemoveTodo({ id })
      }}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>

      </button>
    </div>
  )
}
