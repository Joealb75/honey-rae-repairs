// ?_EMBED is used if the thing you are looking at is a FK on the thing you want 
// ?_EXPAND is used when you have a FK to something else 


export const getTickets = () =>{
    return fetch("http://localhost:8088/serviceTickets?_embed=employeeTickets").then((response) => response.json())
    
}