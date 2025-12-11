import {Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home';

import Exchange from './components/Exchange';
import Coins from './components/Coins';
import About from './components/About';
import Coindetails from './components/Coindetails';
import NFTs from './components/NFTs';
function App() {
  return (
    <div className="App">
     
      
      <header className="App-header">
        <Navbar/>
        <Routes>
          
        
       
            <Route path='/' element={<Home/>}/>
            <Route path='/coins' element={<Coins/>}/>
            <Route path='/exchange' element={<Exchange/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/coins/:id' element={<Coindetails/>}/>
            <Route path='/nfts' element={<NFTs/>}/>
       
    

   
        </Routes>
      </header>
    
    </div>
  );
}

export default App;
