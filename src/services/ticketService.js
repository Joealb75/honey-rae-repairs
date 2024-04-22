// ?_EMBED is used if the thing you are looking at is a FK on the thing you want 
// ?_EXPAND is used when you have a FK to something else 


export const getTickets = () =>{
    return fetch("http://localhost:8088/serviceTickets?_embed=employeeTickets").then((response) => response.json())
    
}

export const assignTicket = (employeeTicket) =>{
    return fetch(`http://localhost:8088/employeeTickets`,{
    method: "POST",
    headers:{
        "Content-type": "application/json",},
    body: JSON.stringify(employeeTicket),

    }
)}

export const updateTicket = (ticket) =>{
    return fetch(`http://localhost:8088/serviceTickets/${ticket.id}`,{
        method: "PUT",
        headers: {
            "Content-Type": "application.json",
        body: JSON.stringify(ticket),
        }
    })
}