import React, { useEffect, useState } from 'react'
import FormularioTareas from './componentes/FormularioTareas'
import Header from './componentes/Header'
import ListaTareas from './componentes/ListaTareas'
import './estilos/App.css'
const App = () => {
 
 //Obtenemos las tareas guardadas en LocalStorage.
  const tareasGuardadas = localStorage.getItem('tareas') ? JSON.parse(localStorage.getItem('tareas')) : []

 //estado general
  const [tareas,setTareas] = useState(tareasGuardadas) 

//--------------------------------------------
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
