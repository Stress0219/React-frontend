import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Inicio from './components/Inicio';
import Libro from './components/Libro';

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Inicio></Inicio>}></Route>
        <Route path='/libro/:id' element = {<Libro></Libro>}></Route>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
