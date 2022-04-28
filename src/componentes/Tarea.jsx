  import React, { useState } from 'react'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
  import { faCheckSquare, faEdit,faSquare,faTimes } from '@fortawesome/free-solid-svg-icons'

  const Tarea = ({item, toggleCompletada , editarTareas, borrarTarea}) => {

  const [editarTarea , setEditarTarea] = useState(false)
  const [nuevaTarea, setNuevaTarea] = useState(item.texto)
  
//---------------------------------------------------
  const handleSubmit = (e) => {
    e.preventDefault()
    editarTareas(item.id , nuevaTarea) 
  setEditarTarea(false)
  }
    return (
  <>
    <li className='lista-tareas__tarea'>
    <FontAwesomeIcon icon={item.completada ? faCheckSquare : faSquare}
     className='lista-tareas__icono lista-tareas__icono-check'
     onClick={() => toggleCompletada(item.id)}/> 

    <div className='lista-tareas__texto'>{editarTarea ? 
   <form action="" className='formulario-editar-tarea' onSubmit={handleSubmit}>
  <input type="text" className='formulario-editar-tarea__input'

  /*leer y acceder al valor de la nueva tarea*/
  onChange={(e) => setNuevaTarea(e.target.value)} 
  value={nuevaTarea}/> 
  <button type='submit' className='formulario-editar-tarea__btn'
  >Actualizar</button>
  </form>  
  : item.texto 
  }
  </div>

  <div className='lista-tareas__botones'>
  <FontAwesomeIcon icon={faEdit} 
  className='lista-tareas__icono lista-tareas__icono-accion'
  
  onClick={() => setEditarTarea(!editarTarea)}/>
  <FontAwesomeIcon icon={faTimes} 
  className='lista-tareas__icono lista-tareas__icono-accion'
  onClick={()=> borrarTarea(item.id)}
  />
  </div></li> 
      
  </> 
    )
  }

  export default Tarea
