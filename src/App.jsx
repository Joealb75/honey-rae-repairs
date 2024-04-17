// shift + option + f = prettier auto format
// shift + option + downArrow = duplicate line
// <Route path="When at path /tickets" render TicketList element={<TicketList />}></Route>
import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css"; // gets css styles
import { CustomerList } from "./components/customers/CustomerList.jsx";
import { TicketList } from "./components/tickets/TicketList.jsx";
import { EmployeesList } from "./components/employees/employees.jsx";
import { NavBar } from "./components/nav/navBar.jsx";

export const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/" element={
            <>
              <NavBar />
               <Outlet /> {/* Whenever we match any of the paths that are children of "/" outlet will render that element  
                             if <Outlet /> was above <NavBar /> then the NavBar would render at the bottom of all pages      */}
            </>           
          }
        >
          <Route path="/tickets" element={<TicketList />}></Route>
          <Route path="/customers" element={<CustomerList />}></Route>
          <Route path="/employees" element={<EmployeesList />}></Route>
        </Route>
      </Routes>
    </>
  );
};
