

export const Ticket = ({ticket}) => { // here the {} are de-structuring the ticket object
    return (
        <section className="ticket" >
    <header className="ticket-info">{ticket.id}</header>
    <div>{ticket.description}</div>
    <footer>
      <div>
        <div className="ticket-info">emergency</div>
        <div>{ticket.emergency ? "yes" : "no"}</div>
      </div>
    </footer>
  </section>
)};
    
  
