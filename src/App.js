
import './App.css';
import Home from './Comonents/Home';
import { Route, Routes } from 'react-router-dom';
import Form from './Comonents/Form';
import { useState } from 'react';


function App() {
const [datas, setdatas] = useState({})
const getData=(data)=>{
  setdatas(data)
console.log(data);
}
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Form onSubmit={getData}/>} />
      <Route path='/home' element={<Home details={datas} />} />
    </Routes>
    </div>
  );
}

export default App;
