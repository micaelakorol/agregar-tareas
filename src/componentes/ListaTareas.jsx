  import React from 'react'
  import '../estilos/App.css'
  import Tarea from './Tarea'
  //visibilizar las tareas agregadas: las nuevas tareas, estan almacenadas en el state Tareas.

  const ListaTareas = ({tareas, setTareas ,mostrarCompletadas}) => {
    //recorremos las tareas agregadas y la mostramos
    //si tareas es mayor a 0 , recorrer tareas : caso contrario mostrar mensaje 'no hay tareas agregadas'


    //funcion p/ marcar/desmarcar el icono check , recibe el (id) de la tarea ingresada y lo compara.
  //cambiar la propiedad completada: de true a false o viceversa.
  const toggleCompletada = (id) => {
  setTareas(tareas.map((tarea) => {
      if(tarea.id === id) {
  return {...tarea, completada:!tarea.completada}

  /*retornamos el obj con todas las tareas, hacemos una copia del mismo ... , luego evaluamos si:
  completada es true, pasa al contrario, y viceversa.
  */
    }
    return tarea; //caso contrario solo retornamos la tarea.
  }))
  }
    //modificamos el estado accediendo en este caso al texto y reemplazandolo por la nuevoText.
  const editarTareas =(id, nuevoText) => {
  setTareas(tareas.map((tarea) => {
    if(tarea.id === id){
    return {...tarea, texto: nuevoText} //retorno la tarea del array map + el nuevo texto
    }
    return tarea;
  }))
  }

  //si tarea.id (la que ingreso el user) es diferente del id(que buscamos), la retorna.
  //Es decir, se retorna las tareas que tengan un id diferente, si los id coinciden , se borra.
    const borrarTarea = (id) => {
    setTareas(tareas.filter((tarea) => {
    if(tarea.id !== id){ //si la tarea.id que recorrimos es = al id que le pasamos:
   return tarea;
  }
  return;
  }))
  }
  //recorro las tareas y hago un condicional: 
    return (
    <>
    {tareas.length > 0 ? 
  tareas.map((item) => {
  //aca mostramos las tareas completadas: el estado cambia a true.
  if(mostrarCompletadas){
  return <Tarea key={item.id} 
  item={item} 
  toggleCompletada={toggleCompletada}
  editarTareas={editarTareas}
  borrarTarea={borrarTarea}
  /> 
  //si la tarea q estamos recorriendo , no esta completada aun( o sea,el estado esta en false), la devolvemos:
  }else if(!item.completada){
    return <Tarea key={item.id} 
    item={item} 
    toggleCompletada={toggleCompletada}
    editarTareas={editarTareas}
    borrarTarea={borrarTarea}
  /> 
  }
  return; //si la tarea esta completada no la devolvemos , por eso el return esta vacio.

  }) : 
  <div className='lista-tareas__mensaje'>No hay tareas ingresadas :( </div>
  }
    </>
    )}

  export default ListaTareas
