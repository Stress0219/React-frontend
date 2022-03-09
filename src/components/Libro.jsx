import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { infoLibro } from '../functions/functions'
const Libro = () => {
  
  const params = useParams(  )
  
  useEffect(()=>{
    infoLibro ( params.id )
  },[])
   
  return (
    <>
    Libro con el id { params.id }
    
    </>
  )
}

export default Libro