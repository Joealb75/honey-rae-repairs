// shift + option + f = prettier auto format
// shift + option + downArrow = duplicate line
// <Route path="When at path /tickets" render TicketList element={<TicketList />}></Route>
import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css"; // gets css styles
import { CustomerList } from "./components/customers/CustomerList.jsx";
import { TicketList } from "./components/tickets/TicketList.jsx";
import { EmployeesList } from "./components/employees/employeesList.jsx";
import { NavBar } from "./components/nav/navBar.jsx";
import { Welcome } from "./components/welcome/welcome.jsx";
import { CustomerDetails } from "./components/customers/CustomerDetails.jsx";
import { EmployeeDetails } from "./components/employees/employeeDetails.jsx";

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
          <Route index element={<Welcome />}/>
          {/* index is the default for the parent URL in this case "/" so whenever we are at "/" <Welcome /> will render in  */}
          <Route path="tickets" element={<TicketList />}/>
          <Route path="employees" >
            <Route index element={<EmployeesList />} />
            <Route path=":employeeId" element={<EmployeeDetails />}/>
          </Route>
          <Route path="customers" >
            <Route index element={<CustomerList />} />
            <Route path=":customerId" element={<CustomerDetails />}/>
            {/* ":" is a route parameter used to capture the id and store it in customerId */}
          </Route>
        </Route>
      </Routes>
    </>
  );
};

// ! Workshop Notes 
// define a single responsibility for each component, once a component has more then one responsibility its time to break it up