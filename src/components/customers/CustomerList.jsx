import { useEffect, useState } from "react";
import { getNonStaffUsers } from "../../services/userService.js";
import "./customers.css"
import { User } from ".././users/user.jsx";
import { Link } from "react-router-dom";

export const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getNonStaffUsers().then((customerArray) => {
      setCustomers(customerArray);
    });
  }, []);

  return (
    <div className="customers">
      {customers.map((customerObj) => {
        return (
        <Link key={customerObj.id} to={`/customers/${customerObj.id}`}>
          <User user={customerObj}  />
        </Link>
        // for all the users we render a component 
        )
      })}
    </div>
  );
};
