import { TODO_FILTERS, FILTER_BUTTONS } from "../consts"
import { FilterValue } from "../type"

interface Props {
  onFilterChange: (filter: FilterValue) => void
  filterSelect: FilterValue
}
// con esto se le pasan las propiedades que va a recibir el componente y se define el tipo de componente que se va a crear

export const Filters: React.FC<Props> = ({ filterSelect, onFilterChange }) => {
  return (
    <ul>
      {
        Object.entries(FILTER_BUTTONS).map(([key, { href, literal }]) => {
          const isSelect = filterSelect === key
          const className = isSelect ? 'selected' : ''

          return (
            <li key={key}>
              <a
                className={className}
                href={href}
                onClick={(event) => {
                  event.preventDefault()
                  onFilterChange(key as FilterValue)
                }}
              >
                {literal}
              </a>

            </li>
          )
        })
      }

    </ul>
  )
}
