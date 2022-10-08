import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './Component/Nav/Nav';
import Home from './Page/Home/Home';

function App() {
  return (
    <>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </>
  );
}

export default App;
