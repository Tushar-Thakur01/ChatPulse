// main app
import './App.css';
import{BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './components/home';
import ChatPage from './components/ChatPage';
import socketIO from 'socket.io-client';

const socket = socketIO.connect('http://localhost:4000')
function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path='/' element={<Home socket={socket}/>}></Route>
        <Route path='/chat' element={<ChatPage socket={socket}/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
