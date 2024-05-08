import Header from "./components/Header";
import Card from "./components/Card";
import Todocondainer from "./components/Todocondainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Singup from "./pages/Singup";
import Landing from "./pages/Landing";
import { useState } from "react";

function App() {
    const [users, setusers] = useState(
      [
        {
          username: "pandi",
          password: "123"
        }
      ]
    )
    return (
      < div >
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login users={users} setusers={setusers}/>}></Route>
            <Route path='/Singup' element={<Singup users={users} setusers={setusers}/>}></Route>
            <Route path='/landing' element={<Landing />}></Route>
          </Routes>
        </BrowserRouter>
      </div >
    )
  }

export default App;
