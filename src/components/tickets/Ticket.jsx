import { useEffect, useState } from "react";
import { getAllEmployees } from "../../services/employeeService.js";
import { assignTicket, updateTicket } from "../../services/ticketService.js";
// getting {currentUser} from TicketList.jsx -> ApplicationViews.jsx
export const Ticket = ({ ticket, currentUser, getAndSetTickets }) => {
  // here the {} are de-structuring the ticket object

  const [employees, setEmployees] = useState([]); // get employees and populate the state with the ones from the database
  const [assignedEmployee, setAssignedEmployee] = useState({});

  useEffect(() => {
    // get the data from the database and store in array then set the state to the array of employees
    getAllEmployees().then((employeesArray) => {
      setEmployees(employeesArray);
      console.log("Employees Set");
    });
  }, []); // [] Says only run this on the initial render of the component

  useEffect(() => {
    // .find the employee where the employee.id matches the employeeId
    // ! Why are we using employeeTickets[0] with index 0?
    const foundEmployee = employees.find(
      (employee) => employee.id === ticket.employeeTickets[0]?.employeeId
    );
    setAssignedEmployee(foundEmployee);
  }, [employees, ticket.employeeTickets]); //[employees] indicates that this useEffect will only run when the employee state changes

  const handleClaim =  () =>{

    const currentEmployee = employees.find((employee) => employee.userId === currentUser.id)

    const newEmployeeTicket = {
      employeeId: currentEmployee.id,
      serviceTicketId: ticket.id,
    };

    assignTicket(newEmployeeTicket).then(()=>{
      getAndSetTickets()
    })
  }

  const handleClose = () =>{
    const closedTicket = {
      id: ticket.id,
      userId: ticket.userId,
      description: ticket.description,
      emergency: ticket.emergency,
      dateCompleted: new Date(),
    }

    updateTicket(closedTicket).then(()=>{
      getAndSetTickets()
    })
  }


  return (
    <section className="ticket">
      <header className="ticket-info">{ticket.id}</header>
      <div>{ticket.description}</div>
      <footer>
        <div>
          <div className="ticket-info">Employee Assigned</div>
          <div>
            {assignedEmployee ? assignedEmployee.user?.fullName : "None"}
          </div>{" "}
          {/*  look into '?' optional chaining operator  */}
        </div>
        <div>
          <div className="ticket-info">Emergency</div>
          <div>{ticket.emergency ? "yes" : "no"}</div>
        </div>
        <div className="btn-container">
          {/* 
        IF the logged in user is an employee and theres no employee ticket associated with the service ticket, 
        then a btn to claim the ticket should display */}
          {currentUser.isStaff && !assignedEmployee ? (
            <button className="btn btn-secondary" onClick={handleClaim}>Claim</button>
          ) : (
            ""
          )}
          {/* IF the logged in user is the assigned employee for the ticket and there is no dateCompleted, 
        the button to close the tickt should display */}
          {assignedEmployee?.userId === currentUser.id &&
          !ticket.dateCompleted ? (
            <button className="btn btn-warning" onClick={handleClose}>Close</button>
          ) : (
            ""
          )}
        </div>
      </footer>
    </section>
  );
};
