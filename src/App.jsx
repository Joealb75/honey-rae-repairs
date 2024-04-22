// shift + option + f = prettier auto format
// shift + option + downArrow = duplicate line
// <Route path="When at path /tickets" render TicketList element={<TicketList />}></Route>
import { Route, Routes } from "react-router-dom";
import "./App.css"; // gets css styles

import { Login } from "./components/auth/Login.jsx";
import { Register } from "./components/auth/Register.jsx";
import { Authorized } from "./views/Authorized.jsx";
import { ApplicationViews } from "./views/ApplicationViews.jsx";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />}/>  
        <Route path="/register" element={<Register />}/>

        <Route path="*" element={
          // check if the user is authorized first 
        <Authorized>
          {/*  if they are authorized the application views is the child component of Authorized and will render in only if "Honey_User"
           is present in local storage  */}
          <ApplicationViews />
        </Authorized>
      }/>
      </Routes>
    </>
  );
};

// ! Workshop Notes 
// define a single responsibility for each component, once a component has more then one responsibility its time to break it up