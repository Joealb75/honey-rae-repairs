// shift + option + f = prettier auto format
import { getTickets } from "./services/ticketService.js";
import { useState, useEffect } from "react";
import "./App.css" // gets css styles 

export const App = () => {
  const [allTickets, setAllTickets] = useState([]); // [stateVariable, setterFunction]
  const [showEmergencyOnly, setShowEmergencyOnly] = useState(false);

  // useEffect takes 2 args 1: Function, 2: [] - dependency array
  // the function is what we want to happen and the [] is when it happens
  useEffect(() => {
    getTickets().then((ticketsArray) => {
      setAllTickets(ticketsArray);
      console.log("Tickets Set!");
    });
  }, []); // [] ONLY runs on the initial render of the component - prevents infinite loop

  return (
  <div className="tickets-container">
    <h2>Tickets</h2>

    <div>
      <button className="filter-btn btn-primary" onClick={()=>{
        setShowEmergencyOnly(true)}}
        >
          Emergency</button>
    </div>

    <article className="tickets">
      {allTickets.map((ticket) => {
        return(
          <section className="ticket" key={ticket.id}>
            <header className="ticket-info">{ticket.id}</header>
            <div>{ticket.description}</div>
            <footer>
              <div>
                <div className="ticket-info">emergency</div>
                <div>{ticket.emergency ? "yes" : "no"}</div>
              </div>
            </footer>
          </section>
        )
      })}
    </article>
  </div>
  )
};
