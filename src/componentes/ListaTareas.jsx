  import React from 'react'
  import '../estilos/App.css'
  import Tarea from './Tarea'

  const ListaTareas = ({tareas, setTareas ,mostrarCompletadas}) => {
   
  const toggleCompletada = (id) => {
  setTareas(tareas.map((tarea) => {
      if(tarea.id === id) {
  return {...tarea, completada:!tarea.completada}
    }
  return tarea; 
  }))
  }
  //-----------------------------------------------
  const editarTareas =(id, nuevoText) => {
  setTareas(tareas.map((tarea) => {
    if(tarea.id === id){
    return {...tarea, texto: nuevoText} 
    }
    return tarea;
  }))
  }
//-----------------------------------------------------
    const borrarTarea = (id) => {
    setTareas(tareas.filter((tarea) => {
    if(tarea.id !== id){ 
   return tarea;
  }
  return false;
  }))
  }
    return (
    <>
    {tareas.length > 0 ? 
  tareas.map((item) => {
  if(mostrarCompletadas){
    
  return <Tarea key={item.id} 
  item={item} 
  toggleCompletada={toggleCompletada}
  editarTareas={editarTareas}
  borrarTarea={borrarTarea}
  /> 

  }else if(!item.completada){
    return <Tarea key={item.id} 
    item={item} 
    toggleCompletada={toggleCompletada}
    editarTareas={editarTareas}
    borrarTarea={borrarTarea}
  /> 
  }
  return false;
  }) : 
  <div className='lista-tareas__mensaje'>No hay tareas ingresadas :( </div>
  }
    </>
    )}

  export default ListaTareas
