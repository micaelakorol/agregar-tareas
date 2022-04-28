import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons'
import { v4 as uuidv4 } from 'uuid';

  const FormularioTareas = ({tareas,setTareas}) => {

  const [inputTarea, setInputTarea] = useState('')

  const handleChange = (e) => { 
  setInputTarea(e.target.value) 
  }

  const handleSubmit = (e) => {
  e.preventDefault()
  setTareas(   
    [...tareas, 
      {
  id:uuidv4(),
  texto:inputTarea,
  completada:false
      } 
    ])
   setInputTarea('')
}

    return (
  <form action="" className="formulario-tareas" onSubmit={handleSubmit}>
  <input type="text" placeholder='Escriba una tarea'
  className='formulario-tareas__input'
  value={inputTarea} 
  onChange={(e) => handleChange(e)}
  />
  <button type='submit' className='formulario-tareas__btn'>
  <FontAwesomeIcon icon={faSquarePlus} className='formulario-tareas__icono-btn' />
  </button>
  </form>
    )
  }
  export default FormularioTareas
