import { FilterValue } from "../type"
import { Filters } from "./Filter"

interface Props {
  onClearCompleted: () => void
  activeCount: number
  filterSelect: FilterValue
  completedCount: number
  handleFilterSelect: (filter: FilterValue) => void
}

export const Footer: React.FC<Props> = ({ onClearCompleted, activeCount, filterSelect }) => {
    return (
        <footer>
            <span>
                <strong>
                    {activeCount} tareas pendiente
                </strong>
            </span>
            <Filters
                filterSelect={filterSelect}
                onFilterChange={() => {}}
            >
            </Filters>
        </footer>
  )
}
