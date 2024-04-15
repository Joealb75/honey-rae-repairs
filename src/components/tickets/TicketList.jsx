import { useEffect, useState } from "react";
import { getTickets } from "../../services/ticketService.js";
import "./Tickets.css";
import { Ticket } from "./Ticket.jsx";
import { TicketFilterBar } from "./TicketFilterBar.jsx";

export const TicketList = () => {
  const [allTickets, setAllTickets] = useState([]); // [stateVariable, setterFunction]
  const [showEmergencyOnly, setShowEmergencyOnly] = useState(false);
  const [filteredTickets, setFilteredTickets] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // useEffect takes 2 args 1: Function, 2: [] - dependency array
  // the function is what we want to happen and the [] is when it happens
  useEffect(() => {
    getTickets().then((ticketsArray) => {
      setAllTickets(ticketsArray);
      console.log("Tickets Set!");
    });
  }, []); // [] ONLY runs on the initial render of the component - prevents infinite loop

  useEffect(() => {
    if (showEmergencyOnly) {
      const eTickets = allTickets.filter((ticket) => ticket.emergency === true);
      setFilteredTickets(eTickets);
    } else {
      setFilteredTickets(allTickets);
    }
  }, [showEmergencyOnly, allTickets]);

  useEffect(()=>{
    const foundTickets = allTickets.filter(ticket => 
      ticket.description.toLowerCase().includes(searchTerm.toLowerCase()))

      setFilteredTickets(foundTickets)

  }, [searchTerm, allTickets]) // dependency array - run when searchTerm or allTickets changes

  return (
    <div className="tickets-container">
      <h2>Tickets</h2>
      <TicketFilterBar setShowEmergencyOnly={setShowEmergencyOnly}  setSearchTerm={setSearchTerm} />

      <article className="tickets">
        {filteredTickets.map((ticketObj) => {
          return <Ticket ticket={ticketObj} key={ticketObj.id} />;
        })}
      </article>
    </div>
  );
};
// <Fnc Key={Value}/> -- This is a prop: Props are arguments that are passed into react components
// key={ticketObj.id} is needed here because it is the outer most part of this component
