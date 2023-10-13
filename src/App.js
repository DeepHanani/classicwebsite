import logo from './logo.svg';
import './App.css';
import Registration from './Componets/animation2/Registration/Registration';
import Animation2 from './Componets/animation2/Animation2';
import { Route, Routes } from 'react-router-dom';
import ForgetPassword from './Componets/Forget/ForgetPassword';
import Protected from './Componets/animation2/ProtectedRoute/Protected';

function App() {
  return (
    <div className="App">

    <Routes>
    <Route path='/'  element={<Registration/>}></Route>
    <Route path='/homepage' element = {<Protected Cmp = {Animation2}/>}></Route>
    <Route path='/login' element = {<ForgetPassword/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
