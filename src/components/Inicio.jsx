import React, {useEffect, useState} from 'react'
import { todosLibros } from '../functions/functions'

const Inicio = () => {
  const [libros, setLibros] = useState (null)

  useEffect (()=>{
    todosLibros(setLibros)
  },[])

  return (
    <>
    {libros != null ? (
      libros.map(libro => (
        <div key={libro.id}>
          <a href={`/Libro/${libro.id}`}>{libro.titulo}</a>
        </div>
      ))
    ) : ('no hay libros')}
    
    </>
  )
}

export default Inicio