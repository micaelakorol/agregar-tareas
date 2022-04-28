import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons'
import { v4 as uuidv4 } from 'uuid';


//1- tareas: traigo el array vacio [] desde App, y luego paso las tareas que el user va ingresando:
  const FormularioTareas = ({tareas,setTareas}) => {

  const [inputTarea, setInputTarea] = useState('')
//** value: el valor del input, lo estamos guardando en inputTarea.

//**accedo con e.target , al valor que se ingreso en input, mediante set..
  const handleChange = (e) => { 
  setInputTarea(e.target.value) 
  }

  const handleSubmit = (e) => {
  e.preventDefault()
  setTareas(   //2 -Traigo las tareas anteriores con setTareas, realizo una copia 
    [...tareas, 
      {  //3 -GUARDO LA NUEVA TAREA EN Tareas(useState)
//!!!4--!!!!!!CREO EL OBJETO DINAMICO CON LAS PROP. DE VALUE Y LAS REEMPLAZO:
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
  value={inputTarea} /* Value : capta lo que ingreso el user , y se guarda en inputTarea.
  Luego con onChange , accedo a ese valor que se ingresó*/
  onChange={(e) => handleChange(e)}
  />

  <button type='submit' className='formulario-tareas__btn'>
  <FontAwesomeIcon icon={faSquarePlus} className='formulario-tareas__icono-btn' />
  </button>


  </form>


    )
  }
  //onChange se va a ejecutar cada vez que tengamos un cambio en nuestro input.
  export default FormularioTareas