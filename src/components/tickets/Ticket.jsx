import { useEffect, useState } from "react";
import { getAllEmployees } from "../../services/employeeService.js";

export const Ticket = ({ticket}) => { // here the {} are de-structuring the ticket object

    const [employees, setEmployees] = useState([]) // get employees and populate the state with the ones from the database 
    const [assignedEmployee, setAssignedEmployee] = useState({})


    useEffect(() => {
      // get the data from the database and store in array then set the state to the array of employees 
      getAllEmployees().then((employeesArray) => {
        setEmployees(employeesArray);
        console.log("Employees Set")
      })
    }, []) // [] Says only run this on the initial render of the component 

    

    useEffect(()=>{ 
      // .find the employee where the employee.id matches the employeeId 
      // ! Why are we using employeeTickets[0] with index 0?
      const foundEmployee = employees.find(employee => employee.id === ticket.employeeTickets[0]?.employeeId)
      setAssignedEmployee(foundEmployee)
    },[employees]) //[employees] indicates that this useEffect will only run when the employee state changes 
    
    return (
        <section className="ticket" >
    <header className="ticket-info">{ticket.id}</header>
    <div>{ticket.description}</div>
    <footer>
      <div>
        <div className="ticket-info">Employee Assigned</div>
         <div>{assignedEmployee ? assignedEmployee.user?.fullName : "None"}</div> {/*  look into '?' optional chaining operator  */}
      </div>
      <div>
        <div className="ticket-info">Emergency</div>
        <div>{ticket.emergency ? "yes" : "no"}</div>
      </div>
    </footer>
  </section>
)};
    
  
