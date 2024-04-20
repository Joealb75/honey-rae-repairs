import { useParams } from "react-router-dom";
import { getCustomerByUserId } from "../../services/customerService.js";
import { useEffect, useState } from "react";
import "./customers.css"

export const CustomerDetails = () => {
  const [customer, setCustomers] = useState([]);

  // customer/3 <- Stored in customerId
  // path = "/customers/:customerId"
  // line 8 needs to be the same as the path name : parameter
  const { customerId } = useParams(); // {customerId : 3} <- used in App.jsx

  useEffect(() => {
    getCustomerByUserId(customerId).then((data) => {
      const customerObj = data[0]; // because the data we are getting from "getCustomerByUserId()" is an [ {} ]
      console.log(customerObj);
      setCustomers(customerObj);
    });
  }, [customerId]);

  return (
    <section className="customer">
      {/* // because user will be an empty {} on initial render we use optional chaining "?" */}
      <header className="customer-header">{customer.user?.fullName}</header>
      <div>
        <span className="customer-info">Email: {customer.user?.email}</span>
      </div>
      <div>
        <span className="customer-info">Address: {customer.address}</span>
      </div>
      <div>
        <span className="customer-info">Phone Number: {customer.phoneNumber}</span>
      </div>
    </section>
  );
};
