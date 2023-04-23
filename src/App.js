import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './page/homePage/homePage';
import NavBar from './page/navBar/NavBar';
import SideBar from './page/navBar/sideBar';
import ModulePage from './page/modulePage/modulePage';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <SideBar/>
     <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/Module' element={<ModulePage/>}>
        <Route path='topic' element={<HomePage/>}/>
        <Route path='quiz' element={<HomePage/>}/>
        <Route path='assignment' element={<HomePage/>}/>
      </Route>
      <Route path='/Instructor' />
     </Routes>
    </div>
  );
}

export default App;
