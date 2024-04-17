import { useParams } from "react-router-dom"

export const CustomerDetails = () =>{
    // customer/3 <- Stored in customerId 
    // path = "/customers/:customerId"

    // line 8 needs to be the same as the path name : parameter 
    const { customerId } = useParams() // {customerId : 3}
    return <div>Customer #{customerId}</div>
}