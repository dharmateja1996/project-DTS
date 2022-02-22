import { Route, Routes,Navigate} from "react-router-dom";
import "./App.css";
import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Heading from "./components/Heading";

function App() {
  return (
    <div className="App">
      <Heading/>
      
      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path='/login' element={<LoginForm/>}/>
        <Route path="/not-found" element={<NotFound/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
