import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Expert from './pages/Expert/Expert' ;
import Login from './pages/Login/Login' ;
import News from './pages/News/News' ;
import Types from './pages/LatheTypes/LatheTypes' ;
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Contact from './pages/Contact/Contact' ;
import Lathe from './pages/Lathe/Lathe';
import Accessories from './pages/Accessories/Accessories';
import Operations from './pages/Operations/Operations';
import Attachments from './pages/Attachments/Attachments';
import Fluids from './pages/Fluids/Fluids';
import Applications from './pages/Applications/Applications';
import CuttingTools from './pages/CuttingTools/CuttingTools';
import Safety from './pages/Safety/Safety';
import LatheTypes from './pages/LatheTypes/LatheTypes'
import Parameters from './pages/Parameters/Parameters';
import Calculator from './pages/Calculator/Calculator';
import People from './pages/People/People';
import ChatBot from './pages/ChatBot/ChatBot';




function App() {
  return (
    
    <Router >
      

      <Routes>

              <Route path='/home' element={<Home/>}/>
              <Route path='/expert' element={<Expert/>}/>
              <Route path='/' element={<Login/>}/>
              <Route path='/news' element={<News/>}/>
              <Route path='/contact-page' element={<Contact/>}/>
              <Route path='/calculator' element={<Calculator/>}/>
              <Route path='/lathe' element={<Lathe/>}/>
              <Route path='/accessories' element={<Accessories/>}/>
              <Route path='/operations' element={<Operations/>}/>
              <Route path='/attachments' element={<Attachments/>}/>
              <Route path='/fluids' element={<Fluids/>}/>
              <Route path='/applications' element={<Applications/>}/>
              <Route path='/cuttingtools' element={<CuttingTools/>}/>
              <Route path='/safety' element={<Safety/>}/>
              <Route path='/types' element={<LatheTypes/>}/>
              <Route path='/parameters' element={<Parameters/>}/>
              <Route path='/photos' element={<People/>}/>
              <Route path='/chatbot' element={<ChatBot/>}/>
               

              
              

              
        
      </Routes>




     </Router>

      
      
      
  );
}


export default App;
