import axios from 'axios';

const todosLibros = async(state) => {
    const peticion = await axios.get('http://127.0.0.1:8000/api/libros')
    state(peticion.data)
}

export {
    todosLibros
}