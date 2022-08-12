import React, { useRef } from 'react';
import debounce from 'lodash.debounce';

// Icons
import { RiDeleteBin2Line, RiCheckboxBlankLine, RiCheckboxLine } from "react-icons/ri";


export function Checklist({ todos, handleChange, handleRemove, handleStatus }) {

  const handleChangeDebounced = useRef(
    debounce(handleChange, 1000)
  )

  return (
    <ul className="space-y-2">
      { todos.map(todo => (
        <li className="flex items-center justify-between gap-2 mb-2 p-2 py-4 rounded border" key={todo.id}>
          <div className="flex items-center gap-2">
            <button type="button" onClick={() => handleStatus(todo.id, todos)}>
              { todo.status.toLowerCase() === "complete" ?  <RiCheckboxLine/> : <RiCheckboxBlankLine /> }
            </button>

            <span contentEditable="true" 
            className="text-sm text-gray-600 border-b focus:outline-none focus:ring focus:ring-gray-300 px-1 rounded "
            onInput={(event) => {
                handleChangeDebounced.current(todo.id, event.currentTarget.textContent, todos)
            } }>{todo.label}</span>

            <span contentEditable="false" className={`transition-colors inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${todo.status.toLowerCase() === "complete" ? "bg-leaf-500 text-green-900" : "bg-dentist-500 text-gray-900" }`}>{todo.status}</span>
          </div>

          <button type="button"
          className="p-2 rounded transition-colors text-neutral-500 hover:bg-neutral-100 hover:text-neutral-600" 
          onClick={() => handleRemove(todo.id, todos)}>
            <RiDeleteBin2Line color="currentColor" />
          </button>
        </li>
      ) ) }
    </ul>
  )
}
