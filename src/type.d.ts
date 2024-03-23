export interface Todo {
  id: number
  title: string
  completed: boolean
}

export type TodoID = Pick<Todo, 'id' | 'completed'>

export type ListofTodos = Todo[]

// En este archivo se definen los tipos de datos que se van a utilizar en la aplicacion
// para que se puedan importar en los componentes que los necesiten y se puedan utilizar

export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]
