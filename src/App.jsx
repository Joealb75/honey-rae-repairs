// shift + option + f = prettier auto format

import "./App.css"; // gets css styles
import { CustomerList } from "./components/customers/CustomerList.jsx";
import { TicketList } from "./components/tickets/TicketList.jsx";
import { EmployeesList } from "./employees/employees.jsx";

export const App = () => {
  return <>

    {/* <TicketList /> */}
    {/* <CustomerList /> */}
    <EmployeesList />

  </>
 
    
  
}