import React, { useEffect, useState } from 'react'
import FormularioTareas from './componentes/FormularioTareas'
import Header from './componentes/Header'
import ListaTareas from './componentes/ListaTareas'
import './estilos/App.css'
const App = () => {
 
  //Obtenemos las tareas guardadas en LocalStorage.
  const tareasGuardadas = localStorage.getItem('tareas') ? JSON.parse(localStorage.getItem('tareas')) : []

   //Hay que parsear para que se vuelvan un array, las tareas traídas de localS. ya que son string.


//  Al recargar la pag. el estado inicial, se muestra con las tareas del LocalStorage guardadas.           
  const [tareas,setTareas] = useState(tareasGuardadas) 

//Guardando el estado en localStorage (c/ vez que cambie tareas, se guardará)
  useEffect(() => {
  localStorage.setItem('tareas' ,JSON.stringify(tareas));
  },[tareas]) 

//estado para mostrar u ocultar tareas completadas: 
  const [mostrarCompletadas, setMostrarCompletadas] = useState(true)

  return (
 <div className='contenedor'>  
     <Header mostrarCompletadas={mostrarCompletadas} 
setMostrarCompletadas={setMostrarCompletadas} />
     <FormularioTareas tareas={tareas} setTareas={setTareas}/> 
     <ListaTareas tareas={tareas} setTareas={setTareas}
     mostrarCompletadas={mostrarCompletadas}
     setMostrarCompletadas={setMostrarCompletadas}/>
</div>       

  )
}

export default App