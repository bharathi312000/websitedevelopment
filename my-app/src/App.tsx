import './App.css';
import Navbar from './Navbar';
// import Banner from './Banner';
// import Card from './Card';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Main from './Main';
function App() {
  return (
    <div>
      <Navbar/>
      {/* <Banner></Banner>
      <Card></Card> */}
      
       <Routes>
        <Route path='/' element={<Main/>}></Route> 
         <Route path='/Home' element={<Home/>}></Route>
        </Routes> 
      </div>
  );
}

export default App;
