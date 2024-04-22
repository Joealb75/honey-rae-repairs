import { Outlet, Route, Routes } from "react-router-dom";
import { CustomerList } from "/src/components/customers/CustomerList.jsx";
import {TicketList} from "/src/components/tickets/TicketList.jsx";
import { EmployeesList } from "/src/components/employees/employeesList.jsx";
import { NavBar } from "/src/components/nav/navBar.jsx";
import { Welcome } from "/src/components/welcome/welcome.jsx";
import { CustomerDetails } from "/src/components/customers/CustomerDetails.jsx";
import { EmployeeDetails } from "/src/components/employees/employeeDetails.jsx";
import { useEffect, useState } from "react";
import { EmployeeForm } from "../components/forms/employeeForm.jsx";

export const ApplicationViews = () => {

  // need to get current user(prop) down to "TicketList" when passing state down multiple levels this is called prop drilling 
  // then it gets passed into TicketList.jsx as a parameter-prop TicketList({currentUser})
  const [currentUser, setCurrrentUser] = useState({})

  useEffect(()=> {
    const localHoneyUser = localStorage.getItem("honey_user")
    const honeyUserObject = JSON.parse(localHoneyUser)
    setCurrrentUser(honeyUserObject)
  },[])

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Outlet />{" "}
              {/* Whenever we match any of the paths that are children of "/" outlet will render that element  
                             if <Outlet /> was above <NavBar /> then the NavBar would render at the bottom of all pages      */}
            </>
          }
        >
          <Route index element={<Welcome />} />
          {/* index is the default for the parent URL in this case "/" so whenever we are at "/" <Welcome /> will render in  */}
          <Route path="tickets" element={<TicketList currentUser={currentUser}/>} /> 
          <Route path="employees">
            <Route index element={<EmployeesList />} />
            <Route path=":employeeId" element={<EmployeeDetails />} />
          </Route>
          <Route path="customers">
            <Route index element={<CustomerList />} />
            <Route path=":customerId" element={<CustomerDetails />} />
            {/* ":" is a route parameter used to capture the id and store it in customerId */}
          </Route>
          <Route path="/profile" element={<EmployeeForm currentUser={currentUser}/> }/>
        </Route>
      </Routes>
    </>
  );
};
