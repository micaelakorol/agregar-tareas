  import React, { useState } from 'react'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
  import { faCheckSquare, faEdit,faSquare,faTimes } from '@fortawesome/free-solid-svg-icons'

  //accedo a las tareas que agrego el usuario. (traigo la funcion toggle) para el check:

  const Tarea = ({item, toggleCompletada , editarTareas, borrarTarea}) => {

  const [editarTarea , setEditarTarea] = useState(false) //parte en false = no se muestra
  const [nuevaTarea, setNuevaTarea] = useState(item.texto) /// ---->
  /* ---> aca , lo que hago es un condicional, donde: si el estado es falso, se muestra el item.texto
  caso contrario , si es true, muestra la opcion de editar y actualizar (formulario del condicional)*/

  const handleSubmit = (e) => {
    e.preventDefault()
    editarTareas(item.id , nuevaTarea) //si los id coinciden, reescribe la tarea por la nueva q ingresamos en el value 
  setEditarTarea(false) //volvemos a cambiar el estado
  }
    return (
  <>
    <li className='lista-tareas__tarea'>
    <FontAwesomeIcon icon={item.completada ? faCheckSquare : faSquare} /* 
   si la tarea esta completada muestra el icono faCheck.. caso contrario muestra faSquare */
     className='lista-tareas__icono lista-tareas__icono-check'
     onClick={() => toggleCompletada(item.id)}/> {/*le pasamos el id de la tarea que ingreso el user,
     para que compare en la funcion toggle a ver en que estado está la misma */}
    <div className='lista-tareas__texto'>{editarTarea ? 
   <form action="" className='formulario-editar-tarea' onSubmit={handleSubmit}>
  <input type="text" className='formulario-editar-tarea__input'

  /*leer y acceder al valor de la nueva tarea*/
  onChange={(e) => setNuevaTarea(e.target.value)} /*accede a la nueva tarea; value: capta la nueva tarea*/ 
  value={nuevaTarea}/> 
  <button type='submit' className='formulario-editar-tarea__btn'
  >Actualizar</button>
  </form>  
  : item.texto /*caso contrario se muestra la tarea ingresada, es decir, la que no se modifico*/
  }
  </div>
  <div className='lista-tareas__botones'>
  <FontAwesomeIcon icon={faEdit} 
  className='lista-tareas__icono lista-tareas__icono-accion'
  /*hacemos que cuando se presione el boton editar, se cambie el estado en el contrario al que se
  encuentra: true a false y viceversa*/
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