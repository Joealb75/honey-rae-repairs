export const getAllEmployees = () => {
    return fetch("http://localhost:8088/employees?_expand=user").then(res => res.json())
    // The then() method takes a callback function as an argument, which will be executed when the response from the server is received. 
    // In this case, it's using the json() method to parse the response body as JSON. This converts the raw response data into a JavaScript object.
}