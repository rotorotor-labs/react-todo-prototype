import React, { useRef } from 'react';
import debounce from 'lodash.debounce';

export function Checklist({ todos, handleChange }) {

  const handleChangeDebounced = useRef(
    debounce(handleChange, 1000)
  )

  return (
    <ul>
      { todos.map(todo => (
        <li key={todo.id}>
          <span contentEditable="true" onInput={(event) => {
              handleChangeDebounced.current(todo.id, event.currentTarget.textContent)
          } }>{todo.label}</span>

          <span contentEditable="false" className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">{todo.status}</span>
        </li>
      ) ) }
    </ul>
  )
}
